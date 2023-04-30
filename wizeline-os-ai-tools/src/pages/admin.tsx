import NewProject from "@/components/Admin/NewProject";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import ColabTable from "@/components/ColabTable";
import ViewTabs from "@/components/Admin/ViewTabs";
import React, { useState } from "react";

export default function admin() {
  return (
    <>
    <div >
        <ViewTabs></ViewTabs>
    </div>

{/*       <div className="p-2 flex columns-2 ">
        <div className="p-2 w-1/3">
          <img
            className="p-2 m-2 "
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg?w=640"
          ></img>
        </div>
        <div className=" mx-8 mb-4 flex w-2/3 columns-1 flex-col ">
          <SearchBar></SearchBar>
          <ColabTable></ColabTable>
        </div>
      </div> */}

    </>
  );
}

/* 

export default function admin() {
    return(
        <div className="-bg-orange-500">
            <NewProject></NewProject>
        </div>
    )
} 

*/
