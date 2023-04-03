import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "@/utils/api";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Wizeline OS</title>
        <meta name="Wizeline OS" content="Sign In" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div className="bg-orange-500">
          Hello World!
        </div>
      </main>
    </>
  );
};

export default Home;
