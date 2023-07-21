import styles from "./ModalLogin.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { modal_login } from "../../redux/actions";
import { useDispatch } from "react-redux";

export default function ModalLogin() {
  //Este componente se muestra cuando modalInLogin === true
  let modal = useState((state) => state.modalInLogin);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handler_click_talent = () => {
    navigate('/model/register'); 
  }

  const handler_click_company = () => {
    navigate('/company/register'); 
  }

  const handler_click_close = () => {
    const close = "isClosed";
    dispatch(modal_login(close));
  }

  return (
    <div>
        <div className={styles.containerModalOpened}>
          <div className={styles.modalOpened}>
            <button onClick={handler_click_close} className={styles.delete}> X </button>

            <h2>Selecciona un tipo de Registro</h2>

            <button onClick={handler_click_talent}>Talento</button>
            <button onClick={handler_click_company}>Empresa</button>
          </div>
        </div>
    </div>
  );
}
