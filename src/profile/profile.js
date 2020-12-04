import React,{Component} from 'react';
import Education from './skills.js';
import PersonalProfile from './personalProfile.js';
import Projects from './projects.js';
class profile extends Component
{
    render()
    {
        return (
            <div className="w-full bg-gray-100">
                <div className="pl-4 md:w-2/5 w-full pl-2 md:pl-0 pt-8 pb-2 font-bold text-3xl border-b border-gray-300  ml-auto mr-auto">
                    Me
                </div>
                <PersonalProfile/>
                <Education/>
                <Projects/>
            </div>
        );
    }
}

export default profile;