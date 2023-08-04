import styles from './CardContacto.module.css';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const CardContacto = (props) => {
  const dispatch = useDispatch();
  const [modalContratar, setModalContratar] = useState(false);
  const [modalRechazar, setModalRechazar] = useState(false);

  const handleClickContratar = () => {
    setModalContratar(true);
  }
  const handleClickContratarClose = () => {
    setModalContratar(false);
  }
  const handleClickContratarConfirmation = () => {
    //eliminar de la lista de contactos y postear en la de contratados (cambio en el estado status=Contactado a Contratado )
    setModalContratar(false);
  }
  const handleClickRechazar = () => {
    setModalRechazar(true);
  }
  const handleClickRechazarClose = () => {
    setModalRechazar(false);
  }
  const handleClickRechazarConfirmation = () => {
    //eliminar de la lista de contactos (cambio en el estado status=Contactado a Rechazado )
    setModalRechazar(false);
  }
  return (
    <div className={styles.container}>
      <div className={styles.fonts}>
        {/* REDIRIGIR AL PERFIL DEL CONTACTADO */}
        <Link to={`${props.url}/${props.id}`}>
          <h2 className={styles.text}>{props.name}</h2>
          {/* <h5 className={styles.text}>{props.habilities ? props.habilities.map((hability)=> `${hability} `) : null}</h5> */}
          <h5 className={styles.text}>{props.habilities}</h5>
        </Link>
      </div >
      <div className={styles.options}>
        <button className={styles.buttonEdit} onClick={handleClickContratar}>Contratar</button>
        {/* ¿Estas seguro/a de mover al postulante a la lista de Contratados? */}
        <button className={styles.buttonClose} onClick={handleClickRechazar}>Rechazar</button>
      </div>
      {/* -------MODAL PARA CONTRATAR AL POSTULANTE ------------*/}
      { modalContratar || modalRechazar ? (
        <div className={styles.containerModalOpened}>
          <div className={styles.modalConfirmationOpened}>

              {
                modalContratar ?
                <h4 className={styles.head3}>
                ¿Está seguro/a de enviar al Postulante a la lista de Contratados?
              <hr />
              </h4>
              :
              <h4 className={styles.head3}>
                ¿Está seguro/a de Eliminar al Postulante de la lista de Contactados?
              <hr />
              </h4>
              }
            
            <div className={styles.bottom3}>
              {
                modalContratar ?
              <button
                className={styles.buttonConfirmar}
                onClick={handleClickContratarConfirmation}
              >
                Confirmar
              </button>
              :
              <button
                className={styles.buttonConfirmar}
                onClick={handleClickRechazarConfirmation}
              >
                Confirmar
              </button>
              }
              {
                modalContratar ?
              <button
                className={styles.buttonRegresar}
                onClick={handleClickContratarClose}
              >
                Regresar
              </button>
              :
              <button
                className={styles.buttonRegresar}
                onClick={handleClickRechazarClose}
              >
                Regresar
              </button>
              }
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
