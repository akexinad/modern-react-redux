import React from 'react'
import axios from 'axios'

export default class ResourceList extends React.Component {
  state = {
    resources: []
  }

  async componentDidMount() {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${ this.props.resource }`)

    this.setState({
      resources: response.data
    })
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.resource !== this.props.resource) {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${ this.props.resource }`)

      this.setState({
        resources: response.data
      })
    }
  }

  renderPosts() {
    if (this.state.resources.length === 0) {
      return <div>Loading...</div>
    }

    return (
      <div>
        { this.state.resources.length }
      </div>
    )
  }

  render() {
    return this.renderPosts()
  }
}
