import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/admin/Dashboard.vue';
import ReviseDocuments from '../views/admin/ReviseDocuments.vue';


import DriverAccounts from '../views/super-admin/driver/DriverAccounts.vue';
import DriverDetails from '../views/super-admin/driver/DriverDetails.vue'; 
import DriverLogs from '../views/super-admin/driver/DriverLogs.vue';

import HelperAccounts from '../views/super-admin/helper/HelperAccounts.vue'
import HelperDetails from '../views/super-admin/helper/HelperDetails.vue';

// already a thing
// import HelperLogs from '../views/admin/HelperLogs.vue';

import ClientAccounts from '../views/super-admin/client/ClientAccounts.vue'
import ClientDetails from '../views/super-admin/client/ClientDetails.vue'
import ClientLogs from '../views/super-admin/client/ClientLogs.vue'

import Logs from '../views/admin/Logs.vue';
import AccountRecover from '../views/admin/AccountRecover.vue';
import LandingPage from '../views/homepage/LandingPage.vue';
import Registration from '../views/main/Registration.vue';
import LoginMain from '../views/main/Login-main.vue';
import Login from '../views/admin/Login.vue';
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

const routes = [
  {   
    path: '/landing-page',
    component: LandingPage,
    meta: { requiresGuest: true, sidebar: false },
    name: 'LandingPage',
  },
  {
    path: '/login',
    component: LoginMain,
    meta: { requiresGuest: true, sidebar: true },
    name: 'LoginMain',
  },
  {
    path: '/login/admin',
    component: Login,
    meta: { requiresGuest: true, sidebar: false },
    name: 'LoginAdmin',
  },
  {
    path: '/registration',
    component: Registration,
    meta: { requiresGuest: true, sidebar: true },
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
    component: DefaultLayout,
    children: [
      {
        path: 'dashboard',
        component: Dashboard,
        name: 'Dashboard',
        meta: { requiresAdmin: true, sidebar: true },
      },
      {
        path: 'drivers',
        meta: { requiresAdmin: true },
        children: [
          {
            path: '',
            name: DriverAccounts,
            component: DriverAccounts,
            meta: { requiresAdmin: true, sidebar: true }
          },
          {
            path: ':id',
            name: DriverDetails,
            component: DriverDetails,
            meta: { requiresAdmin: true, sidebar: true }
          },
          {
            path: 'logs',
            name: DriverLogs,
            component: DriverLogs,
            meta: { requiresAdmin: true, sidebar: true }
          }
        ]
      },
      // currently an unused path
      {
        path: 'logs',
        component: Logs,
        name: 'Logs',
        meta: { requiresAdmin: true, sidebar: true },
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
        meta: { requiresAdmin: true, sidebar: false },
      },
      {
        path: 'clientaccount',
        component: ClientAccount,
        name: 'ClientAccount',
        meta: { requiresAdmin: true, sidebar: true },
      },
      {
        path: 'clientbooking',
        component: ClientBooking,
        name: 'ClientBooking',
        meta: { requiresAdmin: true, sidebar: true },
      },
      {
        path: 'helperaccount',
        component: HelperAccount,
        name: 'HelperAccount',
        meta: { requiresAdmin: true, sidebar: true },
      },
      {
        path: 'helperaccounts',
        component: HelperAccounts,
        name: 'HelperAccounts',
        meta: { requiresAdmin: true, sidebar: true },
      },
      {
        path: 'helperlogs',
        component: HelperLogs,
        name: 'HelperLogs',
        meta: { requiresAdmin: true, sidebar: true },
      },
      {
        path: 'helperratings',
        component: HelperRatings,
        name: 'HelperRatings',
        meta: { requiresAdmin: true, sidebar: true },
      },
      {
        path: 'helperbooking',
        component: HelperBooking,
        name: 'HelperBooking',
        meta: { requiresAdmin: true, sidebar: true },
      },
    ],
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/login',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
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
