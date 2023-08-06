import React, { useEffect, useState } from "react";
import styles from "./SearchBarCompany.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { send_email_message } from "../../redux/actions";

export default function SearchBarCompany() {
  const modalMailMessage = useSelector((state) => state.modalMailMessage);
  const dispatch = useDispatch();

  const { logout } = useAuth0();
  const handlerClick = () => {
    localStorage.clear();
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  const id = localStorage.getItem("user_id");
  const [company, setCompany] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/companies/${id}`).then(({ data }) => {
      setCompany(data);
    });
  }, [setCompany, id]);

  const navigate = useNavigate();
  let error;
  const handleClickCreate = () => {
    if (company.plan === "PENDIENTE") {
      error = "Antes de crear un evento debe adquirir un Plan.";
      mensaje_error_Toast();
    } else if (company.name === "" || company.name === null) {
      error = "Antes de crear un evento debe selecionar un nombre.";
      mensaje_error_Toast();
    } else if (company.country === "" || company.country === null) {
      error = "Antes de crear un evento debe seleccionar un país.";
      mensaje_error_Toast();
    } else if (
      company.descriptionShort === "" ||
      company.descriptionShort === null
    ) {
      error =
        "Antes de crear un evento debe agregar una descripción a su perfil.";
      mensaje_error_Toast();
    } else if (company.image === "" || company.image === null) {
      error = "Antes de crear un evento debe agregar una imagen a su perfil.";
      mensaje_error_Toast();
    } else {
      navigate("/company/create");
    }
  };

  let currentToastId = null;
  //Evita que se renderice mas de 1 toast
  const mensaje_error_Toast = () => {
    if (currentToastId) {
      toast.update(currentToastId, {
        render: error,
        autoClose: 5000,
      });
    } else {
      currentToastId = toast.error(error, {
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
          marginTop: "50px",
          width: "450px",
        },
      });
    }
  };

  useEffect(() => {
    if (modalMailMessage.length > 0) {
      mensaje_success_Toast_send_mail();
      dispatch(send_email_message(""));
    }
  }, [modalMailMessage]);

  //Mostrar mensaje cuando se envie un mail de contacto al Postulante
  let currentToastIdSendMail = null;
  const mensaje_success_Toast_send_mail = () => {
    if (currentToastIdSendMail) {
      toast.update(currentToastIdSendMail, {
        render: modalMailMessage,
        autoClose: 5000,
      });
    } else {
      currentToastIdSendMail = toast.success(modalMailMessage, {
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
          marginTop: "50px",
          width: "450px",
        },
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <button onClick={handleClickCreate}>Crear Evento</button>
        <NavLink to="/company/finishedEvents">
          <button>Eventos Finalizados</button>
        </NavLink>
        <NavLink to={`/company/hiredtalent/${id}`}>
          <button>Talentos Contratados</button>
        </NavLink>
        <NavLink to="/company/plans">
          <button>Planes</button>
        </NavLink>
      </div>
      <div className={styles.logout} onClick={handlerClick}>
        <button>Salir</button>
      </div>
      <ToastContainer />
    </div>
  );
}
