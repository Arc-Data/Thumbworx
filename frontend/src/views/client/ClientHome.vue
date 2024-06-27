<template>
    <div>
        <h1> Client Page</h1>
        <button @click="logout">Client Logout</button>
    </div>
  </template>
  
  <script>
  import { useAuthStore } from '../../stores/authStore.js';
  export default {
      name: 'ClientHome',
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