import {Router, Routes} from 'react-router-dom';
import './App.css'
import Landing from './Views/Landing/Landing.jsx'
import Login from './Components/Login/Login.jsx'

function App() {
  return (
    <>
      <Routes>
        <Router exact path="/" element={<Landing />} />
        <Router exact path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App
