<template>
  <div :class="isDarkMode ? 'dark' : ''">
    <div :class="contentClasses">
  <div class="p-auto
  w-full
  bg-[url('https://www.frost.com/wp-content/uploads/2017/07/Connected-truck-telematics.jpg')]">
    <div class="flex items-center min-h-screen p-4 lg:justify-center center-margin">
        <div
          class="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
        >
          <div
          
            class="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
          >
           <div class="my-3 text-4xl font-bold tracking-wider tracking-widest text-center">
              <a href="#" >Thumbworx</a>
            </div>
            <p class="mt-6 font-normal text-center text-gray-300 md:mt-0">
              With the power of Thumbworx, you can now focus only on functionaries for your products, while leaving the
              Trucking on us!
            </p>
             <div>
    <label class="cursor-pointer mode-toggle flex items-center space-x-2">
      <input type="checkbox" v-model="isDarkMode" id="darkmode-toggle" @change="switchTheme" class="sr-only peer"
      />
      <span v-if="!isDarkMode" class="material-icons">light_mode</span>
      <span v-if="isDarkMode" class="material-icons">dark_mode</span>
      <div
        class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
      ></div>
    </label>
  </div>
          </div>
          


          <div class="p-5 bg-white dark:bg-background-500 md:flex-1">
            
            <img class="m-auto size-40 center-margin" src="https://th.bing.com/th/id/R.f60de85e220a6c066dca269bae4e4eed?rik=5V1xnEBnOuZrJg&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2ftruck-silhouette-images%2ftruck-silhouette-images-24.png&ehk=XOXvl%2bhOQLME4sLz9fccgTnrTYWeaP9o7p%2fun%2bLw0nk%3d&risl=&pid=ImgRaw&r=0" alt="" srcset="">
           <!-- Login For Both Admin/Client/Driver or Helper-->
           
            <h3 class="my-4 text-2xl font-semibold text-center text-gray-700"> Login</h3> 
            <form @submit.prevent="login" class="flex flex-col space-y-5">
              <div class="flex flex-col space-y-1">
                <label for="email" class="text-sm font-semibold text-gray-600">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="ex: johndoe@gmail.com"
                  v-model="email"
                  autofocus
                  class="px-4 py-2 !text-text-500 !darker:text-text-800 bg-slate-100 placeholder-gray-450 transition duration-300 border rounded border-slate-500 focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              <div class="flex flex-col space-y-1">
                <div class="flex items-center justify-between">
                  <label for="password" class="text-sm font-semibold text-gray-600">Password</label>
                    </div>
                <input
                  type="password"
                  id="password"
                  placeholder="********"
                  v-model="password"
                  class="px-4 py-2 text-blue-400 bg-slate-100 placeholder-gray-450 transition duration-300 border rounded border-slate-500 focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              <div>
                <button
                  type="submit"
                  class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
        </div>
      </div>
      </div>
  </div>

  </template>

<script>
import { useAdminStore } from '../../stores/adminStore';
import { ref, onMounted, computed } from 'vue';

  export default {
  setup() {
    const isDarkMode = ref(false);

    const switchTheme = () => {
      if (isDarkMode.value) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'Dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'Light');
      }
    };

    const contentClasses = computed(() => ({
      'dark:bg-background-500': isDarkMode.value,
      'bg-background-500': !isDarkMode.value,
    })); 

    onMounted(() => {
      const currentTheme = localStorage.getItem('theme');
      if (currentTheme === 'Dark') {
        isDarkMode.value = true;
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark')}
    });

    return {
      isDarkMode,
      switchTheme,
      contentClasses,
    };
  },
  data() {
    return {
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    async login() {
      const adminStore = useAdminStore();
      console.log(this.email, this.password);
      try {
        console.log("Huh");
        await adminStore.login(this.email, this.password);
      } catch (error) {
        console.error('Error:', error);
      }
    },
  },
};

// import { ClientStore } from '../../stores/clientStore';

// export default {
//   data() {
//     return {
//       email: '',
//       password: '',
//       error: null,
//     };
//   },
//   methods: {
//     async login() {
//       const clientStore = ClientStore()
//       console.log(this.email, this.password)

//       try {
//         console.log("Huh")
//         await clientStore.login(this.email, this.password)
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     },
//   },
// };

</script>



<style scoped>


:root { /* light mode */
 
  --text: #0a111a;
  --text-50: #edf2f8;
  --text-100: #dae4f1;
  --text-200: #b6c9e2;
  --text-300: #91aed4;
  --text-400: #6c93c6;
  --text-500: #4778b8;
  --text-600: #396093;
  --text-700: #2b486e;
  --text-800: #1d3049;
  --text-900: #0e1825;
  --text-950: #070c12;

    --background: #f4f7fb;
    --background-50: #ecf1f8;
    --background-100: #dae4f1;
    --background-200: #b4c9e4;
    --background-300: #8faed6;
    --background-400: #6993c9;
    --background-500: #4478bb;
    --background-600: #366096;
    --background-700: #294870;
    --background-800: #1b304b;
    --background-900: #0e1825;
    --background-950: #070c13;
    
    --primary: #3c83f6;
    --primary-50: #e7f0fe;
    --primary-100: #cee0fd;
    --primary-200: #9ec1fa;
    --primary-300: #6da2f8;
    --primary-400: #3c83f6;
    --primary-500: #0b64f4;
    --primary-600: #0950c3;
    --primary-700: #073c92;
    --primary-800: #052861;
    --primary-900: #021431;
    --primary-950: #010a18;
    
    --secondary: #82a9e8;
    --secondary-50: #e9f0fb;
    --secondary-100: #d4e1f7;
    --secondary-200: #a9c4ef;
    --secondary-300: #7ea6e7;
    --secondary-400: #5389df;
    --secondary-500: #286bd7;
    --secondary-600: #2056ac;
    --secondary-700: #184081;
    --secondary-800: #102b56;
    --secondary-900: #08152b;
    --secondary-950: #040b16;
    
    --accent: #4986e9;
    --accent-50: #e8f0fc;
    --accent-100: #d2e1f9;
    --accent-200: #a4c3f4;
    --accent-300: #77a5ee;
    --accent-400: #4986e9;
    --accent-500: #1c68e3;
    --accent-600: #1653b6;
    --accent-700: #113f88;
    --accent-800: #0b2a5b;
    --accent-900: #06152d;
    --accent-950: #030a17;
    
  
}
.dark {
    --text: #e5ecf5;
    --text-50: #070c12;
    --text-100: #0e1825;
    --text-200: #1d3049;
    --text-300: #2b486e;
    --text-400: #396093;
    --text-500: #4778b8;
    --text-600: #6c93c6;
    --text-700: #91aed4;
    --text-800: #b6c9e2;
    --text-900: #dae4f1;
    --text-950: #edf2f8;
    
    --background: #04070b;
    --background-50: #070c13;
    --background-100: #0e1825;
    --background-200: #1b304b;
    --background-300: #294870;
    --background-400: #366096;
    --background-500: #4478bb;
    --background-600: #6993c9;
    --background-700: #8faed6;
    --background-800: #b4c9e4;
    --background-900: #dae4f1;
    --background-950: #ecf1f8;

    --primary: #0950c3;
    --primary-50: #010a18;
    --primary-100: #021431;
    --primary-200: #052861;
    --primary-300: #073c92;
    --primary-400: #0950c3;
    --primary-500: #0b64f4;
    --primary-600: #3c83f6;
    --primary-700: #6da2f8;
    --primary-800: #9ec1fa;
    --primary-900: #cee0fd;
    --primary-950: #e7f0fe;
    
    --secondary: #173e7d;
    --secondary-50: #040b16;
    --secondary-100: #08152b;
    --secondary-200: #102b56;
    --secondary-300: #184081;
    --secondary-400: #2056ac;
    --secondary-500: #286bd7;
    --secondary-600: #5389df;
    --secondary-700: #7ea6e7;
    --secondary-800: #a9c4ef;
    --secondary-900: #d4e1f7;
    --secondary-950: #e9f0fb;
    
    --accent: #1653b6;
    --accent-50: #030a17;
    --accent-100: #06152d;
    --accent-200: #0b2a5b;
    --accent-300: #113f88;
    --accent-400: #1653b6;
    --accent-500: #1c68e3;
    --accent-600: #4986e9;
    --accent-700: #77a5ee;
    --accent-800: #a4c3f4;
    --accent-900: #d2e1f9;
    --accent-950: #e8f0fc;
    
  }

[data-theme="Dark"] {
  --text: #e5ecf5;
    --text-50: #070c12;
    --text-100: #0e1825;
    --text-200: #1d3049;
    --text-300: #2b486e;
    --text-400: #396093;
    --text-500: #4778b8;
    --text-600: #6c93c6;
    --text-700: #91aed4;
    --text-800: #b6c9e2;
    --text-900: #dae4f1;
    --text-950: #edf2f8;
    
    --background: #04070b;
    --background-50: #070c13;
    --background-100: #0e1825;
    --background-200: #1b304b;
    --background-300: #294870;
    --background-400: #366096;
    --background-500: #4478bb;
    --background-600: #6993c9;
    --background-700: #8faed6;
    --background-800: #b4c9e4;
    --background-900: #dae4f1;
    --background-950: #ecf1f8;

    --primary: #0950c3;
    --primary-50: #010a18;
    --primary-100: #021431;
    --primary-200: #052861;
    --primary-300: #073c92;
    --primary-400: #0950c3;
    --primary-500: #0b64f4;
    --primary-600: #3c83f6;
    --primary-700: #6da2f8;
    --primary-800: #9ec1fa;
    --primary-900: #cee0fd;
    --primary-950: #e7f0fe;
    
    --secondary: #173e7d;
    --secondary-50: #040b16;
    --secondary-100: #08152b;
    --secondary-200: #102b56;
    --secondary-300: #184081;
    --secondary-400: #2056ac;
    --secondary-500: #286bd7;
    --secondary-600: #5389df;
    --secondary-700: #7ea6e7;
    --secondary-800: #a9c4ef;
    --secondary-900: #d4e1f7;
    --secondary-950: #e9f0fb;
    
    --accent: #1653b6;
    --accent-50: #030a17;
    --accent-100: #06152d;
    --accent-200: #0b2a5b;
    --accent-300: #113f88;
    --accent-400: #1653b6;
    --accent-500: #1c68e3;
    --accent-600: #4986e9;
    --accent-700: #77a5ee;
    --accent-800: #a4c3f4;
    --accent-900: #d2e1f9;
    --accent-950: #e8f0fc;
    
  }

/* body {
  color: #000;
  color: var(--font-color);
  background: rgb(243,243,243);
  background: var(--bg-color);
} */

</style>

