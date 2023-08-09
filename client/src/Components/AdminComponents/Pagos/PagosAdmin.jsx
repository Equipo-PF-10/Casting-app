import React, { useEffect, useState } from 'react'
import style from './PagosAdmin.module.css'
import axios from "axios";

const PagosAdmin = () => {
  const [paymentsData, setPaymentsData] = useState([]);
  const [input, setInput] = useState("");

    const handleChange = (event) => setInput(event.target.value);

    const handleClick = (event) => {
        console.log(input);
    }

  useEffect(() => {
    axios('http://localhost:3001/payments').then(({ data }) => {
            setPaymentsData(data);
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
      
      <h1 className={style.title}>PAGOS REGISTRADOS</h1>
      <table className={style.talentsTable}>
  <tr>
    <th>ID</th>
    <th>PAYPAL ID</th>
    <th>PLAN</th>
    <th>INICIO DE SUSCRIPCIÓN</th>
    <th>EXPIRACIÓN</th>
    <th>PRECIO</th>
    <th>COMISIÓN</th>
    <th>EMPRESA</th>
  </tr>
  
  {paymentsData ? paymentsData.map(talent => {
    return (
      <tr>
        <td>{talent.id}</td>
        <td>{talent.paymentId}</td>
        <td>{talent.planType}</td>
        <td>{talent.paymentDate ? talent.paymentDate.split("T")[0]:null}</td>
        <td>{talent.expirationDate ? talent.expirationDate.split("T")[0]:null}</td>
        <td>{talent.price}</td>
        <td>{talent.taxes}</td>
        <td>{talent.company.email ? talent.company.email.split("@")[0] : null}</td>
      </tr>
    )
  }): null}
</table>
    </div>
    </>
  )
}

export default PagosAdmin;