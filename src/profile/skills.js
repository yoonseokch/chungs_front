import React,{Component} from 'react';
class skills extends Component
{
    render()
    {
        return (
            <div className="w-2/5 pt-8 pb-2 font-semibold text-2xl border-b border-gray-300 ml-auto mr-auto">
                Skills and Experiences
                <div className="mt-6 text-xl">
                    PoolC(Yonsei Programming Club)
                </div>
                <div className="mt-2 text-base">
                    President / 2020.07~present
                    <br/>
                    Executives / 2020.01 ~ present
                </div>
                <div className="mt-6 text-xl">
                    Web Development
                </div>
                <div className="mt-2 text-base">
                    2020.01 ~ present
                    <br></br>
                    node.js,express.js,sequelize,MySql,postgreSQL,spring,react.js,tailwind.css,docker
                </div>
                <div className="mt-6 text-xl">
                    AWS
                </div>
                <div className="mt-2 text-base">
                    2020.07 ~ present
                    <br></br>
                    ec2 instance,rds,lightsail,sns
                </div>
                <div className="mt-6 text-xl">
                    Problem Solving
                </div>
                <div className="mt-2 text-base">
                    2019.09 ~ present
                    <br></br>
                    <a href="https://www.acmicpc.net/user/yoonseokch">Baekjoon</a>
                    , Programming Contests(ICPC,SCPC)
                </div>
                <div className="mt-6 text-xl">
                    Programming Languages
                </div>
                <div className="mt-2 text-base">
                    2016.03 ~ present
                    <br></br>
                    c++,javascript,java,kotlin,python
                </div>
            </div>
        );
    }
}

export default skills;