import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import SeasonDisplay from './SeasonDisplay.js'

export default class App extends Component {
  constructor() {
    super();
    this.state = ({
      latitude: null,
      longitude: null,
      errorMessage: ''
    })
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
      },
      error => {
        this.setState({
          errorMessage: error.message
        })
      }
    )
  }

  render() {
    return (
      <div>
        Latitude: { this.state.latitude }
        <br/>
        Longitude: { this.state.longitude }
        <br/>
        Error: { this.state.errorMessage }
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
