import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import ColabTable from '../components/ColabTable'

import { api } from "@/utils/api";

const data = [ 
  {employee_name: 'Joaquín Bravo', avatar: "../../public/avatars/example_1.jpg", role: "Senior, Technology Manager", skills: "Python, Drupal, PHP"},
];

const Home: NextPage = () => {
  return (
    <div>
      <ColabTable data = {data} />
    </div>
  );
};

export default Home;
