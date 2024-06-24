<template>
  <div>
      <h1> Driver Page</h1>
      <button @click="logout">Driver Logout</button>
  </div>
</template>

<script>
import { DriverStore } from '../../stores/driverStore.js';
export default {
    name: 'DriverHome',
    setup() {
      const driverStore = DriverStore();
      const logout = () => {
    driverStore.logout();
  };

  return {
    logout,
    }
    
}
}
</script>

<style>

</style>