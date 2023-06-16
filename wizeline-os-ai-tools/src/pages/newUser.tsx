import FormComponent from "@/components/Form/FormComponent";
export default function newUser() {
  return (
    <div className="flex w-full flex-col items-start">
      <div className="absolute z-[-1] flex w-full">
        <div className="w-3/4"></div>
        <div className="w-1/4 bg-gray-200" style={{ height: 2420 }}></div>
      </div>
      <div className="h-20 w-full bg-black">pseudoNavbar</div>
      <FormComponent></FormComponent>
    </div>
  );
}
