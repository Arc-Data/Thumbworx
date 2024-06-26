// Import the necessary modules from Vue and other dependencies
import { createApp, markRaw } from 'vue'
import App from './App.vue'  // Main App component
import router from './router/index'  // Vue Router instance
import { createPinia } from 'pinia'  // Pinia for state management

import './style.css'  // Import the main CSS stylesheet
import { useAdminStore } from './stores/adminStore'  // Import the admin store

// Create a new Vue application instance
const app = createApp(App)

// Create a new Pinia instance
const pinia = createPinia()

// Use a Pinia plugin to add the router to each store
pinia.use(({ store }) => {
    // Add the router instance to the store, making it available as store.router
    store.router = markRaw(router)
})

// Use Pinia and the router in the Vue application
app.use(pinia).use(router)

// Create an instance of the admin store
const adminStore = useAdminStore()

// Check token expiry and refresh the token if necessary
adminStore.checkTokenExpiryAndRefresh()

// Mount the Vue application to the HTML element with id 'app'
app.mount('#app')

// This code sets up and mounts a Vue.js application with Pinia for state management and Vue Router for routing.
// It also includes functionality to check and refresh an admin token when the application starts.
