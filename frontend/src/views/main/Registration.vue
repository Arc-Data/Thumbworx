<template>
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
                      Address <span class="hidden sm:inline-flex sm:ms-2">Info</span>
                  </span>
              </li>
              <li 
                :class="step > 3 ? 'text-primary-default' : 'text-gray-500'"
                class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-primary-default after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10">
                  <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-primary-default-200 ">
                      <svg v-if="step > 3" class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                      </svg>
                      <span class="me-2">3</span>
                      Additional <span class="hidden sm:inline-flex sm:ms-2">Info</span>
                  </span>
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
          :sameAddress="sameAddress"
          :errors="errors.value"
          :disabled="disabled"
          @update:sameAddress="updateSameAddress"
          @prev-step="prevStep"
          @next-step="handleStep2"></step2>
        <ClientStep3 v-if="step === 3 && form.personal_info.user_type === 'client'"
          :client="form.client"
          :errors="errors.value"
          :disabled="disabled"
          @prev-step="prevStep"
          @next-step="handleStep3"></ClientStep3>
        <DriverStep3 v-if="step === 3 && form.personal_info.user_type === 'driver'"
          :driver="form.driver" 
          :errors="errors.value"
          :disabled="disabled"
          @next-step="handleStep3"
          @prev-step="prevStep"></DriverStep3>
        <Success v-if="step === 4"></Success>
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
import ClientStep3 from '../main/registration/ClientStep3.vue';
import DriverStep3 from './registration/DriverStep3.vue';
import Success from './registration/Success.vue';

export default {
  name: 'MultistepForm',
  components: { 
    VueDatePicker,
    Step1,
    Step2,
    ClientStep3,
    DriverStep3,
    Success,
  },
  setup(props) {
    const disabled = ref(false)
    const step = ref(1)

    const errors = reactive({})
    const sameAddress = ref(false)
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
        if (error.status === 422) {
          errors.value = error.data.errors
        }
      }
      finally {
        disabled.value = false
      }
    };

    const handleStep2 = async () => {
      disabled.value = true 

      for (const key in errors) {
        if (errors.hasOwnProperty(key)) {
          delete errors[key];
        }
      }

      try {
        const response = await apiClient.post('api/auth/validateStep2', {
          "current_address": form.current_address,
          "permanent_address": form.permanent_address,
        })

        if (response.status === 200) {
          step.value++;
        }

      }
      catch (error) {
        if (error.status === 422) {
          errors.value = error.data.errors
        }
      }
      finally {
        disabled.value = false
      }

    }

    const handleStep3 = async () => {
      disabled.value = true

      const url = form.personal_info.user_type === "driver" ? '/api/auth/driverValidateStep3' : '/api/auth/clientValidateStep3'
      const payload = form.personal_info.user_type === "driver" ? form.driver : form.client;

      for (const key in errors) {
        if (errors.hasOwnProperty(key)) {
          delete errors[key];
        }
      }
      
      try {
        const response = await apiClient.post(url, payload)
        
        if (response.status === 200) {
          step.value++
          submitForm()
        }
      
      } 
      catch (error) {
        console.log(error)
        if (error.status === 422) {
          errors.value = error.data.errors
        } 
      } 
      finally {
        disabled.value = false
      }    
    }

    const updateSameAddress = () => {
      sameAddress.value = !sameAddress.value
      if (sameAddress.value) {
        form.current_address = { ...form.permanent_address };
      }
    }

    const prepData = () => {
      if (form.personal_info.birth_date) {
        form.personal_info.birth_date = new Date(form.personal_info.birth_date)
          .toISOString()
          .split('T')[0];
      }

      // i actually doubt ill need this but ill keep it for now
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

      return payload
    }

    const submitForm = async () => {
      const payload = prepData()

      try {
        const response = await apiClient.post('/api/auth/register', payload);
        console.log(response)
        for (const key in errors) {
          if (errors.hasOwnProperty(key)) {
            delete errors[key];
          }
        }
        
        if (response.status === 200) {
          step.value++;
        }
      } 
      catch (error) {
        console.log(error)
        if (error.status === 422) {
          errors.value = error.data.errors
        }
      }
      finally {
        disabled.value = false;
      }
    };

    return {
      step,
      form,
      disabled,
      errors,
      sameAddress,
      
      prevStep,
      handleStep1,
      handleStep2,
      handleStep3,
      submitForm,
      updateSameAddress,
    };

  }
};
</script>


