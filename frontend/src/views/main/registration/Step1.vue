<template>
    <div class="">
        <h2 class="mb-4 text-xl font-bold">Step 1: Basic Information</h2>
        <form @submit.prevent="submitForm">
        <div class="mb-4">
            <label class="block text-gray-700">User Type</label>
            <select v-model="personal_info.user_type" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            <option value="driver">Driver</option>
            <option value="client">Client</option>
            </select>
            <span v-if="errors && errors.user_type" class="text-red-500">{{ errors.user_type[0] }}</span>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700">First Name</label>
            <input type="text" v-model="personal_info.first_name" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            <span v-if="errors && errors.first_name" class="text-red-500">{{ errors.first_name[0] }}</span>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700">Last Name</label>
            <input type="text" required v-model="personal_info.last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            <span v-if="errors && errors.last_name" class="text-red-500">{{ errors.last_name[0] }}</span>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700">Middle Name</label>
            <input type="text" required v-model="personal_info.middle_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            <span v-if="errors && errors.middle_name" class="text-red-500">{{ errors.middle_name[0] }}</span>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700">Birth Date</label>
            <vue-date-picker required format="yyyy-MM-dd" v-model="personal_info.birth_date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"></vue-date-picker>
            <span v-if="errors && errors.birth_date" class="text-red-500">{{ errors.birth_date[0] }}</span>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700">Email</label>
            <input type="email" required v-model="personal_info.email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            <span v-if="errors && errors.email" class="text-red-500">{{ errors.email[0] }}</span>
        </div>
        <div class="mb-4">
            <p class="block text-gray-700">Gender</p>
            <div class="flex items-center mb-2">
            <input v-model="personal_info.gender" type="radio" value="male" id="genderMale" name="gender" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500">
            <label for="genderMale" class="text-sm font-medium text-gray-900 ms-2">Male</label>
            </div>
            <div class="flex items-center mb-2">
            <input v-model="personal_info.gender" type="radio" value="female" id="genderFemale" name="gender" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500">
            <label for="genderFemale" class="text-sm font-medium text-gray-900 ms-2">Female</label>
            </div>
            <div class="flex items-center mb-2">
            <input v-model="personal_info.gender" type="radio" value="other" id="genderOther" name="gender" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500">
            <label for="genderOther" class="text-sm font-medium text-gray-900 ms-2">Other</label>
            </div>
            <span v-if="errors && errors.gender" class="text-red-500">{{ errors.gender[0] }}</span>
        </div>
        <div class="mb-4">
            <p class="block text-gray-700">Marital Status</p>
            <div class="flex items-center mb-2">
            <input type="radio" v-model="personal_info.marital_status" value="single" id="maritalSingle" name="maritalStatus" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500">
            <label for="maritalSingle" class="text-sm font-medium text-gray-900 ms-2">Single</label>
            </div>
            <div class="flex items-center mb-2">
            <input type="radio" v-model="personal_info.marital_status" value="married" id="maritalMarried" name="maritalStatus" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500">
            <label for="maritalMarried" class="text-sm font-medium text-gray-900 ms-2">Married</label>
            </div>
            <div class="flex items-center mb-2">
            <input type="radio" v-model="personal_info.marital_status" value="divorced" id="maritalDivorced" name="maritalStatus" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500">
            <label for="maritalDivorced" class="text-sm font-medium text-gray-900 ms-2">Divorced</label>
            </div>
            <div class="flex items-center mb-2">
            <input type="radio" v-model="personal_info.marital_status" value="widowed" id="maritalWidowed" name="maritalStatus" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500">
            <label for="maritalWidowed" class="text-sm font-medium text-gray-900 ms-2">Widowed</label>
            </div>
            <span v-if="errors && errors.marital_status" class="text-red-500">{{ errors.marital_status[0] }}</span>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700">Phone Number</label>
            <input type="text" required v-model="personal_info.phone_number1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            <span v-if="errors && errors.phone_number1" class="text-red-500">{{ errors.phone_number1[0] }}</span>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700">Secondary Phone Number (optional)</label>
            <input type="text" required v-model="personal_info.phone_number2" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            <span v-if="errors && errors.phone_number2" class="text-red-500">{{ errors.phone_number2[0] }}</span>
        </div>
        <button type="submit" :disabled="disabled" class="text-sm font-medium text-white bg-primary-default disabled:bg-primary-200 py-2.5 px-5 rounded-lg text-center">
            <span v-if="disabled">
                <svg aria-hidden="true" role="status" v-if="disabled" class="inline w-4 h-4 text-white me-3 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                </svg>
                Loading...
            </span>
            <span v-else>
                Next
            </span>
        </button>
        </form>
    </div>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

export default {
    name: 'Step1',
    components: {
        VueDatePicker,
    },
    props: {
        personal_info: Object,
        errors: Object,
        disabled: Boolean,
    },
    setup(props, { emit }) {
        const submitForm = () => {
            emit('submit-step1');
        }

        return {
            submitForm,
        }
    }
}
</script>
