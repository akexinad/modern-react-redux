import React from 'react'

import UserCreate from './UserCreate.js'
import LanguageContext from '../contexts/LanguageContext.js'
import ColorContext from '../contexts/ColorContext.js'

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
        <LanguageContext.Provider value={ this.state.language }>
          <ColorContext.Provider value="green">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageContext.Provider>
      </div>
    )
  }
}
