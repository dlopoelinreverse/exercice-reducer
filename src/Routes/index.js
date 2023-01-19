import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Profil from "../Pages/Profil";

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="profil" element={<Profil />} />
    </Routes>
  );
};

export default index;
