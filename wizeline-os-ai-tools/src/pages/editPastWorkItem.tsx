import EditPastWorkItem from "@/components/Profile/Edit/PastWork/EditPastWorkItem";
import Loading from "@/components/ui/Loading";
import { useRouter } from "next/router";

export default function editPastWorkItem() {

    const { query, isReady } = useRouter()
    if (!isReady) {
        return <Loading/>
    }
    const pastwork = query;

    return (
        <div>
            <EditPastWorkItem props={pastwork}/>
        </div>
    )
}