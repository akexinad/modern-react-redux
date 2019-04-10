import React, { Component } from 'react'
import { connect } from 'react-redux'

class SongList extends Component {
  render() {
    return (
      <div>
        SongList
      </div>
    )
  }
}

// State holds our song list and selected song which is in our reducer
const mapStateToProps = (state) => {

}

export default connect()(SongList)
// Connect is actually a react component in the world redux
// The connect component gets out our list of songs from our Provider component [also a component in the world of redux]
