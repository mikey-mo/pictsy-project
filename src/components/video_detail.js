import React from 'react';

const VideoDetail = ({ video }) => {
  console.log(video);
  if (!video) {
    return <div>No results...</div>
  }

  if (video.length < 5) {
    return <div>Not enough matches.  Try again.</div>
  }
  
  let imgUrl = video.images[0].link;
    return (
    <div id="selected-img">
      <div id="img-title">
        <h2>{ video.title }</h2>
      </div>
      <div className="embed-responsive embed-responsive-16by9">
        <img id="img-display" className="embed-responsive-item" src={ imgUrl } />
      </div>
      <div>
        <p>This is where comments will go.</p>
      </div>
      <div className="comment-form">
        <input type="text" placeholder="Name" style={{ width: "100px", marginRight: '20px' }}/>
        <input type="text" placeholder="Comment" style={{ width: "400px" }}/>
        <input type="submit" />
      </div>
    </div>
    )
};

export default VideoDetail;