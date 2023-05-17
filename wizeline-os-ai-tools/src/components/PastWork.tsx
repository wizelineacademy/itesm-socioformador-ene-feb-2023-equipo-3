import EditButton from "./EditButton";

const getMonth = (date: Date) => {
    const month = date.toLocaleString("en-US", { month: "short" });
    return month;
};

export function PastWorkItem({ pastwork }: any) {
  const startDate = new Date(pastwork.start_date);
  const finishDate = new Date(pastwork.finish_date);
  
  return (
    <div>
      <div className="flex flex-row gap-2 pb-5 pr-10 pt-5 first:pt-0 last:pb-0">
        <div className="mt-2 h-5 w-5 rounded-full bg-red-500"></div>
        <div key={pastwork.id_job}>
          <h1 className="font-inter text-lg font-semibold text-black">
            {pastwork.title}
          </h1>
          <div className="font-inter text-sm font-normal text-[#878787]">
            <span>
              {getMonth(startDate)} {startDate.getFullYear()}
            </span>
            <span> - </span>
            <span>
              {getMonth(finishDate)} {finishDate.getFullYear()}
            </span>
          </div>
          <p className="font-inter text-base font-light">
            {pastwork.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PastWork({ props }: any) {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="font-inter mb-3 pt-5 text-2xl font-semibold">
          Past Work
        </h1>
        <EditButton />
      </div>
      <div className="0 mr-5 grid grid-cols-1 divide-y">
        {props.map((pastwork: any) => (
          <PastWorkItem pastwork={pastwork} />
        ))}
      </div>
    </div>
  );
}
