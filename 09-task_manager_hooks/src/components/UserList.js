import React from 'react'

import useResources from './useResources.js'

export default function UserList() {
  const users = useResources('users')

  return (
    <ul>
      { users.map( (user) => <li key={ user.id }>{ user.name }</li>)}
    </ul>
  )
}