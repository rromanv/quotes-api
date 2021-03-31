<template>
  <h1>Quotes API</h1>
  <p v-if="loading">Loading...</p>
  <ul v-else>
    <li v-for="author in authors" :key="author">
      <router-link :to="`/${author}`">{{ author || 'Anonymous' }}</router-link>
    </li>
  </ul>
</template>

<script setup>
import { onMounted } from 'vue'
import { authors, loading, getAuthors } from '../helpers/useApi'

onMounted(() => {
  getAuthors()
})
</script>
