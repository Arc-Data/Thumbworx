

<template>
  <div class="flex flex-col w-full">
  <Header />
    <div class="w-full">
      <div class="sm:-mx-6 lg:-mx-8 flex justify-center">
        <div class="
        text-black
         inline-block py-2 sm:px-6 lg:px-8 w-11/12 mx-6 lg:w-auto h-fit
        my-10 rounded-2xl border-solid border-slate-500 drop-shadow-md bg-blue-50">
          <div class="overflow-hidden ">
          <!-- tablecontainer -->
                    <div class="block">
                      <!-- searchbar part -->
                      <div class=" p-2 flex flex-wrap justify-between">
                        <form class="w-1/2">   
                            <div class="relative">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                                <input type="search" id="default-search" class="block w-full p-2 ps-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  " placeholder="Search" required />
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
                            User type filter
                              <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                              </svg>
                            </button>
                        </div>
                      </div>
                      
                      <div v-if="showDropdown" class=" absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                        <div class="py-1" role="none">
                          <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Type 1</a>
                          <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Type 2</a>
                          <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Type 3</a>
                          <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">--Clear--</a>
                        </div>
                      </div>
                    </div>
                  </div>
      
        
          <div class="px-4">
            <br>
            <h2 class="
          
             text-lg
            md:text-xl
            lg:text-xl
            xl:text-xl ml-1 font-bold tracking-wide"><i class="icon pi pi-folder-open"></i> Client Account Records</h2>
            <br>

            <div class="overflow-hidden overflow-x-auto">
              <table class="min-w-full text-center text-sm font-light text-surface ">
              <thead class="border-b border-neutral-200 font-medium ">
                <tr>
                  <th scope="col px-6 py-4">Client ID</th>
                  <th scope="col px-6 py-4">Name</th>
                  <th scope="col px-6 py-4">Email</th>
                  <th scope="col px-6 py-4">Mobile Number</th>
                  <th scope="col px-6 py-4">User type</th>
                  <th scope="col px-6 py-4">Status</th>
                  <th scope="col px-6 py-4">Action</th>
                </tr>
              </thead>
              <tbody>
        
                <tr v-for="user in result" v-bind:key="user.id" 
                  class=" border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-blue-100 ">
                  <td class="whitespace-nowrap px-6 py-4 font-medium">{{ user.id }}</td>
                  <td class="whitespace-nowrap px-6 py-4">{{ user.first_name }} {{ user.last_name }}</td>
                  <td class="whitespace-nowrap px-6 py-4">{{ user.email}}</td>
                  <td class="whitespace-nowrap px-6 py-4">{{ user.phone_number1 }}</td>
                  <td class="whitespace-nowrap px-6 py-4">User type</td>
                  <td  class="whitespace-nowrap px-6 py-4">
                      <div :class="getStatusClass(user.account_status)" class="p-1 text-center rounded-md border-2">{{ getStatusDisplay(user.account_status) }}</div>
                    </td>
                  <td class="whitespace-nowrap px-6 py-4"><button class="btn btn-primary" @click="viewClientDetails(user.id)"><span class="material-icons">visibility</span></button> </td>
              </tr>
              </tbody>
            </table>
            </div>
           
    
    
    <!-- page turner button -->
    <div class="w-full flex justify-between p-4 border-t border-blue-gray-50">
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

    <div id="ClientDetailsPop" class="collapse  w-screen h-screen fixed top-0 left-0 z-50 bg-black bg-opacity-50 flex justify-center pt-10">
    <!-- pop up content div -->
    <div class="rounded-lg drop-shadow-lg border-1 border-slate-400 bg-white max-w-screen-md w-11/12 h-fit ">  
       <!-- popup header --> 
                          <div class="
                          
                          pr-2 pl-4 text-white bg-blue-600 rounded-tl-lg rounded-tr-lg flex items-center font-bold"> 
                            <legend class="self-center">Client Details</legend>
                            <!-- close btn -->
                            <span @click="closePopup" class="material-icons text-slate-50 hover:cursor-pointer">close</span>
                          </div>

          <!-- popup body -->
        
          <div class="
          text-black
           px-4 py-2 max-h-[600px] overflow-hidden overflow-y-auto">

                              <!-- personal info div -->
                              <div class="drop-shadow-lg">
                                <!-- header -->
                                <div class=" rounded-tl-lg rounded-tr-lg p-3 text-xl bg-slate-200">
                                    <h6>Personal Information</h6>
                                </div>
                                <!-- body -->
                                <div class=" rounded-bl-lg rounded-br-lg p-3 bg-slate-100">
                                   <div class="flex flex-wrap justify-between">
                                     <div class="mb-3 mx-2 w-full lg:w-48">
                                      <label for="disabledTextInput1" class="form-label">First Name:</label>
                                      <!-- first_name and others is from the database. Hindi sya tinawag directly dito sa script code sa baba -->
                                      <input
                                        type="text"
                                        id="disabledTextInput1"
                                        class="  block w-full p-2 rounded-md border border-slate-300"
                                        disabled
                                        :value="userDetails.first_name"
                                      />
                                    </div>

                                     <div class="mb-3 mx-2 w-full lg:w-48">
                                      <label for="disabledTextInput2" class="form-label">Middle Name:</label>
                                      <input
                                        type="text"
                                        id="disabledTextInput2"
                                        class="  block w-full p-2 rounded-md border border-slate-300"
                                        disabled
                                        :value="userDetails.middle_name"
                                      />
                                    </div>
                                     <div class="mb-3 mx-2 w-full lg:w-48">
                                      <label for="disabledTextInput3" class="form-label">Last Name</label>
                                      <input
                                        type="text"
                                        id="disabledTextInput3"
                                        class="  block w-full p-2 rounded-md border border-slate-300"
                                        disabled
                                        :value="userDetails.last_name"
                                      />
                                    </div>
                                  </div>

                                   <div class="flex flex-wrap justify-between">
                                     <div class="mb-3 mx-2 w-full lg:w-48">
                                      <label for="disabledTextInput4" class="form-label">Date of Birth</label>
                                      <input
                                        type="text"
                                        id="disabledTextInput4"
                                        class="  block w-full p-2 rounded-md border border-slate-300"
                                        disabled
                                        :value="userDetails.birth_date"
                                      />
                                    </div>
                                     <div class="mb-3 mx-2 w-full lg:w-48">
                                      <label for="disabledTextInput5" class="form-label">Age</label>
                                      <input
                                        type="text"
                                        id="disabledTextInput5"
                                        class="  block w-full p-2 rounded-md border border-slate-300"
                                        disabled
                                        :value="userDetails.age"
                                      />
                                    </div>
                                     <div class="mb-3 mx-2 w-full lg:w-48">
                                      <label for="disabledTextInput6" class="form-label">Gender</label>
                                      <input
                                        type="text"
                                        id="disabledTextInput6"
                                        class="  block w-full p-2 rounded-md border border-slate-300"
                                        disabled
                                        :value="userDetails.gender"
                                      />
                                    </div>
                                  </div>

                                   <div class="flex flex-wrap justify-between">
                                     <div class="mb-3 mx-2 w-full lg:w-48">
                                      <label for="disabledTextInput7" class="form-label"
                                        >Marital Status</label
                                      >
                                      <input
                                        type="text"
                                        id="disabledTextInput7"
                                        class="  block w-full p-2 rounded-md border border-slate-300"
                                        disabled
                                        :value="userDetails.marital_status"
                                      />
                                    </div>

                                    <div class="col"></div>
                                    <!-- Empty column for alignment -->
                                  </div>
                                  
                                </div>
                              </div>
                              <!-- company info div -->
                              <br>
                              <div class="drop-shadow-lg">
                                <div class=" rounded-tl-lg rounded-tr-lg p-3 text-xl bg-slate-200">
                                  <h6>Company Information</h6>
                                </div>

                                <div class=" rounded-bl-lg rounded-br-lg p-3 bg-slate-100">
                                   <div class="flex flex-wrap justify-between">
                                                 <div class="mb-3 mx-2 w-full lg:w-48">
                                                    <label for="disabledTextInput9" class="form-label"
                                                    >Client ID</label
                                                    >
                                                    <input
                                                    type="text"
                                                    id="disabledTextInput9"
                                                    class="  block w-full p-2 rounded-md border border-slate-300"
                                                   disabled
                                                    :value="userDetails.phone_number1"
                                                    />
                                                </div>
                                                 <div class="mb-3 mx-2 w-full lg:w-48">
                                                    <label for="disabledTextInput10" class="form-label"
                                                    >Company Name</label
                                                    >
                                                    <input
                                                    type="text"
                                                    id="disabledTextInput10"
                                                    disabled
                                                    class="  block w-full p-2 rounded-md border border-slate-300"
                                                    :value="userDetails.phone_number2"
                                                    />
                                                </div>
                                                <div class="mb-3 mx-2 w-full lg:w-48">
                                                    <label for="disabledTextInput11" class="form-label">Email</label>
                                                    <input
                                                    type="text"
                                                    id="disabledTextInput11"
                                                    class="  block w-full p-2 rounded-md border border-slate-300"
                                                    disabled
                                                    :value="userDetails.email"
                                                    />
                                                </div>
                                              
                                  </div>
                                   <div class="flex flex-wrap justify-between">
                                              
                                                 <div class="mb-3 mx-2 w-full lg:w-48">
                                                    <label for="disabledTextInput10" class="form-label"
                                                    >Industry Type</label
                                                    >
                                                    <input
                                                    type="text"
                                                    id="disabledTextInput10"
                                                    class="  block w-full p-2 rounded-md border border-slate-300"
                                                    disabled
                                                    :value="userDetails.phone_number2"
                                                    />
                                                </div>
                                                <div class="mb-3 mx-2 w-full lg:w-48">
                                                    <label for="disabledTextInput9" class="form-label"
                                                    >Company Description</label
                                                    >
                                                    <input
                                                    type="text"
                                                    id="disabledTextInput9"
                                                    class="  block w-full p-2 rounded-md border border-slate-300"
                                                    disabled
                                                    :value="userDetails.phone_number1"
                                                    />
                                                </div>

                                                <div class="mb-3 mx-2 w-full lg:w-48">
                                                    <label for="disabledTextInput9" class="form-label"
                                                    >Employee Size</label
                                                    >
                                                    <input
                                                    type="text"
                                                    id="disabledTextInput9"
                                                    class="  block w-full p-2 rounded-md border border-slate-300"
                                                    disabled
                                                    :value="userDetails.phone_number1"
                                                    />
                                                </div>
                                  </div>
                                   <div class="flex flex-wrap justify-between">
                                                 <div class="mb-3 mx-2 w-full lg:w-48">
                                                    <label for="disabledTextInput10" class="form-label"
                                                    >Daily Trucking</label
                                                    >
                                                    <input
                                                    type="text"
                                                    id="disabledTextInput10"
                                                    class="  block w-full p-2 rounded-md border border-slate-300"
                                                    disabled
                                                    :value="userDetails.phone_number2"
                                                    />
                                                  
                                                </div>
                                                 <div class="mb-3 mx-2 w-full lg:w-48">
                                                    <label for="disabledTextInput10" class="form-label"
                                                    >Trucking Budget</label
                                                    >
                                                    <input
                                                    type="text"
                                                    id="disabledTextInput10"
                                                    class="  block w-full p-2 rounded-md border border-slate-300"
                                                    disabled
                                                    :value="userDetails.phone_number2"
                                                    />
                                                </div>
                                                <div class="mb-3 mx-2 w-full lg:w-48">
                                                    <label for="disabledTextInput10" class="form-label"
                                                    >Trucking Size</label
                                                    >
                                                    <input
                                                    type="text"
                                                    id="disabledTextInput10"
                                                    class="  block w-full p-2 rounded-md border border-slate-300"
                                                    disabled
                                                    :value="userDetails.phone_number2"
                                                    />
                                                  
                                                </div>
                                  </div>

                                   <div class="flex flex-wrap justify-between">
                                                
                                                 <div class="mb-3 mx-2 w-full lg:w-48">
                                                    <label for="disabledTextInput10" class="form-label"
                                                    >Trucking Vehicle</label
                                                    >
                                                    <input
                                                    type="text"
                                                    id="disabledTextInput10"
                                                    class="  block w-full p-2 rounded-md border border-slate-300"
                                                    disabled
                                                    :value="userDetails.phone_number2"
                                                    />
                                                </div>
                                  </div>
                                </div>
                              </div>
                              <br>
                              <!-- address info div -->
                              <div class="drop-shadow-lg">
                                <div class=" rounded-tl-lg rounded-tr-lg p-3 text-xl bg-slate-200">
                                  <h6>Address</h6>
                                </div>

                                <div class=" rounded-bl-lg rounded-br-lg p-3 bg-slate-100">
                                  
                                <div class="text-xl mb-2">
                                    <h6>Permanent Address</h6>
                                </div>
                                   <div class="flex flex-wrap justify-between">
                                     <div class="mb-3 mx-2 w-full lg:w-48">
                                      <label for="disabledTextInput12" class="form-label"
                                        > House No.</label
                                      >

                                      <input
                                        type="text"
                                        id="disabledTextInput12"
                                        class="  block w-full p-2 rounded-md border border-slate-300"
                                        disabled
                                        :value="userDetails.permanent_address?.per_house_number"
                                      />
                                    </div>
                                     <div class="mb-3 mx-2 w-full lg:w-48">
                                      <label for="disabledTextInput13" class="form-label"
                                        > Street</label
                                      >
                                      <input
                                        type="text"
                                        id="disabledTextInput13"
                                        class="  block w-full p-2 rounded-md border border-slate-300"
                                        disabled
                                        :value="userDetails.permanent_address?.per_street"
                                      />
                                    </div>
                                     <div class="mb-3 mx-2 w-full lg:w-48">
                                      <label for="disabledTextInput14" class="form-label"
                                        > Barangay</label
                                      >
                                      <input
                                        type="text"
                                        id="disabledTextInput14"
                                        class="  block w-full p-2 rounded-md border border-slate-300"
                                        disabled
                                        :value="userDetails.permanent_address?.per_barangay"
                                      />
                                    </div>
                                  </div>

                                   <div class="flex flex-wrap justify-between">
                                     <div class="mb-3 mx-2 w-full lg:w-48">
                                      <label for="disabledTextInput15" class="form-label"
                                        > City.</label
                                      >
                                      <input
                                        type="text"
                                        id="disabledTextInput15"
                                        class="  block w-full p-2 rounded-md border border-slate-300"
                                        disabled
                                        :value="userDetails.permanent_address?.per_city"
                                      />
                                    </div>
                                     <div class="mb-3 mx-2 w-full lg:w-48">
                                      <label for="disabledTextInput16" class="form-label"
                                        > Province</label
                                      >
                                      <input
                                        type="text"
                                        id="disabledTextInput16"
                                        class="  block w-full p-2 rounded-md border border-slate-300"
                                        disabled
                                        :value="userDetails.permanent_address?.per_province"
                                      />
                                    </div>
                                     <div class="mb-3 mx-2 w-full lg:w-48">
                                      <label for="disabledTextInput17" class="form-label"
                                        > Region</label
                                      >
                                      <input
                                        type="text"
                                        id="disabledTextInput17"
                                        class="  block w-full p-2 rounded-md border border-slate-300"
                                        disabled
                                        :value="userDetails.permanent_address?.per_region"
                                      />
                                    </div>
                                  </div>

                                   <div class="flex flex-wrap justify-between">
                                     <div class="mb-3 mx-2 w-full lg:w-48">
                                      <label for="disabledTextInput18" class="form-label"
                                        > Country.</label
                                      >
                                      <input
                                        type="text"
                                        id="disabledTextInput18"
                                        class="  block w-full p-2 rounded-md border border-slate-300"
                                        disabled
                                        :value="userDetails.permanent_address?.per_country"
                                      />
                                    </div>
                                     <div class="mb-3 mx-2 w-full lg:w-48">
                                      <label for="disabledTextInput19" class="form-label"
                                        > Zip Code</label
                                      >
                                      <input
                                        type="text"
                                        id="disabledTextInput19"
                                        class="  block w-full p-2 rounded-md border border-slate-300"
                                        disabled
                                        :value="userDetails.permanent_address?.per_zip_code"
                                      />
                                    </div>

                                    <div class="col"></div>
                                  </div>

                                <div class="text-xl mb-2">
                                  <h6>Current Address</h6>
                                </div>

                                   <div class="flex flex-wrap justify-between">
                                     <div class="mb-3 mx-2 w-full lg:w-48">
                                      <label for="disabledTextInput20" class="form-label"
                                        > House No.</label
                                      >
                                      <input
                                        type="text"
                                        id="disabledTextInput20"
                                        class="  block w-full p-2 rounded-md border border-slate-300"
                                        disabled
                                        :value="userDetails.current_address?.cur_house_number"
                                      />
                                    </div>
                                     <div class="mb-3 mx-2 w-full lg:w-48">
                                      <label for="disabledTextInput21" class="form-label"
                                        > Street</label
                                      >
                                      <input
                                        type="text"
                                        id="disabledTextInput21"
                                        class="  block w-full p-2 rounded-md border border-slate-300"
                                        disabled
                                        :value="userDetails.current_address?.cur_street"
                                      />
                                    </div>
                                     <div class="mb-3 mx-2 w-full lg:w-48">
                                      <label for="disabledTextInput22" class="form-label"
                                        > Barangay</label
                                      >
                                      <input
                                        type="text"
                                        id="disabledTextInput22"
                                        class="  block w-full p-2 rounded-md border border-slate-300"
                                        disabled
                                        :value="userDetails.current_address?.cur_barangay"
                                      />
                                    </div>
                                  </div>

                                   <div class="flex flex-wrap justify-between">
                                     <div class="mb-3 mx-2 w-full lg:w-48">
                                      <label for="disabledTextInput23" class="form-label"
                                        > City.</label
                                      >
                                      <input
                                        type="text"
                                        id="disabledTextInput23"
                                        class="  block w-full p-2 rounded-md border border-slate-300"
                                        disabled
                                        :value="userDetails.current_address?.cur_city"
                                      />
                                    </div>
                                     <div class="mb-3 mx-2 w-full lg:w-48">
                                      <label for="disabledTextInput24" class="form-label"
                                        > Province</label
                                      >
                                      <input
                                        type="text"
                                        id="disabledTextInput24"
                                        class="  block w-full p-2 rounded-md border border-slate-300"
                                        disabled
                                        :value="userDetails.current_address?.cur_province"
                                      />
                                    </div>
                                     <div class="mb-3 mx-2 w-full lg:w-48">
                                      <label for="disabledTextInput25" class="form-label"
                                        > Region</label
                                      >
                                      <input
                                        type="text"
                                        id="disabledTextInput25"
                                        class="  block w-full p-2 rounded-md border border-slate-300"
                                        disabled
                                        :value="userDetails.current_address?.cur_region"
                                      />
                                    </div>
                                  </div>

                                   <div class="flex flex-wrap justify-between">
                                     <div class="mb-3 mx-2 w-full lg:w-48">
                                      <label for="disabledTextInput26" class="form-label"
                                        > Country.</label
                                      >
                                      <input
                                        type="text"
                                        id="disabledTextInput26"
                                        class="  block w-full p-2 rounded-md border border-slate-300"
                                        disabled
                                        :value="userDetails.current_address?.cur_country"
                                      />
                                    </div>
                                     <div class="mb-3 mx-2 w-full lg:w-48">
                                      <label for="disabledTextInput27" class="form-label"
                                        > Zip Code</label
                                      >
                                      <input
                                        type="text"
                                        id="disabledTextInput27"
                                        class="  block w-full p-2 rounded-md border border-slate-300"
                                        disabled
                                        :value="userDetails.current_address?.cur_zip_code"
                                      />
                                    </div>
                                      <div class="col"></div>
                                  </div>

                                </div>
                              </div>
                              <br>
                              <!-- companycontact div -->
                              <div class="drop-shadow-lg"> 
                                <div class=" rounded-tl-lg rounded-tr-lg p-3 text-xl bg-slate-200">
                                  <h6>Company Contact Information</h6>
                                </div>
                                <div class=" rounded-bl-lg rounded-br-lg p-3 bg-slate-100">
                                   <div class="flex flex-wrap justify-between">
                                     <div class="mb-3 mx-2 w-full lg:w-48">
                                      <label for="disabledTextInput28" class="form-label">Mobile Number 1</label>
                                      <input
                                        type="text"
                                        id="disabledTextInput28"
                                        class="  block w-full p-2 rounded-md border border-slate-300"
                                        disabled
                                        :value="userDetails.full_name"
                                      />
                                    </div>
                                     <div class="mb-3 mx-2 w-full lg:w-48">
                                      <label for="disabledTextInput29" class="form-label">Mobile Number 2</label>
                                      <input
                                        type="text"
                                        id="disabledTextInput29"
                                        class="  block w-full p-2 rounded-md border border-slate-300"
                                        disabled
                                        :value="userDetails.relationship"
                                      />
                                    </div>
                                     <div class="mb-3 mx-2 w-full lg:w-48">
                                      <label for="disabledTextInput30" class="form-label"
                                        >Telephone Number</label
                                      >
                                      <input
                                        type="text"
                                        id="disabledTextInput30"
                                        class="  block w-full p-2 rounded-md border border-slate-300"
                                        disabled
                                        :value="userDetails.rel_phone_number"
                                      />
                                    </div>
                                  </div>

                                   <div class="flex flex-wrap justify-between">
                                     <div class="mb-3 mx-2 w-full lg:w-48">
                                      <label for="disabledTextInput31" class="form-label"
                                        >Email</label
                                      >
                                      <input
                                        type="text"
                                        id="disabledTextInput31"
                                        class="  block w-full p-2 rounded-md border border-slate-300"
                                        disabled
                                        :value="userDetails.rel_email"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <br>
                              <!-- docu div -->
                              <div class="drop-shadow-lg">
                                  <div class=" rounded-tl-lg rounded-tr-lg p-3 text-xl bg-slate-200">
                                    <h6>Documents</h6>
                                  </div>

                                  <!-- body -->
                                  <div class=" rounded-bl-lg rounded-br-lg p-3 bg-slate-100">
                                     <div class="mb-3 mx-2 w-full lg:w-48">
                                      <label for="disabledTextInput12" class="form-label"
                                        >Business Permit:</label
                                      >

                                      <img src="" alt="uploaded file">
                                    </div>

                                     <div class="mb-3 mx-2 w-full lg:w-48">
                                      <label for="disabledTextInput12" class="form-label"
                                        >DTI/SEC:</label
                                      >

                                      <img src="" alt="uploaded file">
                                    </div>

                                     <div class="mb-3 mx-2 w-full lg:w-48">
                                      <label for="disabledTextInput12" class="form-label"
                                        >Other Document:</label
                                      >

                                      <img src="" alt="uploaded file">
                                    </div>



                                  </div>
                              </div>
                              <br>
                              <!-- buttons div -->
                              <div class="flex justify-center">
                                  <!-- triggers the approveUser method -->
                                  <button class="btn btn-primary m-3 w-40
                                  py-2 px-5 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-75
                                  " @click="approveUser(userDetails)">
                                    Approve
                                  </button>
                                  <button class="m-3 w-40 bg-red-600
                                  py-2 px-5 text-white font-semibold rounded-full shadow-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-400 focus:ring-opacity-75
                                  " @click="denyUser(userDetails)">Deny</button>
                              </div>

                  </div>
         
     </div>
  </div>
</div>
</template>


<script>
//Bawal tanggalin ung script tag para makita pa rin display kasi part sya ng default code
import axios from "redaxios";
import { useAdminStore } from '../../../stores/adminStore';
import Header from '../../../components/Header.vue';

export default { //provides a more modular and organized way to define multiple data properties within a component
  name: 'UserAccount',
  components: {
      Header
    },
  data() {
      return {
        result: [], // Change to array
        userDetails: {},
        results: {
          account_status: "",
          email: "",
          password: "",
          token: "",
        },
        showDropdown: false,
      };
  },
  computed: {
    filteredResults() {
      return this.result.filter(user => user.user_type === "client");
    },
  },
created() { //fetches data from the API when the component is created
  this.UserAccountLoad();
  
},
mounted() {
        const headerTitle = document.getElementById("header-title");
        if (headerTitle) {
          headerTitle.innerText = "Registration Management / Client Management";
        } else {
          console.error("Element with ID 'header-title' not found")}
},
methods: { //responsible for making the API request to fetch user data.
  UserAccountLoad() {
        // Access the adminStore to get the token
        const adminStore = useAdminStore();
        const token = adminStore.token;
  
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
        return "status-active";
      default:
        return "";
    }
  },
  toggle() {
    this.showDropdown = !this.showDropdown;
  },
  closePopup(){
    document.getElementById("ClientDetailsPop").classList.add('collapse');
  },
  // new function popup vieww off criver details
  viewClientDetails(userId){
        const adminStore = useAdminStore();
        const token = adminStore.token;
  
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
  approveUser(userDetails) {
  // Make a POST request to UserController's endpoint to generate the random password
  axios
    .post(`http://127.0.0.1:8000/api/user/generate-random-password/${userDetails.id}`)
    .then((response) => {
      console.log("Password generated successfully:", response.data);

      // Update the account_status to 1
      userDetails.account_status = 1;

      // Store the unhashed password
      const unhashedPassword = response.data.password;

      // Make a PUT request to update the user details including the account_status and hashed password
      axios
        .put(`http://127.0.0.1:8000/api/user/approve/${userDetails.id}`, userDetails)
        .then((response) => {
          console.log("User approved successfully:", response.data);
          // Show alert that the account has been approved
          alert("Account has been approved!");
          this.closePopup();
          // Send approval email with unhashed password
          axios
            .post(
              `http://127.0.0.1:8000/api/user/send-account-approved-email`,
              { 
                email: userDetails.email, 
                password: unhashedPassword
              }
            )
            .then((emailResponse) => {
              console.log(
                "Approval email sent successfully:",
                emailResponse.data
              );
            })
            .catch((emailError) => {
              console.error("Error sending approval email:", emailError);
            });

          // Fetch updated user details after approval
          // this.fetchUserDetails(); replace
          this.UserAccountLoad();
        })
        .catch((error) => {
          console.error("Error approving user:", error);
        });
    })
    .catch((error) => {
      console.error("Error generating random password:", error);
    });
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
