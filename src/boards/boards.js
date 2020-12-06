import React,{Component} from 'react';
import Category from './category.js';
import { Redirect,Route, BrowserRouter as Router, Switch } from "react-router-dom"
import PostList from './postlist.js';
class boards extends Component
{
    render()
    {
        return (
            <div className="w-full">
                <Category/>
                <Router>
                    <Switch>
                        <Route exact path="/board" component={PostList}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default boards;