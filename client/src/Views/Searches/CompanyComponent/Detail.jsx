import axios from "axios";
import style from "./Detail.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { open_modal_search_compnay, delete_postulant_by_id } from "../../../redux/actions";
import { useState } from "react";

const Detail = (props) => {
  
  //const { id, name, aboutMe, ubication, hability } = talent;
  const {talent, id_event} = props;
  const dispatch = useDispatch();
  const [modalRefused, setModalRefused] = useState();
  
  const handlerClick = () => {
    const open = "isOpened";
    dispatch(open_modal_search_compnay(open));
  }

  const handlerClickDelete = () => {
    setModalRefused(true);
  }

  const onClickCloseModalRefuseTalent = () => {
    setModalRefused(false);
  };

  const onClickRefuseTalent = (id_talent) => {
    dispatch(delete_postulant_by_id(id_event, id_talent));
    setModalRefused(false);
    const emailToCompany = axios.post("http://localhost:3001/email/talentContacRefused/pedrocavataio@gmail.com")
    .then((resp) => console.log(resp.data))
    .catch((error) => console.log(error))

  };


  return (
    <div className={style.containerDetail}>

      <h2>{talent?.name}</h2>
      <div className={style.head}>
        <NavLink to={`/model/profile/${talent?.id}`} className={style.navLink}>
          <button>Ver perfil completo</button>
        </NavLink>
        
      </div>
      <h5>Ubicación: {talent?.ubication}</h5>
      <h5>Resumen del perfil:</h5>
      {
        talent?.aboutMe === null ?
        <p className={style.textoDetail}>El postulante aún no ha escrito su información personal.</p>
        :
      <p className={style.textoDetail}>{talent?.aboutMe}</p>
      }
      <div className={style.acomodarOrientacion}>
        <h3 className={style.orientacionArt}>Orientacion Artistica</h3>
      </div>
      {/*carta de orientacion*/}
      <div className={style.habilidades}>
        <div className={style.habilidad}>
          {talent?.hability?.map((habilit, key) => 
            (<button key={key}>{habilit}</button>)
          )}
        </div>
      </div>
      <div className={style.buttonsContainer}>

        {
        talent?.id_talent 
        ?
        <div className={style.buttonsContainer}>
        <div className={style.conteinerConectar}>
          <button className={style.conectar} onClick={handlerClick}>Conectar</button>
        </div>
        <div className={style.conteinerRechazar}>
          
          <button className={style.rechazar} onClick={() => handlerClickDelete()}>Rechazar</button>
        </div>
        </div>
        :
        <div className={style.buttonsContainer}>
        <div className={style.conteinerConectar}>
          <button disabled className={style.conectar} onClick={handlerClick}>Contactar</button>
        </div>
        <div className={style.conteinerRechazar}>
          <button disabled className={style.rechazar} onClick={() => handlerClickDelete()}>Rechazar</button>
        </div> 
        </div>  
        }
      </div>
      {/* -------MODAL PARA ENVIAR UN MAIL AL POSTULANTE ------------*/}
      {
        modalRefused ?
        <div className= {style.containerModalOpened}>
            <div className={style.modalConfirmationOpened}>
              <div className={style.head3}>
                <h4>¿Está seguro/a de rechazar al Postulante?</h4>
                <hr />
              </div>
              
              <div className={style.bottom3}>
                <button className={style.buttonConfirmar} onClick={() => onClickRefuseTalent(talent?.id)}>Confirmar</button>
                <button className={style.buttonRegresar} onClick={onClickCloseModalRefuseTalent}>Regresar</button>
              </div>
          </div>
        </div>
        :
        <div className= {style.containerModalClosed}>
            <div className={style.modalClosed}>
              
              
          </div>
        </div>
      }
      {/* ---------------------------------------------------------- */}
    </div>
  );
};

export default Detail;
