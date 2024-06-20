<template>
  <Header />
  <div class="px-10 py-10 h-screen w-full relative justify-center ">
    <button  type="button" class="dark:hover:border-yellow-500 dark:bg-blue-950 dark:hover:bg-blue-900 shadow-md absolute top-3 right-10 text-white bg-[#2557D6] hover:bg-[#2557D6]/90 font-medium rounded-lg text-sm  text-center  me-2 shadow-md">
      <div class=" pl-4 px-5 py-2.5 dark:hover:text-yellow-400 inline-flex items-center">
        <span class="material-icons mr-2 ">
        content_copy
      </span> Generate Report
      </div>
      
    </button>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto mt-10">

                    <!-- card component -->
                <div class="h-28 bg-blue-500 dark:bg-blue-950 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-700 dark:border-yellow-500 text-white font-medium group">
                        
                            <span class="material-icons text-5xl pl-4">
                              group
                            </span>
                        
                          
                          <div class="text-right">
                            <!-- {{ totalClients }} -->
                            <p class="text-2xl dark:text-yellow-400">{{ totalClients }}</p>
                            
                            <p class="">Total Clients</p>
                          </div>
                </div>

                <div class="h-28 bg-blue-500 dark:bg-blue-950 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-700 dark:border-yellow-500 text-white font-medium group">
                            <span class="material-icons text-5xl pl-4">
                              handshake
                            </span>

                          <div class="text-right">
                            <p class="text-2xl dark:text-yellow-400">{{ totalHelpers }}</p>
                            <p>Total Helpers</p>
                          </div>
                </div>
                    <!-- card component -->
                <div class="h-28 bg-blue-500 dark:bg-blue-950 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-700 dark:border-yellow-500 text-white font-medium group">
                  <span class="material-icons text-5xl pl-4">
                            local_shipping
                            </span>
                          <div class="text-right">
                            <p class="text-2xl dark:text-yellow-400">{{ totalDrivers }}</p>
                            <p>Total Drivers</p>
                          </div>
                </div>

                  <!-- card component -->
                <div class="h-28 bg-blue-500 dark:bg-blue-950 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-700 dark:border-yellow-500 text-white font-medium group">
                  <span class="material-icons text-5xl pl-4">
                              event
                            </span>
                          
                          <div class="text-right">
                            <p class="text-2xl dark:text-yellow-400">{{ totalClients }}</p>
                            <p>Total Booking</p>
                          </div>
              </div>

                    <!-- card component -->
              <div class="h-28 bg-blue-500 dark:bg-blue-950 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-700 dark:border-yellow-500 text-white font-medium group">
                <span class="material-icons text-5xl pl-4">
                  admin_panel_settings
                            </span>
                          
                          <div class="text-right">
                            <p class="text-2xl dark:text-yellow-400">{{ totalClients }}</p>
                            <p>Total Admin</p>
                          </div>
              </div>

                      <!-- card component -->
              <div class="h-28 bg-blue-500 dark:bg-blue-950 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-700 dark:border-yellow-500 text-white font-medium group">
                <span class="material-icons text-5xl pl-4">
                  favorite
                            </span>
                          
                          <div class="text-right">
                            <p class="text-2xl dark:text-yellow-400">{{ totalClients }}</p>
                            <p>Total Rating</p>
                          </div>
              </div>


                      <!-- card component -->
              <div class="h-28 bg-blue-500 dark:bg-blue-950 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-700 dark:border-yellow-500 text-white font-medium group">
                <span class="material-icons text-5xl pl-4">
                  directions_boat
                            </span>
                          
                          <div class="text-right">
                            <p class="text-2xl dark:text-yellow-400">{{ totalClients }}</p>
                            <p>Total Shipping</p>
                          </div>
              </div>

                      <!-- card component -->
              <div class="h-28 bg-blue-500 dark:bg-blue-950 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-700 dark:border-yellow-500 text-white font-medium group">
                <span class="material-icons text-5xl pl-4">
                              security
                            </span>
                          
                          <div class="text-right">
                            <p class="text-2xl dark:text-yellow-400">{{ totalClients }}</p>
                            <p>Total Super Admin</p>
                          </div>
              </div>

  </div>
  </div>
 </template>





<script>
import axios from 'redaxios';
import { ref, onMounted } from 'vue';
import { useAdminStore } from '../../stores/adminStore';
import Header from '../../components/Header.vue';

export default {
  name: 'Dashboard',
  components: {
      Header
    },
  setup() {
    const adminStore = useAdminStore()
    const token = adminStore.token

    const totalClients = ref(null);
    const totalDrivers = ref(null);
    const totalHelpers = ref(null);

    const fetchTotalClientCount = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/dashboard/total-client-users-count', {
          "headers": {
            "Authorization": `Bearer ${token}`
          }
        });
        totalClients.value = response.data.total_client_users;
      } catch (error) {
        console.error('Error fetching total client count:', error);
      }
    };

    const fetchTotalDriverCount = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/dashboard/total-driver-users-count', {
          "headers": {
            "Authorization": `Bearer ${token}`
          }
        });
        totalDrivers.value = response.data.total_driver_users;
      } catch (error) {
        console.error('Error fetching total driver count:', error);
      }
    };

    const fetchTotalHelperCount = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/dashboard/total-helper-users-count', {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });
        totalHelpers.value = response.data.total_helper_users;
      } catch (error) {
        console.error('Error fetching total driver count:', error);
      }
    };

    onMounted(() => {
      fetchTotalClientCount();
      fetchTotalDriverCount(); // Fetch total driver count on component mount
      fetchTotalHelperCount();

       document.getElementById("header-title").innerText="Dashboard"
    });

    return {
      totalClients,
      totalDrivers,
      totalHelpers
    };
  },
};
</script>