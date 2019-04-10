import axios from 'axios'

import { accessKey } from './keys.js'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${ accessKey }`,
  }
})
