import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./Views/Landing/Landing.jsx";
import Login from "./Views/Login/Login.jsx";
import RegisterModel from "./Components/RegisterModel/RegisterModel";
import ProfileCompany from "./Views/profiles/profileCompany";
import ProfileModel from "./Views/profiles/ProfileModel";
import EventForm from "./Components/eventForm/eventsFrom";
import NavBarLateral from "./Components/NavBarLateral/NavBarLateral";
import FormEmpresa from "./Components/FormEmpresas/FormEmpresas";
import FormTalento from "./Components/FormTalento/FormTalento";
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
        <Route path="/createEvent" element={<EventForm/>} />
        <Route path="/NavBarLateral" element={<NavBarLateral/>}/>
        <Route path="/form/empresas" element={<FormEmpresa/>}/>
        <Route path="/form/talentos" element={<FormTalento/>}/>
      </Routes>
    </>
  );
}

export default App;
