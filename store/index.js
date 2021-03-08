export const state = () => ({
    articles: [],
})

export const mutations = {
    SET_ARTICLES(state, payload) {
        state.articles = payload
    },
}

export const actions = {
    nuxtServerInit({ commit }, context) {
        return context.app.$axios
            .$get('https://dev.to/api/articles?username=seankerwin')
            .then((data) => {
                console.log(data)
                commit('SET_ARTICLES', data)
            })
            .catch((e) => {
                console.log(e)
            })
    },
}

export const getters = {
    articles(state) {
        return state.articles
    },
}
