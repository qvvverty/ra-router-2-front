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

  // const { posts } = useContext(PostsContext);

  return (
    <>
      <div className="posts-container">
        {posts.map(post => {
          return (
            <Link className="link" to={`/posts/${post.id}`} key={post.id}>
              <Post {...post} />
            </Link>
          )
        })}
        <Link className="link nav-link" to="/posts/new">
          <div className="post-action-btn btn-edit">
            New post
          </div>
        </Link>
      </div>
    </>
  )
}
