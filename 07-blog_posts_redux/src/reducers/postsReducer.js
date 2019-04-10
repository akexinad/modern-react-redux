// NOTE: REDUCERS MUST BE PURE, THAT IS THEIR OUTPUT SHOULD ONLY RETURN THE INPUTS PROVIDED VIA THEIR ARGUMENTS AND NOT REACH OUTSIDE FOR DATA.
// NOTE: DO NOT MUTATE THE STATE

export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload
    default:
      return state
  }
}
