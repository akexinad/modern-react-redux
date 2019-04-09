import React, { Component } from 'react'
import axios from 'axios'

import { accessKey, secretKey } from '../unsplash.js'

import SearchBar from './SearchBar.js'

export default class App extends Component {
  state = {
    images: [],
  }

  _onSearchSubmit = async (inputTerm) => {
    const response = await axios
      .get('https://api.unsplash.com/search/photos', {
        params: {
          query: inputTerm,
        },
        headers: {
          Authorization: `Client-ID ${ accessKey }`,
        }
      })

    this.setState({
      images: response.data.results
    })
  }

  render() {
    return (
      <div
      className="ui container"
      style={{ marginTop: '2em' }}
      >
      <SearchBar
        onSubmit={ this._onSearchSubmit }
      />
      Found: { this.state.images.length }
      </div>
    )
  }

}
