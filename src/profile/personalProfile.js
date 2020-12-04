import React,{Component} from 'react';
import Profileli from './profileli';
class profile extends Component
{
    state = {
        data : []
    }
    componentDidMount(){
        fetch(`${process.env.REACT_APP_fetch_url}/profile/personalprofile`)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>
        {
            this.setState({
                data:data
            });
        })
    }
    render()
    {
        return (
            <div className="md:w-2/5 w-full pl-2 md:pl-0 pt-8 pb-2 font-semibold text-2xl border-b border-gray-300 ml-auto mr-auto">
                Personal Profile
                {this.state.data.map((post,idx) => (
                <Profileli key={idx} contents={post}/>
                ))}
            </div>
        );
    }
}

export default profile;