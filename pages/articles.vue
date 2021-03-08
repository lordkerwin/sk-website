<template>
    <div class="articles">
        <h1 class="mb-10 text-xl font-medium">Articles</h1>

        <div class="flex flex-col space-y-10">
            <article
                v-for="article in articles"
                :key="article.id"
                class="space-y-2"
            >
                <a :href="article.canonical_url">
                    <h1 class="font-medium">{{ article.title }}</h1>
                </a>
                <p>{{ article.description }}</p>
                <div class="flex flex-row space-x-4">
                    <div class="flex flex-row space-x-1 items-center">
                        <svg
                            class="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                        <span>
                            {{ $dayjs(article.published_at).fromNow() }}
                        </span>
                    </div>
                    <div class="flex flex-row space-x-1 items-center">
                        <svg
                            class="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                        <span>{{ article.public_reactions_count }}</span>
                    </div>
                    <div class="flex flex-row space-x-1 items-center">
                        <svg
                            class="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                        <span>{{ article.comments_count }}</span>
                    </div>
                </div>
            </article>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(['articles']),
    },
}
</script>

<style></style>
