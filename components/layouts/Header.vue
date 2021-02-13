<template>
  <nav
    class="p-4 shadow-sm bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold"
  >
    <div class="flex justify-between">
      <nuxt-link to="/"> Home </nuxt-link>
      <a href="" @click.prevent="logout" class="cursor-pointer">Logout</a>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$axios.post('http://localhost:8000/api/logout').then((res) => {
        this.$cookies.remove('token')
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
