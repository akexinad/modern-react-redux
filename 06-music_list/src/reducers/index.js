import { combineReducers } from 'redux'

const songsReducer = () => {
  return [
    {
      title: 'The End',
      band: 'The Doors',
      duration: '11:41'
    }, {
      title: 'Little Wing',
      band: 'The Jimi Hendrix Experience',
      duration: '2.26'
    }, {
      title: 'Ho Perso Le Parole',
      band: 'Ligabue',
      duration: '4.28'
    }, {
      title: 'Quando Tocca A Te',
      band: 'Ligabue',
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
