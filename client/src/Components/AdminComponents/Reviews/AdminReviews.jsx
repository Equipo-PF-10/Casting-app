import React, { useEffect, useState } from 'react'
import style from './AdminReviews.module.css'
import axios from "axios";

const AdminReviews = () => {
  const [talentReviews, setTalentReviews] = useState([]);
  const [companyReviews, setCompanyReviews] = useState([]);
  const [input, setInput] = useState("talents");

    const handleChange = (event) => setInput(event.target.value);

    // const handleClick = () => {
    //     const filteredTalents = talentsData.filter(talent => {
    //     return talent.id === input || talent.email.includes(input) || talent.id.includes(input) || talent.name.includes(input);
    //   })
    //   const filteredBannedTalents = bannedTalentsData.filter(talent => {
    //     return talent.id === input || talent.email.includes(input) || talent.id.includes(input) || talent.name.includes(input);
    //   })
    //   setTalentsData(filteredTalents);
    //   setBannedTalentsData(filteredBannedTalents);
    // }


    // const handleBan = (id) => {
    //   axios.delete(`http://localhost:3001/admin/users/ban/talents/${id}`).then(() => {
    //     axios('http://localhost:3001/talents').then(({ data }) => {
    //         setTalentsData(data);
    //     })
    //     axios('http://localhost:3001/admin/users/banned/talents').then(({ data }) => {
    //   setBannedTalentsData(data);
    //   })
    //   })
    // }
  useEffect(() => {
    axios('http://localhost:3001/talents/reviews').then(({ data }) => {
        setTalentReviews(data);
        })
    axios('http://localhost:3001/companies/reviews').then(({ data }) => {
        setCompanyReviews(data);
      })
  }, []);
  return (
    <>
    <div className={style.optionsBar}>
    <div className={style.searchBarContainer}>
                <select name="display" className={style.input} onChange={handleChange}>
                    <option value="talents">REVIEWS DE TALENTOS</option>
                    <option value="companies">REVIEWS DE EMPRESAS</option>
                </select>
            </div>
      </div>
    <div className={style.containerUsuario}>
      
      <h1 className={style.title}>REVIEWS</h1>
      <table className={style.talentsTable}>
  <tr>
    <th>ID</th>
    <th>NOMBRE</th>
    <th>COMENTARIO</th>
  </tr>
  
  {input === "talents" ? (talentReviews ? talentReviews.map(review => {
    return (
      <tr>
        <td>{review.talentId}</td>
        <td>{review.talentName}</td>
        <td>{review.comment}</td>
      </tr>
    )
  }) : null ) : null }

{input === "companies" ? (companyReviews ? companyReviews.map(review => {
    return (
      <tr>
        <td>{review.companyId}</td>
        <td>{review.companyName ? review.companyName.split("@")[0] : null }</td>
        <td>{review.comment}</td>
      </tr>
    )
}) : null ) : null }

</table>
    </div>
    </>
  )
}

export default AdminReviews;