import _ from 'lodash'
import jsonPlaceholder from '../api/jsonPlaceholder.js'

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts')

  dispatch({
    type: 'FETCH_POSTS',
    payload: response.data
  })
}

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${ id }`)

  dispatch({
    type: 'FETCH_USER',
    payload: response.data
  })
}

// export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch)
//
// The _ in _fetchUser means that this is a PRIVATE FUNCTION
// const _fetchUser = _.memoize( async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${ id }`)
//
//   dispatch({
//     type: 'FETCH_USER',
//     payload: response.data
//   })
// })
