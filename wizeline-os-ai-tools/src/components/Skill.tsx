
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
    skill: 'Throwing a Ball'
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
            <span className='bg-sky-500 text-white font-semibold rounded p-2 m-2'> { skill.skill } </span>
        </div>
        );
    return (
        <section className='flex flex-row bg-white'>
            <h1>Skills</h1>
            {listItems}
        </section>
        
    );
}
