import './App.css';
import React,{Component} from 'react';
import { Redirect,Route, BrowserRouter as Router, Switch } from "react-router-dom"
import TopBar from './topBar.js';
import Main from './main/mainScreen.js';
import Profile from './profile/profile.js';
import Boards from './boards/boards.js';
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
            <Route exact path="/me" component={Profile}/>
            <Route exact path="/board" component={Boards}/>
            {/* <Route path="/me" component={analyze}/> */}
            <Redirect path="*" to="/" />
          </Switch>
      </Router>
    </div>
  );
  }
}

export default App;
