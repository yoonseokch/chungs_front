import React,{Component} from 'react';
class profileli extends Component
{
    render()
    {
        return (
            <div>
                <div type="text" className="mt-6 text-xl">
                {this.props.contents.Name}
                </div>
                <div type="text" className="mt-2 text-base whitespace-pre-line">
                {this.props.contents.Description}
                </div>
            </div>
        );
    }
}

export default profileli;