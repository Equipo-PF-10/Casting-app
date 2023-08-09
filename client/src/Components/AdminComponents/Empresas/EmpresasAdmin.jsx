import React, { useEffect, useState } from 'react'
import style from './EmpresasAdmin.module.css'
import axios from "axios";

const EmpresasAdmin = () => {
  const [companiesData, setCompaniesData] = useState([]);
  const [bannedCompaniesData, setBannedCompaniesData] = useState([]);
  const [input, setInput] = useState("");

    const handleChange = (event) => {
      setInput(event.target.value);
    }

    const handleClick = () => {
      const filteredCompanies = companiesData.filter(company => {
        return company.id === input || company.email.includes(input) || company.id.includes(input);
      })
      const filteredBannedCompanies = bannedCompaniesData.filter(company => {
        return company.id === input || company.email.includes(input) || company.id.includes(input);
      })
      setCompaniesData(filteredCompanies);
      setBannedCompaniesData(filteredBannedCompanies);
    }
  

    const handleBan = (id) => {
      axios.delete(`http://localhost:3001/admin/users/ban/companies/${id}`).then(() => {
        axios('http://localhost:3001/companies').then(({ data }) => {
            setCompaniesData(data);
        })
        axios('http://localhost:3001/admin/users/banned/companies').then(({ data }) => {
      setBannedCompaniesData(data);
      })
      })
    }
    const handleUnban = (id) => {
      axios.patch(`http://localhost:3001/admin/users/desban/companies/${id}`).then(() => {
        axios('http://localhost:3001/companies').then(({ data }) => {
            setCompaniesData(data);
        })
        axios('http://localhost:3001/admin/users/banned/companies').then(({ data }) => {
      setBannedCompaniesData(data);
      })
      })
    }

  useEffect(() => {
    if(input === "") {
    axios('http://localhost:3001/companies').then(({ data }) => {
            setCompaniesData(data);
        })
      axios('http://localhost:3001/admin/users/banned/companies').then(({ data }) => {
      setBannedCompaniesData(data);
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
    <h1 className={style.title}>EMPRESAS REGISTRADAS</h1>
      <table className={style.talentsTable}>
  <tr>
    <th>ID</th>
    <th>NOMBRE</th>
    <th>PLAN</th>
    <th>PUBLICACIONES</th>
    <th>PAÍS</th>
    <th>EMAIL</th>
    {/* <th>DISPONIBILIDAD</th> */}
    
    
    
    <th> </th>
  </tr>
  {companiesData ? companiesData.map(talent => {
    return (
      // <tr className={talent.available ?  null : style.unavailable}>
      <tr>
        <td>{talent.id}</td>
        <td>{talent.email ? talent.email.split("@")[0] : null}</td>
        <td><span className={
          talent.plan === "PENDIENTE" ? style.pendiente : (talent.plan === "PRUEBA GRATIS" ? style.prueba : (talent.plan === "BASICO" ? style.basico : (talent.plan === "PREMIUM" ? style.premium : null)))
        }>{
          talent.plan === "PENDIENTE" ? talent.plan : (talent.plan === "PRUEBA GRATIS" ? "FREE" : (talent.plan === "BASICO" ? "PREMIUM" : (talent.plan === "PREMIUM" ? "PRO" : null)))
        }</span></td>
        <td>{talent.numberPosts}</td>
        <td>{talent.country}</td>
        <td>{talent.email}</td>
        {/* <td>{talent.available ? "Disponible" : "No Disponible"}</td> */}
        
        
        
        <td>
          <button className={style.banButton} onClick={() => handleBan(talent.id)}>BANEAR</button>
        </td>
      </tr>
    )
  }): null}
   {bannedCompaniesData ? bannedCompaniesData.map(talent => {
    return (
      // <tr className={talent.available ?  null : style.unavailable}>
      <tr className={style.banned}>
        <td>{talent.id}</td>
        <td>{talent.email ? talent.email.split("@")[0] : null}</td>
        <td><span className={
          talent.plan === "PENDIENTE" ? style.pendiente : (talent.plan === "PRUEBA GRATIS" ? style.prueba : (talent.plan === "BASICO" ? style.basico : (talent.plan === "PREMIUM" ? style.premium : null)))
        }>{
          talent.plan === "PENDIENTE" ? talent.plan : (talent.plan === "PRUEBA GRATIS" ? "FREE" : (talent.plan === "BASICO" ? "PREMIUM" : (talent.plan === "PREMIUM" ? "PRO" : null)))
        }</span></td>
        <td>{talent.numberPosts}</td>
        <td>{talent.country}</td>
        <td>{talent.email}</td>
        {/* <td>{talent.available ? "Disponible" : "No Disponible"}</td> */}
        
        
        
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

export default EmpresasAdmin;