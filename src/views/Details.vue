<template>
  <h1>Quotes from {{ params.author }}</h1>
  <ul>
    <li v-for="quote in quotes" :key="quote._id">
      {{ quote.quoteText }}
    </li>
  </ul>
  <router-link to="/">Go Back</router-link>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { quotes, getQuotesFrom } from '../helpers/useApi'

const { params } = useRoute()

onMounted(() => {
  getQuotesFrom(params.author)
})
</script>
