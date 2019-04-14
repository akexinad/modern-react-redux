import React from 'react'

import LanguageContext from '../contexts/LanguageContext.js'

class LanguageSelector extends React.Component {
  static contextType = LanguageContext

  render() {
    console.log(this.context);
    return (
      <div>
        Select Language
        <i
          className="flag au"
          onClick={ () => this.context.onLanguageChange('english') }
        />
        <i
          className="flag it"
          onClick={ () => this.context.onLanguageChange('italian') }
        />
        <i
          className="flag nl"
          onClick={ () => this.context.onLanguageChange('dutch') }
        />
      </div>
    )
  }
}

export default LanguageSelector
