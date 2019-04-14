import React from 'react'

import UserCreate from './UserCreate.js'

export default class App extends React.Component {
  state = {
    language: 'english'
  }

  onLanguageChange = (language) => {
    this.setState({
      language
    })
  }

  render() {
    return (
      <div className="ui container">
        <div>
          Select Language
          <i
            className="flag au"
            onClick={ () => this.onLanguageChange('english') }
          />
          <i
            className="flag it"
            onClick={ () => this.onLanguageChange('italian') }
          />
          <i
            className="flag nl"
            onClick={ () => this.onLanguageChange('dutch') }
          />
        </div>
        <UserCreate />
      </div>
    )
  }
}
