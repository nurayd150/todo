import './App.css';
import Form from './components/Form';
import {reducer} from './reducers';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import {legacy_createStore as createStore} from 'redux'
import {Provider} from 'react-redux'
import Login from './components/Login';
const store=createStore(reducer);
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Router>
        <Switch>
         
         
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/Form" component={Form}></Route>
        </Switch>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
