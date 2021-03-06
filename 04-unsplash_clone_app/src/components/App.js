import React, { Component } from 'react'

import unsplash from '../api/unsplash.js'

import SearchBar from './SearchBar.js'
import ImageList from './ImageList.js'

export default class App extends Component {
  state = {
    images: [],
  }

  _onSearchSubmit = async (inputTerm) => {
    const response = await unsplash
      .get('/search/photos', {
        params: {
          query: inputTerm
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
      style={{ marginTop: '10px' }}
      >
      <SearchBar
        onSubmit={ this._onSearchSubmit }
      />
      <ImageList
        images={ this.state.images }
      />
      </div>
    )
  }

}
