<template>
  <div>
    <h1>Server</h1>
    <nuxt-link to="/">To Home</nuxt-link>
    <br />
    <button @click="showMessageFromBackend">Show message from backend</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'server',

  methods: {
    async showMessageFromBackend() {
      try {
        const response = await this.$axios.get('/api/hello')
        console.log(response.data)
      } catch (err) {
        console.log(err)
      }
    },
  },
})
</script>

