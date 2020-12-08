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
            this.setState({
                categories:data
            });
        })
    }
    render()
    {
        return (
            <div>
                <div className="fixed md:visible invisible border-r lg:w-96 md:w-64 w-0 h-screen float-left bg-white">
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