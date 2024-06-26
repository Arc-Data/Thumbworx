<template>
  <header class="max-h-[70px] w-full shadow-2xl bg-primary-default pl-3 pr-6 py-3 z-10 text-white flex justify-between items-center relative sticky top-0 right-0">
    <div class="flex items-center">
        <span id="header-title" class="w-full text-lg font-bold text-white-500 hover:cursor-pointer md:text-xl lg:text-2xl xl:text-3xl " style="max-width: calc(100% - 40px);">
        </span>
      </div>
      <button class="hover:text-slate-200 text-slate-50" @click="toggleProfile">
        <span class="material-icons md-40">account_circle</span>
      </button>
      <!-- profile dropdown -->
        <transition 
          enter-active-class="transition duration-100 ease-out" 
          enter-from-class="transform scale-95 opacity-0" 
          enter-to-class="transform scale-100 opacity-100" 
          leave-active-class="transition ease-in duration-90" 
          leave-from-class="transform scale-100 opacity-100" 
          leave-to-class="transform scale-95 opacity-0">
          <aside v-if="dropdown" ref="dropdown" class="absolute z-10 mt-2 bg-white rounded-md shadow-xl dropdown-content right-1 top-12 w-72">
            <div class="absolute right-0 mt-2 text-black bg-white rounded shadow-lg">
              <span class="text-slate-500 font-semibold flex justify-between px-3 py-2.5 hover:bg-gray-100 hover:text-slate-600 hover:cursor-pointer rounded-t-lg">
                    <span>Mode</span>
                    <label class="flex mt-auto cursor-pointer mode-toggle" >
                      <input type="checkbox" v-model="isDark" id="darkmode-toggle" class="p-2 sr-only peer">
                          <span v-if="!isDark" class="pr-2 material-icons">light_mode</span>
                          <span v-else class="pr-2 material-icons">dark_mode</span>
                      <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                </span>
                <span @click="changePassword" class="text-slate-500 font-semibold flex justify-between px-3 py-2.5 hover:bg-gray-100 hover:text-slate-600 hover:cursor-pointer rounded-t-lg">
                  <span class="mr-4">Change Password</span>
                  <span class="material-icons">password</span>
                </span>
                <span @click="logout" class="text-red-500 font-semibold flex justify-between px-3 py-2.5 hover:bg-gray-100 hover:text-red-600 hover:cursor-pointer rounded-b-lg">
                  <span>Logout</span>
                  <span class="material-icons">logout</span>
                    
                </span>
            </div>
          </aside>
        </transition>
    </header>
  </template>
  
  <script>
import { ref } from 'vue';
import { useAdminStore } from '../stores/adminStore';
import { useDark, useToggle } from "@vueuse/core";

  export default {
    name: 'Sidebar',
    setup() {
      const dropdown = ref(false);
      const adminStore = useAdminStore()
      const isDark = useDark()
      const toggleDark = useToggle(isDark)
      
      const user = adminStore.user

      const toggleProfile = () => {
        dropdown.value = !dropdown.value;
      }

      const changePassword = () => {
        alert('Change Password clicked');
      }

      const logout = () => {
        adminStore.logout()
      }
      
      return {
        user,
        dropdown,
        toggleProfile,
        changePassword,
        toggleDark,
        isDark,
        logout,
      }
    }
  };
  </script>
  
  <style>
  .md-30 { font-size: 30px; }
  .md-36 { font-size: 36px; }
  .md-40 { font-size: 50px; }
  .dropdown-content::before {
    content: "";
    position: absolute;
    top: -2px;
    right: 50px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent white transparent;
  }

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
  </style>
  