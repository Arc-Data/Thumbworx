<template>
  <header class="max-h-[70px] w-full  dark:bg-slate-900  shadow-2xl bg-blue-500 px-4 py-3 z-10 text-white flex justify-between items-center relative sticky top-0 right-0">
    <div class="flex items-center">
        <button class="hover:text-slate-200 text-slate-50" @click="toggleMenu">
            <span class="material-icons md-36 dark:text-blue-500 dark:hover:text-yellow-500">menu</span>
        </button>
        <span id="header-title" class="ml-4 text-lg font-bold text-white-500 hover:cursor-pointer md:text-xl lg:text-2xl xl:text-3xl " style="max-width: calc(100% - 40px);"> Page Tittle
        </span>
      </div>
      <button class="hover:text-slate-200 text-slate-50" @click="toggleProfile">
        <span class="material-icons md-40 dark:text-blue-500 dark:hover:text-yellow-500">account_circle</span>
      </button>
      <!-- profile dropdown -->
        <transition 
        enter-active-class="transition duration-100 ease-out" 
        enter-from-class="transform scale-95 opacity-0" 
        enter-to-class="transform scale-100 opacity-100" 
        leave-active-class="transition ease-in duration-90" 
        leave-from-class="transform scale-100 opacity-100" 
        leave-to-class="transform scale-95 opacity-0">
            <aside v-if="dropdownOpen" ref="dropdown" class="absolute z-10 mt-2 bg-white rounded-md shadow-xl dropdown-content right-1 top-12 w-72">
                    <div class="absolute right-0 mt-2 text-black bg-white rounded shadow-lg">
                        <span @click="changePassword" class="text-slate-500 font-semibold flex items-center px-4 py-2.5 hover:bg-gray-100 hover:text-slate-600 hover:cursor-pointer rounded-t-lg">
                            <span class="mr-4 material-icons">password</span>
                            <span>Change Password</span>
                        </span>
                        <span @click="logout" class="text-red-500 font-semibold flex items-center px-4 py-2.5 hover:bg-gray-100 hover:text-red-600 hover:cursor-pointer rounded-b-lg">
                            <span class="mr-4 material-icons">logout</span>
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
  