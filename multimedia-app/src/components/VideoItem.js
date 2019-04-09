import React from 'react'

export default function VideoItem (props) {

  const { thumbnails, description, title } = props.video.snippet

  return (
    <div className="item" >
      <img
      className="ui image"
      src={ thumbnails.medium.url }
      alt={ description }
      />
      <div className="content" >
        <div className="header">
        { title }
        </div>
      </div>
    </div>
  )
}
