import './App.css';
import React,{Component} from 'react';
import { Redirect,Route, BrowserRouter as Router, Switch } from "react-router-dom"
import TopBar from './topBar.js';
import Main from './main/mainScreen.js';
class App extends Component
{
  render()
  {
  return (
    <div>
      <TopBar/>
      <Router>
          <Switch>
            <Route exact path="/" component={Main}/>
            {/* <Route path="/post" component={boards}/>
            <Route path="/me" component={analyze}/> */}
            <Redirect path="*" to="/" />
          </Switch>
      </Router>
    </div>
  );
  }
}

export default App;
