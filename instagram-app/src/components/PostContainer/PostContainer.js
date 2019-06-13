import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props =>{
    return(
        <div className='container'>
           <p>{props.username}</p>
           <img src={props.thumbnailUrl}></img>
           <img src={props.imageUrl}></img>
           <p>{props.likes}</p>
           <p>{props.timestamp}</p>
           <CommentSection comments={props.comments} />
        </div>

    )
}
export default PostContainer;