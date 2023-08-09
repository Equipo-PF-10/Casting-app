import React, { useEffect, useState } from 'react'
import style from './EmpresasAdmin.module.css'
import axios from "axios";

const EmpresasAdmin = () => {
  const [companiesData, setCompaniesData] = useState([]);

  const [input, setInput] = useState("");

    const handleChange = (event) => setInput(event.target.value);

    const handleClick = (event) => {
        console.log(input);
    }

  useEffect(() => {
    axios('http://localhost:3001/companies').then(({ data }) => {
            setCompaniesData(data);
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
    <h1 className={style.title}>EMPRESAS REGISTRADAS</h1>
      <table className={style.talentsTable}>
  <tr>
    <th>ID</th>
    <th>NOMBRE</th>
    <th>EMAIL</th>
    <th>PAÍS</th>
    {/* <th>DISPONIBILIDAD</th> */}
    <th>PUBLICACIONES</th>
    <th>PLAN</th>
    <th> </th>
  </tr>
  {companiesData ? companiesData.map(talent => {
    return (
      // <tr className={talent.available ?  null : style.unavailable}>
      <tr>
        <td>{talent.id}</td>
        <td>{talent.email ? talent.email.split("@")[0] : null}</td>
        <td>{talent.email}</td>
        <td>{talent.country}</td>
        {/* <td>{talent.available ? "Disponible" : "No Disponible"}</td> */}
        <td>{talent.numberPosts}</td>
        <td><span className={
          talent.plan === "PENDIENTE" ? style.pendiente : (talent.plan === "PRUEBA GRATIS" ? style.prueba : (talent.plan === "BASICO" ? style.basico : (talent.plan === "PREMIUM" ? style.premium : null)))
        }>{
          talent.plan === "PENDIENTE" ? talent.plan : (talent.plan === "PRUEBA GRATIS" ? "FREE" : (talent.plan === "BASICO" ? "PREMIUM" : (talent.plan === "PREMIUM" ? "PRO" : null)))
        }</span></td>
        <td>
          <button className={style.banButton}>BANEAR</button>
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