import React,{Component} from 'react';
import github from '../../src/img/github.png';
import instagram from '../../src/img/instagram.png';
import gmail from '../../src/img/gmail.png';
class Links extends Component
{
    render()
    {
        return (
            <div className="m-0 p-0">
                <div className="inline-block w-full md:w-1/3 float-left bg-white border-b-2 bg-gray-100">
                    <a href="https://github.com/yoonseokch">
                        <img alt="github" className="w-1/2 block ml-auto mr-auto mt-8"src={github}></img>
                    </a>
                    <p className="text-3xl font-bold text-center my-4">Github</p>
                </div>
                <div className="inline-block w-full md:w-1/3 float-left bg-white border-b-2 bg-gray-100">
                    <a href="https://instagram.com/yoonsukch/">
                        <img alt="github" className="w-1/2 block ml-auto mr-auto mt-8" src={instagram}></img>
                    </a>
                    <p className="text-3xl font-bold text-center my-4">Instagram</p>
                </div>
                <div className="inline-block w-full md:w-1/3 float-left bg-white border-b-2 bg-gray-100">
                    <a href="mailto: yoonsukch@gmail.com">
                        <img alt="email" className="w-1/2 block ml-auto mr-auto mt-8" src={gmail}></img>
                    </a>
                    <p className="text-3xl font-bold text-center my-4">Email</p>
                </div>
            </div>
        );
    }
}

export default Links;