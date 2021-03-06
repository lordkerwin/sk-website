<template>
    <div>
        <header class="my-10">
            <app-header></app-header>
        </header>
        <main class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <Nuxt />
        </main>
    </div>
</template>

<script>
import Header from '@/components/header'
export default {
    components: {
        AppHeader: Header,
    },
}
</script>
