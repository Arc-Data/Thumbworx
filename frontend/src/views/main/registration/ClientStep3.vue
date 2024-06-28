<template>
    <form @submit.prevent="$emit('next-step')" class="grid gap-4 mt-4">
        <div>
            <label class="block mb-2 text-sm text-text-default ">Company Name</label>
            <input type="text" v-model="client.company_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <span v-if="errors && errors.company_name" class="text-sm text-red-500">{{ errors.company_name[0] }}</span>
        </div>
        <div>
            <label class="block mb-2 text-sm text-text-default ">Company Telephone Number</label>
            <input type="text" v-model="client.company_telephone_number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <span v-if="errors && errors.company_telephone_number" class="text-sm text-red-500">{{ errors.company_telephone_number[0] }}</span>
        </div>
        <div>
            <label class="block mb-2 text-sm text-text-default ">Company Address</label>
            <input type="text" v-model="client.company_address" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <span v-if="errors && errors.company_address" class="text-sm text-red-500">{{ errors.company_address[0] }}</span>
        </div>
        <div class="flex justify-end gap-2 mt-8">
          <button type="button" @click="$emit('prev-step')" class="text-sm font-medium bg-secondary-300 text-text-default disabled:bg-primary-200 py-2.5 px-5 rounded-lg text-center">Previous</button>
          <button type="submit" class="text-sm bg-primary-default font-medium text-text-default disabled:bg-primary-200 py-2.5 px-5 rounded-lg text-center">Next</button>
        </div>
    </form>
</template>

<script>
export default {
    name: 'ClientStep3',
    props: {
        client: Object,
        errors: Object,
    },
}
</script>
