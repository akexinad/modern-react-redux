import React from 'react'

export default class ResourceList extends React.Component {
  render() {
    return (
      <div>
        { this.props.resource }
      </div>
    )
  }
}
