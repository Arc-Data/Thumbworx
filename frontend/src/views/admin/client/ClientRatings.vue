


<template>
    <div class="flex flex-col w-full">
  <Header />
    <div class="w-full">
      <div class="sm:-mx-6 lg:-mx-8 flex justify-center text-black">
        <div class="
        
        
        inline-block py-2 sm:px-6 lg:px-8 w-11/12 mx-6 lg:w-auto
        my-10 rounded-2xl border-solid border-slate-500 drop-shadow-md bg-blue-50">
          <div class="overflow-hidden ">
          <!-- tablecontainer -->
                    <div class="block">
                      <!-- searchbar part -->
                      <div class=" p-2 flex flex-wrap justify-between">
                        <form class="w-full">   
                            <div class="relative">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg class="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                                <input type="search" id="default-search" class="block w-full p-2 ps-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search" required />
                            </div>
                          <div>
                        </div>
                        </form>

                      </div>
      
        
            <div class="px-4">
            <br>
            <h2 class="
            
            text-lg
            md:text-xl
            lg:text-xl
            xl:text-xl font-bold tracking-wide ml-4"><i class="icon pi pi-star"></i> Ratings</h2>
            <br>
            <div class="overflow-hidden overflow-x-auto ">
                  <table class="min-w-full text-center text-sm font-light text-surface ">
                    <thead class="border-b border-neutral-200 font-medium ">
                      <tr>
                        <th scope="col px-6 py-4">Client ID</th>
                        <th scope="col px-6 py-4">Fullname</th>
                        <th scope="col px-6 py-4">Email</th>
                        <th scope="col px-6 py-4">Mobile Number</th>
                        <th scope="col px-6 py-4">Rating</th>

                      </tr>
                    </thead>
                    <tbody>
                      <tr 
                        class="
                        border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-blue-100  ">
                        <td class="whitespace-nowrap px-6 py-4 font-medium">D-112121</td> 
                        <td class="whitespace-nowrap px-6 py-4">John Doe</td>
                        <td class="whitespace-nowrap px-6 py-4">jDoe@gmail.com</td>
                        <td class="whitespace-nowrap px-6 py-4">09198745645</td>
                        <td class="whitespace-nowrap px-6 py-4">4.4 <span class="material-icons">star</span></td>
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
</div>


</template>

<script>

//Bawal tanggalin ung script tag para makita pa rin display kasi part sya ng default code
import axios from "redaxios";

export default { //provides a more modular and organized way to define multiple data properties within a component
    name: 'Ratings',
    data() {
        return {
         



        };
    },
  created() { //fetches data from the API when the component is created

  },
  mounted() {
    console.log("mounted() called.......");
  },

  methods: { //responsible for making the API request to fetch user data.
   
  },
};


</script>






