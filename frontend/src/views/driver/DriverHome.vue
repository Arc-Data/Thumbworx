<template>
  <div>
      <h1> Driver Page</h1>
      <button @click="logout">Driver Logout</button>
  </div>
</template>

<script>
import { useAuthStore } from '../../stores/authStore.js';
export default {
    name: 'DriverHome',
    setup() {
      const authStore = useAuthStore();
      const logout = () => {
    authStore.logout();
  };

  return {
    logout,
    }
    
}
}
</script>

<style>

</style>