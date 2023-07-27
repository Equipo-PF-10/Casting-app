import React from "react";
import style from "./DetailComp.module.css";
//import {useDispatch} from "react-redux";

const Detail = ({ detail }) => {

  return (
    <div className={style.containerDetail}>
      <h2>{detail?.name}</h2>
      <h5>{detail?.country}</h5>
      <h5>Se requiere: {detail?.habilityRequired}</h5>
      <p>{detail?.ubication}</p>
      <p>Fecha de publicación: {detail?.creationDate}</p>
      <p>Fecha de expiración: {detail?.expirationDate}</p>
      <p className={style.textoDetail}>{detail?.description}</p>
      <div className={style.conteinerConectar}>
        <button className={style.postularme}>Postularme</button>
      </div>
    </div>
  );
};

export default Detail;
