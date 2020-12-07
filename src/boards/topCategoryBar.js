import React,{Component} from 'react';
class topCategoryBar extends Component
{
    state={
        word : "",
        categories: []
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
            var split=window.location.href.split("?category=");
            if (split[1]===undefined)
            {
                this.setState({
                    word : "전체"
                })
            }
            else if (isNaN(split[1]))
            {
                window.location.href="/board";
            }
            else
            {
                if (parseInt(split[1])>=this.state.categories.length)
                {
                    window.location.href="/board"; 
                }
                this.setState({
                    word : this.state.categories[parseInt(split[1])].Name
                })
            }
        })
    }
    render()
    {
        return (
            <div className="py-16 w-1/3 font-bold text-2xl ml-auto mr-auto text-center">
                {this.state.word}
            </div>
        );
    }
}

export default topCategoryBar;