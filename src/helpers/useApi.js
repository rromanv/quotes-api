import { ref } from 'vue'
import axios from 'axios'

export const authors = ref([])

export const quotes = ref([])

export const loading = ref(false)

const quotesAPI = axios.create({
  baseURL: 'https://quote-garden.herokuapp.com/api/v3/',
})

export const getAuthors = async () => {
  loading.value = true
  const resource = 'authors'
  const response = await quotesAPI(resource)
  loading.value = false
  authors.value = response.data.data
}

export const getQuotesFrom = async name => {
  const resource = 'quotes'
  const response = await quotesAPI(resource, {
    params: {
      author: name,
    },
  })
  quotes.value = response.data.data
}
