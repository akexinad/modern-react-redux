import React from 'react'

import Field from './Field.js'
import Button from './Button.js'

export default function UserCreate() {
  return (
    <div
      className="ui form"
      style={{ maxWidth: '30em' }}
    >
      <Field />
      <Button />
    </div>
  )
}
