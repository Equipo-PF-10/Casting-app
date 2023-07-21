import styles from "./ModalLogin.module.css";
import { useState } from "react";

export default function ModalLogin() {
  //En este componente cierro el Modal
  let modal = useState((state) => state.modalInLogin);

  return (
    <div>
      {modal ? (
        <div className={styles.containerModalOpened}>
          <div className={styles.modalOpenedError}>
            <button onClick={onClickCloseError} className={styles.delete}>
              X
            </button>

            <h2>Selecciona un tipo de Registro</h2>

            <button>Talento</button>
            <button>Empresa</button>
          </div>
        </div>
      ) : (
        <div className={styles.containerModalClosed}>
          <div className={styles.modalClosed}>
            <h2>Selecciona un tipo de Registro</h2>
          </div>
        </div>
      )}
    </div>
  );
}