import React, { Component } from 'react';

export default class SearchBar extends Component {

  // NOTE: JOEL always started his event handlers with an underscore
  _onInputChange(e) {
    console.log(e.target.value)
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <label htmlFor="">Image Search</label>
          <input
            type="text"
            onChange={ this._onInputChange }
          />
        </form>
      </div>
    )
  }
}
