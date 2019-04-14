import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function ResourceList() {
  const [ resources, setResources ] = useState([])

  const fetchResource = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${ this.props.resource }`)

    this.setState({
      resources: response.data
    })
  }

  const renderPosts = () => {
    if (resources.length === 0) {
      return <div>Loading...</div>
    }

    return (
      <div>
      { resources.length }
      </div>
    )
  }

  return renderPosts()
}
