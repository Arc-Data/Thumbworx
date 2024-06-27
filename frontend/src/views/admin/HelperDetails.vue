<template>
    <fieldset>
      <legend>Helper Details</legend>
      <div>
        <h6>Personal Information</h6>
      </div>
      <div class="row">
        <div class="mb-3 col">
          <label for="disabledTextInput1" class="form-label">First Name</label>
          <!-- first_name and others is from the database. Hindi sya tinawag directly dito sa script code sa baba -->
          <input
            type="text"
            id="disabledTextInput1"
            class="form-control"
            disabled
            :value="userDetails.first_name"
          />
        </div>
        <div class="mb-3 col">
          <label for="disabledTextInput2" class="form-label">Middle Name</label>
          <input
            type="text"
            id="disabledTextInput2"
            class="form-control"
            disabled
            :value="userDetails.middle_name"
          />
        </div>
        <div class="mb-3 col">
          <label for="disabledTextInput3" class="form-label">Last Name</label>
          <input
            type="text"
            id="disabledTextInput3"
            class="form-control"
            disabled
            :value="userDetails.last_name"
          />
        </div>
      </div>
      <div class="row">
        <div class="mb-3 col">
          <label for="disabledTextInput4" class="form-label">Date of Birth</label>
          <input
            type="text"
            id="disabledTextInput4"
            class="form-control"
            disabled
            :value="userDetails.birth_date"
          />
        </div>
        <div class="mb-3 col">
          <label for="disabledTextInput5" class="form-label">Age</label>
          <input
            type="text"
            id="disabledTextInput5"
            class="form-control"
            disabled
            :value="userDetails.age"
          />
        </div>
        <div class="mb-3 col">
          <label for="disabledTextInput6" class="form-label">Gender</label>
          <input
            type="text"
            id="disabledTextInput6"
            class="form-control"
            disabled
            :value="userDetails.gender"
          />
        </div>
      </div>
      <div class="row">
        <div class="mb-3 col">
          <label for="disabledTextInput7" class="form-label"
            >Marital Status</label
          >
          <input
            type="text"
            id="disabledTextInput7"
            class="form-control"
            disabled
            :value="userDetails.marital_status"
          />
        </div>
        <div class="mb-3 col">
          <label for="disabledTextInput8" class="form-label">User Type</label>
          <input
            type="text"
            id="disabledTextInput8"
            class="form-control"
            disabled
            :value="userDetails.user_type"
          />
        </div>
        <div class="col"></div>
        <!-- Empty column for alignment -->
      </div>
  
      <div>
        <h6>Contact Information</h6>
      </div>
      <div class="row">
        <div class="mb-3 col">
          <label for="disabledTextInput9" class="form-label"
            >Phone Number 1</label
          >
          <input
            type="text"
            id="disabledTextInput9"
            class="form-control"
            disabled
            :value="userDetails.phone_number1"
          />
        </div>
        <div class="mb-3 col">
          <label for="disabledTextInput10" class="form-label"
            >Phone Number 2</label
          >
          <input
            type="text"
            id="disabledTextInput10"
            class="form-control"
            disabled
            :value="userDetails.phone_number2"
          />
        </div>
        <div class="mb-3 col">
          <label for="disabledTextInput11" class="form-label">Email</label>
          <input
            type="text"
            id="disabledTextInput11"
            class="form-control"
            disabled
            :value="userDetails.email"
          />
        </div>
      </div>
  
      <div>
        <h6>Address</h6>
      </div>
  
      <div>
        <h6>Permanent Address</h6>
      </div>

        <!-- hindi lalabas ung page kapag walang laman ung table sa db  -->
      <div class="row">
        <div class="mb-3 col">
          <label for="disabledTextInput12" class="form-label"
            >Permanent House No.</label
          >
          
        
          <input
            type="text"
            id="disabledTextInput12"
            class="form-control"
            disabled
            :value="userDetails.permanent_address.per_house_number"
          />
        </div>
        <div class="mb-3 col">
          <label for="disabledTextInput13" class="form-label"
            >Permanent Street</label
          >
          <input
            type="text"
            id="disabledTextInput13"
            class="form-control"
            disabled
            :value="userDetails.permanent_address.per_street"
          />
        </div>
        <div class="mb-3 col">
          <label for="disabledTextInput14" class="form-label"
            >Permanent Barangay</label
          >
          <input
            type="text"
            id="disabledTextInput14"
            class="form-control"
            disabled
            :value="userDetails.permanent_address.per_barangay"
          />
        </div>
      </div>
  
      <div class="row">
        <div class="mb-3 col">
          <label for="disabledTextInput15" class="form-label"
            >Permanent City.</label
          >
          <input
            type="text"
            id="disabledTextInput15"
            class="form-control"
            disabled
            :value="userDetails.permanent_address.per_city"
          />
        </div>
        <div class="mb-3 col">
          <label for="disabledTextInput16" class="form-label"
            >Permanent Province</label
          >
          <input
            type="text"
            id="disabledTextInput16"
            class="form-control"
            disabled
            :value="userDetails.permanent_address.per_province"
          />
        </div>
        <div class="mb-3 col">
          <label for="disabledTextInput17" class="form-label"
            >Permanent Region</label
          >
          <input
            type="text"
            id="disabledTextInput17"
            class="form-control"
            disabled
            :value="userDetails.permanent_address.per_region"
          />
        </div>
      </div>
  
      <div class="row">
        <div class="mb-3 col">
          <label for="disabledTextInput18" class="form-label"
            >Permanent Country.</label
          >
          <input
            type="text"
            id="disabledTextInput18"
            class="form-control"
            disabled
            :value="userDetails.permanent_address.per_country"
          />
        </div>
        <div class="mb-3 col">
          <label for="disabledTextInput19" class="form-label"
            >Permanent Zip Code</label
          >
          <input
            type="text"
            id="disabledTextInput19"
            class="form-control"
            disabled
            :value="userDetails.permanent_address.per_zip_code"
          />
        </div>
      </div>
  
      <div>
        <h6>Current Address</h6>
      </div>

        <!-- hindi lalabas ung page kapag walang laman ung table sa db  -->
      <div class="row">
        <div class="mb-3 col">
          <label for="disabledTextInput20" class="form-label"
            >Current House No.</label
          >
          <input
            type="text"
            id="disabledTextInput20"
            class="form-control"
            disabled
            :value="userDetails.current_address.cur_house_number"
          />
        </div>
        <div class="mb-3 col">
          <label for="disabledTextInput21" class="form-label"
            >Current Street</label
          >
          <input
            type="text"
            id="disabledTextInput21"
            class="form-control"
            disabled
            :value="userDetails.current_address.cur_street"
          />
        </div>
        <div class="mb-3 col">
          <label for="disabledTextInput22" class="form-label"
            >Current Barangay</label
          >
          <input
            type="text"
            id="disabledTextInput22"
            class="form-control"
            disabled
            :value="userDetails.current_address.cur_barangay"
          />
        </div>
      </div>
  
      <div class="row">
        <div class="mb-3 col">
          <label for="disabledTextInput23" class="form-label"
            >Current City.</label
          >
          <input
            type="text"
            id="disabledTextInput23"
            class="form-control"
            disabled
            :value="userDetails.current_address.cur_city"
          />
        </div>
        <div class="mb-3 col">
          <label for="disabledTextInput24" class="form-label"
            >Current Province</label
          >
          <input
            type="text"
            id="disabledTextInput24"
            class="form-control"
            disabled
            :value="userDetails.current_address.cur_province"
          />
        </div>
        <div class="mb-3 col">
          <label for="disabledTextInput25" class="form-label"
            >Current Region</label
          >
          <input
            type="text"
            id="disabledTextInput25"
            class="form-control"
            disabled
            :value="userDetails.current_address.cur_region"
          />
        </div>
      </div>
  
      <div class="row">
        <div class="mb-3 col">
          <label for="disabledTextInput26" class="form-label"
            >Current Country.</label
          >
          <input
            type="text"
            id="disabledTextInput26"
            class="form-control"
            disabled
            :value="userDetails.current_address.cur_country"
          />
        </div>
        <div class="mb-3 col">
          <label for="disabledTextInput27" class="form-label"
            >Current Zip Code</label
          >
          <input
            type="text"
            id="disabledTextInput27"
            class="form-control"
            disabled
            :value="userDetails.current_address.cur_zip_code"
          />
        </div>
      </div>
  
      <div>
        <h6>Emergency Contact Information</h6>
      </div>

        <!-- hindi lalabas ung page kapag walang laman ung table sa db  -->
      <div class="row">
        <div class="mb-3 col">
          <label for="disabledTextInput28" class="form-label">Full Name</label>
          <input
            type="text"
            id="disabledTextInput28"
            class="form-control"
            disabled
            :value="userDetails.driver.contact_person"
          />
        </div>
        <div class="mb-3 col">
          <label for="disabledTextInput29" class="form-label">Relationship</label>
          <input
            type="text"
            id="disabledTextInput29"
            class="form-control"
            disabled
            :value="userDetails.driver.contact_person_relationship"
          />
        </div>
        <div class="mb-3 col">
          <label for="disabledTextInput30" class="form-label"
            >Relationship Phone Number</label
          >
          <input
            type="text"
            id="disabledTextInput30"
            class="form-control"
            disabled
            :value="userDetails.driver.contact_person_phone_number"
          />
        </div>
      </div>
  
      <div class="row">
        <div class="mb-3 col">
          <label for="disabledTextInput31" class="form-label"
            >Relationship Email</label
          >
          <input
            type="text"
            id="disabledTextInput31"
            class="form-control"
            disabled
            :value="userDetails.driver.contact_person_email"
          />
        </div>
  
        <div class="mb-3 col">
          <label for="disabledTextInput32" class="form-label">Address</label>
          <input
            type="text"
            id="disabledTextInput32"
            class="form-control"
            disabled
            :value="userDetails.contact_person_address"
          />
        </div>
      </div>
  
      <div>
        <h6>Documents</h6>
      </div>
  
      <!-- triggers the approveUser method -->
      <button class="btn btn-primary" @click="approveUser(userDetails)">
        Approve
      </button>
      <button class="btn btn-primary" @click="denyUser(userDetails)">Deny</button>
    </fieldset>
  </template>
  
  <script>
  import axios from "redaxios";
  import { ref, onMounted } from "vue";
  import { useAuthStor} from "../../stores/authStore";
  
  export default {
    name: "UserDetails",
    data() {
      return {
        userDetails: {},
        result: {
          account_status: "",
          email: "",
          password: "",
          token: "",
        },
      };
    },
    created() {
      this.fetchUserDetails();
    },
    methods: {
      fetchUserDetails() {
        const userId = this.$route.params.id;
        const authStore = useAuthStore();
        const token = authStore.token;
  
        if (!token) {
          console.error("Token not available");
          return;
        }
  
        axios
          .get(`http://127.0.0.1:8000/api/user/${userId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            this.userDetails = response.data;
          })
          .catch((error) => {
            console.error("Error fetching user details:", error);
          });
      },
  
      async approveUser(userDetails) {
        try {
          const authStore = useAuthStore();
          const token = authStore.token;
  
          // Make a POST request to UserController's endpoint to generate the random password
          const passwordResponse = await axios.post(
            `http://127.0.0.1:8000/api/user/generate-random-password/${userDetails.id}`,
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log("Password generated successfully:", passwordResponse.data);
  
          // Update the account_status to 1
          userDetails.account_status = 1;
  
          // Store the unhashed password
          const unhashedPassword = passwordResponse.data.password;
  
          // Make a PUT request to update the user details including the account_status and hashed password
          const approveResponse = await axios.put(
            `http://127.0.0.1:8000/api/user/approve/${userDetails.id}`,
            userDetails,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log("User approved successfully:", approveResponse.data);
  
          // Show alert that the account has been approved
          alert("Account has been approved!");
  
          // Send approval email with unhashed password
          const emailResponse = await axios.post(
            `http://127.0.0.1:8000/api/user/send-account-approved-email`,
            {
              email: userDetails.email,
              password: unhashedPassword,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log("Approval email sent successfully:", emailResponse.data);
  
          // Fetch updated user details after approval
          this.fetchUserDetails();
        } catch (error) {
          console.error("Error approving user:", error);
        }
      },
  
      async denyUser(userDetails) {
        try {
          const authStore = useAuthStore();
          const token = authStore.token;
  
          userDetails.account_status = 2;
  
          // Generate a unique token
          const denialToken = Math.random().toString(36); // Generates a random alphanumeric token
  
          // Set the generated token to userDetails.token
          userDetails.token = denialToken;
  
          const denyResponse = await axios.put(
            `http://127.0.0.1:8000/api/user/deny/${userDetails.id}`,
            userDetails,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log("User denied successfully:", denyResponse.data);
  
          // Send denial email with the token
          const emailResponse = await axios.post(
            `http://127.0.0.1:8000/api/user/send-account-denied-email`,
            {
              email: userDetails.email,
              token: denialToken,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log("Denial email sent successfully:", emailResponse.data);
  
              // Show alert that the account has been denied
              alert("Account has been denied!");
  
          // Fetch updated user details after denial
          this.fetchUserDetails();
        } catch (error) {
          console.error("Error denying user:", error);
        }
      },
    }, //end before method
  };
  </script>
  