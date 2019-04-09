import React, { Component } from 'react'

export default class ImageCard extends Component {
  constructor() {
    super()
    this.imageRef = React.createRef()
  }

  componentDidMount() {
    console.log(this.imageRef.current.clientHeight)
  }

  render() {
    const { alt_description, urls } = this.props.image

    return (
      <div>
        <img
          ref={ this.imageRef }
          src={ urls.regular }
          alt={ alt_description }
        />
      </div>
    )
  }
}
