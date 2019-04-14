import React from 'react'

import LanguageContext from '../contexts/LanguageContext.js'
import ColorContext from '../contexts/ColorContext.js'

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

  renderButton(color) {
    return (
      <button className={ `ui button ${ color }` }>
        <LanguageContext.Consumer>
          { (value) => this.renderSubmit(value) }
        </LanguageContext.Consumer>
      </button>
    )
  }

  render() {
    return (
      <ColorContext.Consumer>
        { (color) => this.renderButton(color) }
      </ColorContext.Consumer>
    )
  }
}
