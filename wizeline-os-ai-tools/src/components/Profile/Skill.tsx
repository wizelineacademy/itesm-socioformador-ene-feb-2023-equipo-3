import Link from "next/link";
import * as React from "react";
import AddButton from "../ui/AddButton";

export function SkillItem({ skill }: any) {
  return (
    <div key={skill.id_skill}>
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
        <Link href="/editPastWork">
          <AddButton />
        </Link>
      </div>
      <div className="font-inter center-content flex flex-ro pt-1 ">
        {props?.map((skill: any) => (
          <SkillItem skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
