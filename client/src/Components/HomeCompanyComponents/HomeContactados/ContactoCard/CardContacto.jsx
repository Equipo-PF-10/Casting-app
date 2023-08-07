import styles from "./CardContacto.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  add_hired,
  refuse_postulant_contacted,
} from "../../../../redux/actions";

const CardContacto = (props) => {
  const dispatch = useDispatch();
  const [modalContratar, setModalContratar] = useState(false);
  const [modalRechazar, setModalRechazar] = useState(false);

  const handleClickContratar = () => {
    setModalContratar(true);
  };
  const handleClickContratarClose = () => {
    setModalContratar(false);
  };
  //Eliminar de la lista de contactos y postear en la de contratados (cambio en el estado status=Contactado a Contratado )
  const handleClickContratarConfirmation = () => {
    dispatch(add_hired(props.id_talent, props.id_company, props.id_event));
    // AGREGAR UN TOASTIFY NOTIFICANDO LA CONTRATACION
    setModalContratar(false);
  };
  const handleClickRechazar = () => {
    setModalRechazar(true);
  };
  const handleClickRechazarClose = () => {
    setModalRechazar(false);
  };
  //Eliminar de la lista de contactos (cambio en el estado status=Contactado a Rechazado )
  const handleClickRechazarConfirmation = () => {
    dispatch(
      refuse_postulant_contacted(
        props.id_talent,
        props.id_company,
        props.id_event
      )
    );
    setModalRechazar(false);
  };
  return (
    <div className={styles.containerGral}>
      <div className={styles.container}>
        <Link to={`http://localhost:5173/${props.url}/${props.id_talent}`}>
          <div className={styles.fonts}>
            {/* REDIRIGIR AL PERFIL DEL CONTACTADO */}
            <h2 className={styles.text}>{props.name}</h2>
            <h5 className={styles.text}>
              {props.habilities
                ? props.habilities.map((hability) => `${hability} `)
                : null}
            </h5>
            {/*<h5 className={styles.text}>{props.habilities}</h5>*/}
          </div>
        </Link>
        <div className={styles.options}>
          <button className={styles.buttonEdit} onClick={handleClickContratar}>
            Contratar
          </button>
          <button className={styles.buttonClose} onClick={handleClickRechazar}>
            Rechazar
          </button>
        </div>
      </div>
      {/* -------MODAL PARA CONTRATAR AL POSTULANTE ------------*/}
      {modalContratar || modalRechazar ? (
        <div className={styles.containerModalOpened}>
          <div className={styles.modalConfirmationOpened}>
            {modalContratar ? (
              <h4 className={styles.head3}>
                ¿Está seguro/a de enviar al Postulante a la lista de
                Contratados?
                <hr />
              </h4>
            ) : (
              <h4 className={styles.head3}>
                ¿Está seguro/a de Eliminar al Postulante de la lista de
                Contactados?
                <hr />
              </h4>
            )}

            <div className={styles.bottom3}>
              {modalContratar ? (
                <button
                  className={styles.buttonConfirmar}
                  onClick={handleClickContratarConfirmation}
                >
                  Confirmar
                </button>
              ) : (
                <button
                  className={styles.buttonConfirmar}
                  onClick={handleClickRechazarConfirmation}
                >
                  Confirmar
                </button>
              )}
              {modalContratar ? (
                <button
                  className={styles.buttonRegresar}
                  onClick={handleClickContratarClose}
                >
                  Regresar
                </button>
              ) : (
                <button
                  className={styles.buttonRegresar}
                  onClick={handleClickRechazarClose}
                >
                  Regresar
                </button>
              )}
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

export default CardContacto;
