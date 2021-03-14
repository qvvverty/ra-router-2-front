import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Posts from './components/Posts';
import PostEditForm from './components/PostEditForm';
import PostActions from './components/PostActions';
import { PostsProvider } from './contexts/PostsContext';

function App() {
  return (
    <Router basename="/ra-router-2-front">
      <PostsProvider>
        <Switch>
          <Route path="/posts/new" component={PostEditForm} />
          <Route path="/posts/:id" component={PostActions} />
          <Route path="/" component={Posts} />
          <Route path="*" component={Posts} />
        </Switch>
      </PostsProvider>
    </Router>
  );
}

export default App;
