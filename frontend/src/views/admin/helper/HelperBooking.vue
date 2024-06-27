<template>
  <div class="flex flex-col w-full">
  <Header />
  
      <div class="flex justify-center sm:-mx-6 lg:-mx-8">
        <div class="inline-block w-11/12 py-2 mx-6 my-10 text-black border-solid sm:px-6 lg:px-8 lg:w-auto h-fit rounded-2xl border-slate-500 drop-shadow-md bg-blue-50">
          <div class="overflow-hidden ">
          <!-- tablecontainer -->
                    <div class="block">
                      <!-- searchbar part -->
                      <div class="flex flex-wrap justify-between p-2 ">
                        <form class="w-full">   
                            <div class="relative">
                                <div class="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                                    <svg class="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                                <input type="search" id="default-search" class="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg ps-5 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search" required />
                            </div>
                          <div>
                        </div>
                        </form>

                  </div>
      
        
          <div class="px-4">
            <br>
            <h2 class="ml-1 text-lg font-bold tracking-wide md:text-xl lg:text-xl xl:text-xl"><i class="icon pi pi-book"></i>  Booking</h2>
            <br>

            <div class="overflow-hidden overflow-x-auto">
              <table class="min-w-full text-sm font-light text-center text-surface ">
              <thead class="font-medium border-b border-neutral-200 ">
                <tr>
                  <th scope="col px-6 py-4">Booking ID</th>
                  <th scope="col px-6 py-4">Company Name</th>
                  <th scope="col px-6 py-4">Helper ID</th>
                  <th scope="col px-6 py-4">Truck ID</th>
                  <th scope="col px-6 py-4">Status</th>
                  <th scope="col px-6 py-4">Action</th>
                </tr>
              </thead>
              <tbody>
        
                <tr v-for="user in result" v-bind:key="user.id" 
                  class="transition duration-300 ease-in-out border-b border-neutral-200 hover:bg-blue-100">
                  <td class="px-6 py-4 font-medium whitespace-nowrap">{{ user.bookID }}</td>
                  <td class="px-6 py-4 whitespace-nowrap">{{ user.name }}</td>
                  <td class="px-6 py-4 whitespace-nowrap">{{ 1}}</td>
                  <td class="px-6 py-4 whitespace-nowrap">{{ 1 }}</td>
                  <td  class="px-6 py-4 whitespace-nowrap">
                      <div :class="getStatusClass(user.account_status)" class="p-1 text-center border-2 rounded-md">{{ getStatusDisplay(user.account_status) }}</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap"><button class="btn btn-primary" @click="viewHelperBookingDetails(1)"><span class="material-icons">visibility</span></button> </td>
              </tr>
              </tbody>
            </table>
            </div>
           
    
    
       <!-- page turner button -->
    <div class="flex justify-between w-full p-4 border-t border-blue-gray-50">
      <button
      class="bg-blue-100 select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button">
      <span class="material-icons">arrow_back_ios</span>
    </button>
      
    <button
      class="bg-blue-100 select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button">
      <span class="material-icons">arrow_forward_ios</span>
    </button>
    </div>
          </div>
    </div>
          </div>
        </div>
      </div>
   

    <div id="helperBookingDetailsPop" class="fixed top-0 left-0 z-50 flex justify-center w-screen h-screen pt-10 bg-black bg-opacity-50 collapse">
      <!-- pop up content div -->
      <div class="w-11/12 max-w-screen-md bg-white rounded-lg drop-shadow-lg border-1 border-slate-400 h-fit ">  
      <!-- popup header --> 
                          <div class="flex items-center pl-4 pr-2 font-bold text-white bg-blue-600 rounded-tl-lg rounded-tr-lg "> 
                            <legend class="self-center">Booking Details</legend>
                            <!-- close btn -->
                            <span @click="closePopup" class="material-icons text-slate-50 hover:cursor-pointer">close</span>
                          </div>
          <!-- popup body -->
          <div class="
          
          p-8 max-h-[600px] overflow-hidden overflow-y-auto">

          <!-- book info div -->
          <div class="drop-shadow-lg">
            <!-- header -->
            <div class="p-3 text-xl rounded-tl-lg rounded-tr-lg bg-slate-200">
                <h6>Book Information</h6>
            </div>
            <!-- body -->
            <div class="p-3 rounded-bl-lg rounded-br-lg bg-slate-100">
               <div class="flex flex-wrap justify-between">
                <div class="w-full mx-2 mb-3 lg:w-48">
                  <label for="disabledTextInput1" class="form-label">Booking ID:</label>
                  <!-- first_name and others is from the database. Hindi sya tinawag directly dito sa script code sa baba -->
                  <input
                    type="text"
                    id="disabledTextInput1"
                     class="block w-full p-2 border rounded-md border-slate-300"
                    disabled
                    :value="9"
                  />
                </div>

                <div class="w-full mx-2 mb-3 lg:w-48">
                  <label for="disabledTextInput2" class="form-label">Date:</label>
                  <input
                    type="text"
                    id="disabledTextInput2"
                     class="block w-full p-2 border rounded-md border-slate-300"
                    disabled
                    :value="9"
                  />
                </div>
                <div class="w-full mx-2 mb-3 lg:w-48">
                  <label for="disabledTextInput3" class="form-label">Location</label>
                  <input
                    type="text"
                    id="disabledTextInput3"
                     class="block w-full p-2 border rounded-md border-slate-300"
                    disabled
                    :value="9"
                  />
                </div>
              </div>

               <div class="flex flex-wrap justify-between">
                <div class="w-full mx-2 mb-3 lg:w-48">
                  <label for="disabledTextInput4" class="form-label">Client ID</label>
                  <input
                    type="text"
                    id="disabledTextInput4"
                     class="block w-full p-2 border rounded-md border-slate-300"
                    disabled
                    :value="9"
                  />
                </div>
                <div class="w-full mx-2 mb-3 lg:w-48">
                  <label for="disabledTextInput5" class="form-label">Age</label>
                  <input
                    type="text"
                    id="disabledTextInput5"
                     class="block w-full p-2 border rounded-md border-slate-300"
                    disabled
                    :value="2"
                  />
                </div>
                <div class="w-full mx-2 mb-3 lg:w-48">
                  <label for="disabledTextInput6" class="form-label">Gender</label>
                  <input
                    type="text"
                    id="disabledTextInput6"
                     class="block w-full p-2 border rounded-md border-slate-300"
                    disabled
                    :value="2"
                  />
                </div>
              </div>

               <div class="flex flex-wrap justify-between">
                <div class="w-full mx-2 mb-3 lg:w-48">
                  <label for="disabledTextInput7" class="form-label"
                    >Company Name</label
                  >
                  <input
                    type="text"
                    id="disabledTextInput7"
                     class="block w-full p-2 border rounded-md border-slate-300"
                    disabled
                    :value="9"
                  />
                </div>
                <div class="w-full mx-2 mb-3 lg:w-48">
                  <label for="disabledTextInput8" class="form-label">User Type</label>
                  <input
                    type="text"
                    id="disabledTextInput8"
                     class="block w-full p-2 border rounded-md border-slate-300"
                    disabled
                    :value="2"
                  />
                </div>
                <div class="col"></div>
                <!-- Empty column for alignment -->
              </div>

               <div class="flex flex-wrap justify-between">
                <div class="w-full mx-2 mb-3 lg:w-48">
                  <label for="disabledTextInput7" class="form-label"
                    >Company Name</label
                  >
                  <input
                    type="text"
                    id="disabledTextInput7"
                     class="block w-full p-2 border rounded-md border-slate-300"
                    disabled
                    :value="9"
                  />
                </div>
                <div class="w-full mx-2 mb-3 lg:w-48">
                  <label for="disabledTextInput8" class="form-label">Status</label>
                  <input
                    type="text"
                    id="disabledTextInput8"
                     class="block w-full p-2 border rounded-md border-slate-300"
                    disabled
                    :value="9"
                  />
                </div>
                <div class="col"></div>
                <!-- Empty column for alignment -->
              </div>
              
            </div>
          </div>
          <!-- contact info div -->
          <br>
          <div class="drop-shadow-lg">
            <div class="p-3 text-xl rounded-tl-lg rounded-tr-lg bg-slate-200">
              <h6>Driver/Helper Information</h6>
            </div>

            <div class="p-3 rounded-bl-lg rounded-br-lg bg-slate-100">
                 <div class="flex flex-wrap justify-between">
                    <div class="w-full mx-2 mb-3 lg:w-48">
                        <label for="disabledTextInput9" class="form-label"
                        >Driver ID</label
                        >
                        <input
                        type="text"
                        id="disabledTextInput9"
                         class="block w-full p-2 border rounded-md border-slate-300"
                        disabled
                        :value="2"
                        />
                    </div>
                    <div class="w-full mx-2 mb-3 lg:w-48">
                        <label for="disabledTextInput10" class="form-label"
                        >Fullname</label
                        >
                        <input
                        type="text"
                        id="disabledTextInput10"
                         class="block w-full p-2 border rounded-md border-slate-300"
                        disabled
                        :value="2"
                        />
                    </div>
                    <div class="w-full mx-2 mb-3 lg:w-48">
                        <label for="disabledTextInput11" class="form-label">Driver Type</label>
                        <input
                        type="text"
                        id="disabledTextInput11"
                         class="block w-full p-2 border rounded-md border-slate-300"
                        disabled
                        :value="2"
                        />
                    </div>
                </div>

                 <div class="flex flex-wrap justify-between">
                    <div class="w-full mx-2 mb-3 lg:w-48">
                        <label for="disabledTextInput9" class="form-label"
                        >Truck ID</label
                        >
                        <input
                        type="text"
                        id="disabledTextInput9"
                         class="block w-full p-2 border rounded-md border-slate-300"
                        disabled
                        :value="2"
                        />
                    </div>
                    <div class="w-full mx-2 mb-3 lg:w-48">
                        <label for="disabledTextInput10" class="form-label"
                        >Vehicle Type</label
                        >
                        <input
                        type="text"
                        id="disabledTextInput10"
                         class="block w-full p-2 border rounded-md border-slate-300"
                        disabled
                        :value="2"
                        />
                    </div>

                    <div class="col"></div>
                </div>

                 <div class="flex flex-wrap justify-between">
                    <div class="w-full mx-2 mb-3 lg:w-48">
                        <label for="disabledTextInput9" class="form-label"
                        >Helper ID</label
                        >
                        <input
                        type="text"
                        id="disabledTextInput9"
                         class="block w-full p-2 border rounded-md border-slate-300"
                        disabled
                        :value="2"
                        />
                    </div>
                    <div class="w-full mx-2 mb-3 lg:w-48">
                        <label for="disabledTextInput10" class="form-label"
                        >Fullname</label
                        >
                        <input
                        type="text"
                        id="disabledTextInput10"
                         class="block w-full p-2 border rounded-md border-slate-300"
                        disabled
                        :value="2"
                        />
                    </div>
                    <div class="w-full mx-2 mb-3 lg:w-48">
                        <label for="disabledTextInput11" class="form-label">Helper Type</label>
                        <input
                        type="text"
                        id="disabledTextInput11"
                         class="block w-full p-2 border rounded-md border-slate-300"
                        disabled
                        :value="2"
                        />
                    </div>
                </div>

                 <div class="flex flex-wrap justify-between">
                    <div class="w-full mx-2 mb-3 lg:w-48">
                        <label for="disabledTextInput9" class="form-label"
                        >Helper ID</label
                        >
                        <input
                          type="text"
                          id="disabledTextInput9"
                          class="block w-full p-2 border rounded-md border-slate-300"
                          disabled
                          :value="1"
                        />
                    </div>
                    <div class="w-full mx-2 mb-3 lg:w-48">
                        <label for="disabledTextInput10" class="form-label"
                        >Fullname</label
                        >
                        <input
                        type="text"
                        id="disabledTextInput10"
                         class="block w-full p-2 border rounded-md border-slate-300"
                        disabled
                        :value="2"
                        />
                    </div>
                    <div class="w-full mx-2 mb-3 lg:w-48">
                        <label for="disabledTextInput11" class="form-label">Helper Type</label>
                        <input
                        type="text"
                        id="disabledTextInput11"
                         class="block w-full p-2 border rounded-md border-slate-300"
                        disabled
                        :value="2"
                        />
                    </div>
                </div>



            </div>
        </div>
    <br>

          <!-- buttons div -->
          <div class="flex justify-end">
            
              <button class="px-5 py-2 m-3 font-semibold text-white bg-red-600 rounded-full shadow-md w-90 hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-400 focus:ring-opacity-75 " @click="cancelBooking(3)">Cancel Booking</button>
          </div>

          </div>


     </div>
  </div>
</div>

</template>

<script>

        //Bawal tanggalin ung script tag para makita pa rin display kasi part sya ng default code
        import axios from "redaxios";
        import Header from '../../../components/Header.vue';
        import { ref, onMounted } from "vue";
        import { useAuthStore } from "../../../stores/authStore.js";

        export default { //provides a more modular and organized way to define multiple data properties within a component
            name: 'Booking',
            components: {
              Header
            },
            data() {
                return {
                



                };
            },
          created() { //fetches data from the API when the component is created
            this.loadBooking();
            
          },
          mounted() {
            const headerTitle = document.getElementById("header-title");
                if (headerTitle) {
                  headerTitle.innerText = "Registration Management / Helper Management";
                } else {
                  console.error("Element with ID 'header-title' not found")}
          },

          methods: { //responsible for making the API request to fetch user data.
            loadBooking() {


            
            },
            cancelBooking(bookID){
                alert("Book Has been cancel.")
                this.closePopup()
            },
            getStatusClass(status) {
              switch (status) {
                case 0:
                  return "status-pending";
                case 1:
                  return "status-onboarding";
                case 2:
                  return "status-denied";
                case 3:
                  return "status-active";
                default:
                  return "";
              }
            },
            getStatusDisplay(bookingStatus) {
              // Convert integer status to display text
              switch (bookingStatus) {
                case 0:
                  return "Pending";
                case 1:
                  return "Onboarding";
                case 2:
                  return "Denied";
                case 3:
                  return "Active";
                default:
                  return bookingStatus; // Return status as is if not matched | lalabas lng ung number
              }
            },
            closePopup(){
              document.getElementById("helperBookingDetailsPop").classList.add("collapse")
            },
            // new function popup vieww of details
            viewBookingDetails(bookID){
                document.getElementById("helperBookingDetailsPop").classList.remove("collapse")
            },

          fetchUserDetails(userId) {
            
            const authStore = useAuthStore();
            const token = authStore.token;
      
            if (!token) {
              console.error("Token not available");
              return;
          }
  
            axios
              .get(`http://127.0.0.1:8000/api/user/${userId}`, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              })
              .then((response) => {
                this.userDetails = response.data;
              })
              .catch((error) => {
                console.error("Error fetching user details:", error);
              });
          },

      async approveUser(userDetails) {
        try {
          const authStore = useAuthStore();
          const token = authStore.token;
  
          // Make a POST request to UserController's endpoint to generate the random password
          const passwordResponse = await axios.post(
            `http://127.0.0.1:8000/api/user/generate-random-password/${userDetails.id}`,
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log("Password generated successfully:", passwordResponse.data);
  
          // Update the account_status to 1
          userDetails.account_status = 1;
  
          // Store the unhashed password
          const unhashedPassword = passwordResponse.data.password;
  
          // Make a PUT request to update the user details including the account_status and hashed password
          const approveResponse = await axios.put(
            `http://127.0.0.1:8000/api/user/approve/${userDetails.id}`,
            userDetails,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log("User approved successfully:", approveResponse.data);
  
          // Show alert that the account has been approved
          alert("Account has been approved!");
  
          // Send approval email with unhashed password
          const emailResponse = await axios.post(
            `http://127.0.0.1:8000/api/user/send-account-approved-email`,
            {
              email: userDetails.email,
              password: unhashedPassword,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log("Approval email sent successfully:", emailResponse.data);
  
          // Fetch updated user details after approval
          this.fetchUserDetails();
        } catch (error) {
          console.error("Error approving user:", error);
        }
      },
  
      async denyUser(userDetails) {
        try {
          const authStore = useAuthStore();
          const token = authStore.token;
  
          userDetails.account_status = 2;
  
          // Generate a unique token
          const denialToken = Math.random().toString(36); // Generates a random alphanumeric token
  
          // Set the generated token to userDetails.token
          userDetails.token = denialToken;
  
          const denyResponse = await axios.put(
            `http://127.0.0.1:8000/api/user/deny/${userDetails.id}`,
            userDetails,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log("User denied successfully:", denyResponse.data);
  
          // Send denial email with the token
          const emailResponse = await axios.post(
            `http://127.0.0.1:8000/api/user/send-account-denied-email`,
            {
              email: userDetails.email,
              token: denialToken,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log("Denial email sent successfully:", emailResponse.data);
  
              // Show alert that the account has been denied
              alert("Account has been denied!");
  
          // Fetch updated user details after denial
          this.fetchUserDetails();
        } catch (error) {
          console.error("Error denying user:", error);
        }
      },
        

          },
        };


</script>

<style scoped>
        .status-pending {
          color: rgb(250 204 21);
          border-color: rgb(250 204 21);
          background-color: rgb(254 240 138);
        }
        .status-onboarding {
          color: rgb(96 165 250);
          border-color: rgb(96 165 250);
          background-color: rgb(191 219 254);
        }
        .status-denied {
          color:  rgb(248 113 113);
          border-color: rgb(248 113 113);
          background-color: rgb(254 202 202)
        }
        .status-active {
          color: rgb(74 222 128);
          border-color: rgb(74 222 128);
          background-color: rgb(187 247 208);
        }
</style>

