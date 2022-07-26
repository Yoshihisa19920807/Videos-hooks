import React from 'react';
import VideoItem from './VideoIItem';

const VideoList = ({videos, onVideoSelect}) => {
    // props.videos
  // {} is supposed to be props?

  const renderedList = videos.map( video => {
    return <VideoItem
      key={video.id.videoId}
      onVideoSelect={onVideoSelect}
      video={video}/>;
  });

  return (
    <div className="ui relaxed divided list">
      {renderedList}
    </div>
  )
};

export default VideoList;