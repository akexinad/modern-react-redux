import React from 'react'

import UserCreate from './UserCreate.js'
import LanguageSelector from './LanguageSelector.js'
import { LanguageStore } from '../contexts/LanguageContext.js'
import ColorContext from '../contexts/ColorContext.js'

export default class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <ColorContext.Provider value="green">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    )
  }
}
