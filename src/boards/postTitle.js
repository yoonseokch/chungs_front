import React,{Component} from 'react';
import Posttitleli from './postTitleli.js';
class postTitle extends Component
{
    state = {
        page : 0,
        user : false
    }
    componentDidMount()
    {
        fetch(`${process.env.REACT_APP_fetch_url}/check`,{
            headers : {
                "token" : sessionStorage.getItem("token")
            }
        })
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            if (data.success===true)
            {
                this.setState({
                    user : true
                })
            }
        })
    }
    write = () =>{
        window.location.href="/write";
    }
    up = () =>{
        if (this.state.page<this.props.contents.length-1)
        {
            this.setState({
                page : this.state.page+1
            })
        }
        else
        {
            alert("마지막 페이지입니다!");
        }
    }
    down = () =>{
        if (this.state.page>0)
        {
            this.setState({
                page : this.state.page-1
            })
        }
        else
        {
            alert("첫번째 페이지입니다!");
        }
    }
    render()
    {
        if (this.props.contents[0])
        {
            return (
                <div className="overflow-hidden border border-gray-100 w-4/5 max-w-4xl ml-auto mr-auto bg-white">
                    <div id="titleboard" className="border-gray-200 my-8 border-t border-b mx-8">
                        {this.props.contents[this.state.page].map((post,idx) => (
                            <Posttitleli key={idx} contents={post}/>
                        ))}   
                    </div>
                    <div className="text-center ml-auto mr-auto">
                        <button onClick={this.down} className="mx-8 mb-8 bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 m-0 rounded ">이전글</button> 
                        <button onClick={this.up} className="mx-8 mb-8 bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 m-0 rounded ">다음글</button> 
                    </div>
                    {this.state.user && <button onClick={this.write} className="float-right object-right-bottom object-none mx-8 mb-8 bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 m-0 rounded ">글쓰기</button> }
                </div>
            );
        }
        else
        {
            return (
                <div></div>
            )
        }
    }
}

export default postTitle;