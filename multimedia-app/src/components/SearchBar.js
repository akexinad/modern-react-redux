import React, { Component } from 'react'

export default class SearchBar extends Component {
  state = {
    searchTerm: '',
  }

  _handleInputChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  _onSubmit = (event) => {
    event.preventDefault()

    // TODO: Make sure we call callback from parent component
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form
          className="ui form"
          onSubmit={ this._onSubmit }
        >
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
