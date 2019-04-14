import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay.js'
import Spinner from './Spinner.js'
import useLocation from './useLocation.js'

const App = () => {
  const [ latitude, longitude, errorMessage ] = useLocation()

  let content
  if (errorMessage) {
    content = <div>Error: { errorMessage }</div>
  } else if (latitude) {
    content =
      <SeasonDisplay
        latitude={ latitude }
        longitude={ longitude }
      />
  } else {
    content = <Spinner message="Please accept location request" />
  }

  return <div className="border red">{ content }</div>
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
