import EditPastWork from "@/components/Profile/Edit/PastWork/EditPastWork";
import Loading from "@/components/ui/Loading";
import { useRouter } from "next/router";


export default function editPastWork() {

    const { query, isReady } = useRouter()
    if (!isReady) {
        return <Loading/>
    }
    const props = query;

    return (
        <div>
            <EditPastWork props={props}/>
        </div>
    )
}