import React,{Component} from 'react';
class topBar extends Component
{
    render()
    {
        return (
            <div className="bg-blue-900 w-full mx-auto pb-1 md:px-8 px-0">
                <div className="py-2 md:ml-10 ml-2 flex items-baseline space-x-4">
                    <a href="/" className="px-3 py-2 rounded-md md:text-2xl text-xl font-bold text-gray-300 hover:text-white hover:bg-gray-700">Home</a>
                    <a href="/board" className="px-3 py-2 rounded-md md:text-2xl text-xl font-bold text-gray-300 hover:text-white hover:bg-gray-700">Posts</a>
                    <a href="/me" className="px-3 py-2 rounded-md md:text-2xl text-xl font-bold text-gray-300 hover:text-white hover:bg-gray-700">Me</a>
                    <a href="/projects" className="px-3 py-2 rounded-md md:text-2xl text-xl font-bold text-gray-300 hover:text-white hover:bg-gray-700">Projects</a>
                </div>
            </div>
        );
    }
}

export default topBar;