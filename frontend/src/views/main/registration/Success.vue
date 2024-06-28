<template>
    <div class="container p-4 mx-auto mt-4 rounded-md bg-primary-100 ">
        <div class="flex items-center gap-2">
            <span class="material-icons text-primary-default">check_circle</span>
            <h1 class="text-2xl font-bold">Account Created</h1>
        </div>
        <p class="mt-2">Please check your email for more details</p>
        <router-link to="/login" class="text-sm text-center text-accent-default">Go to login</router-link>
    </div>
</template>

<script>
export default {
    name: 'Success',
}
</script>
