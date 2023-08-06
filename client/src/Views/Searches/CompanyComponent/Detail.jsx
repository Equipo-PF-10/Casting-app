import axios from "axios";
import style from "./Detail.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  open_modal_search_compnay,
  delete_postulant_by_id,
  add_postulant_like_contacted,
} from "../../../redux/actions";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Detail = (props) => {
  const MESSAGE_SEND_EMAIL = "Se ha enviado correctamente un email de contacto al postulante seleccionado.";
  //const { id, name, aboutMe, ubication, hability } = talent;
  //console.log(props.talent);
  const {talent,id_event, id_company}=props;
  //console.log(talent?.id);
  const dispatch = useDispatch();
  const [modalRefused,setModalRefused]=useState();
  const [modalMail,setModalMail]=useState(false);
  //const idTalent=talent?.id
  //console.log(idTalent);

  const handlerClick = () => {
    // const open = "isOpened";
    // dispatch(open_modal_search_compnay(open));
    setModalMail(true)
  };

  const handlerClickDelete = () => {
    setModalRefused(true);
  };

  const onClickCloseModalRefuseTalent = () => {
    setModalRefused(false);
  };

  const onClickRefuseTalent = (id_talent) => {
    dispatch(delete_postulant_by_id(id_event, id_talent));
    //dispatch(get_all_postulations(id_event));
    setModalRefused(false);
    const emailToCompany = axios
    .post(
      "http://localhost:3001/email/talentContacRefused/pedrocavataio@gmail.com"
      )
      .then((resp) => console.log(resp.data))
      .catch((error) => console.log(error));
    };

    const onClickSendEmail = () => {
      //postear al usuario como contactado en el arreglo de contactados y eliminarla de la lista de postulantes
      dispatch(add_postulant_like_contacted(talent?.id, id_company, id_event))

      // const close = "isClosed";
      // dispatch(close_modal_search_compnay(close));
      const emailToCompany = axios.post("http://localhost:3001/email/talentContac/pedrocavataio@gmail.com")
      .then((resp) => console.log(resp.data))
      .catch((error) => console.log(error))
      
      //Agregar mensaje por toastify
      mensaje_success_Toast_send_mail();
      setModalMail(false);
    }; 

    const onClickCloseModalConfirmation = () => {
      setModalMail(false);
      // const close = "isClosed";
      // dispatch(close_modal_search_compnay(close));
    };

    //Mostrar mensaje cuando se envie un mail de contacto al Postulante
  let currentToastIdSendMail = null;
  const mensaje_success_Toast_send_mail = () => {
    if (currentToastIdSendMail) {
      toast.update(currentToastIdSendMail, {
        render: MESSAGE_SEND_EMAIL,
        autoClose: 5000,
      });
    } else {
      currentToastIdSendMail = toast.success(MESSAGE_SEND_EMAIL, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        toastId: "custom-toast-id",
        style: {
          width: "450px",
        },
      });
    }
  };

  return (
    <div className={style.containerDetail}>
        {/* <ToastContainer /> */}
      <h2>{talent?.name}</h2>
      <div className={style.head}>
        <NavLink to={`/model/profile/${talent?.id}`} className={style.navLink}>
          <button>Ver perfil completo</button>
        </NavLink>
      </div>
      <h5>Ubicación: {talent?.ubication}</h5>
      <h5>Resumen del perfil:</h5>
      {talent?.aboutMe === null ? (
        <p className={style.textoDetail}>
          El postulante aún no ha escrito su información personal.
        </p>
      ) : (
        <p className={style.textoDetail}>{talent?.aboutMe}</p>
      )}
      <div className={style.acomodarOrientacion}>
        <h3 className={style.orientacionArt}>Orientacion Artistica</h3>
      </div>
      {/*carta de orientacion*/}
      <div className={style.habilidades}>
        <div className={style.habilidad}>
          {talent?.hability?.map((habilit, key) => (
            <button key={key}>{habilit}</button>
          ))}
        </div>
      </div>
      <div className={style.buttonsContainer}>
        {talent ? (
          <div className={style.buttonsContainer}>
            <div className={style.conteinerConectar}>
              <button className={style.conectar} onClick={handlerClick}>
                Contactar
              </button>
            </div>
            <div className={style.conteinerRechazar}>
              <button
                className={style.rechazar}
                onClick={() => handlerClickDelete()}
              >
                Rechazar
              </button>
            </div>
          </div>
        ) : (
          <div className={style.buttonsContainer}>
            <div className={style.conteinerConectar}>
              <button
                disabled
                className={style.conectar}
                onClick={() => handlerClick()}
              >
                Contactar
              </button>
            </div>
            <div className={style.conteinerRechazar}>
              <button
                disabled
                className={style.rechazar}
                onClick={() => handlerClickDelete()}
              >
                Rechazar
              </button>
            </div>
          </div>
        )}
      </div>
      {/* -------MODAL PARA RECHAZAR AL POSTULANTE ------------*/}
      {modalRefused ? (
        <div className={style.containerModalOpened}>
          <div className={style.modalConfirmationOpened}>
            <div className={style.head3}>
              <h4>¿Está seguro/a de rechazar al Postulante?</h4>
              <hr />
            </div>

            <div className={style.bottom3}>
              <button
                className={style.buttonConfirmar}
                onClick={() => onClickRefuseTalent(talent?.id)}
              >
                Confirmar
              </button>
              <button
                className={style.buttonRegresar}
                onClick={onClickCloseModalRefuseTalent}
              >
                Regresar
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className={style.containerModalClosed}>
          <div className={style.modalClosed}></div>
        </div>
      )}
      {/* ---------------------------------------------------------- */}

      {/* -------MODAL PARA ENVIAR UN MAIL AL POSTULANTE ------------*/}
      {
        modalMail ?
        <div className= {style.containerModalOpened}>
            <div className={style.modalConfirmationOpened}>
              <div className={style.head3}>
                <h4>¿Está seguro/a de enviar un mail de conacto al Postulante?</h4>
                <hr />
              </div>
              
              <div className={style.bottom3}>
                <button className={style.buttonConfirmar} onClick={onClickSendEmail}>Confirmar</button>
                <button className={style.buttonRegresar} onClick={onClickCloseModalConfirmation}>Regresar</button>
              </div>
          </div>
        </div>
        :
        <div className= {style.containerModalClosed}>
            <div className={style.modalClosed}>
          </div>
        </div>
      }
    </div>
  );
};

export default Detail;
