import React, { useState } from 'react'

export default function App() {
  const [resource, setResource] = useState('')

  return (
    <div>
      <div>
        <button
          className="ui button primary"
          onClick={ () => setResource('posts') }
        >
          Posts
        </button>
        <button
          className="ui button primary"
          onClick={ () => setResource('todos') }
        >
          Todos
        </button>
      </div>
      { resource }
    </div>
  )
}
