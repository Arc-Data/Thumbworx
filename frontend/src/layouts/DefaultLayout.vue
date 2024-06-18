<template>
    <div class="flex">
      <Sidebar></Sidebar>
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  import Sidebar from '../components/Sidebar.vue';
  
  export default {
    components: {
      Sidebar,
    },
  };
  </script>