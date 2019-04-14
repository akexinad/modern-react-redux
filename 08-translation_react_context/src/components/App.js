import React from 'react'

import UserCreate from './UserCreate.js'
import LanguageSelector from './LanguageSelector.js'
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
        <LanguageSelector onLanguageChange={ this.onLanguageChange } />
        <LanguageContext.Provider value={ this.state.language }>
          <ColorContext.Provider value="green">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageContext.Provider>
      </div>
    )
  }
}
