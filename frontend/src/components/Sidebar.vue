<template>
  <div class="flex">
    <aside :class="is_expanded ? 'w-64' : 'w-18'"
      class="sticky top-0 left-0 z-50 flex flex-col h-screen py-2 transition-all duration-500 ease-in-out bg-primary-default text-light">
      <div class="relative flex justify-end transition-all duration-200 ease-in-out"
        :class="{ 'justify-center': !is_expanded }">
        <button class="transition-transform duration-200 ease-in-out" @click="toggleMenu">
          <span
            class="mt-2 text-4xl text-center transition-transform duration-200 ease-out material-icons text-light hover:text-primary"
            :class="{ 'text-center': !is_expanded }">menu</span>
        </button>
      </div>

      <div class="">
        <div class="" :class="{ 'collapse': !is_expanded }">
          <img :src="logo" class="mb-4 ml-auto mr-auto rounded-full size-28" alt="Thumbworx logo" />
          <div class="mb-6 text-center">
            <span class="text-xl font-bold text-white whitespace-nowrap">Thumbworx <br></span>
            <span class="block font-semibold text-white ">Trucking Management System</span>
          </div>
        </div>

        <div class=" max-h-[500px] overflow-hidden overflow-y-auto px-2">
          <div>
            <ul class="font-medium ">
              <li>
                <router-link to="/admin/dashboard"
                  class="flex items-center p-2 text-white transition duration-200 ease-in-out hover:text-primary">

                  <span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="flex-shrink-0 transition duration-75 w-7 h-7 text-cotton">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25Z" />

                    </svg></span>
                  <span class="transition-opacity duration-200 ease-in-out"
                    :class="{ 'collapse': !is_expanded }">Dashboard</span>
                </router-link>
              </li> <!--DASHBOARD-->

              <li>
                <button type="button"
                  class="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg pl-11 group "
                  aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">


                  <span>
                    <svg class="flex-shrink-0 transition duration-75 w-7 h-7 text-cotton group-hover:text-gray-900"
                      aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke-width="1.5" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                    </svg>
                  </span>
                  <span class="transition-opacity duration-200 ease-in-out text-cotton group-hover:text-black "
                    :class="{ 'collapse': !is_expanded }">
                    Registration <br>
                  </span>

                  <svg
                    class="w-3 h-3 ms-auto text-cotton dark:text-white group-hover:text-blue-500 dark:group-hover:text-yellow-500"
                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="m1 1 4 4 4-4" />
                  </svg>
                </button>

                <ul id="dropdown-example" class="hidden py-2 space-y-2">
                  <li>

                    <button type="button"
                      class="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg pl-11 group "
                      aria-controls="dropdown-sub" data-collapse-toggle="dropdown-sub">
                      <span class="ml-1.5 mr-2 material-icons ">local_shipping</span>
                      <span class="transition-opacity duration-200 ease-in-out text-cotton group-hover:text-black "
                        :class="{ 'collapse': !is_expanded }">
                        Driver
                      </span>
                      <svg
                        class="w-3 h-3 ms-auto text-cotton dark:text-white group-hover:text-blue-500 dark:group-hover:text-yellow-500"
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="m1 1 4 4 4-4" />
                      </svg>
                    </button>




                    <ul id="dropdown-sub" class="hidden py-2 space-y-2">
                      <li>
                        <router-link to="/admin/drivers"
                          class="flex items-center p-2 transition duration-200 ease-in-out text-light hover:bg-dark-alt hover:text-primary">
                          <span class="mx-2 material-icons ">account_circle </span>
                          <span class="flex transition-opacity duration-200 ease-in-out"
                            :class="{ 'collapse': !is_expanded }">
                            Account
                          </span>
                        </router-link>
                      </li>
                      <!-- <li>
                        <router-link to="/admin/drivers/bookings"
                          class="flex items-center p-2 transition duration-200 ease-in-out text-light hover:bg-dark-alt hover:text-primary">
                          <span class="mx-2 material-icons ">library_books </span>
                          <span class="transition-opacity duration-200 ease-in-out" :class="{ 'collapse': !is_expanded }">
                            Booking
                          </span>
                        </router-link>
                      </li> -->
                      <li>
                        <router-link to="/admin/drivers/ratings"
                          class="flex items-center p-2 transition duration-200 ease-in-out text-light hover:bg-dark-alt hover:text-primary">
                          <span class="mx-2 material-icons ">stars </span>
                          <span class="transition-opacity duration-200 ease-in-out" :class="{ 'collapse': !is_expanded }">
                            Rating
                          </span>
                        </router-link>
                      </li>
                      <!-- <li>
                        <router-link to="/"
                          class="flex items-center p-2 transition duration-200 ease-in-out text-light hover:bg-dark-alt hover:text-primary">
                          <span class="mx-2 material-icons ">assessment </span>
                          <span class="transition-opacity duration-200 ease-in-out" :class="{ 'collapse': !is_expanded }">
                            Evaluation
                          </span>
                        </router-link>
                      </li> -->
                      <li>
                        <router-link to="/admin/drivers/logs"
                          class="flex items-center p-2 transition duration-200 ease-in-out text-light hover:bg-dark-alt hover:text-primary">
                          <span class="mx-2 material-icons ">receipt_long </span>
                          <span class="transition-opacity duration-200 ease-in-out" :class="{ 'collapse': !is_expanded }">
                            Logs
                          </span>
                        </router-link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <button type="button"
                      class="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg pl-11 group "
                      aria-controls="dropdown-helper" data-collapse-toggle="dropdown-helper">


                      <span class="ml-1.5 mr-2 material-icons ">handshake </span>
                      <span class="transition-opacity duration-200 ease-in-out text-cotton group-hover:text-black"
                        :class="{ 'collapse': !is_expanded }">
                        Helper
                      </span>

                      <svg
                        class="w-3 h-3 ms-auto text-cotton dark:text-white group-hover:text-blue-500 dark:group-hover:text-yellow-500"
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="m1 1 4 4 4-4" />
                      </svg>
                    </button>

                    <ul id="dropdown-helper" class="hidden py-2 space-y-2">
                      <li> <router-link to="/admin/helpers"
                          class="flex items-center p-2 transition duration-200 ease-in-out text-light hover:bg-dark-alt hover:text-primary">
                          <span class="mx-2 material-icons ">account_circle </span>
                          <span class="transition-opacity duration-200 ease-in-out" :class="{ 'collapse': !is_expanded }">
                            Account
                          </span>
                        </router-link>
                      </li>
                      <!-- <li>
                        <router-link to="/admin/helpers/booking"
                          class="flex items-center p-2 transition duration-200 ease-in-out text-light hover:bg-dark-alt hover:text-primary">
                          <span class="mx-2 material-icons ">library_books </span>
                          <span class="transition-opacity duration-200 ease-in-out" :class="{ 'collapse': !is_expanded }">
                            Booking
                          </span>
                        </router-link>
                      </li> -->
                      <li>
                        <router-link to="/admin/helpers/ratings"
                          class="flex items-center p-2 transition duration-200 ease-in-out text-light hover:bg-dark-alt hover:text-primary">
                          <span class="mx-2 material-icons ">star </span>
                          <span class="transition-opacity duration-200 ease-in-out" :class="{ 'collapse': !is_expanded }">
                            Rating
                          </span>
                        </router-link>
                      </li>
                      <!-- <li>
                        <router-link to="/"
                          class="flex items-center p-2 transition duration-200 ease-in-out text-light hover:bg-dark-alt hover:text-primary">
                          <span class="mx-2 material-icons ">assessment </span>
                          <span class="transition-opacity duration-200 ease-in-out" :class="{ 'collapse': !is_expanded }">
                            Evaluation
                          </span>
                        </router-link>
                      </li> -->
                      <li>
                        <router-link to="/admin/helpers/logs"
                          class="flex items-center p-2 transition duration-200 ease-in-out text-light hover:bg-dark-alt hover:text-primary">
                          <span class="mx-2 material-icons ">receipt_long </span>
                          <span class="transition-opacity duration-200 ease-in-out" :class="{ 'collapse': !is_expanded }">
                            Logs
                          </span>
                        </router-link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <button type="button"
                      class="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg pl-11 group "
                      aria-controls="dropdown-client" data-collapse-toggle="dropdown-client">


                      <span class="ml-1.5 mr-2 material-icons ">groups </span>


                      <span class="transition-opacity duration-200 ease-in-out text-cotton group-hover:text-black"
                        :class="{ 'collapse': !is_expanded }">
                        Client
                      </span>

                      <svg
                        class="w-3 h-3 ms-auto text-cotton dark:text-white group-hover:text-blue-500 dark:group-hover:text-yellow-500"
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="m1 1 4 4 4-4" />
                      </svg>
                    </button>



                    <ul id="dropdown-client" class="hidden py-2 space-y-2">
                      <li> <router-link to="/admin/clients"
                          class="flex items-center p-2 transition duration-200 ease-in-out text-light hover:bg-dark-alt hover:text-primary">
                          <span class="mx-2 material-icons ">account_circle </span>
                          <span class="transition-opacity duration-200 ease-in-out" :class="{ 'collapse': !is_expanded }">
                            Account
                          </span>
                        </router-link>
                      </li>
                      <li>
                        <router-link to="/admin/clients/booking"
                          class="flex items-center p-2 transition duration-200 ease-in-out text-light hover:bg-dark-alt hover:text-primary">
                          <span class="mx-2 material-icons ">library_books </span>
                          <span class="transition-opacity duration-200 ease-in-out" :class="{ 'collapse': !is_expanded }">
                            Booking
                          </span>
                        </router-link>
                      </li>
                      <li>
                        <router-link to="/admin/clients/rating"
                          class="flex items-center p-2 transition duration-200 ease-in-out text-light hover:bg-dark-alt hover:text-primary">
                          <span class="mx-2 material-icons ">stars </span>
                          <span class="transition-opacity duration-200 ease-in-out" :class="{ 'collapse': !is_expanded }">
                            Rating
                          </span>
                        </router-link>
                      </li>
                      <!-- <li>
                        <router-link to="/"
                          class="flex items-center p-2 transition duration-200 ease-in-out text-light hover:bg-dark-alt hover:text-primary">
                          <span class="mx-2 material-icons ">assessment </span>
                          <span class="transition-opacity duration-200 ease-in-out" :class="{ 'collapse': !is_expanded }">
                            Evaluation
                          </span>

                        </router-link>
                      </li> -->
                      <li>
                        <router-link to="/admin/clients/logs"
                          class="flex items-center p-2 transition duration-200 ease-in-out text-light hover:bg-dark-alt hover:text-primary">
                          <span class="mx-2 material-icons ">receipt_long </span>
                          <span class="transition-opacity duration-200 ease-in-out" :class="{ 'collapse': !is_expanded }">
                            Logs
                          </span>
                        </router-link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>
<script>
import { ref, onMounted } from 'vue'
import router from '../router' // Para maredirect sa login or other pages kung want
import Logo from '../assets/Logo.png'
import { useAuthStore } from '../stores/authStore'
import { FwbToggle } from 'flowbite-vue'

export default {
  name: "Sidebar",
  components: { FwbToggle },
  setup() {
    const is_expanded = ref(true);


    const toggleMenu = () => {
      is_expanded.value = !is_expanded.value;
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


    });

    return {
      is_expanded,
      toggleMenu,
      logo: Logo,
      handleLogout() {
        const authStore = useAuthStore()
        authStore.logout()
      }
    };
  },
};
</script>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
body {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}
</style>
