import EditAbout from "@/components/Profile/Edit/About/EditAbout";
import Loading from "@/components/ui/Loading";
import { useRouter } from "next/router";

export default function editAbout() {
  const { query, isReady } = useRouter();
  if (!isReady) {
    return <Loading />;
  }
  const props = query;

  return (
    <body>
      <EditAbout props={props} />
    </body>
  );
}
