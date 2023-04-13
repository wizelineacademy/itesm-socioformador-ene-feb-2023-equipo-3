
import * as React from 'react'

// This is a test skill set
export const skills = [{
    id: 0,
    skill: 'Teamwork'
}, {
    id: 1,
    skill: 'Design'
}, {
    id: 2,
    skill: 'C#'
}, {
    id: 3,
    skill: 'C++'
},{
    id: 4,
    skill: 'Leadership'
}, {
    id: 5,
    skill: 'Javascript'
}, {
    id: 6,
    skill: 'CSS'
}, {
    id: 7,
    skill: 'SQL'
}];

export function Skill(){
    return(
        <div>
            <span className='bg-sky-500 text-white font-semibold rounded p-2 m-2 '> { skills[1].skill } </span>

        </div>
    );

}


export default function MySkills() {
    const listItems = skills.map(skill => 
        <div key={skill.id}>
            <span className='bg-sky-500 text-white font-semibold rounded p-2 mr-3 '> { skill.skill } </span>
        </div>
        );
    return (
        <div>
            <div className="flex flex-row bg-white">
                <h1 className="font-inter text-2xl font-semibold mb-3">Skills</h1>
            </div>
            <div className="pt-1 center-content flex flex-row bg-white ">
                {listItems}
            </div>
        </div>

    );
}
