import React,{Component} from 'react';
import Profileli from './profileli';
class projects extends Component
{
    state = {
        data : []
    }
    componentDidMount(){
        fetch(`${process.env.REACT_APP_fetch_url}/profile/projects`)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>
        {
            this.setState({
                data:data
            });
            console.log(this.state.data);
        })
    }
    render()
    {
        return (
            <div className="pb-6 pl-2 md:pl-0 w-full md:w-2/5 pt-8 pb-2 font-semibold text-2xl border-b border-gray-300 ml-auto mr-auto">
                Projects
                {this.state.data.map((post,idx) => (
                <Profileli key={idx} contents={post}/>
                ))}
            </div>
        );
    }
}

export default projects;