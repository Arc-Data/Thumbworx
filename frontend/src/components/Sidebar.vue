<template>
	<div>



	<aside :class="is_expanded ? 'w-64' : 'w-24'" class="flex flex-col bg-primary-default dark:bg-primary-500 text-light min-h-screen p-4 transition-all duration-200 ease-in-out">


		<div class="flex justify-end mb-4 relative transition-all duration-200 ease-in-out">
			<button class="transition-transform duration-200 ease-in-out" @click="toggleMenu">
				<span class="material-icons text-light text-2xl transition-transform duration-200 ease-out hover:text-primary hover:translate-x-2">menu</span>
			</button>
		</div>

		<div class="space-y-1 -mx-4">
			<div class="mb-4 flex items-center ps-2.5 mb-5">
			<img
			src="https://th.bing.com/th/id/R.f60de85e220a6c066dca269bae4e4eed?rik=5V1xnEBnOuZrJg&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2ftruck-silhouette-images%2ftruck-silhouette-images-24.png&ehk=XOXvl%2bhOQLME4sLz9fccgTnrTYWeaP9o7p%2fun%2bLw0nk%3d&risl=&pid=ImgRaw&r=0"
			class="rounded-full h-14 w-14 me-3 sm:h-14 sm:w-14"
			alt="Thumbworx logo"
			/>
			<div>
			<span class="text-xl font-bold text-white whitespace-nowrap" :class="{'opacity-0': !is_expanded}">Thumbworx <br></span>
			<span class="block font-semibold text-white ml-4 transition-opacity duration-200 ease-in-out" :class="{'opacity-0': !is_expanded}">Trucking Management System</span>
		</div>
		</div>
	


	<ul class="space-y-2 font-medium">

	<li>

		<router-link		 
		to="/admin/dashboard" 		 
		class="flex items-center text-white p-2 transition duration-200 ease-in-out  hover:text-primary">
		
		<span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="flex-shrink-0 transition duration-75 w-7 h-7 text-cotton group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-blue-500">
		<path stroke-linecap="round" 
		stroke-linejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25Z" />
		
		
		</svg></span>
		<span class="ml-4 transition-opacity duration-200 ease-in-out" :class="{'opacity-0': !is_expanded}">Dashboard</span>
		</router-link>
	</li> <!--DASHBOARD-->
		
	




	<li>
  <button
    type="button"
    class="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-300 dark:text-gray dark:hover:bg-gray-700"
    aria-controls="dropdown-example"
    data-collapse-toggle="dropdown-example">
    
	
    <span>
      <svg
        class="flex-shrink-0 transition duration-75 w-7 h-7 text-cotton group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-blue-500"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor">
        <path stroke-linecap="round" 
		stroke-linejoin="round"
          d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
      </svg>
    </span>
    <span class="ml-4 transition-opacity duration-200 ease-in-out text-cotton group-hover:text-black " :class="{'opacity-0': !is_expanded}">
      Registration <br>
    </span>

    <svg
      class="w-3 h-3 ms-auto text-cotton dark:text-white group-hover:text-blue-500 dark:group-hover:text-yellow-500"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 10 6">
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m1 1 4 4 4-4"
      />
    </svg>
  </button>



  <ul id="dropdown-example" class="hidden py-2 space-y-2">
    <li>

      <button
        type="button"
        class="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-300 dark:text-gray dark:hover:bg-gray-700"
        aria-controls="dropdown-sub"
        data-collapse-toggle="dropdown-sub">
        <span>
          <svg
            class="flex-shrink-0 transition duration-75 w-7 h-7 text-cotton group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
          </svg>
        </span>
        <span class="ml-4 transition-opacity duration-200 ease-in-out text-cotton group-hover:text-black " :class="{'opacity-0': !is_expanded}">
          Driver 
        </span>
        <svg
          class="w-3 h-3 ms-auto text-cotton dark:text-white group-hover:text-blue-500 dark:group-hover:text-yellow-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>




      <ul id="dropdown-sub" class="hidden py-2 space-y-2">
        <li>
          <router-link to="/admin/drivers" class="flex items-center text-light p-2 transition duration-200 ease-in-out hover:bg-dark-alt hover:text-primary">
            <span class="ml-4 transition-opacity duration-200 ease-in-out" :class="{'opacity-0': !is_expanded}">
              Account
            </span>
          </router-link>
        </li>
        <li>
          <router-link to="/" class="flex items-center text-light p-2 transition duration-200 ease-in-out hover:bg-dark-alt hover:text-primary">
            <span class="ml-4 transition-opacity duration-200 ease-in-out" :class="{'opacity-0': !is_expanded}">
              Booking
            </span>
          </router-link>
        </li>
        <li>
          <router-link to="/admin/ratings" class="flex items-center text-light p-2 transition duration-200 ease-in-out hover:bg-dark-alt hover:text-primary">    
            <span class="ml-4 transition-opacity duration-200 ease-in-out" :class="{'opacity-0': !is_expanded}">
              Rating
            </span>
          </router-link>
        </li>
        <li>
          <router-link to="/" class="flex items-center text-light p-2 transition duration-200 ease-in-out hover:bg-dark-alt hover:text-primary">
            <span class="ml-4 transition-opacity duration-200 ease-in-out" :class="{'opacity-0': !is_expanded}">
              Evaluation
            </span>
          </router-link>
        </li>
        <li>
          <router-link to="/admin/logs" class="flex items-center text-light p-2 transition duration-200 ease-in-out hover:bg-dark-alt hover:text-primary">
            <span class="ml-4 transition-opacity duration-200 ease-in-out" :class="{'opacity-0': !is_expanded}">
              Logs
            </span>
          </router-link>
        </li>


      </ul>
    </li>
 
	<li>
			<button
			type="button"
			class="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-300 dark:text-gray dark:hover:bg-gray-700"
			aria-controls="dropdown-helper"
			data-collapse-toggle="dropdown-helper">
				
				
				<span> <svg 
			  class="flex-shrink-0 transition duration-75 w-7 h-7 text-cotton group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-blue-500"

			
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />

		
				</svg>
			
				</span>
 			<span class="ml-4 transition-opacity duration-200 ease-in-out text-cotton group-hover:text-black" :class="{'opacity-0': !is_expanded}">
          Helper
        </span>

				<svg
					class="w-3 h-3 ms-auto text-cotton dark:text-white group-hover:text-blue-500 dark:group-hover:text-yellow-500"
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



	<ul id="dropdown-helper" class="hidden py-2 space-y-2">
        <li> <router-link to="/admin/helpers" class="flex items-center text-light p-2 transition duration-200 ease-in-out hover:bg-dark-alt hover:text-primary">
            <span class="ml-4 transition-opacity duration-200 ease-in-out" :class="{'opacity-0': !is_expanded}">
              Account
            </span>
          </router-link>
        </li>
        <li>
          <router-link to="/admin/helpers/helperbooking" class="flex items-center text-light p-2 transition duration-200 ease-in-out hover:bg-dark-alt hover:text-primary">
            <span class="ml-4 transition-opacity duration-200 ease-in-out" :class="{'opacity-0': !is_expanded}">
              Booking
            </span>
          </router-link>
        </li>
        <li>
          <router-link to="/superadmin/helpers/helperratings" class="flex items-center text-light p-2 transition duration-200 ease-in-out hover:bg-dark-alt hover:text-primary">    
            <span class="ml-4 transition-opacity duration-200 ease-in-out" :class="{'opacity-0': !is_expanded}">
              Rating
            </span>
          </router-link>
        </li>
        <li>
          <router-link to="/" class="flex items-center text-light p-2 transition duration-200 ease-in-out hover:bg-dark-alt hover:text-primary">
            <span class="ml-4 transition-opacity duration-200 ease-in-out" :class="{'opacity-0': !is_expanded}">
              Evaluation
            </span>
          </router-link>
        </li>
        <li>
          <router-link to="/superadmin/helpers/helperlogs" class="flex items-center text-light p-2 transition duration-200 ease-in-out hover:bg-dark-alt hover:text-primary">
            <span class="ml-4 transition-opacity duration-200 ease-in-out" :class="{'opacity-0': !is_expanded}">
              Logs
            </span>
          </router-link>
        </li>
	</ul>
	</li>

	
	<li>
			<button
			type="button"
			class="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-300 dark:text-gray dark:hover:bg-gray-700"
			aria-controls="dropdown-client"
			data-collapse-toggle="dropdown-client">
				
				
				<span> <svg 
			  class="flex-shrink-0 transition duration-75 w-7 h-7 text-cotton group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-blue-500"

			
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />

		
				</svg>
			
				</span>
 			<span class="ml-4 transition-opacity duration-200 ease-in-out text-cotton group-hover:text-black" :class="{'opacity-0': !is_expanded}">
         Client
        </span>

				<svg
					class="w-3 h-3 ms-auto text-cotton dark:text-white group-hover:text-blue-500 dark:group-hover:text-yellow-500"
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



	<ul id="dropdown-client" class="hidden py-2 space-y-2">
        <li> <router-link to="/admin/clients" class="flex items-center text-light p-2 transition duration-200 ease-in-out hover:bg-dark-alt hover:text-primary">
            <span class="ml-4 transition-opacity duration-200 ease-in-out" :class="{'opacity-0': !is_expanded}">
              Account
            </span>
          </router-link>
        </li>
        <li>
          <router-link to="/admin/clients/booking" class="flex items-center text-light p-2 transition duration-200 ease-in-out hover:bg-dark-alt hover:text-primary">
            <span class="ml-4 transition-opacity duration-200 ease-in-out" :class="{'opacity-0': !is_expanded}">
              Booking
            </span>
          </router-link>
        </li>
        <li>
          <router-link to="/admin/clients/rating" class="flex items-center text-light p-2 transition duration-200 ease-in-out hover:bg-dark-alt hover:text-primary">    
            <span class="ml-4 transition-opacity duration-200 ease-in-out" :class="{'opacity-0': !is_expanded}">
              Rating
            </span>
          </router-link>
        </li>
        <li>
          <router-link to="/" class="flex items-center text-light p-2 transition duration-200 ease-in-out hover:bg-dark-alt hover:text-primary">
            <span class="ml-4 transition-opacity duration-200 ease-in-out" :class="{'opacity-0': !is_expanded}">
              Evaluation
            </span>
          </router-link>
        </li>
        <li>
          <router-link to="/admin/clients/logs" class="flex items-center text-light p-2 transition duration-200 ease-in-out hover:bg-dark-alt hover:text-primary">
            <span class="ml-4 transition-opacity duration-200 ease-in-out" :class="{'opacity-0': !is_expanded}">
              Logs
            </span>
          </router-link>
        </li>
	</ul>
	</li>





			


				</ul> 
			</li>
		</ul>
	<div>




	
	<ul class="space-y-2 font-medium">
	
	<div class="">
	<li>
		<button
		@click="handleLogout"
		class="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group hover:bg-gray-300 dark:text-white dark:hover:bg-gray-700"
		>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="flex-shrink-0 transition duration-75 w-7 h-7 text-cotton group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-blue-500"
		>
			<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25V9m-6 0h16.5m-16.5 0L5.25 12m0 0l-2.25 3m2.25-3h16.5"
			/>
		</svg>
		<span class="ms-3 group-hover:text-black" :class="{'opacity-0': !is_expanded}" >Logout</span>
		</button>
	</li>
	</div>
	</ul>
	
	</div>
		</div>
    
		<label class="mode-toggle mt-auto cursor-pointer mb-3 pb-3">
  <input type="checkbox" v-model="isDarkMode" id="darkmode-toggle" @change="switchTheme" class="sr-only peer">
  <span v-if="!isDarkMode" class="material-icons">light_mode</span>
  <span v-if="isDarkMode" class="material-icons">dark_mode</span>
  <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
</label>
				</aside>
	
	</div>
</template>
<script>
import { ref, onMounted } from 'vue'
import router from '../router' // Para maredirect sa login or other pages kung want
import { useAdminStore } from '../stores/adminStore'
import { FwbToggle } from 'flowbite-vue'

export default {
	name: "Sidebar",
	components: {FwbToggle},
	setup() {
		const is_expanded = ref(true);
		const isDarkMode = ref(false);

		const toggleMenu = () => {
			is_expanded.value = !is_expanded.value;
		};

		const switchTheme = () => {
			if (isDarkMode.value) {
				document.documentElement.setAttribute('data-theme', 'dark');
				localStorage.setItem('theme', 'dark');
			} else {
				document.documentElement.setAttribute('data-theme', 'light');
				localStorage.setItem('theme', 'light');
			}
		};

		onMounted(() => {
			// Existing event listeners
			document.querySelectorAll("[data-collapse-toggle]").forEach((button) => {
				button.addEventListener("click", function () {
					const target = document.getElementById(button.getAttribute("aria-controls"));
					target.classList.toggle("hidden");
				});
			});

			document.querySelectorAll("[data-drawer-toggle]").forEach((button) => {
				button.addEventListener("click", function () {
					const target = document.getElementById(button.getAttribute("data-drawer-target"));
					target.classList.toggle("-translate-x-full");
				});
			});

			// Initialize dark mode from localStorage
			const currentTheme = localStorage.getItem('theme');
			if (currentTheme === 'dark') {
				isDarkMode.value = true;
				document.documentElement.setAttribute('data-theme', 'dark');
			}
		});

		return {
			is_expanded,
			isDarkMode,
			toggleMenu,
			switchTheme,
			handleLogout() {
				const adminStore = useAdminStore()
				adminStore.logout()
			}
		};
	},
};
</script>

<style scoped>


</style>
