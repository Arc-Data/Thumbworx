<template>
	<form @submit.prevent="$emit('next-step')" class="grid gap-4 mt-4">
        <div>
            <label class="block mb-2 text-sm text-text-default">Contact Person</label>
            <input type="text" v-model="driver.contact_person" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <span v-if="errors && errors.contact_person" class="text-sm text-red-500">{{ errors.contact_person[0] }}</span>
        </div>
        <div>
            <label class="block mb-2 text-sm text-text-default">Relationship with Contact Person</label>
            <input type="text" v-model="driver.contact_person_relationship" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <span v-if="errors && errors.contact_person_relationship" class="text-sm text-red-500">{{ errors.contact_person_relationship[0] }}</span>
        </div>
        <div>
            <label class="block mb-2 text-sm text-text-default">Contact Person Phone Number</label>
            <input type="text" v-model="driver.contact_person_phone_number" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <span v-if="errors && errors.contact_person_phone_number" class="text-sm text-red-500">{{ errors.contact_person_phone_number[0] }}</span>
        </div>
        <div>
            <label class="block mb-2 text-sm text-text-default">Contact Person Email</label>
            <input type="text" v-model="driver.contact_person_email" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <span v-if="errors && errors.contact_person_email" class="text-sm text-red-500">{{ errors.contact_person_email[0] }}</span>
        </div>
        <div>
            <label class="block mb-2 text-sm text-text-default">Contact Person Address</label>
            <input type="text" v-model="driver.contact_person_address" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <span v-if="errors && errors.contact_person_address" class="text-sm text-red-500">{{ errors.contact_person_address[0] }}</span>
        </div>

        <div class="flex justify-end gap-2 mt-8">
            <button v-if="!disabled" type="button" @click="$emit('prev-step')" class="text-sm font-medium bg-secondary-300 text-text-default disabled:bg-primary-200 py-2.5 px-5 rounded-lg text-center">Previous</button>
            <button type="submit" :disabled="disabled" class="text-sm font-medium text-white bg-primary-default disabled:bg-primary-200 py-2.5 px-5 rounded-lg text-center">
                <span v-if="disabled">
                    <svg aria-hidden="true" role="status" v-if="disabled" class="inline w-4 h-4 text-white me-3 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                    </svg>
                    Loading...
                </span>
                <span v-else>
                    Submit
                </span>
            </button>
        </div>
    </form>
</template>

<script>
export default {
    name: 'DriverStep3',
    props: {
        driver: Object,
        errors: Object,
        disabled: Boolean,
    },
    setup() {
      
    }
}
</script>
