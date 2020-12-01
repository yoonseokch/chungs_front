import React,{Component} from 'react';
class profile extends Component
{
    render()
    {
        return (
            <div className="w-2/5 pt-8 pb-2 font-semibold text-2xl border-b border-gray-300 ml-auto mr-auto">
                Personal Profile
                <div className="mt-6 text-xl">
                    정윤석(Yoonseok Chung)
                </div>
                <div className="mt-2 text-base">
                    24 years old, Male, Military exemption
                </div>
                <div className="mt-6 text-xl">
                    Yonsei University, Bachelor of Computer Science
                </div>
                <div className="mt-2 text-base">
                    2016.03 ~ present
                </div>
            </div>
        );
    }
}

export default profile;