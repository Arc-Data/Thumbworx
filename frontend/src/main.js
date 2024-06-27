// Import the necessary modules from Vue and other dependencies
import { createApp, markRaw } from 'vue'
import App from './App.vue'  // Main App component
import router from './router/index'  // Vue Router instance
import { createPinia } from 'pinia'

import './style.css'
import { useAuthStore } from './stores/authStore'

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

const authStore = useAuthStore();
authStore.checkTokenExpiryAndRefresh();

app.mount('#app')

// This code sets up and mounts a Vue.js application with Pinia for state management and Vue Router for routing.
// It also includes functionality to check and refresh an admin token when the application starts.
