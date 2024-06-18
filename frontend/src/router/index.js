import { createRouter, createWebHistory } from 'vue-router';


//--Super-admin-- Registration Dropdown
import SuperAdminLogin from '../views/super-admin/SuperAdminLogin.vue';
//--Driver_Management--
import SuperAdminDriverAccounts from '../views/super-admin/driver/DriverAccounts.vue';
import SuperAdminDriverBookings from '../views/super-admin/driver/DriverBooking.vue';
import SuperAdminDriverDetails from '../views/super-admin/driver/DriverDetails.vue'; 
import SuperAdminDriverLogs from '../views/super-admin/driver/DriverLogs.vue';
import SuperAdminDriverRatings from '../views/super-admin/driver/DriverRatings.vue'
//--Helper_Management--
import SuperAdminHelperAccounts from '../views/super-admin/helper/HelperAccounts.vue'
import SuperAdminHelperBookings from '../views/super-admin/helper/HelperBooking.vue';
import SuperAdminHelperLogs from '../views/super-admin/helper/HelperDetails.vue';
import SuperAdminHelperLogs from '../views/super-admin/helper/HelperLogs.vue';
import SuperAdminHelperRatings from '../views/super-admin/helper/HelperRatings.vue'
//Client_Management
import SuperAdminClientAccounts from '../views/super-admin/client/ClientAccounts.vue'
import SuperAdminClientBookings from '../views/super-admin/client/ClientBooking.vue';
import SuperAdminClientDetails from '../views/super-admin/client/ClientDetails.vue'
import SuperAdminClientLogs from '../views/super-admin/client/ClientLogs.vue'
import SuperAdminClientRatings from '../views/super-admin/client/ClientRatings.vue'


//--Admin--
import Dashboard from '../views/admin/Dashboard.vue';
import LandingPage from '../views/homepage/LandingPage.vue';
import Registration from '../views/main/Registration.vue';
import UserLogin from '../views/main/UserLogin.vue';
import AdminLogin from '../views/admin/AdminLogin.vue';
import DefaultLayout from '../layouts/DefaultLayout.vue';
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






  //super admin routes 
  {   
    path: '/superadmin',
    meta: { requiresSuperAdmin: true },
    component: DefaultLayout,
    children: [
     
      {
        // super-admin related routes for driver management
        path: 'drivers',
        children: [
          {
            path: '',
            name: SuperAdminDriverAccounts,
            component: SuperAdminDriverAccounts,
          },
          {
            path: ':id',
            name: SuperAdminDriverDetails,
            component: SuperAdminDriverDetails,
          },
          {
            path: 'logs',
            name: SuperAdminDriverLogs,
            component: SuperAdminDriverLogs,
          },
          {
            path: 'bookings',
            name: SuperAdminDriverBookings,
            component: SuperAdminDriverBookings,
          },
          {
            path: 'ratings',
            name: SuperAdminDriverRatings,
            component: SuperAdminDriverRatings,
          }

      

          //nothing for evalutations
        ]
      },
      // super-admin related routes for client management
      {
        path: 'clients',
        children: [
          {
            path: '',
            component: SuperAdminClientAccounts,
            name: 'SuperAdminClientAccounts',
          },
          {
            path: ':id',
            component: SuperAdminClientDetails,
            name: 'SuperAdminClientDetails',
          },
          {
            path: 'bookings',
            component: SuperAdminClientBookings,
            name: 'SuperAdminClientBookings',
          },
          {
            path: 'logs',
            component: SuperAdminClientLogs,
            name: 'SuperAdminClientLogs',
          },
          {
            path: 'ratings',
            component: SuperAdminClientRatings,
            name: 'SuperAdminClientRatings',
          },
        ]
      },
      {
        path: 'helpers',
        children: [
          {
            path: '',
            component: SuperAdminHelperAccounts,
            name: 'SuperAdminHelperAccounts',
          },
          {
            path: 'id',
            component: SuperAdminHelperDetails,
            name: 'SuperAdminHelperDetails',
          },
          {
            path: 'bookings',
            component: SuperAdminHelperBookings,
            name: 'SuperAdminHelperBookings',
          },
          {
            path: 'logs',
            component: SuperAdminHelperLogs,
            name: 'SuperAdminHelperLogs',
          },
          {
            path: 'ratings',
            component: SuperAdminHelperRatings,
            name: 'SuperAdminHelperRatings',
          },

        ]
      },
      {
        path: 'accountrecover',
        component: AccountRecover,
        name: 'AccountRecover',
      },
    ],
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
        path: 'accountrecover',
        component: AccountRecover,
        name: 'AccountRecover',
      },
     
    ],
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
  const requiresSuperAdmin = to.matched.some(record => record.meta.requiresDriver);

  console.log(requiresGuest)

  if (requiresGuest && user) {
    if (user.user_type === 'admin') {
      next({ name: 'Dashboard' });
    } else if (user.user_type === 'client') {
      next({ path: '/client/home' });
    } else if (user.user_type === 'driver') {
      next({ path: '/driver/home' });
    } else if (user.user_type === 'superadmin') {
      next({ path: 'Dashboard' });
      
    } else {
      next({ name: 'LandingPage' });
    }
  } else if (requiresAdmin && (!user || user.user_type !== 'admin')) {
    next({ name: 'LoginAdmin' });
  } else if (requiresClient && (!user || user.user_type !== 'client')) {
    next({ name: 'LoginMain' });
  } else if (requiresDriver && (!user || user.user_type !== 'driver')) {
    next({ name: 'LoginMain' });
  } else if (requiresSuperAdmin && (!user || user.user_type !== 'superadmin')) {
    next({ name: 'SuperAdminLogin' });
  } else {
    next();
  }
});

export default router;
