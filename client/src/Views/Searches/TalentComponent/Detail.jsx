import React from "react";
import style from "./DetailComp.module.css";

const Detail = ({ details }) => {
  const { name, country, description, expirationDate, industryMain } = details;
  //console.log(name);
  

  return (
    <div className={style.containerDetail}>
      <h2>{name}</h2>
      <h5>{country}</h5>
      <h5>Industria: {industryMain}</h5>
      <p>{expirationDate}</p>
      <p className={style.textoDetail}>{description}</p>
      <div className={style.conteinerConectar}>
        <button className={style.postularme}>Postularme</button>
      </div>
    </div>
  );
};

export default Detail;
