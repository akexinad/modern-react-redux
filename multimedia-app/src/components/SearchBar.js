import React, { Component } from 'react'

export default class SearchBar extends Component {
  state = {
    searchTerm: '',
  }

  _onInputChange = () => {
    
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form">
          <label>Video Search</label>
          <input
            type="text"
            value={ this.state.searchTerm }
            onChange={ this._handleInputChange }
          />
        </form>
      </div>
    )
  }
}
