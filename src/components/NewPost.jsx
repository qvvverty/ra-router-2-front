import { useState } from 'react';

export default function NewPost(props) {
  const [newPost, setNewPost] = useState({ id: 0, content: '' });

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
    <form className="new-post-form" onSubmit={submitHandler}>
      <textarea className="new-post-content" name="content" value={newPost.content} onChange={inputHandler} />
      <button className="new-post-submit-btn" type="submit">Add</button>
    </form>
  )
}
