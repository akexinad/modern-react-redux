import React, { Component } from 'react';

export default class SearchBar extends Component {

  constructor() {
    super()
    this.state = ({
      term: '',
    })
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <label htmlFor="">Image Search</label>
          <input
            type="text"
            // onChange={ this._onInputChange }
            value={ this.state.term }
            onChange={ (e) => this.setState({ term: e.target.value }) }
          />
        </form>
      </div>
    )
  }
}
