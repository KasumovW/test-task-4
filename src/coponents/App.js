import Login from './Login';
import './style.css';
import { Route, Switch, Redirect } from "react-router-dom";
import Main from './Main';
import { useSelector } from 'react-redux';

function App() {
  const token = useSelector(state => state.auth.token);
  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route component={Main} exact path='/'/>
        <Redirect to='/' />
      </Switch>
    )
  } else {
    routes = (
      <Switch>
        <Route component={Login} exact path='/login'/>
        <Redirect to='/login' />
      </Switch>
    )
  }

  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
