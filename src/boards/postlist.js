import React,{Component} from 'react';
import TopCategoryBar from './topCategoryBar.js';
import Posttitle from './postTitle.js';
class postlist extends Component
{
    state={
        page : 0,
        word : "",
        categories: [],
        posts : []
    }
    componentDidUpdate()
    {

    }
    up = () =>{
        this.setState({
            page : this.state.page+1
        })
    }
    componentDidMount()
    {
        var split=window.location.href.split("?category=");
        var path=`${process.env.REACT_APP_fetch_url}/post`;
        if (split[1]!==undefined)
        {
            if (!isNaN(split[1]))
            {
                if (parseInt(split[1])!==0)
                {
                    path=`${process.env.REACT_APP_fetch_url}/post/${split[1]}`;
                }
            }
        }
        fetch(path)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>
        {
            var postss=[];
            var posts = [];
            for (var i=0;i<data.length;i++)
            {
                posts.push(data[i]);
                if (posts.length===6)
                {
                    postss.push(posts);
                    posts=[];
                }
            }
            if (posts.length!==0)
            {
            postss.push(posts);
            }
            this.setState({
                posts: postss
            })
        })
    }
    render()
    {
        return (
            <div className="lg:ml-96 md:ml-64 ml-0 w-auto h-screen overflow-yscroll bg-gray-100">
                <TopCategoryBar/>
                <Posttitle page={this.state.page} contents={this.state.posts}/>
            </div>
        );
    }
}

export default postlist;