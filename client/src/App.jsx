import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./Views/Landing/Landing.jsx";
import Login from "./Views/Login/Login.jsx";
import RegisterModel from "./Components/RegisterModel/RegisterModel";
import ProfileCompany from './Views/Profiles/ProfileCompany'
import ProfileModel from "./Views/profiles/ProfileModel";
import EventForm from "./Components/EventForm/EventFrom";
import NavBarLateral from "./Components/NavBarLateral/NavBarLateral";
import FormEmpresa from "./Components/FormEmpresas/FormEmpresas";
import FormTalento from "./Components/FormTalento/FormTalento";
import RegisterCompany from "./Views/RegisterCompany/RegisterCompany";
import CompanySearch from "./Views/Searches/CompanySearch";
import TalentSearch from "./Views/Searches/TalentSearch";
import PaymentPlans from "./Views/PaymentPlans/PaymentPlans";
import Home from "./Views/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/model/register" element={<RegisterModel />} />
        <Route path="/model/profile" element={<ProfileModel />} />
        <Route path="/model/search/:input" element={<TalentSearch />} />
        <Route path="/company/register" element={<RegisterCompany />} />
        <Route path="/company/profile" element={<ProfileCompany />} />
        <Route path="/company/search/:input" element={<CompanySearch />} />
        <Route path="/company/plans" element={<PaymentPlans />} />
        <Route path="/company/create" element={<EventForm />} />
        <Route path="/form/company" element={<FormEmpresa />} />
        <Route path="/form/talent" element={<FormTalento />} />
        <Route path="/NavBarLateral" element={<NavBarLateral />} />
        <Route path="/home/talent" element={<Home type="talent"/>} />
        <Route path="/home/company" element={<Home type="company"/>} />
      </Routes>
    </>
  );
}

export default App;
