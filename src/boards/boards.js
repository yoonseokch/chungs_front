import React,{Component} from 'react';
import Category from './category.js';
import { Redirect,Route, BrowserRouter as Router, Switch } from "react-router-dom"
import PostList from './postlist.js';
import PostDetail from './postDetail.js';
class boards extends Component
{
    render()
    {
        return (
            <div className="sticky">
                <Category/>
                <Router>
                    <Switch>
                        <Route exact path="/board" component={PostList}/>
                        <Route exact path="/board/:id" component={PostDetail}/>
                        <Redirect path="*" to="/board" />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default boards;