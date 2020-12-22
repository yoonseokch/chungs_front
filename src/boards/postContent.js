import {Component} from 'react';
const React = require('react')
const ReactMarkdown = require('react-markdown')
const gfm = require('remark-gfm')

class PostContent extends Component
{
    
    render()
    {

        return (
            <div className="break-words flex-wrap prose md:prose-lg md:w-4/5 max-w-4xl md:ml-auto md:mr-auto h-auto bg-white md:px-12 px-2 py-8 border-2 border-gray-100">
                <ReactMarkdown plugins={[gfm]} children={this.props.post.content} />
            </div>
        );
    }
}

export default PostContent