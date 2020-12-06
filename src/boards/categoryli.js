import React,{Component} from 'react';
class categoryli extends Component
{
    render()
    {
        return (
            <div>
                <a href={`/board?category=${this.props.contents.ID}`} type="text" className="hover:text-gray-600 font-monospaced block mt-2 ml-10 text-l font-semibold">
                {this.props.contents.Name}
                </a>
            </div>
        );
    }
}

export default categoryli;