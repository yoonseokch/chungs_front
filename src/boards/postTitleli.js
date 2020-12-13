import React,{Component} from 'react';
class postTitleli extends Component
{
    render()
    {
        return (
            <div>
                <a href={`/board/${this.props.contents.ID}`} type="text" className="hover:text-gray-600 font-monospaced py-4 align-middle block border-b ml-4 md:text-xl text-lg truncate font-semibold">
                {this.props.contents.title}
                </a>
            </div>
        );
    }
}

export default postTitleli;