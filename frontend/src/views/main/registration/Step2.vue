<template>
    <div class="mt-4">
      <form @submit.prevent="handleNextStep">
        
        <p class="block my-4 text-xl font-bold text-center text-text-400">Permanent Address</p>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block mb-2 text-sm text-text-default">House Number</label>
            <input type="text" v-model="permanent_address.house_number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
          </div>
          <div>
            <label class="block mb-2 text-sm text-text-default">Street</label>
            <input type="text" v-model="permanent_address.street" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
          </div>
          <div>
            <label class="block mb-2 text-sm text-text-default">Barangay</label>
            <input type="text" v-model="permanent_address.barangay" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
          </div>
          <div>
            <label class="block mb-2 text-sm text-text-default">City</label>
            <input type="text" v-model="permanent_address.city" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
          </div>
          <div>
            <label class="block mb-2 text-sm text-text-default">Province</label>
            <input type="text" v-model="permanent_address.province" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
          </div>
          <div>
            <label class="block mb-2 text-sm text-text-default">Region</label>
            <input type="text" v-model="permanent_address.region" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
          </div>
          <div>
            <label class="block mb-2 text-sm text-text-default">Country</label>
            <input type="text" v-model="permanent_address.country" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
          </div>
        </div>
        <label class="flex items-center gap-2 my-4 text-text-default">
          <input type="checkbox" class="size-5" v-model="sameAddress" /> 
          <span>My current address is the same as my permanent address</span>
        </label>
  
  
        <p v-if="!sameAddress" class="block my-4 text-xl font-bold text-center text-secondary-default">Current Address</p>
        <div v-if="!sameAddress" class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-text-default">House Number</label>
            <input type="text" v-model="current_address.house_number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
          </div>
          <div>
            <label class="block text-text-default">Street</label>
            <input type="text" v-model="current_address.street" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
          </div>
          <div>
            <label class="block text-text-default">Barangay</label>
            <input type="text" v-model="current_address.barangay" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
          </div>
          <div>
            <label class="block text-text-default">City</label>
            <input type="text" v-model="current_address.city" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
          </div>
          <div>
            <label class="block text-text-default">Province</label>
            <input type="text" v-model="current_address.province" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
          </div>
          <div>
            <label class="block text-text-default">Region</label>
            <input type="text" v-model="current_address.region" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
          </div>
          <div>
            <label class="block text-text-default">Country</label>
            <input type="text" v-model="current_address.country" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
          </div>
        </div>
        
        <div class="flex justify-end gap-2 mt-8">
          <button type="button" @click="handlePrevStep" class="text-sm font-medium bg-secondary-300 text-text-default disabled:bg-primary-200 py-2.5 px-5 rounded-lg text-center">Previous</button>
          <button type="submit" class="text-sm bg-primary-default font-medium text-text-default disabled:bg-primary-200 py-2.5 px-5 rounded-lg text-center">Next</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import { ref, watch } from 'vue';
  
  export default {
    name: 'Step2',
    props: {
      permanent_address: Object,
      current_address: Object,
    },
    setup(props, { emit }) {
      const sameAddress = ref(false);
  
      watch(
        () => sameAddress.value,
        (newVal) => {
          if (newVal) {
            props.current_address.house_number = props.permanent_address.house_number;
            props.current_address.street = props.permanent_address.street;
            props.current_address.barangay = props.permanent_address.barangay;
            props.current_address.city = props.permanent_address.city;
            props.current_address.province = props.permanent_address.province;
            props.current_address.region = props.permanent_address.region;
            props.current_address.country = props.permanent_address.country;
          }
        }
      );
  
      const handlePrevStep = () => {
        emit('prev-step');
      };
  
      const handleNextStep = () => {
        console.log(props.permanent_address)
        console.log(props.current_address)
        emit('next-step');
      };
  
      return {
        sameAddress,
        handleNextStep,
        handlePrevStep,
      };
    },
  };
  </script>
  