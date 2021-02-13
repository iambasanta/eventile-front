<template>
  <span v-if="errors[field]" class="w-9/12 mt-2 text-red-500 text-semibold"
    >{{ errors[field][0] }}
  </span>
</template>

<script>
export default {
  props: {
    errors: {
      type: Object,
      default: () => ({}),
    },
    field: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style></style>
