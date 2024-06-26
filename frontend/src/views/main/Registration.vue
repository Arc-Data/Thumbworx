<template>
  <div class="max-w-3xl py-8 mx-auto">
    <div class="p-6 rounded-lg shadow-md bg-background-100">
      <div v-if="step === 1">
        <!-- First Step Form -->
        <h2 class="mb-4 text-xl font-bold">Step 1: Basic Information</h2>
        <form @submit.prevent="step1">
          <div class="mb-4">
            <label class="block text-gray-700">User Type</label>
            <select v-model="form.personal_info.user_type" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="driver">Driver</option>
              <option value="client">Client</option>
            </select>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">First Name</label>
            <input type="text" v-model="form.personal_info.first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Last Name</label>
            <input type="text" v-model="form.personal_info.last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Middle Name</label>
            <input type="text" v-model="form.personal_info.middle_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Birth Date</label>
            <vue-date-picker format="yyyy-MM-dd" v-model="form.personal_info.birth_date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></vue-date-picker>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Email</label>
            <input type="email" v-model="form.personal_info.email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          </div>
          <div class="mb-4">
            <p class="block text-gray-700">Gender</p>
            <div class="flex items-center mb-2">
              <input v-model="form.personal_info.gender" type="radio" value="male" id="genderMale" name="gender" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label for="genderMale" class="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300">Male</label>
            </div>
            <div class="flex items-center mb-2">
              <input v-model="form.personal_info.gender" type="radio" value="female" id="genderFemale" name="gender" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label for="genderFemale" class="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300">Female</label>
            </div>
            <div class="flex items-center mb-2">
              <input v-model="form.personal_info.gender" type="radio" value="other" id="genderOther" name="gender" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label for="genderOther" class="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300">Other</label>
            </div>
          </div>
          <div class="mb-4">
            <p class="block text-gray-700">Marital Status</p>
            <div class="flex items-center mb-2">
              <input type="radio" v-model="form.personal_info.marital_status" value="single" id="maritalSingle" name="maritalStatus" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label for="maritalSingle" class="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300">Single</label>
            </div>
            <div class="flex items-center mb-2">
              <input type="radio" v-model="form.personal_info.marital_status" value="married" id="maritalMarried" name="maritalStatus" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label for="maritalMarried" class="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300">Married</label>
            </div>
            <div class="flex items-center mb-2">
              <input type="radio" v-model="form.personal_info.marital_status" value="divorced" id="maritalDivorced" name="maritalStatus" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label for="maritalDivorced" class="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300">Divorced</label>
            </div>
            <div class="flex items-center mb-2">
              <input type="radio" v-model="form.personal_info.marital_status" value="widowed" id="maritalWidowed" name="maritalStatus" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label for="maritalWidowed" class="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300">Widowed</label>
            </div>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Phone Number</label>
            <input type="text" v-model="form.personal_info.phone_number1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Secondary Phone Number (optional)</label>
            <input type="text" v-model="form.personal_info.phone_number2" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          </div>
          <button type="submit" class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Next</button>
        </form>
      </div>
      <div v-else-if="step === 2">
        <h2 class="mb-4 text-xl font-bold">Step 2: Additional Information </h2>
        <form @submit.prevent="nextStep">
          <div class="mb-4">
            <p class="block text-gray-700">Permanent Address</p>
            <div class="mb-4">
              <label class="block text-gray-700">House Number</label>
              <input type="text" v-model="form.permanent_address.house_number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700">Street</label>
              <input type="text" v-model="form.permanent_address.street" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700">Barangay</label>
              <input type="text" v-model="form.permanent_address.barangay" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700">City</label>
              <input type="text" v-model="form.permanent_address.city" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700">Province</label>
              <input type="text" v-model="form.permanent_address.province" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700">Region</label>
              <input type="text" v-model="form.permanent_address.region" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700">Country</label>
              <input type="text" v-model="form.permanent_address.country" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
          </div>
          <div class="mb-4">
            <p class="block text-gray-700">Current Address</p>
            <div class="mb-4">
              <label class="block text-gray-700">House Number</label>
              <input type="text" v-model="form.current_address.house_number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700">Street</label>
              <input type="text" v-model="form.current_address.street" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700">Barangay</label>
              <input type="text" v-model="form.current_address.barangay" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700">City</label>
              <input type="text" v-model="form.current_address.city" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700">Province</label>
              <input type="text" v-model="form.current_address.province" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700">Region</label>
              <input type="text" v-model="form.current_address.region" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700">Country</label>
              <input type="text" v-model="form.current_address.country" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
          </div>
          <button type="button" @click="prevStep" class="px-4 py-2 font-bold text-white bg-gray-500 rounded hover:bg-gray-700">Previous</button>
          <button type="submit" class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Next</button>
      </form>
      </div>
      <div v-else-if="step === 3">
        <form @submit.prevent="submitForm">

          <div v-if="form.personal_info.user_type === 'driver' || form.personal_info.user_type === 'client'">
            <h2 class="mb-4 text-xl font-bold" v-if="form.personal_info.user_type === 'driver'">Step 3: Additional Information (Driver)</h2>
            <h2 class="mb-4 text-xl font-bold" v-else-if="form.personal_info.user_type === 'client'">Step 3: Additional Information (Client)</h2>

            <div v-if="form.personal_info.user_type === 'driver'">
              <div class="mb-4">
                <label class="block text-gray-700">Contact Person</label>
                <input type="text" v-model="form.driver.contact_person" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              </div>
              <div class="mb-4">
                <label class="block text-gray-700">Relationship with Contact Person</label>
                <input type="text" v-model="form.driver.contact_person_relationship" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              </div>
              <div class="mb-4">
                <label class="block text-gray-700">Contact Person Phone Number</label>
                <input type="text" v-model="form.driver.contact_person_phone_number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              </div>
              <div class="mb-4">
                <label class="block text-gray-700">Contact Person Email</label>
                <input type="text" v-model="form.driver.contact_person_email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              </div>
              <div class="mb-4">
                <label class="block text-gray-700">Contact Person Address</label>
                <input type="text" v-model="form.driver.contact_person_address" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              </div>
            </div>

            <div v-else-if="form.personal_info.user_type === 'client'">
              <div class="mb-4">
                <label class="block text-gray-700">Company Name</label>
                <input type="text" v-model="form.client.company_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              </div>
              <div class="mb-4">
                <label class="block text-gray-700">Company Telephone Number</label>
                <input type="text" v-model="form.client.company_telephone_number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              </div>
              <div class="mb-4">
                <label class="block text-gray-700">Company Address</label>
                <input type="text" v-model="form.client.company_address" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              </div>
            </div>
          </div>

          <h2 class="mb-4 text-xl font-bold" v-else>Please Go Back and Select a User Type</h2>
          <div v-if="form.personal_info.user_type === 'driver' || form.personal_info.user_type === 'client'">
            <button type="button" @click="prevStep" class="px-4 py-2 font-bold text-white bg-gray-500 rounded hover:bg-gray-700">Previous</button>
            <button type="submit" class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Submit</button>
          </div>
          <div v-else>
            <button type="button" @click="prevStep" class="px-4 py-2 font-bold text-white bg-gray-500 rounded hover:bg-gray-700">Previous</button>
          </div>
          </form>
      </div>
      <div v-if="step === 4">
        Success
      </div>
    </div>
  </div>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { useAdminStore } from '../../stores/adminStore';
import apiClient from '../../api/apiClient';

export default {
  name: 'MultistepForm',
  components: { VueDatePicker },
  data() {
    return {
      step: 1,
      form: {
        personal_info: {
          first_name: "",
          last_name: "",
          middle_name: "",
          email: "",
          phone_number1: "",
          phone_number2: "",
          birth_date: "",
          gender: "",
          marital_status: "",
          user_type: "",
          birth_date: null,
        },
        permanent_address: {
          house_number: "",
          street: "",
          barangay: "",
          city: "",
          province: "",
          region: "",
          country: ""
        },
        current_address: {
          house_number: "",
          street: "",
          barangay: "",
          city: "",
          province: "",
          region: "",
          country: ""
        },
        driver: {
          contact_person: "",
          contact_person_relationship: "",
          contact_person_phone_number: "",
          contact_person_email: "",
          contact_person_address: ""
        },
        client: {
          company_name: "",
          company_telephone_number: "",
          company_address: ""
        }
      },
    };
  },
  methods: {
    prevStep() {
      this.step--;
    },
    nextStep() {
      this.step++;
    },
    async step1() {
      try {
        const response = await apiClient.post('api/auth/validateStep1', this.form.personal_info)
        console.log(response)
      }
      catch (error) {
        console.log(error);
      }
    },  
    async submitForm() {
      try {
        if (this.form.personal_info.birth_date) {
          this.form.personal_info.birth_date = new Date(this.form.personal_info.birth_date)
            .toISOString()
            .split('T')[0];
        }

        const payload = {
          personal_info: { ...this.form.personal_info },
          permanent_address: { ...this.form.permanent_address },
          current_address: { ...this.form.current_address },
        };

        if (this.form.personal_info.user_type === 'driver') {
          payload.driver = { ...this.form.driver };
        } else if (this.form.personal_info.user_type === 'client') {
          payload.client = { ...this.form.client };
        }

        const response = await apiClient.post('/api/auth/register', payload);
        if (response.status === "201") {
          this.step++
        }
      } 
      catch (error) {
        console.log("error occcured", error)
      }
    },
  },
};
</script>


