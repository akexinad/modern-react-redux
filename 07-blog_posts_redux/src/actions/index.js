import _ from 'lodash'
import jsonPlaceholder from '../api/jsonPlaceholder.js'

// NOTE: When we call an action creator from inside an action creator, we need to make sure that we dispatch the result of calling the action creator
// export const fetchPostsAndUsers = () => async (dispatch, getState) => {
//   await dispatch(fetchPosts())
//
//   const uniqUserIds = _.uniq(_.map(getState().posts, 'userId'))
//   uniqUserIds.forEach( (id) => dispatch(fetchUser(id)) )
// }

// OPTIONAL ACTION CREATOR. MUCH MORE ELEGANT IMO
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts())

  const uniqUserIds = _.uniq(_.map(getState().posts, 'userId'))
  uniqUserIds.forEach( (id) => dispatch(fetchUser(id)) )

  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach( (id) => dispatch(fetchUser(id)) )
    .value() // value() EXECUTES the chaining. NECESSARY
}


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
