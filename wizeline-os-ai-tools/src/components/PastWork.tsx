import EditButton from "./EditButton";

export function PastWorkItem({pastwork}: any) {
    const startDate = new Date(pastwork.start_date)
    const finishDate = new Date(pastwork.finish_date)

    const getMonth = (date: Date) => {
        const month = date.toLocaleString('default', { month: 'short' })
        return month
    }

    return (
        <div className="flex flex-row gap-2 pr-10 pt-5 pb-5 first:pt-0 last:pb-0">
            <div className="mt-2 w-5 h-5 bg-red-500 rounded-full"></div>
            <div key={pastwork.id_job}>
                <h1 className="font-inter text-lg font-semibold text-black">{pastwork.title}</h1>
                <div className="font-inter text-sm font-normal text-[#878787]">
                    <span>{getMonth(startDate)} {startDate.getFullYear()}</span>
                    <span> - </span>
                    <span>{getMonth(finishDate)} {finishDate.getFullYear()}</span>
                </div>
                <p className="font-inter text-base font-light">{pastwork.description}</p>
            </div>
        </div>
    )
}


export default function PastWork({props}: any) {
  return (
    <div>
        <div className="flex justify-between">
            <h1 className="text-2xl pt-5 font-inter font-semibold mb-3">Past Work</h1>
            <EditButton/>
        </div>
        <div className="grid grid-cols-1 divide-y 0 mr-5">
            {props.map((pastwork: any) => (
                <PastWorkItem pastwork={pastwork}/>
            ))}
        </div>

    </div>
  )
}