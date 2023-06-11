import Head from "next/head";
import Image from "next/image";
import SignInButton from "@/components/SignInButton";
import Paragraph from "@/components/ui/Paragraph";

export default function Home() {
  return (
    <>
      <Head>
        <title>Wizeline OS</title>
        <meta name="Wizeline OS" content="Sign In" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-slate-50 antialiased">
        <div className="flex h-screen w-full items-start">
          <div className="relative flex h-full w-1/2 flex-col">
            <Image
              priority
              className="h-full w-full object-cover"
              quality={100}
              fill
              src="/images/people.jpeg"
              alt=" side cover image"
            />
          </div>
          <div className="flex h-full w-1/2 flex-col">
            <div className="mr-8 mt-8 flex justify-end">
              <img className="h-8" src="/images/wizelinelogo.png" alt="" />
            </div>
            <div className="mt-[25vh] flex w-full justify-center px-6">
              <div className="bg-transparent sm:max-w-md md:mt-0 xl:p-0">
                <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
                  <h1 className="text-center text-3xl font-bold leading-tight tracking-tight text-gray-900">
                    Welcome back
                  </h1>
                  <Paragraph>
                    Please log in with your Google account to access to Wizeline
                    OS
                  </Paragraph>
                  <SignInButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}