import React, { Component } from 'react'

export default class ImageCard extends Component {
  constructor() {
    super()
    this.state = {
      spans: null
    }
    this.imageRef = React.createRef()
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setCssSpans)
  }

  setCssSpans = () => {
    const imageHeight = this.imageRef.current.clientHeight
    const spans = Math.ceil(imageHeight / 10)

    this.setState({
      spans
    })
  }

  render() {
    const { alt_description, urls } = this.props.image

    return (
      <div style={{ gridRowEnd: `span ${ this.state.spans }`}}>
        <img
          ref={ this.imageRef }
          src={ urls.regular }
          alt={ alt_description }
        />
      </div>
    )
  }
}
