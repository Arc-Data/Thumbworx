import { createRouter, createWebHistory } from 'vue-router';



//--Super-admin--
//--Registration--
//--Driver_Management--
import DriverAccounts from '../views/super-admin/driver/DriverAccounts.vue';
import DriverDetails from '../views/super-admin/driver/DriverDetails.vue'; 
import DriverLogs from '../views/super-admin/driver/DriverLogs.vue';
//--Helper_Management--
import HelperAccounts from '../views/super-admin/helper/HelperAccounts.vue'
import HelperDetails from '../views/super-admin/helper/HelperDetails.vue';
// import HelperLogs from '../views/super-admin/helper/HelperLogs.vue';
//Client_Management
import ClientAccounts from '../views/super-admin/client/ClientAccounts.vue'
import ClientDetails from '../views/super-admin/client/ClientDetails.vue'
import ClientLogs from '../views/super-admin/client/ClientLogs.vue'


//--Admin--
import Dashboard from '../views/admin/Dashboard.vue';
import Logs from '../views/admin/Logs.vue';
import AccountRecover from '../views/admin/AccountRecover.vue';
import LandingPage from '../views/homepage/LandingPage.vue';
import Registration from '../views/main/Registration.vue';
import UserLogin from '../views/main/UserLogin.vue';
import AdminLogin from '../views/admin/AdminLogin.vue';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import ClientAccount from '../views/admin/ClientAccount.vue';
import ClientBooking from '../views/admin/ClientBooking.vue';
import HelperAccount from '../views/admin/HelperAccount.vue';
import HelperBooking from '../views/admin/HelperBooking.vue';
import HelperLogs from '../views/admin/HelperLogs.vue';
import HelperRatings from '../views/admin/HelperRatings.vue';
import { useAdminStore } from '../stores/adminStore';
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
          }
        ]
      },
      {
        path: 'logs',
        component: Logs,
        name: 'Logs',
      },
      // what is this supposed to do
      // {
      //   path: 'revisedocuments',
      //   component: ReviseDocuments,
      //   name: 'ReviseDocuments',
      //   meta: { requiresAdmin: true, sidebar: true },
      // },
      {
        path: 'accountrecover',
        component: AccountRecover,
        name: 'AccountRecover',
      },
      {
        path: 'helpers',
        children: [
          {
            path: '',
            component: HelperAccount,
            name: 'HelperAccount',
          },
        ]
      },
      {
        path: 'helperaccount',
        component: HelperAccount,
        name: 'HelperAccount',
      },
      {
        path: 'helperaccounts',
        component: HelperAccounts,
        name: 'HelperAccounts',
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
    ],
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/login',
  },
]


});

router.beforeEach((to, from, next) => {
  const adminStore = useAdminStore();
  const user = adminStore.user;
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
