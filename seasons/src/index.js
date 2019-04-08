import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import SeasonDisplay from './SeasonDisplay.js'

export default class App extends Component {
  constructor() {
    super();
    this.state = ({

    })
  }

  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      error => console.log(error)
    )
    return (
      <div>
        Latitude:
        Longitude:
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
