

<template>
    <div class="w-full">
      <div class="flex justify-center overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block py-2 mt-20 bg-white border-solid sm:px-6 lg:px-8 rounded-2xl border-slate-500 drop-shadow-md">
          <div class="overflow-hidden ">
          <!-- tablecontainer -->
                    <div class="block">
                      <!-- searchbar part -->
                      <div class="flex flex-wrap justify-between p-2 ">
                        <form class="w-1/2 ">   
                            <div class="relative">
                                <div class="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                                <input type="search" id="default-search" class="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg ps-5 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                            </div>
                          <div>
                        </div>
                        </form>
    
                      <div 
                      class="relative inline-block text-left">
                        <!-- driver filter -->
                      <div>
                        <div>
                            <button type="button" @click="toggle" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-blue px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                              Helper type filter
                              <svg class="w-5 h-5 -mr-1 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                              </svg>
                            </button>
                        </div>
                      </div>
                      
                      <div v-if="showDropdown" class="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                        <div class="py-1" role="none">
                          <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0">Type 1</a>
                          <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-1">Type 2</a>
                          <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-2">Type 3</a>
                          <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0">--Clear--</a>
                        </div>
                      </div>
                    </div>
                  </div>
      
        
          <div class="">
            <br>
            <h2>Helper Account Records</h2>
            <br>
            <table class="min-w-full text-sm font-light text-center text-surface dark:text-white">
              <thead class="font-medium border-b border-neutral-200 dark:border-white/10">
                <tr>
                  <th scope="col px-6 py-4">Helper ID</th>
                  <th scope="col px-6 py-4">Fullname</th>
                  <th scope="col px-6 py-4">Email</th>
                  <th scope="col px-6 py-4">Mobile Number</th>
                  <th scope="col px-6 py-4">Status</th>
                  <th scope="col px-6 py-4">Action</th>
                </tr>
              </thead>
              <tbody>
        
                <tr v-for="user in result" v-bind:key="user.id" 
                  class="transition duration-300 ease-in-out border-b border-neutral-200 hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                  <td class="px-6 py-4 font-medium whitespace-nowrap">{{ user.id }}</td>
                  <td class="px-6 py-4 whitespace-nowrap">{{ user.first_name }} {{ user.last_name }}</td>
                  <td class="px-6 py-4 whitespace-nowrap">{{ user.email}}</td>
                  <td class="px-6 py-4 whitespace-nowrap">{{ user.phone_number1 }}</td>
                  <td :class="getStatusClass(user.account_status)" class="px-6 py-4 whitespace-nowrap">
                    {{ getStatusDisplay(user.account_status) }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap"><button class="btn btn-primary" @click="viewDriverDetails(user.id)">View</button> </td>
              </tr>
              </tbody>
            </table>
    
    
      <!-- page turner button -->
      <div class="flex justify-between w-full p-4 border-t border-blue-gray-50">
        <button
          class="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button">
          Previous
        </button>
          
        <button
          class="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button">
          Next
        </button>
      </div>
          </div>
    </div>
          </div>
        </div>
      </div>
    
    <div id="helperDetailsPop" class="absolute z-10 w-full pt-20 pb-20 bg-black bg-opacity-50 collapse">
    </div>
    <!-- pop up content div -->
      <div class="ml-auto mr-auto bg-white rounded-lg drop-shadow-lg border-1 border-slate-400 w-fit">
          <!-- popup header --> 
          <div class="flex items-stretch px-8 text-white bg-blue-600 rounded-tl-lg rounded-tr-lg"> 
            <legend class="self-center">Helper's Details</legend>
            <!-- close btn -->
            <img @click="closePopup" src="https://www.nicepng.com/png/full/52-521935_close-button-png.png" class="self-center size-7" alt="">
          </div>
  
          <!-- popup body -->
          <div class="p-8">
  
          <!-- personal info div -->
          <div class="drop-shadow-lg">
            <!-- header -->
            <div class="p-3 text-xl rounded-tl-lg rounded-tr-lg bg-slate-200">
                <h6>Personal Information</h6>
            </div>
            <!-- body -->
            <div class="p-3 rounded-bl-lg rounded-br-lg bg-slate-100">
              <div class="row">
                <div class="mb-3 col">
                  <label for="disabledTextInput1" class="form-label">First Name:</label>
                  <!-- first_name and others is from the database. Hindi sya tinawag directly dito sa script code sa baba -->
                  <input
                    type="text"
                    id="disabledTextInput1"
                    class="form-control"
                    disabled
                    :value="userDetails.first_name"
                  />
                </div>
  
                <div class="mb-3 col">
                  <label for="disabledTextInput2" class="form-label">Middle Name:</label>
                  <input
                    type="text"
                    id="disabledTextInput2"
                    class="form-control"
                    disabled
                    :value="userDetails.middle_name"
                  />
                </div>
                <div class="mb-3 col">
                  <label for="disabledTextInput3" class="form-label">Last Name</label>
                  <input
                    type="text"
                    id="disabledTextInput3"
                    class="form-control"
                    disabled
                    :value="userDetails.last_name"
                  />
                </div>
              </div>
  
              <div class="row">
                <div class="mb-3 col">
                  <label for="disabledTextInput4" class="form-label">Date of Birth</label>
                  <input
                    type="text"
                    id="disabledTextInput4"
                    class="form-control"
                    disabled
                    :value="userDetails.birth_date"
                  />
                </div>
                <div class="mb-3 col">
                  <label for="disabledTextInput5" class="form-label">Age</label>
                  <input
                    type="text"
                    id="disabledTextInput5"
                    class="form-control"
                    disabled
                    :value="userDetails.age"
                  />
                </div>
                <div class="mb-3 col">
                  <label for="disabledTextInput6" class="form-label">Gender</label>
                  <input
                    type="text"
                    id="disabledTextInput6"
                    class="form-control"
                    disabled
                    :value="userDetails.gender"
                  />
                </div>
              </div>
  
              <div class="row">
                <div class="mb-3 col">
                  <label for="disabledTextInput7" class="form-label"
                    >Marital Status</label
                  >
                  <input
                    type="text"
                    id="disabledTextInput7"
                    class="form-control"
                    disabled
                    :value="userDetails.marital_status"
                  />
                </div>
                <div class="mb-3 col">
                  <label for="disabledTextInput8" class="form-label">User Type</label>
                  <input
                    type="text"
                    id="disabledTextInput8"
                    class="form-control"
                    disabled
                    :value="userDetails.user_type"
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
              <h6>Contact Information</h6>
            </div>
  
            <div class="p-3 rounded-bl-lg rounded-br-lg bg-slate-100">
              <div class="row">
              <div class="mb-3 col">
                <label for="disabledTextInput9" class="form-label"
                  >Phone Number 1</label
                >
                <input
                  type="text"
                  id="disabledTextInput9"
                  class="form-control"
                  disabled
                  :value="userDetails.phone_number1"
                />
              </div>
              <div class="mb-3 col">
                <label for="disabledTextInput10" class="form-label"
                  >Phone Number 2</label
                >
                <input
                  type="text"
                  id="disabledTextInput10"
                  class="form-control"
                  disabled
                  :value="userDetails.phone_number2"
                />
              </div>
              <div class="mb-3 col">
                <label for="disabledTextInput11" class="form-label">Email</label>
                <input
                  type="text"
                  id="disabledTextInput11"
                  class="form-control"
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
              <div class="row">
                <div class="mb-3 col">
                  <label for="disabledTextInput12" class="form-label"
                    > House No.</label
                  >
  
                  <input
                    type="text"
                    id="disabledTextInput12"
                    class="form-control"
                    disabled
                    :value="userDetails.per_house_number"
                  />
                </div>
                <div class="mb-3 col">
                  <label for="disabledTextInput13" class="form-label"
                    > Street</label
                  >
                  <input
                    type="text"
                    id="disabledTextInput13"
                    class="form-control"
                    disabled
                    :value="userDetails.per_street"
                  />
                </div>
                <div class="mb-3 col">
                  <label for="disabledTextInput14" class="form-label"
                    > Barangay</label
                  >
                  <input
                    type="text"
                    id="disabledTextInput14"
                    class="form-control"
                    disabled
                    :value="userDetails.per_barangay"
                  />
                </div>
              </div>
  
              <div class="row">
                <div class="mb-3 col">
                  <label for="disabledTextInput15" class="form-label"
                    > City.</label
                  >
                  <input
                    type="text"
                    id="disabledTextInput15"
                    class="form-control"
                    disabled
                    :value="userDetails.per_city"
                  />
                </div>
                <div class="mb-3 col">
                  <label for="disabledTextInput16" class="form-label"
                    > Province</label
                  >
                  <input
                    type="text"
                    id="disabledTextInput16"
                    class="form-control"
                    disabled
                    :value="userDetails.per_province"
                  />
                </div>
                <div class="mb-3 col">
                  <label for="disabledTextInput17" class="form-label"
                    > Region</label
                  >
                  <input
                    type="text"
                    id="disabledTextInput17"
                    class="form-control"
                    disabled
                    :value="userDetails.per_region"
                  />
                </div>
              </div>
  
              <div class="row">
                <div class="mb-3 col">
                  <label for="disabledTextInput18" class="form-label"
                    > Country.</label
                  >
                  <input
                    type="text"
                    id="disabledTextInput18"
                    class="form-control"
                    disabled
                    :value="userDetails.per_country"
                  />
                </div>
                <div class="mb-3 col">
                  <label for="disabledTextInput19" class="form-label"
                    > Zip Code</label
                  >
                  <input
                    type="text"
                    id="disabledTextInput19"
                    class="form-control"
                    disabled
                    :value="userDetails.per_zip_code"
                  />
                </div>
              </div>
  
            <div class="mb-2 text-xl">
              <h6>Current Address</h6>
            </div>
  
              <div class="row">
                <div class="mb-3 col">
                  <label for="disabledTextInput20" class="form-label"
                    >House No.</label
                  >
                  <input
                    type="text"
                    id="disabledTextInput20"
                    class="form-control"
                    disabled
                    :value="userDetails.cur_house_number"
                  />
                </div>
                <div class="mb-3 col">
                  <label for="disabledTextInput21" class="form-label"
                    >Street</label
                  >
                  <input
                    type="text"
                    id="disabledTextInput21"
                    class="form-control"
                    disabled
                    :value="userDetails.cur_street"
                  />
                </div>
                <div class="mb-3 col">
                  <label for="disabledTextInput22" class="form-label"
                    >Barangay</label
                  >
                  <input
                    type="text"
                    id="disabledTextInput22"
                    class="form-control"
                    disabled
                    :value="userDetails.cur_barangay"
                  />
                </div>
              </div>
  
              <div class="row">
                <div class="mb-3 col">
                  <label for="disabledTextInput23" class="form-label"
                    >City.</label
                  >
                  <input
                    type="text"
                    id="disabledTextInput23"
                    class="form-control"
                    disabled
                    :value="userDetails.cur_city"
                  />
                </div>
                <div class="mb-3 col">
                  <label for="disabledTextInput24" class="form-label"
                    >Province</label
                  >
                  <input
                    type="text"
                    id="disabledTextInput24"
                    class="form-control"
                    disabled
                    :value="userDetails.cur_province"
                  />
                </div>
                <div class="mb-3 col">
                  <label for="disabledTextInput25" class="form-label"
                    >Region</label
                  >
                  <input
                    type="text"
                    id="disabledTextInput25"
                    class="form-control"
                    disabled
                    :value="userDetails.cur_region"
                  />
                </div>
              </div>
  
              <div class="row">
                <div class="mb-3 col">
                  <label for="disabledTextInput26" class="form-label"
                    >Country.</label
                  >
                  <input
                    type="text"
                    id="disabledTextInput26"
                    class="form-control"
                    disabled
                    :value="userDetails.cur_country"
                  />
                </div>
                <div class="mb-3 col">
                  <label for="disabledTextInput27" class="form-label"
                    >Zip Code</label
                  >
                  <input
                    type="text"
                    id="disabledTextInput27"
                    class="form-control"
                    disabled
                    :value="userDetails.cur_zip_code"
                  />
                </div>
              </div>
  
            </div>
          </div>
          <!-- emergency contact div -->
          <div class="drop-shadow-lg"> 
            <div class="p-3 text-xl rounded-tl-lg rounded-tr-lg bg-slate-200">
              <h6>Emergency Contact Information</h6>
            </div>
            <div class="p-3 rounded-bl-lg rounded-br-lg bg-slate-100">
              <div class="row">
                <div class="mb-3 col">
                  <label for="disabledTextInput28" class="form-label">Full Name</label>
                  <input
                    type="text"
                    id="disabledTextInput28"
                    class="form-control"
                    disabled
                    :value="userDetails.full_name"
                  />
                </div>
                <div class="mb-3 col">
                  <label for="disabledTextInput29" class="form-label">Relationship</label>
                  <input
                    type="text"
                    id="disabledTextInput29"
                    class="form-control"
                    disabled
                    :value="userDetails.relationship"
                  />
                </div>
                <div class="mb-3 col">
                  <label for="disabledTextInput30" class="form-label"
                    >Relationship Phone Number</label
                  >
                  <input
                    type="text"
                    id="disabledTextInput30"
                    class="form-control"
                    disabled
                    :value="userDetails.rel_phone_number"
                  />
                </div>
              </div>
              <div class="row">
                <div class="mb-3 col">
                  <label for="disabledTextInput31" class="form-label">Relationship Email</label>
                  <input
                    type="text"
                    id="disabledTextInput31"
                    class="form-control"
                    disabled
                    :value="userDetails.rel_email"
                  />
                </div>
                <div class="mb-3 col">
                  <label for="disabledTextInput32" class="form-label">Address</label>
                  <input
                    type="text"
                    id="disabledTextInput32"
                    class="form-control"
                    disabled
                    :value="userDetails.address"
                  />
                </div>
              </div>
            </div>
          </div>
    <!-- <br> -->
          <!-- docu div -->
          <div class="drop-shadow-lg">
              <div class="p-3 text-xl rounded-tl-lg rounded-tr-lg bg-slate-200">
                <h6>Documents</h6>
              </div>
  
              <!-- body -->
              <div class="p-3 rounded-bl-lg rounded-br-lg bg-slate-100">
                <div class="mb-3 col">
                  <label for="disabledTextInput12" class="form-label">Valid ID:</label>
                  <img src="" alt="uploaded file">
                </div>
                <div class="mb-3 col">
                  <label for="disabledTextInput12" class="form-label">NBI Clearance:</label>
                  <img src="" alt="uploaded file">
                </div>
                <div class="mb-3 col">
                  <label for="disabledTextInput12" class="form-label">Other Document:</label>
                  <img src="" alt="uploaded file">
                </div>
              </div>
          </div>
          <!-- buttons div -->
          <div class="flex justify-end">
              <!-- triggers the approveUser method -->
              <button class="w-40 px-5 py-2 m-3 font-semibold text-white rounded-full shadow-md btn btn-primary hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-75 " @click="approveUser(userDetails)">
                Approve
              </button>
              <button class="w-40 px-5 py-2 m-3 font-semibold text-white bg-red-600 rounded-full shadow-md hover:bg-red-700 focus:outline-none` focus:ring focus:ring-red-400 focus:ring-opacity-75 " @click="denyUser(userDetails)">Deny</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  //Bawal tanggalin ung script tag para makita pa rin display kasi part sya ng default code
  import axios from "redaxios";
  
  export default { //provides a more modular and organized way to define multiple data properties within a component
    name: 'UserAccount',
    data() {
        return {
          userDetails: {},
            result: {
              account_status: "", //Eto lang nakalagay kasi eto lang naman ung inupdate or current need tawagin sa database
              email: "",
              password: "",
              token: "",
            },
            showDropdown: false,
          
        };
    },
  created() { //fetches data from the API when the component is created
    this.UserAccountLoad();
  },
  mounted() {
    console.log("mounted() called.......");
  },
  
  methods: { //responsible for making the API request to fetch user data.
    UserAccountLoad() {
      var page = "http://127.0.0.1:8000/api/user";
      axios.get(page).then(({ data }) => {
        console.log(data);
        this.result = data;
      });
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
          return "Active";
        default:
          return accountStatus; // Return status as is if not matched | lalabas lng ung number
      }
    },
    toggle() {
      this.showDropdown = !this.showDropdown;
    },
    closePopup(){
      document.getElementById("helperDetailsPop").classList.add('collapse');
    },
    // new function popup vieww off criver details
    viewDriverDetails(userID){
      axios
        .get(`http://127.0.0.1:8000/api/user/${userID}`)
        .then((response) => {
          this.userDetails = response.data;
          document.getElementById("helperDetailsPop").classList.remove("collapse")
        })
        .catch((error) => {
          console.error("Error fetching user details:", error);
        });
    },
    approveUser(userDetails) {
    // Make a POST request to UserController's endpoint to generate the random password
  //   axios
  //     .post(`http://127.0.0.1:8000/api/user/generate-random-password/${userDetails.id}`)
  //     .then((response) => {
  //       console.log("Password generated successfully:", response.data);
  
  //       // Update the account_status to 1
  //       userDetails.account_status = 1;
  
  //       // Store the unhashed password
  //       const unhashedPassword = response.data.password;
  
  //       // Make a PUT request to update the user details including the account_status and hashed password
  //       axios
  //         .put(`http://127.0.0.1:8000/api/user/approve/${userDetails.id}`, userDetails)
  //         .then((response) => {
  //           console.log("User approved successfully:", response.data);
  //           // Show alert that the account has been approved
  //           alert("Account has been approved!");
  //           this.closePopup();
  //           // Send approval email with unhashed password
  //           axios
  //             .post(
  //               `http://127.0.0.1:8000/api/user/send-account-approved-email`,
  //               { 
  //                 email: userDetails.email, 
  //                 password: unhashedPassword
  //               }
  //             )
  //             .then((emailResponse) => {
  //               console.log(
  //                 "Approval email sent successfully:",
  //                 emailResponse.data
  //               );
  //             })
  //             .catch((emailError) => {
  //               console.error("Error sending approval email:", emailError);
  //             });
  
  //           // Fetch updated user details after approval
  //           // this.fetchUserDetails(); replace
  //           this.UserAccountLoad();
  //         })
  //         .catch((error) => {
  //           console.error("Error approving user:", error);
  //         });
  //     })
  //     .catch((error) => {
  //       console.error("Error generating random password:", error);
  //     });
    },
  
    denyUser(userDetails) {
      userDetails.account_status = 2;
  
      // Generate a unique token
      const token = Math.random().toString(36); // Generates a random alphanumeric token
  
      // Set the generated token to userDetails.token
      userDetails.token = token;
  
      axios
        .put(`http://127.0.0.1:8000/api/user/deny/${userDetails.id}`, userDetails)
        .then((response) => {
          console.log("User denied successfully:", response.data);
          alert("Account has been denied!");
          this.closePopup();
          // Send denial email with the token
          axios
            .post(`http://127.0.0.1:8000/api/user/send-account-denied-email`, {
              email: userDetails.email,
              token: token, // Pass the token to the backend
            })
            .then((emailResponse) => {
              console.log(
                "Denial email sent successfully:",
                emailResponse.data
              );
            })
            .catch((emailError) => {
              console.error("Error sending denial email:", emailError);
            });
  
          // Fetch updated user details after denial
          // this.fetchUserDetails();
          this.UserAccountLoad();
        })
        .catch((error) => {
          console.error("Error denying user:", error);
        });
    },
  },
  };
  </script>
  
  <style scoped>
  .status-pending {
  color: yellow;
  }
  .status-onboarding {
  color: blue;
  }
  .status-denied {
  color: red;
  }
  .status-active {
  color: green;
  }
  </style>
  