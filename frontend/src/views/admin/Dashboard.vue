<template>
  <div class="flex flex-col w-full">
    <Header />
    
    <div class="relative justify-center w-full h-full px-10 py-10 ">
     <div class=" overflow-hidden oveflow-y-auto">
      <div>
        <button  type="button" class="w-fit shadow-md text-white bg-primary font-medium rounded-lg text-sm  text-center  me-2 shadow-md">
        <div class=" pl-4 px-5 py-2.5 inline-flex items-center">
          <span class="mr-2 material-icons ">
            content_copy
          </span> Generate Report
      </div>
      
      </button>
    
      <div class="grid grid-cols-1 gap-4 mx-auto mt-10 sm:grid-cols-2 lg:grid-cols-4">
        
        <!-- card component -->
        <div class="flex items-center justify-between p-3 font-medium text-white bg-primary border-b-4 border-blue-700 rounded-md shadow-lg h-28">
          
          <span class="pl-4 text-5xl material-icons">
            group
          </span>
          
          
          <div class="text-right">
            <!-- {{ totalClients }} -->
            <p class="text-2xl ">{{ totalClients }}</p>
            
            <p class="">Total Clients</p>
          </div>
        </div>
        
        <div class="flex items-center justify-between p-3 font-medium text-white bg-primary border-b-4 border-blue-700 rounded-md shadow-lg h-28">
                              <span class="pl-4 text-5xl material-icons">
                                handshake
                              </span>
                              
                              <div class="text-right">
                                <p class="text-2xl ">{{ totalHelpers }}</p>
                                <p>Total Helpers</p>
                              </div>
                            </div>
                            <!-- card component -->
                            <div class="flex items-center justify-between p-3 font-medium text-white bg-primary border-b-4 border-blue-700 rounded-md shadow-lg h-28">
                              <span class="pl-4 text-5xl material-icons">
                                local_shipping
                              </span>
                              <div class="text-right">
                                <p class="text-2xl ">{{ totalDrivers }}</p>
                                <p>Total Drivers</p>
                              </div>
                            </div>
                            
                            <!-- card component -->
                            <div class="flex items-center justify-between p-3 font-medium text-white bg-primary border-b-4 border-blue-700 rounded-md shadow-lg h-28">
                              <span class="pl-4 text-5xl material-icons">
                                event
                              </span>
                              
                              <div class="text-right">
                                <p class="text-2xl ">{{ totalClients }}</p>
                                <p>Total Booking</p>
                              </div>
                            </div>

                      <!-- card component -->
                <div class="flex items-center justify-between p-3 font-medium text-white bg-primary border-b-4 border-blue-700 rounded-md shadow-lg h-28">
                  <span class="pl-4 text-5xl material-icons">
                    admin_panel_settings
                  </span>
                  
                  <div class="text-right">
                    <p class="text-2xl ">{{ totalClients }}</p>
                    <p>Total Admin</p>
                  </div>
                </div>
                
                <!-- card component -->
                <div class="flex items-center justify-between p-3 font-medium text-white bg-primary border-b-4 border-blue-700 rounded-md shadow-lg h-28">
                  <span class="pl-4 text-5xl material-icons">
                    favorite
                  </span>
                            
                  <div class="text-right">
                    <p class="text-2xl ">{{ totalClients }}</p>
                    <p>Total Rating</p>
                  </div>
                </div>
                

                <!-- card component -->
                <div class="flex items-center justify-between p-3 font-medium text-white bg-primary border-b-4 border-blue-700 rounded-md shadow-lg h-28">
                  <span class="pl-4 text-5xl material-icons">
                    directions_boat
                  </span>
                            
                            <div class="text-right">
                              <p class="text-2xl ">{{ totalClients }}</p>
                              <p>Total Shipping</p>
                            </div>
                </div>

                        <!-- card component -->
                <div class="flex items-center justify-between p-3 font-medium text-white bg-primary border-b-4 border-blue-700 rounded-md shadow-lg h-28">
                  <span class="pl-4 text-5xl material-icons">
                                security
                              </span>
                            
                              <div class="text-right">
                                <p class="text-2xl ">{{ totalClients }}</p>
                                <p>Total Super Admin</p>
                              </div>
                            </div>

      </div>
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