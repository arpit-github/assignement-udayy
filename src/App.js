
import './App.css';
import { Router, Switch } from 'react-router-dom';

import { createBrowserHistory } from 'history';
import { AuthRoute } from './auth-route';
import Login from './login/login';
import Main from './main/main';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <AuthRoute path='/' component={Login} />
        <AuthRoute path='/login' component={Login} />
        <AuthRoute path='/' isPrivate={true} component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
