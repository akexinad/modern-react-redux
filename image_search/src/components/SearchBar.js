import React, { Component } from 'react'

export default class SearchBar extends Component {
  state = {
    inputTerm: '',
  }

  _onFormSubmit = (event) => {
    event.preventDefault()
    // console.log(this.state.inputTerm)
    this.props.onSubmit(this.state.inputTerm)
  }

  render() {
    return (
      <div className="ui segment">
        <form
          className="ui form"
          onSubmit={ this._onFormSubmit }
        >
          <label>Image Search</label>
          <input
            type="text"
            // onChange={ this._onInputChange }
            value={ this.state.inputTerm } // this is to ensure that the input value is stored in our react state and not in the DOM.
            onChange={ (e) => this.setState({ inputTerm: e.target.value }) }
          />
        </form>
      </div>
    )
  }
}
