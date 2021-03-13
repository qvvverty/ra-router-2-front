import { useState, useContext } from 'react';
import PostContext from '../contexts/PostsContext';
import NewPost from './PostEditForm';
import Post from './Post';

export default function PostActions(props) {
  const [isEditing, setEditing] = useState(false);

  const { posts } = useContext(PostContext);
  const post = posts.find(post => post.id === +props.match.params.id);

  const editBtnHandler = () => {
    setEditing(!isEditing);
  }

  const deleteBtnHandler = async () => {
    const response = await fetch(process.env.REACT_APP_POSTS + '/' + post.id, {
      method: 'DELETE',
    });

    if (response.ok) {
      props.history.push('/');
    }
  }

  return (
    <div className="post-actions-wrapper">
      <Post {...post} />
      {isEditing ?
      <NewPost {...post} {...props} />
      : <div className="post-actions-container">
          <div className="post-action-btn btn-edit" onClick={editBtnHandler}>Edit</div>
          <div className="post-action-btn btn-delete" onClick={deleteBtnHandler}>Delete</div>
        </div>}
    </div>
  )
}
