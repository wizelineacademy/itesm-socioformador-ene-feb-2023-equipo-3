import FormComponent from "@/components/Form/FormComponent";
import Navbar from "@/components/Navbar";
import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";

export default function newUser() {
    return(
        <div className="w-full flex items-start flex-col">
            <div className="z-[-1] absolute w-full flex">
                <div className="w-3/4">
                </div>
                <div className="w-1/4 bg-gray-200" style={{height: 2280}}>
                </div>
            </div>
            <div className="bg-black w-full h-20">
                pseudoNavbar
            </div>
            <FormComponent></FormComponent>
        </div>
    )
}