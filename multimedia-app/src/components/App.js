import './App.css'
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

  componentDidMount() {
    this._onFormSubmit('George Daniels')
  }

  _onFormSubmit = async (searchTerm) => {
    const response = await youtube.get('/search', {
      params: {
        q: searchTerm
      }
    })

    this.setState({
      videoList: response.data.items,
      selectedVideo: response.data.items[0]
    })
  }

  _onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video
    })
  }

  render() {
    return (
      <div className="ui container">
        <div className="app-name">
          <img
            className="logo"
            src="./images/tu-tubo.png"
            alt="logo"/>
          <h1>TuTubo</h1>
        </div>
        <SearchBar
          onFormSubmit={ this._onFormSubmit }
        />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail
              video={ this.state.selectedVideo }
              />
          </div>
          <div className="five wide column">
            <VideoList
              videoList={ this.state.videoList }
              onVideoSelect={ this._onVideoSelect }
              />
          </div>
        </div>
      </div>
      </div>
    )
  }

}
