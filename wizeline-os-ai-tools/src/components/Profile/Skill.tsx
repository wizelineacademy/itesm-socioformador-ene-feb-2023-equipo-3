import Link from "next/link";
import * as React from "react";
import AddButton from "../ui/AddButton";

export function SkillItem({ skill }: any) {
  return (
    <div>
      <span className="font-inter mr-3 rounded bg-[#e83d44] p-2 font-semibold text-white ">
        {skill.name}
      </span>
    </div>
  );
}

function Skills({ props }: any) {
  function isExpert(): boolean {
    const hasExpertSkill = props?.some((skill: any) => skill.id_level === 1);
    return !!hasExpertSkill;
  }

  function isAdvanced(): boolean {
    const hasAdvancedSkill = props?.some((skill: any) => skill.id_level === 2);
    return !!hasAdvancedSkill;
  }

  function isIntermediate(): boolean {
    const hasIntermediateSkill = props?.some(
      (skill: any) => skill.id_level === 3
    );
    return !!hasIntermediateSkill;
  }

  function isBasic(): boolean {
    const hasBasicSkill = props?.some((skill: any) => skill.id_level === 4);
    return !!hasBasicSkill;
  }

  const hasSkills = props?.length > 0;

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="font-inter text-2xl font-semibold">Skills</h1>
        <Link id="SkillAddButton" href="/editSkills">
          <AddButton />
        </Link>
      </div>
      {!hasSkills && (
        <p className="font-inter text-lg text-[#323232]">No skills added yet</p>
      )}
      {isExpert() && (
        <>
          <h1 className="font-inter mb-3 text-lg font-semibold text-[#323232] underline underline-offset-4">
            Expert
          </h1>
          <div className="mb-5 mt-5 flex flex-wrap gap-y-4">
            {props?.map((skill: any) => {
              if (skill.id_level === 1) {
                return <SkillItem skill={skill} key={skill.id_skills} />;
              }
              return null;
            })}
          </div>
        </>
      )}

      {isAdvanced() && (
        <>
          <h1 className="font-inter text-lg font-semibold text-[#323232] underline underline-offset-4">
            Advanced
          </h1>
          <div className="mb-5 mt-5 flex flex-wrap gap-y-4">
            {props?.map((skill: any) => {
              if (skill.id_level === 2) {
                return <SkillItem skill={skill} key={skill.id_skills} />;
              }
              return null;
            })}
          </div>
        </>
      )}

      {isIntermediate() && (
        <>
          <h1 className="font-inter text-lg font-semibold text-[#323232] underline underline-offset-4">
            Intermediate
          </h1>
          <div className="mb-5 mt-5 flex flex-wrap gap-y-4">
            {props?.map((skill: any) => {
              if (skill.id_level === 3) {
                return <SkillItem skill={skill} key={skill.id_skills} />;
              }
              return null;
            })}
          </div>
        </>
      )}

      {isBasic() && (
        <>
          <h1 className="font-inter mb-3 text-lg font-semibold text-[#323232] underline underline-offset-4">
            Basic
          </h1>
          <div className="mb-5 mt-5 flex flex-wrap gap-y-4">
            {props?.map((skill: any) => {
              if (skill.id_level === 4) {
                return <SkillItem skill={skill} key={skill.id_skills} />;
              }
              return null;
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default Skills;
