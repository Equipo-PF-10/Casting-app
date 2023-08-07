import { useState } from "react";
import styles from "./HomeItem.module.css";
import { useDispatch } from "react-redux";
import {Link} from "react-router-dom";
import { VscMail } from "react-icons/vsc";
import { send_email_message } from "../../../redux/actions";
import { add_and_delete_favorite_postulant } from "../../../redux/actions";

const HomeItem = (props) => {
  const dispatch = useDispatch();
  const [modalMail, setModalModel] = useState(false);

  const handleClickDelete = () => {
    dispatch(
      add_and_delete_favorite_postulant(props.talent?.id, props.id_company)
    );
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
        <Link to={`https://deploy-sprint-2-frontend.onrender.com/model/profile/${props.talent?.id}`}>
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
          <button onClick={hanldleClickModalOpen} className={styles.mailButton}>
            <VscMail className={styles.sobreMail} />
          </button>
        </div>
        <div className={styles.delete}>
          <button onClick={handleClickDelete} className={styles.starButton}>
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
