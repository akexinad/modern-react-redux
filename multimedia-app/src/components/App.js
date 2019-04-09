import React, { Component } from 'react'

import youtube from './api/youtube.js'

import SearchBar from './SearchBar.js'
import VideoList from './VideoList.js'
import VideoDetail from './VideoDetail.js'

export default class App extends Component {
  state = {
    videoList: [],
    selectedVideo: null,
  }

  _onFormSubmit = async (searchTerm) => {
    const response = await youtube.get('/search', {
      params: {
        q: searchTerm
      }
    })

    this.setState({
      videoList: response.data.items
    })
  }

  _onVideoSelect = (video) => {
    console.log('From the App', video);
    this.setState({
      selectedVideo: video
    })

    console.log('THIS.STATE.', this.state.selectedVideo);

  }

  render() {
    return (
      <div className="ui container">
        <SearchBar
          onFormSubmit={ this._onFormSubmit }
        />
        <VideoDetail
          video={ this.state.selectedVideo }
        />
        <VideoList
          videoList={ this.state.videoList }
          onVideoSelect={ this._onVideoSelect }
        />
      </div>
    )
  }

}
