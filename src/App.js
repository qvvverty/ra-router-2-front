import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Posts from './components/Posts';
import NewPost from './components/NewPost';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Posts} />
      <Route path="/posts/new" component={NewPost} />
    </Router>
  );
}

export default App;
