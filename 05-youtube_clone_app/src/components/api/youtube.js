import axios from 'axios'

import api from './keys.js'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: '5',
    key: api.KEY,
  }
})
