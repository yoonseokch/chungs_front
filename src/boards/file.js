import React,{Component} from 'react';

class Analyze extends Component{
    state={
        useImage : true,
        image : null,
        submit : false,
        render : false
    }
    componentDidMount(){
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
    }
    change = () =>{
        let img = document.getElementById("input").elements[0].files[0];
        this.setState({
            image: URL.createObjectURL(img)
        });
    }
    analyze = (event) =>{
        let img = document.getElementById("input").elements[0].files[0];

        let data = new FormData();
        data.append('temp', img);
        fetch(`${process.env.REACT_APP_fetch_url}/file`, {
        method: "POST",
        body: data,
        headers: {
            'token': `${sessionStorage.getItem('token')}`,
        },
        }).then((result) => {
            return result.json()
        })
        .then((data)=>{
            document.getElementById("api").innerHTML=data.uri;
        })
        .catch((err)=>{

        })
    }
    render()
    {
        if (this.state.render)
        {
        return(
        <div className="bg-gray-100 w-full py-10"> 
        <div className="shadow-xl bg-white w-240 pb-10 ml-auto mr-auto border-4 border-white rounded-lg"> 
        <div className="relative w-192 object-center mr-0 pt-8 p-0 ml-auto mr-auto text-center mb-4">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        </div>
        <div className="bg-red-100 border border-red-400 mt-8">
        {this.state.useImage && 
        <form id="input">
            <input className="pt-2 w-1/3 overflow-hidden" type="file" onChange={this.change} name="myImage" />
            <img src={this.state.image} alt="1" ></img>
        </form>}

        <button onClick={this.analyze} className="mb-3 bg-red-700 hover:bg-red-700 text-white font-bold py-2 px-4 m-0 rounded ">유사판례 분석</button>
        </div>
        <div id="api">1</div>
        </div>
        </div>
        </div>
        );
        }
        else
        {
            return(
            <div></div>);
        }
    }
}
export default Analyze;