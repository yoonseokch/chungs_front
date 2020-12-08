//This component is a bar which is displayed at the top of hompage
import React,{Component} from 'react';
class Login extends Component{
    state= {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }
    submit = () =>{
        var a={};
        a.ID=document.getElementById("ID").value;
        a.PW=document.getElementById("password").value;
        fetch(`${process.env.REACT_APP_fetch_url}/login`, {
        method: "POST",
        headers: {
            'token': `${sessionStorage.getItem('token')}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(a),
        }).then(respone=>respone.json())
        .then((data)=>{
            alert("로그인 되었씁니다");
            window.location='/';
            sessionStorage.setItem("token",data.token);
        }).catch((err)=>{
            alert("잘못된 비밀번호 입니다!");
        })
    }
    render()
    {
        return(
        <div className="w-96 pt-32 ml-auto mr-auto">
            <div className="bg-white shadow-md w-144 ml-auto mr-auto block rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                    아이디
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="ID" type="text" placeholder="ID"/>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                    패스워드
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
                </div>
                <div className="items-center justify-between">
                <button onClick={this.submit} className="block bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                로그인
                </button> 
                </div>
            </div>
        </div>
        );
    }
}
export default Login;