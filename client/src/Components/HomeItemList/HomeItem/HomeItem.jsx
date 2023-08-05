import { useState } from "react";
import styles from "./HomeItem.module.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { send_email_message } from "../../../redux/actions";
import { add_and_delete_favorite_postulant } from "../../../redux/actions";

const HomeItem = (props) => {
  const dispatch = useDispatch();
  const [modalMail, setModalModel] = useState(false);

  const handleClickDelete = () => {
    dispatch(add_and_delete_favorite_postulant(props.talent?.id, props.id_company));
  };
  const hanldleClickModalOpen = () => {
    setModalModel(true);
  };
  const hanldleClickModalClose = () => {
    setModalModel(false);
  };
  const hanldleClickModalConfirmation = () => {
    //Mostrar mensaje toastify
    dispatch(
      send_email_message(
        "Se ha enviado correctamente un email de contacto al postulante seleccionado."
      )
    );
    setModalModel(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <Link to={`http://localhost:5173/model/profile/${props.talent?.id}`}>
        <h3 className={styles.text}>{props.talent?.name}</h3>
        <h3 className={styles.text}>
          {props.talent?.hability?.map((hability) => `${hability} `)}
        </h3>
        </Link>
        {/* {props.title} */}
      </div>
      <div className={styles.options}>
        <div className={styles.mail}>
          {/* AGREGAR FUNCIONALIDAD DE ENVIAR UN MAIL, MOSTRAR MODADL DE CONFIRMACION */}
          <button onClick={hanldleClickModalOpen}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 63 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.80658 0.043457H55.5638C57.4356 0.043457 59.1384 0.825224 60.3713 2.08333L60.4427 2.16167C61.6329 3.41344 62.3696 5.11941 62.3696 6.98995V39.0543C62.3696 40.9652 61.6027 42.7036 60.3713 43.9601C59.1384 45.2182 57.4356 46 55.5638 46H6.80658C4.93473 46 3.23192 45.2182 1.99901 43.9601L1.92768 43.881C0.736642 42.6284 0 40.9232 0 39.0543V6.98995C0 5.07905 0.766108 3.34144 1.99901 2.08333C3.23192 0.825224 4.93473 0.043457 6.80658 0.043457ZM4.40357 3.50523L31.1848 25.2824L57.966 3.50523C57.2852 3.01386 56.4555 2.72425 55.5638 2.72425H6.80658C5.91485 2.72425 5.08516 3.01306 4.40357 3.50523ZM59.5316 5.65271L32.0013 28.0391C31.7671 28.2298 31.488 28.324 31.2104 28.3295H31.1654C30.8824 28.324 30.6032 28.2298 30.369 28.0391L2.83879 5.65351C2.70154 6.07446 2.6271 6.5239 2.6271 6.98995V39.0543C2.6271 40.2016 3.07374 41.2453 3.79642 42.0096L3.85535 42.0658C4.61293 42.8389 5.65819 43.3192 6.80658 43.3192H55.5638C56.7122 43.3192 57.7574 42.8389 58.515 42.0658C59.271 41.2943 59.7425 40.2269 59.7425 39.0543V6.98995C59.7425 6.5231 59.668 6.07367 59.5316 5.65271Z"
                fill="#324844"
              />
            </svg>
          </button>
        </div>
        <div className={styles.delete}>
          <button onClick={handleClickDelete}>
            {/* <h2>✰</h2> */}
            <label className={styles.star}>
              <input type="checkbox" />
              <svg
                height="24px"
                id="Layer_1"
                version="1.2"
                viewBox="0 0 24 24"
                width="24px"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g>
                  <g>
                    <path d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521    c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506    c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625    c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191    s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586    s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z"></path>
                  </g>
                </g>
              </svg>
            </label>
          </button>
        </div>
      </div>
      {/* -------MODAL PARA ENVIAR UN MAIL AL POSTULANTE ------------*/}
      {modalMail ? (
        <div className={styles.containerModalOpened}>
          <div className={styles.modalConfirmationOpened}>
            <div className={styles.head3}>
              <h4>
                ¿Está seguro/a de enviar un mail de conacto al Postulante?
              </h4>
              <hr />
            </div>

            <div className={styles.bottom3}>
              <button
                className={styles.buttonConfirmar}
                onClick={hanldleClickModalConfirmation}
              >
                Confirmar
              </button>
              <button
                className={styles.buttonRegresar}
                onClick={hanldleClickModalClose}
              >
                Regresar
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.containerModalClosed}>
          <div className={styles.modalClosed}></div>
        </div>
      )}
    </div>
  );
};

export default HomeItem;

/*

mainRouter.use("/companies/favorites", talentsFavoriteRouter);
? Esta ruta es para que una empresa pueda borrar talentos favoritos.
companyRouter.delete("/", handleDeleteFavoriteTalent);

*/
