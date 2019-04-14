import React, { useState, useEffect } from 'react'
import axios from 'axios'

const useResources = (resource) => {
  const [ resources, setResources ] = useState([])

  useEffect( () => {
    (async (resource) => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${ resource }`)

      setResources(response.data)
    })(resource)
  },
  [resource])

  return resources
}

export default function ResourceList({ resource }) {
  const resources = useResources(resource)

  const renderPosts = () => {
    if (resources.length === 0) {
      return <div>Loading...</div>
    }

    return (
      <ul>
      { resources.map( (record) => <li key={ record.id }>{ record.title }</li>) }
      </ul>
    )
  }

  return renderPosts()
}
