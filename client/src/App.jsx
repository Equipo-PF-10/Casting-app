import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./Views/Landing/Landing.jsx";
import Login from "./Views/Login/Login.jsx";
import RegisterModel from "./Components/RegisterModel/RegisterModel";
import ProfileCompany from "./Views/profiles/profileCompany";
import ProfileModel from "./Views/profiles/ProfileModel";
import RegisterCompany from "./Views/RegisterCompany/RegisterCompany";
import CompanySearch from "./Views/Searches/CompanySearch";
import TalentSearch from "./Views/Searches/TalentSearch";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/model/register" element={<RegisterModel />} />
        <Route path="/company/register" element={<RegisterCompany />} />
        <Route path="/company/profile" element={<ProfileCompany />} />
        <Route path="/model/profile" element={<ProfileModel />} />
        <Route path="/company/search" element={<CompanySearch />} />
        <Route path="/model/search" element={<TalentSearch />} />
      </Routes>
    </>
  );
}

export default App;
