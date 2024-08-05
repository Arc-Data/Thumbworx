import { createRouter, createWebHistory } from 'vue-router';

import Dashboard from '../views/admin/Dashboard.vue';

//--Admin--
//--Registration--
//--Driver_Management--
//Client gives Ratings to Helper, Helper Evaluates Driver

import DriverAccounts from '../views/admin/driver/DriverAccounts.vue';
import DriverDetails from '../views/admin/driver/DriverDetails.vue'; 
import DriverLogs from '../views/admin/driver/DriverLogs.vue';
import DriverRatings from '../views/admin/driver/DriverRatings.vue';
// No Evaluation 

//Client_Management
import ClientAccount from '../views/admin/client/ClientAccount.vue';
import ClientDetails from '../views/admin/client/ClientDetails.vue';
import ClientBooking from '../views/admin/client/ClientBooking.vue';
import ClientLogs from '../views/admin/client/ClientLogs.vue';
import ClientRatings from '../views/admin/client/ClientRatings.vue';
import ClientAccounts from '../views/admin/client/ClientAccounts.vue';


//--Helper_Management--
import HelperAccount from '../views/admin/helper/HelperAccount.vue'
import HelperDetails from '../views/admin/helper/HelperDetails.vue';
import HelperLogs from '../views/admin/helper/HelperLogs.vue';
import HelperBooking from '../views/admin/helper/HelperBooking.vue';
import HelperRatings from '../views/admin/helper/HelperRatings.vue';


import Logs from '../views/admin/Logs.vue';
import AccountRecover from '../views/admin/AccountRecover.vue';
import LandingPage from '../views/homepage/LandingPage.vue';
import Registration from '../views/main/Registration.vue';
import UserLogin from '../views/main/UserLogin.vue';
import AdminLogin from '../views/admin/AdminLogin.vue';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import { useAuthStore } from '../stores/authStore';
import DriverHome from '../views/driver/DriverHome.vue';
import ClientHome from '../views/client/ClientHome.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
  {   
    path: '/landing-page',
    component: LandingPage,
    meta: { requiresGuest: true },
    name: 'LandingPage',
  },
  {
    path: '/login',
    component: UserLogin,
    meta: { requiresGuest: true },
    name: 'LoginMain',
  },
  {
    path: '/login/admin',
    component: AdminLogin,
    meta: { requiresGuest: true },
    name: 'LoginAdmin',
  },
  {
    path: '/registration',
    component: Registration,
    meta: { requiresGuest: true },
    name: 'Registration',
  },
  // driver related routes
  {
    path: '/driver',
    children: [
      {
        name: 'DriverHome',
        path: 'home',
        component: DriverHome,
        meta: { requiresDriver: true }
      }
    ]
  },
  // client related routes
  {
    path: '/client',
    children: [
      {
        path: 'home',
        name:'ClientHome',
        component: ClientHome,
        meta: { requiresClient: true }
      }
    ]
  },
  // admin related routes
  {   
    path: '/admin',
    meta: { requiresAdmin: true },
    component: DefaultLayout,
    children: [
      {
        path: 'dashboard',
        component: Dashboard,
        name: 'Dashboard',
      },
      {
        // admin related routes for driver management
        path: 'drivers',
        children: [
          {
            path: '',
            name: DriverAccounts,
            component: DriverAccounts,
          },
          {
            path: ':id',
            name: DriverDetails,
            component: DriverDetails,
          },
          {
            path: 'logs',
            name: DriverLogs,
            component: DriverLogs,
          },
          {
            path: 'ratings',
            name: DriverRatings,
            component: DriverRatings,
          }
          
        ]
      },
      // admin related routes for client management
      {
        path: 'clients',
        children: [
          {
            path: '',
            component: ClientAccount,
            name: 'ClientAccount',
          },
          {
            path: '2',
            component: ClientAccounts,
            name: 'ClientAccounts',
          },
          {
            path: ':id',
            component: ClientDetails,
            name: 'ClientDetails',
          },
          {
            path: 'booking',
            component: ClientBooking,
            name: 'ClientBooking',
          },
          {
            path: 'rating',
            component: ClientRatings,
            name: 'ClientRatings',
          },
          {
            path: 'logs',
            component: ClientLogs,
            name: 'ClientLogs',
          }

        ]
      },
      {
        path: 'helpers',
        children: [
          {
            path: '',
            component: HelperAccount,
            name: 'HelperAccount',
          },
          {
            path: ':id',
            component: HelperDetails,
            name: 'HelperDetails',
          },
          {
            path: 'helperlogs',
            component: HelperLogs,
            name: 'HelperLogs',
          },
          {
            path: 'helperratings',
            component: HelperRatings,
            name: 'HelperRatings',
          },
          {
            path: 'helperbooking',
            component: HelperBooking,
            name: 'HelperBooking',
          },
        ]
      },
      {
        path: 'logs',
        component: Logs,
        name: 'Logs',
      },
      {
        path: 'accountrecover',
        component: AccountRecover,
        name: 'AccountRecover',
      },
      // what is this supposed to do
      // {
      //   path: 'revisedocuments',
      //   component: ReviseDocuments,
      //   name: 'ReviseDocuments',
      //   meta: { requiresAdmin: true, sidebar: true },
      // },
    ],
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/login',
  },
]


});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const user = authStore.user;
  console.log(user)

  const requiresGuest = to.matched.some(record => record.meta.requiresGuest);
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin);
  const requiresClient = to.matched.some(record => record.meta.requiresClient);
  const requiresDriver = to.matched.some(record => record.meta.requiresDriver);

  console.log(requiresGuest)

  if (requiresGuest && user) {
    if (user.user_type === 'admin') {
      next({ name: 'Dashboard' });
    } else if (user.user_type === 'client') {
      next({ path: '/client/home' });
    } else if (user.user_type === 'driver') {
      next({ path: '/driver/home' });
    } else {
      next({ name: 'LandingPage' });
    }
  } else if (requiresAdmin && (!user || user.user_type !== 'admin')) {
    next({ name: 'LoginAdmin' });
  } else if (requiresClient && (!user || user.user_type !== 'client')) {
    next({ name: 'LoginMain' });
  } else if (requiresDriver && (!user || user.user_type !== 'driver')) {
    next({ name: 'LoginMain' });
  } else {
    next();
  }
});

export default router;
