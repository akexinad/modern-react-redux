import { combineReducers } from 'redux'

const songsReducer = () => {
  return [
    {
      title: 'the end',
      duration: '11:41'
    }, {
      title: 'little wing',
      duration: '2.26'
    }, {
      title: 'ho perso le parole',
      duration: '4.28'
    }, {
      title: 'quando tocca a te',
      duration: '5:31'
    }
  ]
}

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }

  return selectedSong
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})
