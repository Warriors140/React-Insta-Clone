import React from 'react';
import Comment from './Comment';

const CommentSection = props => {
    return (
        <ul>
            {props.comments.map(comment => <Comment username={comment.username} text={comment.text} key={comment.id}></Comment> )}
        </ul>
    )
}

export default CommentSection;
 
