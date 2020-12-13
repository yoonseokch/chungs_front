import React,{Component} from 'react';
const ReactMarkdown = require('react-markdown')
const gfm = require('remark-gfm')
class postWrite extends Component
{
    state = {
        content : "",
        category : [],
        render : false
    }
    change = (e) =>{
        this.setState({
            content : e.target.value
        })
    }
    postsubmit = () =>{
        var a={

        };
        var e = document.getElementById("boardCategory");
        a.boardCategory= parseInt(e.options[e.selectedIndex].value);
        a.title=document.getElementById("title").value;
        a.content=document.getElementById("content").value;
        fetch(`${process.env.REACT_APP_fetch_url}/post`, {
            method: "POST",
            headers: {
                'token': `${sessionStorage.getItem('token')}`,
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(a),
        })
        .then(response => response.json())
        .then(data => {
           //alert(data.success);
           alert("글 작성이 완료되었습니다.");
           window.location.href="/boards?category=0";
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
            // console.log(data);
            if (data.success===false)
            {
                alert("잘못된 접근입니다!");
                window.location.href="/";
            }
            else
            {
                this.setState({
                    render: true
                })
            }
        })
        fetch(`${process.env.REACT_APP_fetch_url}/category`,{
            headers : {
                "token" : sessionStorage.getItem("token")
            }
        })
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            this.setState({
                category : data
            })
        })
    }
    render()
    {
        if (this.state.render)
        {
        return (
            <div className="w-auto h-screen overflow-yscroll bg-gray-100">
                <div id="categoryselect" className="inline-block relative w-64">
                    <select id="boardCategory" className="block mb-4 appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    {this.state.category.map((post,idx) => (
                        <option value={post.ID}>{post.Name}</option>
                    ))}
                    </select>   
                </div>
                <div className="w-1/2 float-left h-full">
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="제목"/>
                <textarea className="w-full shadow appearance-none rounded h-full text-2xl py-2 px-6 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="content" type="text" onChange={this.change} placeholder="글을 작성해주세요"/>
                </div>
                <div className="break-all flex-wrap prose prose-xl w-1/2 float-left max-w-4xl ml-auto mr-auto h-screen bg-white px-12 py-8 border-2 border-gray-100">
                    <ReactMarkdown plugins={[gfm]} children={this.state.content} />
                </div>
                <button type="button" onClick={this.postsubmit} className="bg-red-700 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ">
                        글쓰기
                </button>
            </div>
        );
        }
        else
        {
            return(<div></div>);
        }
    }
}

export default postWrite;