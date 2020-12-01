import React,{Component} from 'react';
import backimage from '../../src/img/mainbackground.png';
import Links from './link.js';
class mainScreen extends Component
{
    render()
    {
        return (
            <div className="h-screen">
                <div className="w-full bg-center bg-cover" style={{backgroundImage: `url(${backimage})`}}>
                    <div className="md:visible h-128 ml-auto mr-auto font-bold text-white text-4xl w-48 pt-32">
                        환영합니다!
                    </div>
                </div>
                <Links/>
            </div>
        );
    }
}

export default mainScreen;