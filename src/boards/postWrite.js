import React,{Component} from 'react';
const ReactMarkdown = require('react-markdown')
const gfm = require('remark-gfm')
class postWrite extends Component
{
    state = {
        content : ""
    }
    change = (e) =>{
        this.setState({
            content : e.target.value
        })
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
            console.log(data);
            if (data.success===false)
            {
                alert("잘못된 접근입니다!");
                window.location.href="/";
            }
        })
    }
    update = (e) =>{
        console.log(e);
    }
    render()
    {
        return (
            <div className="w-auto h-screen overflow-yscroll bg-gray-100">
                <textarea className="float-left shadow appearance-none rounded h-full w-1/2 text-2xl py-2 px-6 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="content" type="text" onChange={this.change} placeholder="글을 작성해주세요"/>
                <div className="break-all flex-wrap prose prose-lg w-1/2 float-left max-w-4xl ml-auto mr-auto h-screen bg-white px-12 py-8 border-2 border-gray-100">
                    <ReactMarkdown plugins={[gfm]} children={this.state.content} />
                </div>
            </div>
        );
    }
}

export default postWrite;