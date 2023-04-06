import { type NextPage } from "next";
import {useState} from 'react';
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import SearchBar from '../components/SearchBar';

import { api } from "@/utils/api";

const Home: NextPage = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div>
      <SearchBar onChange={handleSearchChange} value={searchValue} />
      {/*  ejemplo */}
    </div>
  );
};

export default Home;
