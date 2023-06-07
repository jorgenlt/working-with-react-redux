import React from 'react'
import { useSelector } from 'react-redux'
import { selectPostById } from './postsSlice';

const PostAuthor = ({ userId }) => {
  const author = useSelector(state => selectPostById(state, userId));

  return <span>by {author ? author.name : 'Unknown author'}</span>;
}

export default PostAuthor;