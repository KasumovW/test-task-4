import Login from './Login';
import './style.css';
import { Route } from "react-router-dom";
import Main from './Main';

function App() {
  return (
    <div className="App">
      <Route component={Login} exact path='/login'/>
      <Route component={Main} exact path='/'/>
    </div>
  );
}

export default App;
