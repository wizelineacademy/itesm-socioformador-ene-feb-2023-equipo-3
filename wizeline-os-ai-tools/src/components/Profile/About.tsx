import Link from "next/link";
import EditButton from "../ui/EditButton";

export default function About({ props }: any) {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="font-inter mb-3 text-2xl font-semibold">About</h1>
        <Link
          id="AboutEditButton"
          href={{
            pathname: "/editAbout",
            query: props,
          }}
        >
          <EditButton />
        </Link>
      </div>
      <p className="font-inter mr-10 text-base font-light">
        {props?.description}
      </p>
    </>
  );
}
