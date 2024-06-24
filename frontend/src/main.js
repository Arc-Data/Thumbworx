import { createApp, markRaw } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'

import './style.css'
import { useAdminStore } from './stores/adminStore'

const app = createApp(App)

const pinia = createPinia()
pinia.use( ({ store }) => {
    store.router = markRaw(router)
})

app.use(pinia).use(router)

const adminStore = useAdminStore();
adminStore.checkTokenExpiryAndRefresh();

// Check system color scheme preference
const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

if (userPrefersDark) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

// Listen for changes to the user's preference
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
  if (event.matches) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});

app.mount('#app')