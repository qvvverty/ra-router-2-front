import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NewPost(props) {
  const [newPost, setNewPost] = useState({ id: props.id || 0, content: props.content || '' });

  const submitHandler = async event => {
    event.preventDefault();

    const response = await fetch(process.env.REACT_APP_POSTS, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPost)
    });
    if (response.ok) {
      props.history.push('/');
    }
  }

  const inputHandler = event => {
    setNewPost({ ...newPost, [event.target.name]: event.target.value });
  }

  return (
    <div className="post-edit-wrapper">
      <form className="post-edit-form" onSubmit={submitHandler}>
        <textarea
          className="post-edit-content"
          name="content"
          placeholder="Post content"
          autoFocus={true}
          value={newPost.content}
          onChange={inputHandler}
        />
        <button className="post-edit-submit-btn post-action-btn btn-edit" type="submit">
          {props.id ? 'Submit' : 'Add'}
        </button>
        <Link to="/" className="link"><div className="post-edit-close">✗</div></Link>
      </form>
    </div>
  )
}
