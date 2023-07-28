import React, { useState, useEffect } from "react";
import style from "./DetailComp.module.css";
import { useDispatch, useSelector } from "react-redux";
import { create_postulant, get_all_postulations } from "../../../redux/actions";

const Detail = (props) => {
  const { detail , idTalent, idEvent} = props;
  console.log("en detail... idUsuario:  "+idTalent+"   idEvento:  "+ idEvent ); 
  const dispatch = useDispatch();
  const allPostulants = useSelector((state) =>  state.postulatedTalentsByEvent );
  console.log(allPostulants);
  const [isPostulated, setIsPostulated] = useState("");

  // Verificar si el idTalent se encuentra en allPostulants
  useEffect(() => {
    const isTalentPostulated = allPostulants.some((postulant) => postulant.id === idTalent);
    setIsPostulated(isTalentPostulated ? 'Yes' : 'No');
  }, [allPostulants, idTalent]);


  const handlerClickCreate = () => {
    dispatch(create_postulant(idEvent, idTalent));
  }

  useEffect(() => {
    dispatch(get_all_postulations(idEvent));
  }, [idEvent, dispatch]);

  return (
    <div className={style.containerDetail}>
      <h2>{detail?.name}</h2>
      <h5>{detail?.country}</h5>
      <h5>Se requiere: {detail?.habilityRequired}</h5>
      <p>{detail?.ubication}</p>
      <p>Fecha de publicación: {detail?.creationDate}</p>
      <p>Fecha de expiración: {detail?.expirationDate}</p>
      <p className={style.textoDetail}>{detail?.description}</p>
      {
        isPostulated === "Yes" ?
        <div className={style.message}>
          <h6>Ya se ha postulado a este evento.</h6>
        </div>
        :
        <div className={style.conectar}>
          <button className={style.postularme} onClick={() => handlerClickCreate()}>Postularme</button>
        </div>
      }
    </div>
  );
};

export default Detail;
