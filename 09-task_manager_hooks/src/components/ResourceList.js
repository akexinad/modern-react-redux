import React from 'react'

import useResources from './useResources.js'

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
