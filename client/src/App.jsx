import {Route, Routes} from 'react-router-dom';
import './App.css'
import Landing from './Views/Landing/Landing.jsx'
import Login from './Components/Login/Login.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App
