import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Post from './Post';

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(process.env.REACT_APP_POSTS);
      if (response.ok) {
        try {
          const posts = await response.json();
          setPosts(posts);
        } catch {
          console.error('Error parsing server response: probably not a JSON');
        }
      } else {
        console.error(response.statusText + ', status: ' + response.status);
      }
    }

    fetchPosts();
  }, []);

  // const deletePost = async id => {
  //   const response = fetch(process.env.REACT_APP_POSTS + '/' + id, {
  //     method: 'DELETE',
  //   });
  // }

  return (
    <>
      <div className="posts-container">
        {posts.map(post => <Post {...post} key={post.id} />)}
      </div>
      <Link to="/posts/new">New post</Link>
    </>
  )
}
