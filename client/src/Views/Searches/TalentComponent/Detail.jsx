import React from "react";
import style from "./DetailComp.module.css";
import { useDispatch } from "react-redux";
import { create_postulant } from "../../../redux/actions";

const Detail = (props) => {
  const { detail , idTalent, idEvent} = props;
  console.log("en detail... idUsuario:  "+idTalent+"   idEvento:  "+ idEvent ); 
  const dispatch = useDispatch();

  const handlerClickCreate = () => {
    dispatch(create_postulant(idEvent, idTalent));
  }

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
        <button className={style.postularme} onClick={() => handlerClickCreate()}>Postularme</button>
      </div>
    </div>
  );
};

export default Detail;
