
<template>
  <div class="flex flex-col w-full">
 
   

   
</div>
</template>

  <script> //Bawal tanggalin ung script tag para makita pa rin display kasi part sya ng default code
  import axios from "redaxios";
  import { useAdminStore } from '../../../stores/adminStore';
  
  export default {
    name: 'UserAccount',
    data() {
      return {
        result: [], // Change to array
        showDropdown: false,
      };
    },
      computed: {
    filteredResults() {
      return this.result.filter(user => user.user_type === "client");
    },
  },
    created() {
      // Fetch user account data when the component is created
      this.UserAccountLoad();
    },
    methods: {
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
      toggle() {
        this.showDropdown = !this.showDropdown;
      },
    },
  };
  </script>
  
  