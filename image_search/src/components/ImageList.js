import './ImageList.css'

import React from 'react'

import ImageCard from './ImageCard.js'

export default function ImageList(props) {

  const renderImages = props.images.map( image => {
    return (
      <ImageCard
        key={ image.id }
        image={ image }
      />
    )
  })

  return (
    <div className="image-list">
      { renderImages }
    </div>
  )
}
