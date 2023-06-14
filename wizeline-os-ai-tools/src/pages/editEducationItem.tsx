import EditEducationItem from "@/components/Profile/Edit/Education/EditEducationItem";
import Loading from "@/components/ui/Loading";
import { useRouter } from "next/router";

export default function editEducationItem() {

    const { query, isReady } = useRouter()
    if (!isReady) {
        return <Loading/>
    }
    const edu = query;

    return (
        <div>
            <EditEducationItem props={edu}/>
        </div>
    )
}