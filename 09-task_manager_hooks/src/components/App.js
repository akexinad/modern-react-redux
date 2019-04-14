import React, { useState } from 'react'

import ResourceList from './ResourceList.js'

export default function App() {
  const [resource, setResource] = useState('posts')

  return (
    <div>
      <div>
        <button
          className="ui button primary"
          onClick={ () => setResource('Posts') }
        >
          Posts
        </button>
        <button
          className="ui button primary"
          onClick={ () => setResource('Todos') }
        >
          Todos
        </button>
      </div>
      <ResourceList resource={ resource } />
    </div>
  )
}
