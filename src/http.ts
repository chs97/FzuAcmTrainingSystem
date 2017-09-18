import * as axios from 'axios'
const http = axios.default.create({
  baseURL: 'https://api.example.com'
})

export { http }
