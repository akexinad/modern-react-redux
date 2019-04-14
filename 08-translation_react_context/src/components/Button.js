import React from 'react'

import LanguageContext from '../contexts/LanguageContext.js'
import ColorContext from '../contexts/ColorContext.js'

export default class Button extends React.Component {
  // NOTE: contextType is a special variable name
  // static contextType = LanguageContext

  renderSubmit(language) {
    if (language === 'english') {
      return 'Submit'
    } else if (language === 'italian') {
      return 'Inviare'
    } else if (language === 'dutch') {
      return 'Voorleggen'
    }
  }

  renderButton(color) {
    return (
      <button className={ `ui button ${ color }` }>
        <LanguageContext.Consumer>
          { ({ language }) => this.renderSubmit(language) }
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
