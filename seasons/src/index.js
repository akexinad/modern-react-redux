import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import SeasonDisplay from './SeasonDisplay.js'

export default class App extends Component {
  constructor() {
    super();
    this.state = ({
      latitude: null,
      longitude: null,
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
      error => console.log(error)
    )

  }

  render() {
    return (
      <div>
        Latitude: { this.state.latitude }
        Longitude: { this.state.longitude }
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
