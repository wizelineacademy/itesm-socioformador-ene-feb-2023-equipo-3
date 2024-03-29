import { useForm, FormProvider } from "react-hook-form";
import { Input } from "@/components/ui/Input";
import { useRouter } from "next/router";
import { Toaster, toast } from "react-hot-toast";
import BackButton from "@/components/ui/BackButton";
import { useEffect, useState } from "react";
import SkillsForm from "./Form/SkillsForm";
import Loading from "@/components/ui/Loading";

interface FormValues {
  expertSkills: string[];
  advancedSkills: string[];
  intermediateSkills: string[];
  basicSkills: string[];
}

const EditSkills = () => {
  const methods = useForm<FormValues>({
    //resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: FormValues) => {
    //console.log(data);
  };

  const router = useRouter();

  // State variables
  const [data, setData] = useState(null); // Data received from API
  const [isLoading, setLoading] = useState(false); // Loading state

  // Fetching data from API
  useEffect(() => {
    setLoading(true);
    fetch("/api/getUserSkills")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(true);
        console.log(error);
      });
  }, []);

  // Loading state
  if (isLoading) {
    return <Loading />;
  }

  // Funcion para actualizar about
  async function upSkills(data: FormValues) {
    const notification = toast.loading("Updating...");
    try {
      fetch(`/api/edit/createSkills`, {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }).then(() => {
        // Toast Notification to say succesful
        toast.success("Skills Updated!", {
          id: notification,
        });
        // Refresh the page
        router.back();
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Toaster position="top-right" />
      <section className="ml-10 mt-5 flex items-center">
        <BackButton router={router} />
        <p className="pl-2 text-center text-xl font-medium">Skills</p>
      </section>
      <hr className="mt-5 h-px border-0 bg-gray-200"></hr>
      <section className="flex">
        <FormProvider {...methods}>
          <div className="ml-10 mr-10 w-[60%] pt-5">
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="container"
            >
              <SkillsForm props={data} />
              <div className="grid justify-items-end">
                <div className="mb-16 mt-5 w-52">
                  <Input
                    type="submit"
                    value="Update"
                    onClick={() => upSkills(methods.getValues())}
                    className="h-10 rounded bg-[#e83d44] px-4 py-2 font-bold text-white hover:bg-[#c62928]"
                  ></Input>
                </div>
              </div>
            </form>
          </div>
          <div className="flex w-[40%]  bg-gray-200 p-10"></div>
        </FormProvider>
      </section>
    </div>
  );
};

export default EditSkills;
