export const state = () => ({
  loggedIn: false,
})

export const mutations = {
  setLogin(state) {
    state.loggedIn = true
  },
  logout(state) {
    state.loggedIn = false
  },
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    const token = this.$cookies.get('token')
    if (token) {
      commit('setLogin')
    }
  },
}
