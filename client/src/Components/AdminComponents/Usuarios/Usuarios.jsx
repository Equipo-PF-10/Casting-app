import React, { useEffect, useState } from 'react'
import style from './Usuarios.module.css'
import axios from "axios";

const Usuarios = () => {
  const [talentsData, setTalentsData] = useState([]);
  const [bannedTalentsData, setBannedTalentsData] = useState([]);
  const [input, setInput] = useState("");

    const handleChange = (event) => setInput(event.target.value);

    const handleClick = () => {
        const filteredTalents = talentsData.filter(talent => {
        return talent.id === input || talent.email.includes(input) || talent.id.includes(input) || talent.name.includes(input);
      })
      const filteredBannedTalents = bannedTalentsData.filter(talent => {
        return talent.id === input || talent.email.includes(input) || talent.id.includes(input) || talent.name.includes(input);
      })
      setTalentsData(filteredTalents);
      setBannedTalentsData(filteredBannedTalents);
    }


    const handleBan = (id) => {
      axios.delete(`https://deploy-sprint-2-backend.onrender.com/admin/users/ban/talents/${id}`).then(() => {
        axios('https://deploy-sprint-2-backend.onrender.com/talents').then(({ data }) => {
            setTalentsData(data);
        })
        axios('https://deploy-sprint-2-backend.onrender.com/admin/users/banned/talents').then(({ data }) => {
      setBannedTalentsData(data);
      })
      })
    }
    const handleUnban = (id) => {
      axios.patch(`https://deploy-sprint-2-backend.onrender.com/admin/users/desban/talents/${id}`).then(() => {
        axios('https://deploy-sprint-2-backend.onrender.com/talents').then(({ data }) => {
            setTalentsData(data);
        })
        axios('https://deploy-sprint-2-backend.onrender.com/admin/users/banned/talents').then(({ data }) => {
      setBannedTalentsData(data);
      })
      })
    }
  useEffect(() => {
    if(input === "") {
    axios('https://deploy-sprint-2-backend.onrender.com/talents').then(({ data }) => {
            setTalentsData(data);
        })
    axios('https://deploy-sprint-2-backend.onrender.com/admin/users/banned/talents').then(({ data }) => {
      setBannedTalentsData(data);
      })
    }
  }, [input]);
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

{bannedTalentsData ? bannedTalentsData.map(talent => {
    return (
      <tr className={style.banned}>
        <td>{talent.id}</td>
        <td>{talent.email}</td>
        <td>{talent.name}</td>
        <td>{talent.gender}</td>
        <td>{talent.nationality}</td>
        <td>{talent.ubication}</td>
        <td>
          <button className={style.unbanButton} onClick={() => handleUnban(talent.id)}>QUITAR BAN</button>
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
