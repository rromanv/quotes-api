<template>
  <router-view />
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const authors = ref([])

const quotesAPI = axios.create({
  baseURL: 'https://quote-garden.herokuapp.com/api/v3/',
})

const getAuthors = async () => {
  const resource = 'authors'
  const response = await quotesAPI(resource)
  authors.value = response.data.data
}
</script>
