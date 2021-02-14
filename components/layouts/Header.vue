<template>
  <nav
    class="p-4 shadow-sm bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold"
  >
    <div class="flex justify-between">
      <nuxt-link to="/"> Home </nuxt-link>
      <a v-if="loggedIn" href="" class="cursor-pointer" @click.prevent="logout">
        Logout
      </a>
      <div v-else>
        <nuxt-link to="/register" class="mx-2"> Register</nuxt-link>
        <nuxt-link to="/login" class="mx-2"> Login</nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    loggedIn() {
      return this.$store.state.loggedIn
    },
  },
  methods: {
    logout() {
      this.$axios.post('http://localhost:8000/api/logout').then((res) => {
        this.$cookies.remove('token')
        this.$store.commit('logout')
        this.$router.push('login')
      })
    },
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
