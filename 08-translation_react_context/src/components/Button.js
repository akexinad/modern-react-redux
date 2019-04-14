import React from 'react'

import LanguageContext from '../contexts/LanguageContext.js'

export default class Button extends React.Component {
  // NOTE: contextType is a special variable name
  // static contextType = LanguageContext

  renderSubmit(value) {
    if (value === 'english') {
      return 'Submit'
    } else if (value === 'italian') {
      return 'Inviare'
    } else if (value === 'dutch') {
      return 'Voorleggen'
    }
  }

  render() {
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          { (value) => this.renderSubmit(value) }
        </LanguageContext.Consumer>
      </button>
    )
  }
}


// const text = this.context === 'english' ? 'Submit' : 'Voorleggen'

// { this.renderText() }
