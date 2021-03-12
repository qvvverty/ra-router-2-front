import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Posts from './components/Posts';
import NewPost from './components/NewPost';
import { PostsProvider } from './contexts/PostsContext';

function App() {
  return (
    <Router>
      <PostsProvider>
        <Route exact path="/" component={Posts} />
        <Route path="/posts/new" component={NewPost} />
      </PostsProvider>
    </Router>
  );
}

export default App;
