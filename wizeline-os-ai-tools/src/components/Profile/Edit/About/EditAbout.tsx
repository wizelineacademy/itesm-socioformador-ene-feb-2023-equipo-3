import { useForm, FormProvider } from "react-hook-form";
import { Input } from "@/components/ui/Input";
import AIAssitantAbout from "@/components/Profile/Edit/About/Form/AIAssistantAbout";
import AboutForm from "./Form/AboutForm";
import { useRouter } from "next/router";
import { Toaster, toast } from "react-hot-toast";
import BackButton from "@/components/ui/BackButton";

interface FormValues {
  aboutDescription: string;
}

const EditAbout = ({ props }: any) => {
  const methods = useForm<FormValues>({
    //resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  const router = useRouter();

  // Funcion para actualizar about
  async function upAbout(data: FormValues) {
    const notification = toast.loading("Updating...");
    try {
      fetch(`/api/edit/updateAbout`, {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
      }).then(() => {
        // Toast Notification to say succesful
        toast.success("About Updated!", {
          id: notification,
        });
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
        <p className="pl-2 text-center text-xl font-medium">About</p>
      </section>
      <hr className="mt-5 h-px border-0 bg-gray-200"></hr>
      <section className="flex h-screen">
        <FormProvider {...methods}>
          <div className="ml-10 mr-10 w-[60%] pt-5">
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="container"
            >
              <AboutForm props={props} />
              <div className="grid justify-items-end">
                <div className="w-52">
                  <Input
                    type="submit"
                    value="Update"
                    onClick={() => upAbout(methods.getValues())}
                    className="h-10 rounded bg-[#e83d44] px-4 py-2 font-bold text-white hover:bg-[#c62928]"
                  ></Input>
                </div>
              </div>
            </form>
          </div>
          <div className="w-[40%] bg-gray-200 p-10">
            <AIAssitantAbout
              aboutText={methods.getValues("aboutDescription")}
            />
          </div>
        </FormProvider>
      </section>
    </div>
  );
};

export default EditAbout;
