import FormComponent from "@/components/Form/FormComponent";
import Navbar from "@/components/Navbar";

export default function newUser() {
    return(
        <div className="w-full h-screen flex items-start flex-col">
            <div className="z-[-1] absolute h-screen w-full flex">
                <div className="w-3/4">
                </div>
                <div className="w-1/4 bg-gray-200 h-screen">
                </div>
            </div>
            <div className="bg-black w-full h-20">
                pseudoNavbar
            </div>
            <FormComponent></FormComponent>
        </div>
    )
}