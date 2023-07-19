import {Route, Routes} from 'react-router-dom';
import './App.css'
import Landing from './Views/Landing/Landing.jsx'
import Login from './Components/Login/Login.jsx'
import RegisterModel from './Components/RegisterModel/RegisterModel';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/model/register" element={<RegisterModel />} />
      </Routes>
    </>
  );
}

export default App
