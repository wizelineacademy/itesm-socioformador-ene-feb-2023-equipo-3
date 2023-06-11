import Link from "next/link";
import EditButton from "../ui/EditButton";

interface ComponentProps {
    description: string;
}

export default function About({props}: ComponentProps) {
    return(
        <>
            <div className="flex justify-between">
                <h1 className="font-inter text-2xl font-semibold mb-3">About</h1>
                <Link href={{
                    pathname: '/editAbout',
                    query: props,
                }}>
                    <EditButton />
                </Link>
            </div>
            <p className="font-inter text-base font-light mr-10">{props?.description}</p>
        </>
    )
}