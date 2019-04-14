import React from 'react'

import LanguageContext from '../contexts/LanguageContext.js'

export default class Button extends React.Component {
  // NOTE: contextType is a special variable name
  // static contextType = LanguageContext

  renderSubmit(value) {
    if (this.context === 'english') {
      value = 'Submit'
    } else if (this.context === 'italian') {
      value = 'Inviare'
    } else if (this.context === 'dutch') {
      value = 'Voorleggen'
    }

    return value
  }

  render() {
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          { (value) =>  this.renderSubmit(value) }
        </LanguageContext.Consumer>
      </button>
    )
  }
}


// const text = this.context === 'english' ? 'Submit' : 'Voorleggen'

// { this.renderText() }
