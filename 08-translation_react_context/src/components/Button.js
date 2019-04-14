import React from 'react'

import LanguageContext from '../contexts/LanguageContext.js'

export default class Button extends React.Component {
  // NOTE: contextType is a special variable name
  static contextType = LanguageContext

  renderText() {
    if (this.context === 'english') {
      return 'Submit'
    } else if (this.context === 'italian') {
      return 'Inviare'
    } else if (this.context === 'dutch') {
      return 'Voorleggen'
    }
  }

  render() {
    return (
      <button className="ui button primary">
        { this.renderText() }
      </button>
    )
  }
}


// const text = this.context === 'english' ? 'Submit' : 'Voorleggen'
