<template>
  <div>
    <h1>Home</h1>
    <div>
      <button class="bg-blue-400 rounded p-3" @click="fetchUser">User</button>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  methods: {
    fetchUser() {
      this.$axios.$post('http://localhost:8000/api/me').then((res) => {
        console.log(res)
      })
    },
  },
}
</script>

<style></style>
