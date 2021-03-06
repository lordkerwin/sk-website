<template>
    <div class="min-h-screen flex flex-col items-center justify-center">
        <div class="p-2 flex flex-row items-center space-x-6">
            <img
                src="~/assets/img/me.jpg"
                class="rounded-full w-32 ring-4 ring-teal-500 ring-offset-2"
                alt="Sean Kerwin Profile Pic"
            />
            <div>
                <div class="flex flex-col space-y-4">
                    <div class="space-y-2">
                        <div>
                            <div class="text-2xl font-medium">Hey 👋</div>
                            <div class="text-2xl font-medium">
                                I'm
                                <a
                                    href="https://twitter.come/lordkerwin"
                                    target="_blank"
                                    rel="noopener"
                                    >Sean</a
                                >
                            </div>
                        </div>
                        <div>Web & Software Developer from England</div>
                    </div>
                    <div class="space-x-4">
                        <nuxt-link to="/work" class="link"
                            >work &rarr;</nuxt-link
                        >
                        <nuxt-link to="/articles" class="link"
                            >articles &rarr;</nuxt-link
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'home',
}
</script>
