<template>
	<div class="mt-4">
		<form @submit.prevent="$emit('next-step')">
			<p class="block my-4 text-xl font-bold text-center text-text-400">Permanent Address</p>
			<div class="grid grid-cols-2 gap-4">
				<div>
					<label class="block mb-2 text-sm text-text-default">House Number</label>
					<input type="text" v-model="permanent_address.house_number" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
					<span v-if="errors && errors.permanent_address?.house_number" class="text-red-500">{{ errors.permanent_address.house_number[0] }}</span>
				</div>
				<div>
					<label class="block mb-2 text-sm text-text-default">Street</label>
					<input type="text" v-model="permanent_address.street" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
					<span v-if="errors && errors.permanent_address?.street" class="text-red-500">{{ errors.permanent_address.street[0] }}</span>
				</div>
				<div>
					<label class="block mb-2 text-sm text-text-default">Barangay</label>
					<input type="text" v-model="permanent_address.barangay" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
					<span v-if="errors && errors.permanent_address?.barangay" class="text-red-500">{{ errors.permanent_address.barangay[0] }}</span>
				</div>
				<div>
					<label class="block mb-2 text-sm text-text-default">City</label>
					<input type="text" v-model="permanent_address.city" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
					<span v-if="errors && errors.permanent_address?.city" class="text-red-500">{{ errors.permanent_address.city[0] }}</span>
				</div>
				<div>
					<label class="block mb-2 text-sm text-text-default">Province</label>
					<input type="text" v-model="permanent_address.province" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
					<span v-if="errors && errors.permanent_address?.province" class="text-red-500">{{ errors.permanent_address.province[0] }}</span>
				</div>
				<div>
					<label class="block mb-2 text-sm text-text-default">Region</label>
					<input type="text" v-model="permanent_address.region" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
					<span v-if="errors && errors.permanent_address?.region" class="text-red-500">{{ errors.permanent_address.region[0] }}</span>
				</div>
				<div>
					<label class="block mb-2 text-sm text-text-default">Country</label>
					<input type="text" v-model="permanent_address.country" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
					<span v-if="errors && errors.permanent_address?.country" class="text-red-500">{{ errors.permanent_address.country[0] }}</span>
				</div>
			</div>
	
			<label class="flex items-center gap-2 my-4 text-text-default">
				<input type="checkbox" class="size-5" :checked="sameAddress" @change="$emit('update:sameAddress', $event.target.checked)" />
				<span>My current address is the same as my permanent address</span>
			</label>
		
			<p v-if="!sameAddress" class="block my-4 text-xl font-bold text-center text-secondary-default">Current Address</p>
			<div v-if="!sameAddress" class="grid grid-cols-2 gap-4">
				<div>
					<label class="block text-text-default">House Number</label>
					<input type="text" v-model="current_address.house_number" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
					<span v-if="errors && errors.current_address?.house_number" class="text-red-500">{{ errors.current_address.house_number[0] }}</span>
				</div>
				<div>
					<label class="block text-text-default">Street</label>
					<input type="text" v-model="current_address.street" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
					<span v-if="errors && errors.current_address?.street" class="text-red-500">{{ errors.current_address.street[0] }}</span>
				</div>
				<div>
					<label class="block text-text-default">Barangay</label>
					<input type="text" v-model="current_address.barangay" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
					<span v-if="errors && errors.current_address?.barangay" class="text-red-500">{{ errors.current_address.barangay[0] }}</span>
				</div>
				<div>
					<label class="block text-text-default">City</label>
					<input type="text" v-model="current_address.city" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
					<span v-if="errors && errors.current_address?.city" class="text-red-500">{{ errors.current_address.city[0] }}</span>
				</div>
				<div>
					<label class="block text-text-default">Province</label>
					<input type="text" v-model="current_address.province" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
					<span v-if="errors && errors.current_address?.province" class="text-red-500">{{ errors.current_address.province[0] }}</span>
				</div>
				<div>
					<label class="block text-text-default">Region</label>
					<input type="text" v-model="current_address.region" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
					<span v-if="errors && errors.current_address?.region" class="text-red-500">{{ errors.current_address.region[0] }}</span>
				</div>
				<div>
					<label class="block text-text-default">Country</label>
					<input type="text" v-model="current_address.country" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
					<span v-if="errors && errors.current_address?.country" class="text-red-500">{{ errors.current_address?.country[0] }}</span>
				</div>
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
						Next
					</span>
				</button>
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
	errors: Object,
	disabled: Boolean,
	sameAddress: Boolean,
},
setup(props, { emit }) {
	watch(() => props.errors, () => console.log(props.errors))
	watch(
		() => props.sameAddress,
		(newVal) => {
		if (newVal) {
			emit('update:current_address');
		}
		}
	);
},
};
</script>

