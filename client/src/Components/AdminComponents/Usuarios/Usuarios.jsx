import React, { useEffect, useState } from 'react'
import style from './Usuarios.module.css'
import axios from "axios";

const Usuarios = () => {
  const [talentsData, setTalentsData] = useState([]);
  const [input, setInput] = useState("");

    const handleChange = (event) => setInput(event.target.value);

    const handleClick = (event) => {
        console.log(input);
    }


    const handleBan = (id) => {
      axios.delete(`http://localhost:3001/admin/users/ban/talents/${id}`).then(() => {
        axios('http://localhost:3001/talents').then(({ data }) => {
            setTalentsData(data);
        })
      })
    }
  useEffect(() => {
    axios('http://localhost:3001/talents').then(({ data }) => {
            setTalentsData(data);
        })
  }, []);
  return (
    <>
    <div className={style.optionsBar}>
    <div className={style.searchBarContainer}>
                <input value={input} onChange={handleChange} type='search' className={style.input} placeholder="Búsqueda..." />
                <button onClick={handleClick} className={style.searchButton} disabled={!input.length}>
                    Search
                </button>
            </div>
      </div>
    <div className={style.containerUsuario}>
      
      <h1 className={style.title}>TALENTOS REGISTRADOS</h1>
      <table className={style.talentsTable}>
  <tr>
    <th>ID</th>
    <th>EMAIL</th>
    <th>NOMBRE</th>
    <th>GÉNERO</th>
    <th>NACIONALIDAD</th>
    <th>UBICACIÓN</th>
    <th> </th>
  </tr>
  
  {talentsData ? talentsData.map(talent => {
    return (
      <tr>
        <td>{talent.id}</td>
        <td>{talent.email}</td>
        <td>{talent.name}</td>
        <td>{talent.gender}</td>
        <td>{talent.nationality}</td>
        <td>{talent.ubication}</td>
        <td>
          <button className={style.banButton} onClick={() => handleBan(talent.id)}>BANEAR</button>
        </td>
      </tr>
    )
  }): null}
</table>
    </div>
    </>
  )
}

export default Usuarios;
