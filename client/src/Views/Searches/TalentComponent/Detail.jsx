import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./DetailComp.module.css";
import { useDispatch, useSelector } from "react-redux";
import { create_postulant, get_all_postulations, get_talent_by_id, message_error_postulate } from "../../../redux/actions";
import { getAllCompanies, get_company_by_id } from "../../../redux/actions"


const Detail = (props) => {

  const { detail , idTalent, idEvent} = props;  

  const dispatch = useDispatch();
  const allPostulants = useSelector((state) =>  state.postulatedTalentsByEvent );//console.log(allPostulants);
  const talent = useSelector((state) =>  state.talentById);
  const empresa = useSelector((state) => state.companyById);
  const [isPostulated, setIsPostulated] = useState("");
  
  // Verificar si el idTalent se encuentra en allPostulants
  useEffect(() => {
    if (Array.isArray(allPostulants)) {
      const isTalentPostulated = allPostulants.some((postulant) => postulant.id === idTalent);
      setIsPostulated(isTalentPostulated ? 'Yes' : 'No');
    }
  }, [allPostulants, idTalent]);

  //Verificar que el talento haya ingresado los datos minimos en su perfil antes de postularse a un evento
  const handlerClickCreate = async () => {
    dispatch(get_talent_by_id(idTalent));
    //dispatch(get_talent_by_id(idTalent));
    console.log(idEvent);
    console.log(talent);
    if(talent.id === "" || talent.image === null || talent.hability === null){
        dispatch(message_error_postulate("Para postularse antes debe completar los datos principales de su perfil."));
    }else {
      dispatch(create_postulant(idEvent, idTalent));
      
      
      
      const { CompanyId } = (await (axios.get(`http://localhost:3001/events/eventid/${idEvent}`))).data
      
      const { email } = (await (axios.get(`http://localhost:3001/companies/${CompanyId}`))).data     

      const emailToCompany = axios.post(`http://localhost:3001/email/newPostulante/${email}`)
                .then((resp) => console.log(resp.data))
                .catch((error) => console.log(error));
      
      const talentEmail = (await (axios.get(`http://localhost:3001/talents/${idTalent}`))).data.email          
      
      const emailToTalent = axios.post(`http://localhost:3001/email/postulationEvent/${talentEmail}`) 
                .then((resp) => console.log(resp.data))
                .catch((error) => console.log(error));
    }   
  }

  useEffect(() => {
    dispatch(get_all_postulations(idEvent));
  }, [idEvent, dispatch]);


  return (
    <div className={style.containerDetail}>
      <article className={style.sectionInfo}>
        {
          detail ? 
          <section>
            <h2 className={style.title}>{detail?.name}</h2>
            <h5>{detail?.country}</h5>
            <h5>Se requiere: {detail?.habilityRequired.join(", ")}</h5>
            <p>{detail?.ubication}</p>
            <p>Fecha de publicación: {detail?.creationDate}</p>
            <p>Fecha de expiración: {detail?.expirationDate}</p>
            <p className={style.textoDetail}>{detail?.description}</p>
          </section>
          :
          <h1>No hay eventos disponibles. Intenta más tarde</h1>
        }
      </article>

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
