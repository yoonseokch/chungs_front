import React,{Component} from 'react';
import Categoryli from './categoryli.js';
class categories extends Component
{
    state={
        categories : []
    }
    componentDidMount()
    {
        fetch(`${process.env.REACT_APP_fetch_url}/post/category`)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>
        {
            console.log(data);
            this.setState({
                categories:data
            });
        })
    }
    render()
    {
        return (
            <div>
                <div className="border-r w-64 h-screen fixed bg-gray-100">
                    <div className="pt-8 w-full text-center font-semibold text-2xl">
                        Category
                    </div>
                    <div className="mt-8">
                    {this.state.categories.map((post,idx) => (
                        <Categoryli key={idx} contents={post}/>
                    ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default categories;