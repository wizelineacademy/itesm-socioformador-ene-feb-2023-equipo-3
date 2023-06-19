import BackButton from "@/components/ui/BackButton";
import { useRouter } from "next/router";
import { useForm, FormProvider } from "react-hook-form";
import { Input } from "@/components/ui/Input";
import { Toaster, toast } from "react-hot-toast";
import PastWorkForm from "./Form/PastWorkForm";
import AIAssitantPastWork from "../../Edit/PastWork/Form/AIAssistantPastWork";

interface FormValues {
  pastWtitle: string;
  pastWStartDate: string;
  pastWFinishDate: string;
  pastWDescription: string;
}

const AddPastWork = ({ props }: any) => {
  const methods = useForm<FormValues>({
    //resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  const router = useRouter();

  // Funcion para añadir past work
  async function addPastWork(data: FormValues) {
    const notification = toast.loading("Updating...");
    try {
      fetch(`/api/add/addPastWork`, {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }).then(() => {
        // Toast Notification to say succesful
        toast.success("Past Work Added!", {
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
        <p className="pl-2 text-center text-xl font-medium">Past Work</p>
      </section>
      <hr className="mt-5 h-px border-0 bg-gray-200"></hr>

      <section className="flex h-screen">
        <FormProvider {...methods}>
          <div className="ml-10 mr-10 w-[60%] pt-5">
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="container"
            >
              <PastWorkForm props={props} />
              <div className="mt-2 grid justify-items-end">
                <div className="w-52">
                  <Input
                    type="submit"
                    value="Add"
                    onClick={() => addPastWork(methods.getValues())}
                    className="h-10 rounded bg-[#e83d44] px-4 py-2 font-bold text-white hover:bg-[#c62928]"
                  ></Input>
                </div>
              </div>
            </form>
          </div>
          <div className="w-[40%] bg-gray-200 p-10 pt-[15rem]">
            <AIAssitantPastWork
              aboutText={methods.getValues("pastWDescription")}
            />
          </div>
        </FormProvider>
      </section>
    </div>
  );
};

export default AddPastWork;
