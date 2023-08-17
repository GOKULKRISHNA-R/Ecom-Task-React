import React from "react";
import NavBar from "./components/navbar";
import UpdateForm from "./components/updateform";
import ProfileroductCard from "./components/productcard";

export default function Home() {
  return (
    <div>
      <NavBar id={1} />
      <UpdateForm />
      <ProfileroductCard />
    </div>
  );
}
