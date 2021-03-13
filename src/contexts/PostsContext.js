import { createContext, useState, useEffect } from 'react';

const PostsContext = createContext([]);
export default PostsContext;

export function PostsProvider(props) {
  const [posts, setPosts] = useState(
    localStorage.getItem('posts') ?
      JSON.parse(localStorage.getItem('posts'))
      : []
  );

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const response = await fetch(process.env.REACT_APP_POSTS);
  //     if (response.ok) {
  //       try {
  //         const posts = await response.json();
  //         setPosts(posts);
  //       } catch {
  //         console.error('Error parsing server response: probably not a JSON');
  //       }
  //     } else {
  //       console.error(response.statusText + ', status: ' + response.status);
  //     }
  //   }

  //   fetchPosts();
  // }, []);

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      {props.children}
    </PostsContext.Provider>
  )
}
