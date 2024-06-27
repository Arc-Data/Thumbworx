

<template>
<div class="flex flex-col w-full">
  <Header/>

  <div class="flex flex-col w-full">
    <div class="flex justify-center text-black sm:-mx-6 lg:-mx-8">
      <div class="inline-block w-11/12 py-2 mx-6 my-10 border-solid sm:px-6 lg:px-8 lg:w-auto h-fit rounded-2xl border-slate-500 drop-shadow-md bg-blue-50 ">
        <div class="">
        <!-- tablecontainer -->
                  <div class="block">
                    <!-- searchbar part -->
                    <div class="flex flex-wrap justify-between p-2 ">
                      <form class="w-1/2">   
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
  
                    <div 
                    class="relative inline-block text-left">
                      <!-- driver filter -->
                    <div>
                      <div>
                          <button type="button" @click="toggle" class="
                          
                          
                          
                          bg-blue-100 inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-blue-200" id="menu-button" aria-expanded="true" aria-haspopup="true">
                            Driver type filter
                            <svg class="w-5 h-5 -mr-1 text-gray-400 " viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                            </svg>
                          </button>
                      </div>
                    </div>
                    
                    <div v-if="showDropdown" class="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                      <div class="" role="none">
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0">Type 1</a>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-1">Type 2</a>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-2">Type 3</a>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0">--Clear--</a>
                      </div>
                    </div>
                  </div>
                    </div>
    
      
        <div class="px-4">
          <br>
          <h2 class="ml-4 text-lg font-bold tracking-wide md:text-xl lg:text-xl xl:text-xl"><i class="icon pi pi-folder-open"></i> Driver Account Records</h2>
         
          <br>
          <div class="overflow-hidden overflow-x-auto">
              <table class="min-w-full text-sm font-light text-center text-surface ">
              <thead class="font-medium border-b border-neutral-200 ">
                <tr>
                  <th scope="col px-6 py-4">Driver ID</th>
                  <th scope="col px-6 py-4">Name</th>
                  <th scope="col px-6 py-4">Email</th>
                  <th scope="col px-6 py-4">Phone Number</th>
                  <th scope="col px-6 py-4">Status</th>
                  <th scope="col px-6 py-4">Action</th>
                </tr>
              </thead>
              <tbody>
        
                <tr v-for="user in result" v-bind:key="user.id" 
                  class="transition duration-300 ease-in-out border-b border-neutral-200 hover:bg-blue-100">
                  <td class="px-6 py-4 font-medium whitespace-nowrap">{{ user.id }}</td>
                  <td class="px-6 py-4 whitespace-nowrap">{{ user.first_name }} {{ user.last_name }}</td>
                  <td class="px-6 py-4 whitespace-nowrap">{{ user.email}}</td>
                  <td class="px-6 py-4 whitespace-nowrap">{{ user.phone_number1 }}</td>
                  <td  class="px-6 py-4 whitespace-nowrap">
                    <div :class="getStatusClass(user.account_status)" class="p-1 text-center border-2 rounded-md">{{ getStatusDisplay(user.account_status) }}</div>
                  </td>
                  <td class="px-4 py-4 whitespace-nowrap"><button class="text-white btn btn-primary" @click="viewDriverDetails(user.id)"><span class="material-icons">visibility</span></button> </td>
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
  </div>

  <div id="driverDetailsPop" class="fixed top-0 left-0 z-50 flex justify-center w-screen h-screen pt-10 bg-black bg-opacity-50 collapse">
     <!-- pop up content div -->
     <div class="w-11/12 max-w-screen-md bg-white rounded-lg drop-shadow-lg border-1 border-slate-400 h-fit ">  
      <!-- popup header --> 
        <div class="flex items-center pl-4 pr-2 font-bold text-white bg-blue-600 rounded-tl-lg rounded-tr-lg "> 
                        <legend class="self-center">Driver Details</legend>
                        <!-- close btn -->
                        <span @click="closePopup" class="material-icons text-slate-50 hover:cursor-pointer">close</span>
        </div>

        <!-- popup body -->
        <div class="
        text-black
        px-4 py-2 max-h-[600px] overflow-hidden overflow-y-auto">

        <!-- personal info div -->
        <div class=" drop-shadow-lg">
          <!-- header -->
          <div class="p-3 text-xl rounded-tl-lg rounded-tr-lg bg-slate-200">
              <h6>Personal Information</h6>
          </div>
          <!-- body -->
          <div class="p-3 rounded-bl-lg rounded-br-lg bg-slate-100">
              <div class="flex flex-wrap justify-between">
               <div class="w-full mx-2 mb-3 lg:w-48">
                <label for="disabledTextInput1" class="form-label">First Name:</label>
                <!-- first_name and others is from the database. Hindi sya tinawag directly dito sa script code sa baba -->
                <input
                  type="text"
                  id="disabledTextInput1"
                   class="block w-full p-2 border rounded-md border-slate-300"
                  disabled
                  :value="userDetails.first_name"
                />
              </div>

               <div class="w-full mx-2 mb-3 lg:w-48">
                <label for="disabledTextInput2" class="form-label">Middle Name:</label>
                <input
                  type="text"
                  id="disabledTextInput2"
                   class="block w-full p-2 border rounded-md border-slate-300"
                  disabled
                  :value="userDetails.middle_name"
                />
              </div>
               <div class="w-full mx-2 mb-3 lg:w-48">
                <label for="disabledTextInput3" class="form-label">Last Name</label>
                <input
                  type="text"
                  id="disabledTextInput3"
                   class="block w-full p-2 border rounded-md border-slate-300"
                  disabled
                  :value="userDetails.last_name"
                />
              </div>
            </div>

              <div class="flex flex-wrap justify-between">
               <div class="w-full mx-2 mb-3 lg:w-48">
                <label for="disabledTextInput4" class="form-label">Date of Birth</label>
                <input
                  type="text"
                  id="disabledTextInput4"
                   class="block w-full p-2 border rounded-md border-slate-300"
                  disabled
                  :value="userDetails.birth_date"
                />
              </div>
               <div class="w-full mx-2 mb-3 lg:w-48">
                <label for="disabledTextInput5" class="form-label">Age</label>
                <input
                  type="text"
                  id="disabledTextInput5"
                   class="block w-full p-2 border rounded-md border-slate-300"
                  disabled
                  :value="userDetails.age"
                />
              </div>
               <div class="w-full mx-2 mb-3 lg:w-48">
                <label for="disabledTextInput6" class="form-label">Gender</label>
                <input
                  type="text"
                  id="disabledTextInput6"
                   class="block w-full p-2 border rounded-md border-slate-300"
                  disabled
                  :value="userDetails.gender"
                />
              </div>
            </div>

              <div class="flex flex-wrap justify-between">
               <div class="w-full mx-2 mb-3 lg:w-48">
                <label for="disabledTextInput7" class="form-label"
                  >Marital Status</label
                >
                <input
                  type="text"
                  id="disabledTextInput7"
                   class="block w-full p-2 border rounded-md border-slate-300"
                  disabled
                  :value="userDetails.marital_status"
                />
              </div>
               <div class="w-full mx-2 mb-3 lg:w-48">
                <label for="disabledTextInput8" class="form-label">User Type</label>
                <input
                  type="text"
                  id="disabledTextInput8"
                   class="block w-full p-2 border rounded-md border-slate-300"
                  disabled
                  :value="userDetails.user_type"
                />
              </div>
              <div class="w-full mx-2 mb-3 lg:w-48"></div>
              <!-- Empty column for alignment -->
            </div>
            
          </div>
        </div>
        <!-- contact info div -->
        <br>
        <div class="drop-shadow-lg">
          <div class="p-3 text-xl rounded-tl-lg rounded-tr-lg bg-slate-200">
            <h6>Contact Information</h6>
          </div>

          <div class="p-3 rounded-bl-lg rounded-br-lg bg-slate-100">
              <div class="flex flex-wrap justify-between">
             <div class="w-full mx-2 mb-3 lg:w-48">
              <label for="disabledTextInput9" class="form-label"
                >Phone Number 1</label
              >
              <input
                type="text"
                id="disabledTextInput9"
                 class="block w-full p-2 border rounded-md border-slate-300"
                disabled
                :value="userDetails.phone_number1"
              />
            </div>
             <div class="w-full mx-2 mb-3 lg:w-48">
              <label for="disabledTextInput10" class="form-label"
                >Phone Number 2</label
              >
              <input
                type="text"
                id="disabledTextInput10"
                 class="block w-full p-2 border rounded-md border-slate-300"
                disabled
                :value="userDetails.phone_number2"
              />
            </div>
             <div class="w-full mx-2 mb-3 lg:w-48">
              <label for="disabledTextInput11" class="form-label">Email</label>
              <input
                type="text"
                id="disabledTextInput11"
                 class="block w-full p-2 border rounded-md border-slate-300"
                disabled
                :value="userDetails.email"
              />
            </div>
          </div>
          </div>
        </div>
  <br>
        <!-- address info div -->
        <div class="drop-shadow-lg">
          <div class="p-3 text-xl rounded-tl-lg rounded-tr-lg bg-slate-200">
            <h6>Address</h6>
          </div>

          <div class="p-3 rounded-bl-lg rounded-br-lg bg-slate-100">
            
          <div class="mb-2 text-xl">
              <h6>Permanent Address</h6>
          </div>
              <div class="flex flex-wrap justify-between">
               <div class="w-full mx-2 mb-3 lg:w-48">
                <label for="disabledTextInput12" class="form-label"
                  > House No.</label
                >

                <input
                  type="text"
                  id="disabledTextInput12"
                   class="block w-full p-2 border rounded-md border-slate-300"
                  disabled
                    :value="userDetails.permanent_address?.per_house_number"
                />
              </div>
               <div class="w-full mx-2 mb-3 lg:w-48">
                <label for="disabledTextInput13" class="form-label"
                  > Street</label
                >
                <input
                  type="text"
                  id="disabledTextInput13"
                   class="block w-full p-2 border rounded-md border-slate-300"
                  disabled
                 :value="userDetails.permanent_address?.per_street"
                />
              </div>
               <div class="w-full mx-2 mb-3 lg:w-48">
                <label for="disabledTextInput14" class="form-label"
                  > Barangay</label
                >
                <input
                  type="text"
                  id="disabledTextInput14"
                   class="block w-full p-2 border rounded-md border-slate-300"
                  disabled
                 :value="userDetails.permanent_address?.per_barangay"
                />
              </div>
            </div>

              <div class="flex flex-wrap justify-between">
               <div class="w-full mx-2 mb-3 lg:w-48">
                <label for="disabledTextInput15" class="form-label"
                  > City.</label
                >
                <input
                  type="text"
                  id="disabledTextInput15"
                   class="block w-full p-2 border rounded-md border-slate-300"
                  disabled
                   :value="userDetails.permanent_address?.per_city"
                />
              </div>
               <div class="w-full mx-2 mb-3 lg:w-48">
                <label for="disabledTextInput16" class="form-label"
                  > Province</label
                >
                <input
                  type="text"
                  id="disabledTextInput16"
                   class="block w-full p-2 border rounded-md border-slate-300"
                  disabled
                  :value="userDetails.permanent_address?.per_province"
                />
              </div>
               <div class="w-full mx-2 mb-3 lg:w-48">
                <label for="disabledTextInput17" class="form-label"
                  > Region</label
                >
                <input
                  type="text"
                  id="disabledTextInput17"
                   class="block w-full p-2 border rounded-md border-slate-300"
                  disabled
                  :value="userDetails.permanent_address?.per_region"
                />
              </div>
            </div>

              <div class="flex flex-wrap justify-between">
               <div class="w-full mx-2 mb-3 lg:w-48">
                <label for="disabledTextInput18" class="form-label"
                  > Country.</label
                >
                <input
                  type="text"
                  id="disabledTextInput18"
                   class="block w-full p-2 border rounded-md border-slate-300"
                  disabled
                  :value="userDetails.per_country"
                />
              </div>
               <div class="w-full mx-2 mb-3 lg:w-48">
                <label for="disabledTextInput19" class="form-label"
                  > Zip Code</label
                >
                <input
                  type="text"
                  id="disabledTextInput19"
                   class="block w-full p-2 border rounded-md border-slate-300"
                  disabled
                  :value="userDetails.permanent_address?.per_zip_code"
                />
              </div>

              <div class="w-full mx-2 mb-3 lg:w-48"></div>
            </div>

          <div class="mb-2 text-xl">
            <h6>Current Address</h6>
          </div>

              <div class="flex flex-wrap justify-between">
               <div class="w-full mx-2 mb-3 lg:w-48">
                <label for="disabledTextInput20" class="form-label"
                  > House No.</label
                >
                <input
                  type="text"
                  id="disabledTextInput20"
                   class="block w-full p-2 border rounded-md border-slate-300"
                  disabled
                  :value="userDetails.current_address?.cur_house_number"
                />
              </div>
               <div class="w-full mx-2 mb-3 lg:w-48">
                <label for="disabledTextInput21" class="form-label"
                  > Street</label
                >
                <input
                  type="text"
                  id="disabledTextInput21"
                   class="block w-full p-2 border rounded-md border-slate-300"
                  disabled
                      :value="userDetails.current_address?.cur_street"
                />
              </div>
               <div class="w-full mx-2 mb-3 lg:w-48">
                <label for="disabledTextInput22" class="form-label"
                  > Barangay</label
                >
                <input
                  type="text"
                  id="disabledTextInput22"
                   class="block w-full p-2 border rounded-md border-slate-300"
                  disabled
                        :value="userDetails.current_address?.cur_barangay"
                />
              </div>
            </div>

              <div class="flex flex-wrap justify-between">
               <div class="w-full mx-2 mb-3 lg:w-48">
                <label for="disabledTextInput23" class="form-label"
                  > City.</label
                >
                <input
                  type="text"
                  id="disabledTextInput23"
                   class="block w-full p-2 border rounded-md border-slate-300"
                  disabled
                     :value="userDetails.current_address?.cur_city"
                />
              </div>
               <div class="w-full mx-2 mb-3 lg:w-48">
                <label for="disabledTextInput24" class="form-label"
                  > Province</label
                >
                <input
                  type="text"
                  id="disabledTextInput24"
                   class="block w-full p-2 border rounded-md border-slate-300"
                  disabled
                :value="userDetails.current_address?.cur_province"
                />
              </div>
               <div class="w-full mx-2 mb-3 lg:w-48">
                <label for="disabledTextInput25" class="form-label"
                  > Region</label
                >
                <input
                  type="text"
                  id="disabledTextInput25"
                   class="block w-full p-2 border rounded-md border-slate-300"
                  disabled
                      :value="userDetails.current_address?.cur_region"
                />
              </div>
            </div>

              <div class="flex flex-wrap justify-between">
               <div class="w-full mx-2 mb-3 lg:w-48">
                <label for="disabledTextInput26" class="form-label"
                  > Country.</label
                >
                <input
                  type="text"
                  id="disabledTextInput26"
                   class="block w-full p-2 border rounded-md border-slate-300"
                  disabled
                    :value="userDetails.current_address?.cur_country"
                />
              </div>
               <div class="w-full mx-2 mb-3 lg:w-48">
                <label for="disabledTextInput27" class="form-label"
                  > Zip Code</label
                >
                <input
                  type="text"
                  id="disabledTextInput27"
                   class="block w-full p-2 border rounded-md border-slate-300"
                  disabled
                   :value="userDetails.current_address?.cur_zip_code"
                />
              </div>

              <div class="w-full mx-2 mb-3 lg:w-48"></div>
            </div>

          </div>
        </div>
  <br>
        <!-- emergency contact div -->
        <div class="drop-shadow-lg"> 
          <div class="p-3 text-xl rounded-tl-lg rounded-tr-lg bg-slate-200">
            <h6>Emergency Contact Information</h6>
          </div>
          <div class="p-3 rounded-bl-lg rounded-br-lg bg-slate-100">
              <div class="flex flex-wrap justify-between">
               <div class="w-full mx-2 mb-3 lg:w-48">
                <label for="disabledTextInput28" class="form-label">Full Name</label>
                <input
                  type="text"
                  id="disabledTextInput28"
                   class="block w-full p-2 border rounded-md border-slate-300"
                  disabled
                  :value="userDetails.driver?.contact_person"
                />
              </div>
               <div class="w-full mx-2 mb-3 lg:w-48">
                <label for="disabledTextInput29" class="form-label">Relationship</label>
                <input
                  type="text"
                  id="disabledTextInput29"
                   class="block w-full p-2 border rounded-md border-slate-300"
                  disabled
                  :value="userDetails.driver?.contact_person_relationship"
                />
              </div>
               <div class="w-full mx-2 mb-3 lg:w-48">
                <label for="disabledTextInput30" class="form-label"
                  > Phone Number</label
                >
                <input
                  type="text"
                  id="disabledTextInput30"
                   class="block w-full p-2 border rounded-md border-slate-300"
                  disabled
                   :value="userDetails.driver?.contact_person_phone_number"
                />
              </div>
            </div>

              <div class="flex flex-wrap justify-between">
               <div class="w-full mx-2 mb-3 lg:w-48">
                <label for="disabledTextInput31" class="form-label"
                  >Relationship Email</label
                >
                <input
                  type="text"
                  id="disabledTextInput31"
                   class="block w-full p-2 border rounded-md border-slate-300"
                  disabled
                :value="userDetails.driver?.contact_person_email"
                />
              </div>

               <div class="w-full mx-2 mb-3 lg:w-48">
                <label for="disabledTextInput32" class="form-label">Address</label>
                <input
                  type="text"
                  id="disabledTextInput32"
                   class="block w-full p-2 border rounded-md border-slate-300"
                  disabled
                     :value="userDetails.driver?.contact_person_address"
                />
              </div>

              <div class="w-full mx-2 mb-3 lg:w-48"></div>
            </div>
          </div>
        </div>
  <br>
        <!-- docu div -->
        <div class="drop-shadow-lg">
            <div class="p-3 text-xl rounded-tl-lg rounded-tr-lg bg-slate-200">
              <h6>Documents</h6>
            </div>

            <!-- body -->
            <div class="p-3 rounded-bl-lg rounded-br-lg bg-slate-100">
               <div class="w-full mx-2 mb-3 lg:w-48">
                <label for="disabledTextInput12" class="form-label"
                  >License:</label
                >

                <img src="" alt="uploaded file">
              </div>

               <div class="w-full mx-2 mb-3 lg:w-48">
                <label for="disabledTextInput12" class="form-label"
                  >NBI Clearance:</label
                >

                <img src="" alt="uploaded file">
              </div>

               <div class="w-full mx-2 mb-3 lg:w-48">
                <label for="disabledTextInput12" class="form-label"
                  >LTO Driving History:</label
                >

                <img src="" alt="uploaded file">
              </div>

            </div>
        </div>
  <br>
        <!-- buttons div -->
        <div class="flex justify-center">
            <!-- triggers the approveUser method -->
            <button class="w-40 px-5 py-2 m-3 font-semibold text-white rounded-full shadow-md btn btn-primary hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-75 " @click="approveUser(userDetails)">
              Approve
            </button>
            <button class="w-40 px-5 py-2 m-3 font-semibold text-white bg-red-600 rounded-full shadow-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-400 focus:ring-opacity-75 " @click="denyUser(userDetails)">Deny</button>
        </div>

        </div>





   </div>
  </div>



</div>


</template>
    
  <script> //Bawal tanggalin ung script tag para makita pa rin display kasi part sya ng default code
  import axios from "redaxios";
  import { useAuthStore} from '../../../stores/authStore'; //Added Folder needs to add "../"
  import Header from '../../../components/Header.vue';

  export default {
    name: 'DriverAccount',
    components: {
      Header
    },
    data() {
      return {
        result: [], //Change into array
        showDropdown: false,
        userDetails: {},
        results: {
          account_status: "",
          email: "",
          password: "",
          token: "",
        },
      };
    },
    mounted() {
    const headerTitle = document.getElementById("header-title");
        if (headerTitle) {
          headerTitle.innerText = "Registration Management / Driver Management";
        } else {
          console.error("Element with ID 'header-title' not found")}
    },
    created() {
      // Fetch user account data when the component is created
      this.UserAccountLoad();

    },
    computed: {
      filteredResults() {
        return this.result.filter(user => user.user_type === "driver");
      },
    },
    methods: {
      UserAccountLoad() {
        // Access the authStore to get the token
        const authStore = useAuthStore();
        const token = authStore.token;
  
        if (!token) {
          console.error('Token not available');
          return;
        }
  
        var page = "http://127.0.0.1:8000/api/user";
        
        // Make an authenticated API request using the token for authorization
        axios.get(page, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).then(({ data }) => {
          console.log(data);
          this.result = data;
        }).catch(error => {
          console.error('Error fetching user account data:', error);
        });
      },
      getStatusDisplay(accountStatus) {
        // Convert integer status to display text
        switch (accountStatus) {
          case 0:
            return "Pending";
          case 1:
            return "Onboarding";
          case 2:
            return "Denied";
          case 3:
            return "Terminated";
          case 4:
            return "Cancelled";
          case 5:
            return "Blocked";
          case 6:
            return "Freezed";
          default:
            return accountStatus;// Return status as is if not matched | lalabas lng ung number
        }
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
          return "status-terminated";
          case 4:
            return "status-cancelled";
          case 5:
            return "status-blocked";
          case 6:
            return "status-freezed";
          default:
          return "";
      }
      },

      toggle() {
        this.showDropdown = !this.showDropdown;
      },

      closePopup(){
        document.getElementById("driverDetailsPop").classList.add('collapse');
      },
      
      viewDriverDetails(userId) {
       // const userId = this.$route.params.id;
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
            document.getElementById("driverDetailsPop").classList.remove("collapse")
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
          //this.viewDriverDetails(userDetails.id);
          this.closePopup()
          this.UserAccountLoad();
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
          //this.fetchUserDetails();
          this.closePopup()
          this.UserAccountLoad();
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
.status-terminated {
  color: rgb(74 222 128);
  border-color: rgb(74 222 128);
  background-color: rgb(187 247 208);
}
.status-cancelled {
  color: rgb(74 222 128);
  border-color: rgb(74 222 128);
  background-color: rgb(187 247 208);
}
.status-blocked {
  color: rgb(74 222 128);
  border-color: rgb(74 222 128);
  background-color: rgb(187 247 208);
}
.status-freezed {
  color: rgb(74 222 128);
  border-color: rgb(74 222 128);
  background-color: rgb(187 247 208);
}
</style>
  
  