import { defineStore } from 'pinia';
import { jwtDecode } from 'jwt-decode';
import apiClient from '../api/apiClient';

export const DriverStore = defineStore('driver', {
  state: () => ({
    user: localStorage.getItem('token') ? jwtDecode(localStorage.getItem('token')).user : null,
    token: localStorage.getItem('token') || null,
    refreshTimeout: null,
  }),
  actions: {
    async login(email, password) {
      try {
        const response = await apiClient.post('/api/auth/driver/login', {
          email,
          password
        });

        const { token } = response.data;
        this.token = token;
        localStorage.setItem('token', token);
        this.user = jwtDecode(token).user;

        this.router.push({ name: 'DriverHome' });
      } catch (error) {
        throw error;
      }
    },
    logout() {
      this.token = null;
      this.user = null;
      localStorage.removeItem('token');

      clearTimeout(this.refreshTimeout);
      this.refreshTimeout = null;

      this.router.push({ name: 'LoginMain' });
    },
    async refresh() {
      try {
        const response = await apiClient.post('/api/auth/driver/refresh', null, {
          headers: {
            "Authorization": `Bearer ${this.token}`
          }
        });
        const { token } = response.data;
        this.token = token;
        localStorage.setItem('token', token);

        await this.checkTokenExpiryAndRefresh();
      } catch (error) {
        console.log("An error occurred while refreshing user token. ", error);
      }
    },
    async checkTokenExpiryAndRefresh() {
      if (!this.token) return;

      const currentTimeInSeconds = Math.floor(Date.now() / 1000);
      const decodedToken = jwtDecode(this.token);

      if (decodedToken.exp && currentTimeInSeconds + 120 >= decodedToken.exp) {
        console.log("Token about to expire");
        try {
          console.log("Token near timeout. Updating...");
          await this.refresh();
          console.log("Token refreshed.");
        } catch (error) {
          console.log('Token expired. Logging out...');
          this.logout();
        }
      } else {
        const timeUntilExpiry = (decodedToken.exp * 1000) - Date.now() - 120 * 1000;
        console.log("Token refresh in ", Math.floor(timeUntilExpiry / 60000), " minutes. (", timeUntilExpiry, " )");

        if (this.refreshTimeout) {
          clearTimeout(this.refreshTimeout);
        }

        this.refreshTimeout = setTimeout(() => {
          this.checkTokenExpiryAndRefresh();
        }, timeUntilExpiry > 0 ? timeUntilExpiry : 0);
      }
    }
  },
});
