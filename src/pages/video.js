import React from 'react';
import CommentBox from '../components/comment-box';

export default class VideoPage extends React.Component {
  render() {
    return (
      <div>
        <div className="cell">
          <article className="article article--video">

            <div className="article--picture-author">
              Video by <strong>@morganmccircuit</strong>
            </div>

            <div className="article--video-img">
              <video 
                width="500"
                height="auto" 
                src="assets/videos/Goku loses Ultra Instinct - Dragon Ball Super Episode 130 [720p].mp4"
                type="video/mp4" 
                controls />
            </div>

          </article>
        </div>

        <CommentBox apiUrl= "api/video_comments.json" />
      </div>
    )
  }
}