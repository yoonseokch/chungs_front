import React,{Component} from 'react';
class postlist extends Component
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
                
            </div>
        );
    }
}

export default postlist;