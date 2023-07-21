import styles from "./ModalLogin.module.css";

export default function ModalLogin() {
  //Este componente se muestra cuando modalInLogin === false 
  return (
    <div>
        <div className={styles.containerModalClosed}>
          <div className={styles.modalClosed}>
            <h2>Selecciona un tipo de Registro</h2>
          </div>
        </div>
    </div>
  );
}
