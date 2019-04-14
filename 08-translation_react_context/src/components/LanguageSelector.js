import React from 'react'

class LanguageSelector extends React.Component {
  render() {
    return (
      <div>
        Select Language
        <i
          className="flag au"
          onClick={ () => this.props.onLanguageChange('english') }
        />
        <i
          className="flag it"
          onClick={ () => this.props.onLanguageChange('italian') }
        />
        <i
          className="flag nl"
          onClick={ () => this.props.onLanguageChange('dutch') }
        />
      </div>
    )
  }
}

export default LanguageSelector
