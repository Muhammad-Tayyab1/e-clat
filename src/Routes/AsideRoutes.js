import React from "react";
import { Route, Routes } from "react-router-dom";
import Claims from "../components/pages/Claims";
import Encounters from "../components/pages/Encounters";
import Home from "../components/pages/Home";
import Organizations from "../components/pages/Organizations";
import PreAuthorization from "../components/pages/PreAuthorization";
import Users from "../components/pages/Users";
import PatientList from "../components/pages/PatientList";
import PatientDetailsModel from "../components/common/PatientDetailsModel";
import SearchResultPage from "../components/common/SearchResultPage";

export const AsideRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/patientList" element={<PatientList />} />
        <Route path="/encounters" element={<Encounters />} />
        <Route path="/pre-authorization" element={<PreAuthorization />} />
        <Route path="/claims" element={<Claims />} />
        <Route path="/organizations" element={<Organizations />} />
        <Route path="/users" element={<Users />} />
        <Route path='/patient-details' element={<PatientDetailsModel />} />
        <Route path='/search-result' element={<SearchResultPage/>} />
      </Routes>
    </div>
  );
};
