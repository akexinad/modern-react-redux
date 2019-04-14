import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function ResourceList({ resource }) {
  const [ resources, setResources ] = useState([])

  const fetchResource = async (resource) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${ resource }`)

    setResources(response.data)
  }

  useEffect( () => {
    fetchResource(resource)
  }, [])

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
