<template>
  <div class="min-h-screen bg-gray-300">
    <div class="flex justify-center">
      <div class="rounded border shadow-sm p-4 my-12 w-4/12 bg-white">
        <h1 class="text-center text-2xl font-semibold">Register Yourself</h1>
        <form
          class="justify-center w-full flex flex-wrap"
          @submit.prevent="submit"
        >
          <div class="justify-center w-full flex flex-wrap mt-10">
            <input
              v-model="form.name"
              type=" text"
              class="rounded border focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-sm p-4 w-9/12"
              placeholder="Your awesome name."
            />
            <error-field :errors="errors" field="name" />
          </div>
          <div class="justify-center w-full flex flex-wrap mt-10">
            <input
              v-model="form.email"
              type=" email"
              class="rounded border shadow-sm p-4 w-9/12 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Your awesome email."
            />
            <error-field :errors="errors" field="email" />
          </div>
          <div class="justify-center w-full flex flex-wrap mt-10">
            <input
              v-model="form.password"
              type="password"
              class="rounded border shadow-sm p-4 w-9/12 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your password "
            />
            <error-field :errors="errors" field="password" />
          </div>
          <div class="justify-center w-full flex flex-wrap mt-10">
            <input
              v-model="form.password_confirmation"
              type="password"
              class="rounded border shadow-sm p-4 w-9/12 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Confirm your password."
            />
            <error-field :errors="errors" field="password_confirmation" />
          </div>
          <div class="justify-center w-full flex flex-wrap m-10">
            <button
              class="rounded border shadow-sm bg-blue-500 w-9/12 p-2 text-white cursor-pointer font-semibold"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ErrorField from '../components/util/ErrorField'

export default {
  components: { ErrorField },
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
      },
      errors: {},
    }
  },
  methods: {
    submit() {
      this.$axios
        .$post('http://localhost:8000/api/register', this.form)
        .then((res) => {
          // this.$router.push('/login')
        })
        .catch((e) => (this.errors = e.response.data.errors))
    },
  },
}
</script>

<style></style>
