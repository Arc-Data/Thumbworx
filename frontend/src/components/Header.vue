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

        <!-- sidebar dropdown -->
        <transition   
                    enter-active-class="transition ease-out duration-500" 
                    enter-from-class="transform opacity-0 scale-99" 
                    enter-to-class="transform opacity-100 scale-100" 
                    leave-active-class="transition-transform duration-500 ease-out"
                    leave-class="translate-x-0"
                    leave-to-class="-translate-x-full"
                    >
                    <div v-if="menuOpen" class="sidebar h-full" id="sidebar-multi-level-sidebar" aria-label="Sidebar">
                              <div class="sidebar-logo justify-center h-screen bg-blue-500 dark:bg-slate-900 shadow p-2">
                                <div class="relative sticky">
                                  <span @click="toggleMenu" class="material-icons md-30 absolute right-0 top-2 text-slate-50 hover:cursor-pointer dark:hover:text-yellow-500">arrow_back_ios</span>
                                  <div class="ps-2.5 mb-3 hover:cursor-default pt-4">
                                  <img
                                    src="https://th.bing.com/th/id/R.f60de85e220a6c066dca269bae4e4eed?rik=5V1xnEBnOuZrJg&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2ftruck-silhouette-images%2ftruck-silhouette-images-24.png&ehk=XOXvl%2bhOQLME4sLz9fccgTnrTYWeaP9o7p%2fun%2bLw0nk%3d&risl=&pid=ImgRaw&r=0"
                                    class="rounded-full size-32 ml-auto mr-auto mb-4"
                                    alt="Thumbworx logo"
                                  />
                                      <div class="text-center">
                                        <span class="font-bold text-white whitespace-nowrap text-xl
                                        ">Thumbworx <br></span>
                                        <span class="block font-semibold text-white 
                                          ">Trucking Management System</span>
                                      </div>
                                  </div>
                              </div>

                                <div class="sidebar-menu overflow-y">  <!--menu -->
                                  <ul class="space-y-2 font-medium text-lg
                                          md:text-xl
                                          lg:text-2xl
                                          xl:text-3xl">
                                        <li>
                                      <!-- dashboard -->
                                      <router-link
                                      to="/Dashboard"
                                      class="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group hover:bg-blue-400 dark:text-white
                                                  dark:hover:bg-blue-900 dark:hover:border-yellow-500 
                                                  
                                      "
                                      >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="flex-shrink-0 transition duration-75 w-7 h-7 dark:text-white group-hover:text-gray-900 dark:group-hover:text-yellow-400"
                                      >
                                        <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 
                                        20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 
                                        3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25Z"
                                        />
                                      </svg>
                                      <span class="ms-3 group-hover:text-black dark:group-hover:text-yellow-400">Dashboard</span>
                                      </router-link>
                                        </li>
                                    <!-- register -->
                                        <li>
                                          <button
                                          type="button"
                                          class="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group hover:bg-blue-400 dark:text-white
                                                  dark:hover:bg-blue-900 dark:hover:border-yellow-500 dark:group-hover:text-yellow-400
                                      " aria-controls="dropdown-management"
                                          data-collapse-toggle="dropdown-management"
                                          @click="toggleDropdown('dropdown-management')"
                                          >
                                          <svg
                                          class="flex-shrink-0 transition duration-75 w-7 h-7 group-hover:text-gray-900 dark:group-hover:text-yellow-400 dark:text-white"
                                           aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                          >
                                            <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 
                                            2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 
                                            3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                                            />
                                          </svg>

                                          <span class="flex-1 text-left ms-3 rtl:text-right whitespace-nowrap group-hover:text-black dark:group-hover:text-yellow-400">
                                            Registration <br> Management</span>
                                          <svg
                                          class="w-3 h-3 ms-auto dark:text-white group-hover:text-black dark:group-hover:text-yellow-400"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 10 6"
                                          >
                                            <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="m1 1 4 4 4-4"
                                            />
                                          </svg>
                                          </button>
                                          <transition  name="fade">
                                            <ul id="dropdown-management" class="hidden py-2 space-y-2 list slide-in">
                                                    <!-- driver -->
                                                    <li>
                                                      <button
                                                      type="button"
                                                      class="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg pl-11 group hover:bg-blue-400 dark:text-gray dark:hover:bg-blue-900 dark:hover:border-yellow-500 dark:group-hover:text-yellow-400"
                                                      aria-controls="dropdown-sub"
                                                      data-collapse-toggle="dropdown-sub"
                                                      @click="toggleDropdown('dropdown-sub')"
                                                      >
                                                      <span class="flex items-center ml-3 space-x-3 group-hover:text-black">
                                                      <svg class="flex-shrink-0 w-6 h-6 transition duration-75 dark:text-white group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
                    
                                                        />
                                                      </svg>
                                                      <span class="text-sm group-hover:text-black dark:group-hover:text-yellow-400">Driver Management</span>
                                                      </span>
                                                      <svg
                                                        class="w-3 h-3 ms-auto dark:text-white group-hover:text-black dark:group-hover:text-yellow-400"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 10 6"
                                                      >
                                                        <path
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="m1 1 4 4 4-4"
                                                        />
                                                      </svg>
                                                      </button>
                                                    
                                                      <ul id="dropdown-sub" class="hidden py-2 space-y-2 list slide-in">
                                                        <li> <router-link to="/UserAccount" class="flex items-center w-full p-2 text-white transition duration-75 rounded-lg group hover:bg-blue-400 dark:text-white dark:hover:bg-blue-900 dark:hover:border-yellow-500 ">
                                                          
                                                        <!-- Yung Router-LINK diyan ililink yung page para don -->
                                                        <span class="ml-6 text-sm group-hover:text-black dark:group-hover:text-yellow-400">Account</span>
                                                        </router-link>
                                                        </li>
                                                        <li>
                                                        <router-link to="/Booking" class="flex items-center w-full p-2 text-white transition duration-75 rounded-lg group hover:bg-blue-400 dark:text-white dark:hover:bg-blue-900 dark:hover:border-yellow-500 ">
                                                          <!-- Yung Router-LINK diyan ililink yung page para don (Not sure kung eto yung dapat na page) -->  
                                                        <span class="ml-6 text-sm group-hover:text-black dark:group-hover:text-yellow-400">Booking</span>
                                                        </router-link>
                                                        </li>
                                                        <li>
                                                          <router-link to="/Ratings" class="flex items-center w-full p-2 text-white transition duration-75 rounded-lg group hover:bg-blue-400 dark:text-white dark:hover:bg-blue-900 dark:hover:border-yellow-500 ">
                                                          <!-- Yung Router-LINK diyan ililink yung page para don (Not sure kung eto yung dapat na page) -->  
                                                        <span class="ml-6 text-sm group-hover:text-black dark:group-hover:text-yellow-400">Ratings</span>
                                                        </router-link>
                                                        </li>
                                                        <li>
                                                          <router-link to="/Evaluation" class="flex items-center w-full p-2 text-white transition duration-75 rounded-lg group hover:bg-blue-400 dark:text-white dark:hover:bg-blue-900 dark:hover:border-yellow-500 ">
                                                          <!-- Yung Router-LINK diyan ililink yung page para don (Not sure kung eto yung dapat na page) -->  
                                                        <span class="ml-6 text-sm group-hover:text-black dark:group-hover:text-yellow-400">Evaluation</span>
                                                        </router-link>
                                                        </li>
                                                        <li>
                                                          <router-link to="/Logs" class="flex items-center w-full p-2 text-white transition duration-75 rounded-lg group hover:bg-blue-400 dark:text-white dark:hover:bg-blue-900 dark:hover:border-yellow-500 ">
                                                          <!-- Yung Router-LINK diyan ililink yung page para don (Not sure kung eto yung dapat na page) -->  
                                                        <span class="ml-6 text-sm group-hover:text-black dark:group-hover:text-yellow-400">Logs</span>
                                                        </router-link>
                                                        </li>
                                                      </ul> 
                                                    </li>
                                                    <!-- helper -->
                                                    <li>
                                                      <button
                                                      type="button"
                                                      class="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg pl-11 group hover:bg-blue-400 dark:text-gray dark:hover:bg-blue-900 dark:hover:border-yellow-500 "
                                                      aria-controls="dropdown-helper"
                                                      data-collapse-toggle="dropdown-helper"
                                                      @click="toggleDropdown('dropdown-helper')"
                                                      >
                                                      <span class="flex items-center ml-3 space-x-3 group-hover:text-black dark:group-hover:text-yellow-400">
                                                      <svg class="flex-shrink-0 w-6 h-6 transition duration-75 group-hover:text-gray-900 dark:text-white dark:text-gray-400 dark:group-hover:text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                            
                                                
                                                      </svg>
                                                      <span class="text-sm group-hover:text-black dark:group-hover:text-yellow-400">Helper Management</span>
                                                      </span>
                                                      <svg
                                                        class="w-3 h-3 ms-auto dark:text-white group-hover:text-black dark:group-hover:text-yellow-400"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 10 6"
                                                      >
                                                        <path
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="m1 1 4 4 4-4"
                                                        />
                                                      </svg>
                                                      </button>
                                                  
                                                      <ul id="dropdown-helper" class="hidden py-2 space-y-2 list slide-in">
                                                        <li> <router-link to="/HelperAccount" class="flex items-center w-full p-2 text-white transition duration-75 rounded-lg group hover:bg-blue-400 dark:text-white dark:hover:bg-blue-900 dark:hover:border-yellow-500 ">
                                                          
                                                        <!-- Yung Router-LINK diyan ililink yung page para don -->
                                                        <span class="ml-6 text-sm group-hover:text-black dark:group-hover:text-yellow-400">Account</span>
                                                        </router-link>
                                                        </li>
                                                        <li><router-link to="/HelperBooking" class="flex items-center w-full p-2 text-white transition duration-75 rounded-lg group hover:bg-blue-400 dark:text-white dark:hover:bg-blue-900 dark:hover:border-yellow-500 ">
                                                          <!-- Yung Router-LINK diyan ililink yung page para don (Not sure kung eto yung dapat na page) -->  
                                                        <span class="ml-6 text-sm group-hover:text-black dark:group-hover:text-yellow-400">Booking</span>
                                                        </router-link>
                                                        </li>
                                                        <li><router-link to="/HelperRatings" class="flex items-center w-full p-2 text-white transition duration-75 rounded-lg group hover:bg-blue-400 dark:text-white dark:hover:bg-blue-900 dark:hover:border-yellow-500 ">
                                                          <span class="ml-6 text-sm group-hover:text-black dark:group-hover:text-yellow-400">Rating</span>
                                                        </router-link>
                                                        </li>
                                                        <li><router-link to="/HelperEvaluation" class="flex items-center w-full p-2 text-white transition duration-75 rounded-lg group hover:bg-blue-400 dark:text-white dark:hover:bg-blue-900 dark:hover:border-yellow-500 ">
                                                          <span class="ml-6 text-sm group-hover:text-black dark:group-hover:text-yellow-400">Evaluation</span>
                                                        </router-link>
                                                        </li>
                                                        <li><router-link to="/HelperLogs" class="flex items-center w-full p-2 text-white transition duration-75 rounded-lg group hover:bg-blue-400 dark:text-white dark:hover:bg-blue-900 dark:hover:border-yellow-500 ">
                                                          <span class="ml-6 text-sm group-hover:text-black dark:group-hover:text-yellow-400">Logs</span>
                                                        </router-link>
                                                        </li>
                                                      </ul> 
                                                    </li>
                                                      <!-- client -->
                                                    <li>
                                                      <button
                                                      type="button"
                                                      class="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg pl-11 group hover:bg-blue-400 dark:text-gray dark:hover:bg-blue-900 dark:hover:border-yellow-500 "
                                                      aria-controls="dropdown-client"
                                                      data-collapse-toggle="dropdown-client"
                                                      @click="toggleDropdown('dropdown-client')"
                                                      >
                                                    
                                                      <span class="flex items-center ml-3 space-x-3 group-hover:text-black dark:group-hover:text-yellow-400">
                                                      <svg class="flex-shrink-0 w-6 h-6 transition duration-75 dark:text-white group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                            
                                                        />
                                                      </svg>
                                                      <span class="text-sm group-hover:text-black dark:group-hover:text-yellow-400">Client Management</span>
                                                      </span>
                                            
                                                      <svg
                                                        class="w-3 h-3 ms-auto dark:text-white group-hover:text-black dark:group-hover:text-yellow-400"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 10 6"
                                                      >
                                                        <path
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="m1 1 4 4 4-4"
                                                        />
                                                      </svg>
                                                      </button>
                                                      <ul id="dropdown-client" class="hidden py-2 space-y-2 list slide-in">
                                                        <li> <router-link to="/ClientAccount" class="flex items-center w-full p-2 text-white transition duration-75 rounded-lg group hover:bg-blue-400 dark:text-white dark:hover:bg-blue-900 dark:hover:border-yellow-500 ">
                                                          
                                                        <!-- Yung Router-LINK diyan ililink yung page para don -->
                                                        <span class="ml-6 text-sm group-hover:text-black dark:group-hover:text-yellow-400">Account</span>
                                                        </router-link>
                                                        </li>
                                                        <li><router-link to="/ClientBooking" class="flex items-center w-full p-2 text-white transition duration-75 rounded-lg group hover:bg-blue-400 dark:text-white dark:hover:bg-blue-900 dark:hover:border-yellow-500 ">
                                                          <!-- Yung Router-LINK diyan ililink yung page para don (Not sure kung eto yung dapat na page) -->  
                                                        <span class="ml-6 text-sm group-hover:text-black dark:group-hover:text-yellow-400">Booking</span>
                                                        </router-link>
                                                        </li>
                                                        <li>
                                                          <router-link to="/ClientRating" class="flex items-center w-full p-2 text-white transition duration-75 rounded-lg group hover:bg-blue-400 dark:text-white dark:hover:bg-blue-900 dark:hover:border-yellow-500 ">
                                                          <!-- Yung Router-LINK diyan ililink yung page para don (Not sure kung eto yung dapat na page) -->  
                                                        <span class="ml-6 text-sm group-hover:text-black dark:group-hover:text-yellow-400">Rating</span>
                                                        </router-link>
                                                        </li>
                                                        <li>
                                                          <router-link to="/ClientEvaluation" class="flex items-center w-full p-2 text-white transition duration-75 rounded-lg group hover:bg-blue-400 dark:text-white dark:hover:bg-blue-900 dark:hover:border-yellow-500 ">
                                                          <!-- Yung Router-LINK diyan ililink yung page para don (Not sure kung eto yung dapat na page) -->  
                                                        <span class="ml-6 text-sm group-hover:text-black dark:group-hover:text-yellow-400">Evaluation</span>
                                                        </router-link>
                                                        </li>
                                                        <li>
                                                          <router-link to="/ClientLogs" class="flex items-center w-full p-2 text-white transition duration-75 rounded-lg group hover:bg-blue-400 dark:text-white dark:hover:bg-blue-900 dark:hover:border-yellow-500 ">
                                                          <!-- Yung Router-LINK diyan ililink yung page para don (Not sure kung eto yung dapat na page) -->  
                                                        <span class="ml-6 text-sm group-hover:text-black dark:group-hover:text-yellow-400">Logs</span>
                                                        </router-link>
                                                        </li>
                                                      </ul> 
                                                    </li>
                                              </ul> 
                                          </transition>
                                              
                                        </li>
                                  </ul>
                                </div>
                              </div>
                    </div>
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
      toggleDropdown(dropdownId) {
        const dropdown = document.getElementById(dropdownId);
        const listItems = document.getElementById('dropdown-management').querySelectorAll('ul');
        if (dropdown.style.display === 'none' || dropdown.style.display === '') {
          dropdown.style.display = 'block';
          listItems.forEach(item => {
            if(item.id != dropdownId){
              if(item.id != 'dropdown-management'){
                item.style.display = 'none' // Example: Logging text content of each li
              }
            }
            });
          
        } else {
          dropdown.style.display = 'none';
        }
      },
      toggleMenu() {
        // Toggle menu logic here
        this.menuOpen = !this.menuOpen

      },
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

/* Optional: If you want to style the scrollbar */
.sidebar-menu::-webkit-scrollbar {
    width: 8px;
}

.sidebar-menu::-webkit-scrollbar-thumb {
    background-color: #3b82f6;
    border-radius: 4px;
}

.sidebar-menu::-webkit-scrollbar-thumb:hover {
    background: #cccccc;
}

.list {
  animation-duration: 0.5s;
  animation-fill-mode: both;
  transform: translateZ(0); /* Promote to compositor layer */
}
.slide-in {
  animation-name: slideIn;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
  </style>
  