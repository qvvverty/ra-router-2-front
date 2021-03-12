import { createContext, useState } from 'react';

const PostsContext = createContext([]);
export default PostsContext;

export function PostsProvider(props) {
  const [posts, setPosts] = useState([]);

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      {props.children}
    </PostsContext.Provider>
  )
}
