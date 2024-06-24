<template>
    <div>
        <h1> Client Page</h1>
        <button @click="logout">Client Logout</button>
    </div>
  </template>
  
  <script>
  import { ClientStore } from '../../stores/clientStore.js';
  export default {
      name: 'ClientHome',
      setup() {
        const clientStore = ClientStore();
        const logout = () => {
      clientStore.logout();
    };

    return {
      logout,
      }
      
  }
}
  </script>
  
  <style>
  
  </style>