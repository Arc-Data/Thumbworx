<template>
  <!-- <div class="">
    <div class="max-w-3xl py-8 mx-auto">
      <div class="p-6 rounded-lg shadow-md bg-background-100">
        
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
  </div>-->
  <div class="flex min-h-screen bg-background-default">
    <div class="hidden md:block w-[600px] bg-primary-800"></div>
    <div class="flex-1 px-4 py-10 bg-primary-1 00 ">
      <h1 class="text-2xl font-bold text-center">Sign up to Thumbworx</h1>
      <div class="container max-w-2xl mx-auto mt-4">
          <ol class="flex items-center justify-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
              <li 
                :class="step > 1 ? 'text-primary-default' : 'text-gray-500' "
                class="flex md:w-full items-center sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-primary-default after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 ">
                  <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-primary-default ">
                    <svg v-if="step > 1" class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    <span v-else class="me-2">1</span>
                    Personal <span class="hidden sm:inline-flex sm:ms-2">Info</span>
                  </span>
              </li>
              <li 
                :class="step > 2 ? 'text-primary-default' : 'text-gray-500'"
                class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-primary-default after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10">
                  <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-primary-default-200 ">
                      <svg v-if="step > 2" class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                      </svg>
                      <span class="me-2">2</span>
                      Account <span class="hidden sm:inline-flex sm:ms-2">Info</span>
                  </span>
              </li>
              <li class="flex items-center">
                  <span class="me-2">3</span>
                  Confirmation
              </li>
          </ol>
      </div>
      <div class="px-8 md:px-20">
        <step1 v-if="step === 1"
          :personal_info="form.personal_info"
          :errors="errors.value"
          :disabled="disabled"
          @next-step="handleStep1"></step1>
        <step2 v-else-if="step === 2"
          :permanent_address="form.permanent_address"
          :current_address="form.current_address"
          @prev-step="prevStep"
          @next-step="handleStep2"></step2>
      </div>
    </div>
  </div>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

import apiClient from '../../api/apiClient';
import Step1 from '../main/registration/Step1.vue';
import Step2 from '../main/registration/Step2.vue';
import { reactive, ref, watch } from 'vue';

export default {
  name: 'MultistepForm',
  components: { 
    VueDatePicker,
    Step1,
    Step2,
  },
  setup() {
    const disabled = ref(false)
    const step = ref(1)

    const errors = reactive({})
    const form = reactive({
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
    });

    const prevStep = () => {
      step.value--;
    }

    const handleStep1 = async () => {
      disabled.value = true

      try {
        const response = await apiClient.post('api/auth/validateStep1', form.personal_info);
        for (const key in errors) {
          if (errors.hasOwnProperty(key)) {
            delete errors[key];
          }
        }

        if (response.status === 200) {
          step.value++
        }
      } 
      catch(error) {
        console.log(error)
        if (error.status === 422) {
          errors.value = error.data.errors
        }
      }
      finally {
        disabled.value = false
      }
    };

    const handleStep2 = async () => {
      step.value++;
    }

    const nextStep = () => {
      step++;
    }

    const submitForm = async () => {
      try {
        if (form.personal_info.birth_date) {
          form.personal_info.birth_date = new Date(form.personal_info.birth_date)
            .toISOString()
            .split('T')[0];
        }

        const payload = {
          personal_info: { ...form.personal_info },
          permanent_address: { ...form.permanent_address },
          current_address: { ...form.current_address },
        };

        if (form.personal_info.user_type === 'driver') {
          payload.driver = { ...form.driver };
        } else if (form.personal_info.user_type === 'client') {
          payload.client = { ...form.client };
        }

        const response = await apiClient.post('/api/auth/register', payload);
        if (response.status === "201") {
          step.value++;
        }
      } catch (error) {
        console.log("error occurred", error);
      }
    };

    return {
      step,
      form,
      disabled,
      errors,
      
      prevStep,
      nextStep,
      handleStep1,
      handleStep2,
      submitForm,
    };

  }
};
</script>


