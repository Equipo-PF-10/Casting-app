import React from "react";
import style from "./DetailComp.module.css";

const Detail = ({ events }) => {
  //const { name, country, description, expirationDate, industryMain } = events?.events;
  //const {events} = events


  return (
    <div className={style.containerDetail}>
      <h2>{events?.name}</h2>
      <h5>{events?.country}</h5>
      <h5>Se requiere: {events?.habilityRequired}</h5>
      <p>{events?.ubication}</p>
      <p>Fecha de publicación: {events?.creationDate}</p>
      <p>Fecha de expiración: {events?.expirationDate}</p>
      <p className={style.textoDetail}>{events?.description}</p>
      <div className={style.conteinerConectar}>
        <button className={style.postularme}>Postularme</button>
      </div>
    </div>
  );
};

export default Detail;
