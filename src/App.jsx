import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';

import Home from './pages/Home';
import Profile from './pages/Profile';
import NotAuth from './pages/NotAuth';

import './App.css';

export default function App() {
  const loggedIn = useSelector(({ user }) => user.loggedIn);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {loggedIn ? <Redirect to="/profile" /> : <Home />}
        </Route>
        <Route path="/profile" component={Profile} />
        <Route path="/not-auth" component={NotAuth} />
      </Switch>
    </Router>
  );
}
