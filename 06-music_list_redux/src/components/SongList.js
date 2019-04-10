import React, { Component } from 'react'
import { connect } from 'react-redux'

import { selectSong } from '../actions'

class SongList extends Component {
  renderSongList() {
    return this.props.songs.map( (song) => {
      return (
        <div
          className="item"
          key={ song.title }
        >
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={ () => this.props.selectSong(song) }
            >
              Select
            </button>
          </div>
          <div className="content">
            { song.title}
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="ui divided list">
        { this.renderSongList() }
      </div>
    )
  }
}

// State holds our song list and selected song which is in our reducer
const mapStateToProps = (state) => {
  return {
    songs: state.songs
  }
}

// NOTE: DISPATCHING HAPPENS HERE IN THE CONNECTION
export default connect(
  mapStateToProps,
  { selectSong }
)(SongList)
// Connect is actually a react component in the world redux
// The connect component gets out our list of songs from our Provider component [also a component in the world of redux]
