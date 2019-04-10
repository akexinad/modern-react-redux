import React from 'react'

import VideoItem from './VideoItem.js'

export default function VideoList ({ videoList, onVideoSelect }) {

  const renderVideos = videoList.map( video => {
    return (
      <VideoItem
        key={ video.etag }
        video={ video }
        onVideoSelect={ onVideoSelect }
      />
    )
  })

  return (
    <div className="ui relaxed divided list" >
      { renderVideos }
    </div>
  )
}
