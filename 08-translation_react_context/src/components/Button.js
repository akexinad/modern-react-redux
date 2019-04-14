import React from 'react'

import LanguageContext from '../contexts/LanguageContext.js'

export default class Button extends React.Component {
  // NOTE: contextType is a special variable name
  static contextType = LanguageContext

  render() {
    console.log(this.context);
    return (
      <button className="ui button primary">
        Submit
      </button>
    )
  }
}
