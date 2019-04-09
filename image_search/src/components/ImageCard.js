import React, { Component } from 'react'

export default class ImageCard extends Component {
  render() {

    const { alt_description, urls } = this.props.image

    return (
      <div>
        <img
          src={ urls.regular }
          alt={ alt_description }
        />
      </div>
    )
  }
}
