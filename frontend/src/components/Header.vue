<template>
  <header class="max-h-[70px] w-full  dark:bg-slate-900  shadow-2xl bg-blue-500 px-4 py-3 z-40 text-white flex justify-between items-center relative sticky top-0 right-0">
    <div class="flex items-center">
        <button class="hover:text-slate-200  text-slate-50" @click="toggleMenu">
            <span class="material-icons md-36 dark:text-blue-500 dark:hover:text-yellow-500">menu</span>
        </button>
        <span id="header-title" class="ml-4 font-bold text-white-500 hover:cursor-pointer text-lg
            md:text-xl
            lg:text-2xl
            xl:text-3xl " style="max-width: calc(100% - 40px);"> Page Tittle
        </span>
      </div>
      <button class="hover:text-slate-200 text-slate-50" @click="toggleProfile">
        <span class="material-icons md-40 dark:text-blue-500 dark:hover:text-yellow-500">account_circle</span>
      </button>
      <!-- profile dropdown -->
        <transition 
        enter-active-class="transition ease-out duration-100" 
        enter-from-class="transform opacity-0 scale-95" 
        enter-to-class="transform opacity-100 scale-100" 
        leave-active-class="transition ease-in duration-90" 
        leave-from-class="transform opacity-100 scale-100" 
        leave-to-class="transform opacity-0 scale-95">
            <aside v-if="dropdownOpen" ref="dropdown" class="dropdown-content absolute right-1 top-12 z-10 mt-2 w-72 rounded-md bg-white shadow-xl">
                    <div class="absolute right-0 mt-2 bg-white text-black rounded shadow-lg">
                        <span @click="changePassword" class="text-slate-500 font-semibold flex items-center px-4 py-2.5 hover:bg-gray-100 hover:text-slate-600 hover:cursor-pointer rounded-t-lg">
                            <span class="material-icons mr-4">password</span>
                            <span>Change Password</span>
                        </span>
                        <span @click="logout" class="text-red-500 font-semibold flex items-center px-4 py-2.5 hover:bg-gray-100 hover:text-red-600 hover:cursor-pointer rounded-b-lg">
                            <span class="material-icons mr-4">logout</span>
                            <span>Logout</span>
                        </span>
                    </div>
            </aside>
        </transition>

    </header>
  </template>
  
  <script>

  export default {
    data() {
      return {
        dropdownOpen: false,
        menuOpen: false
      };
    },
    methods: {
      toggleProfile() {
        this.dropdownOpen = !this.dropdownOpen;
      },
      closeDropdown() {
        this.dropdownOpen = false;
      },
      changePassword() {
        alert('Change Password clicked');
        this.closeDropdown();
      },
      logout() {
          // Remove the token from local storage or wherever it's stored
          localStorage.removeItem('userToken');
  
          // Optionally, clear other user-related data
          // localStorage.removeItem('userData');

          // Redirect the user to the login page
          this.$router.push('/login');
      },
    },
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
  