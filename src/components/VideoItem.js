import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div className="video-item item" onClick={() => onVideoSelect(video)}>
            <div className="video-thumbnail">
                <img
                    className="ui image"
                    src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.title}
                />
            </div>
            <div className="content">
                <p className="header">{video.snippet.title}</p>
            </div>
        </div>
    )
}

export default VideoItem
