import React,{Component} from 'react';
import PostContent from './postContent.js';
class postDetail extends Component
{
    state = {
        post : {}
    }
    componentDidMount()
    {
        var path=`${process.env.REACT_APP_fetch_url}/post/detail/${window.location.href.split("/")[4]}`;
        fetch(path)
        .then((res)=>{
            if (res.status===404)
            {
                window.location.href="/board";
            }
            else
            {
                return res.json();
            }
        })
        .then((data)=>{
            this.setState({
                post : data
            })
        })
    }
    render()
    {
        return (
            <div className="lg:ml-96 md:ml-64 ml-0 w-auto pb-12 overflow-yscroll bg-gray-100">
                <div className="w-4/5 max-w-4xl py-16 w-4/5 px-12 font-bold text-2xl ml-auto mr-auto text-center">
                    {this.state.post.title}
                </div>
                <PostContent post={this.state.post}/>
            </div>
        );
    }
}

export default postDetail