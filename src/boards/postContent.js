import {Component} from 'react';
const React = require('react')
const ReactMarkdown = require('react-markdown')
const gfm = require('remark-gfm')
const markdown = `A paragraph with *emphasis* and **strong importance**.
> A block quote with ~strikethrough~ and a URL: https://reactjs.org.
# 1
* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`

class PostContent extends Component
{
    
    render()
    {

        return (
            <div className="w-4/5 max-w-4xl ml-auto mr-auto h-screen bg-white px-8 py-8 border-2 border-gray-100">
                <ReactMarkdown plugins={[gfm]} children={markdown} />
            </div>
        );
    }
}

export default PostContent