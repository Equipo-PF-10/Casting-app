import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./Views/Landing/Landing.jsx";
import Login from "./Views/Login/Login.jsx";
import RegisterModel from "./Components/RegisterModel/RegisterModel";
import ProfileCompany from "./Views/profiles/profileCompany";
import ProfileModel from "./Views/profiles/ProfileModel";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/model/register" element={<RegisterModel />} />
        <Route path="/company/profile" element={<ProfileCompany />} />
        <Route path="/model/profile" element={<ProfileModel />} />
      </Routes>
    </>
  );
}

export default App;
