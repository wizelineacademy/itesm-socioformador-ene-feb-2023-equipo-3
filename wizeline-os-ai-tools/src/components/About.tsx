import EditButton from "./EditButton";

export default function About({props}: any) {
    return(
        <>
            <div className="flex justify-between">
                <h1 className="font-inter text-2xl font-semibold mb-3">About</h1>
                <EditButton/>
            </div>
            <p className="font-inter text-base font-light mr-10">{props.description}</p>
        </>
    )
}