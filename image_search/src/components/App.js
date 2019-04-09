import React, { Component } from 'react'

import SearchBar from './SearchBar.js'

export default class App extends Component {
  _onSearchSubmit(inputTerm) {
    console.log(inputTerm);
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
      </div>
    )
  }

}
