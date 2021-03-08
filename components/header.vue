<template>
    <div class="">
        <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-row items-center justify-end">
                <div class="space-x-4">
                    <nuxt-link to="/" class="link">home</nuxt-link>
                    <nuxt-link to="/work" class="link">work</nuxt-link>
                    <nuxt-link to="/articles" class="link">articles</nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style>
.link {
    @apply text-gray-500;
}

.nuxt-link-exact-active {
    @apply text-gray-900;
}
</style>
