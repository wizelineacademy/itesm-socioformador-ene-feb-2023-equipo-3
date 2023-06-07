import Link from "next/link";
import * as React from "react";
import AddButton from "../ui/AddButton";

export function SkillItem({ skill }: any) {
  return (
    <div>
      <span className="font-inter mr-3 rounded bg-sky-500 p-2 font-semibold text-white ">
        {skill.name}
      </span>
    </div>
  );
}

function Skills({ props }: any) {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="font-inter mb-3 text-2xl font-semibold">Skills</h1>
        <Link href="/editSkills">
          <AddButton />
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-y-4 gap-x-2">
        {props?.map((skill: any) => (
          <SkillItem skill={skill} key={skill.id_skills}/>
        ))}
      </div>
    </div>
  );
}

export default Skills;
