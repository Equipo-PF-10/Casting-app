import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { modal_login } from "../../redux/actions";
import style from "../../Views/Login/Login.module.css";
import style2 from "../Navbar/Navbar.Module.css";

const LoginButton = (props) => {
  const { loginWithRedirect } = useAuth0();
  const dispatch = useDispatch();

  let modal = useSelector((state) => state.modalInLogin);
  
  const handleClick= () => {
    dispatch(modal_login("isOpened"));
  }
  const handler_click_talent = () => {
    dispatch(modal_login("isClosed"));
    localStorage.setItem("userType", "talent" )
    loginWithRedirect();
  };
  
  const handler_click_company = () => {
    dispatch(modal_login("isClosed"));
    localStorage.setItem("userType", "company" )
    loginWithRedirect();
  };

  const handler_click_close = () => {
    dispatch(modal_login("isClosed"));
  };


  return (
    <>
      {/* <button onClick={() => loginWithRedirect()} >{props.type==='talent'?`Soy Talento`:`Soy Reclutador`}</button> */}
      <button onClick={handleClick} className={style2.buttonNav}>
        Ingresa
      </button>
      {modal ? (
        <div className={style.containerModalOpened}>
          <div className={style.modalOpened}>
            <button onClick={handler_click_close} className={style.delete}>
              {" "}
              X{" "}
            </button>

            <h3>Selecciona un tipo de Registro</h3>

            <button onClick={handler_click_talent}>Talento</button>
            <button
              onClick={handler_click_company}
              className={style.buttonCompany}
            >
              Empresa
            </button>
          </div>
        </div>
      ) : (
        <div className={style.containerModalClosed}>
          <div className={style.modalClosed}>
            <h2>Selecciona un tipo de Registro</h2>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginButton;