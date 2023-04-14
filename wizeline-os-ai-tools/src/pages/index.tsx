import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import ColabTable from '../components/ColabTable'

import { api } from "@/utils/api";


const Home: NextPage = () => {
  return (
    <div>
      <ColabTable/>
    </div>
  );
};

export default Home;
