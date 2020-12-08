import {Component} from 'react';
const React = require('react')
const ReactMarkdown = require('react-markdown')
const gfm = require('remark-gfm')

class PostContent extends Component
{
    
    render()
    {

        return (
            <div className="break-all flex-wrap prose prose-lg w-4/5 max-w-4xl ml-auto mr-auto h-screen bg-white px-12 py-8 border-2 border-gray-100">
                <ReactMarkdown plugins={[gfm]} children={this.props.post.content} />
            </div>
        );
    }
}

export default PostContent