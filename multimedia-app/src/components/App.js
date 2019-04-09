import React, { Component } from 'react'

import youtube from './api/youtube.js'

import SearchBar from './SearchBar.js'

export default class App extends Component {
  state = {
    videoList: []
  }

  _onSearchTermSubmit = async (searchTerm) => {
    const response = await youtube.get('/search', {
      params: {
        q: searchTerm
      }
    })

    this.setState({
      videoList: response.data.items
    })

    console.log(this.state.videoList);
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar
          onFormSubmit={ this._onSearchTermSubmit }
        />
      </div>
    )
  }

}
