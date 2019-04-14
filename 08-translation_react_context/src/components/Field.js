import React from 'react'

import LanguageContext from '../contexts/LanguageContext.js'

export default class Field extends React.Component {
  static contextType = LanguageContext

  renderText() {
    if (this.context === 'english') {
      return 'Name'
    } else if (this.context === 'italian') {
      return 'Nome'
    } else if (this.context === 'dutch') {
      return 'Naam'
    }
  }

  render() {
    return (
      <div className="ui field">
        <label>{ this.renderText() }</label>
        <input />
      </div>
    )
  }
}
