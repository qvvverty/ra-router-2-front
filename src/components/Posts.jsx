import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Post from './Post';
import PostsContext from '../contexts/PostsContext';


export default function Posts() {
  const { posts, setPosts } = useContext(PostsContext);

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
  }, [setPosts]);

  return (
    <>
      <div className="posts-container">
        {posts.map(post => {
          return (
            <Link to={`/posts/${post.id}`} key={post.id}>
              <Post {...post} />
            </Link>
          )
        })}
      </div>
      <Link className="nav-link" to="/posts/new">New post</Link>
    </>
  )
}
