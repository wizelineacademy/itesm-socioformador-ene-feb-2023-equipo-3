import * as React from "react";

export type Skill = {
    id_skill: number
    name: string
  } 
  
export function SkillItem({ skill }: any) {
  return (
    <div key={skill.id_skill}>
      <span className="font-inter mr-3 rounded bg-sky-500 p-2 font-semibold text-white ">
        {skill.name}
      </span>
    </div>
  );
}

function Skills( {props}: any ) {
  return (
    <div>
      <div className="flex flex-row bg-white">
        <h1 className="font-inter mb-3 text-2xl font-semibold">Skills</h1>
      </div>
      <div className="font-inter center-content flex flex-row bg-white pt-1 ">
        { props.skills.map((skill: any) => (
          <SkillItem skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default Skills
