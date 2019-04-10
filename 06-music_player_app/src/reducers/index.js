import { combineReducers } from 'redux'

const songsReducer = () => {
  return [
    {
      title: 'The End',
      duration: '11:41'
    }, {
      title: 'Little Wing',
      duration: '2.26'
    }, {
      title: 'Ho Perso Le Parole',
      duration: '4.28'
    }, {
      title: 'Quando Tocca A Te',
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
