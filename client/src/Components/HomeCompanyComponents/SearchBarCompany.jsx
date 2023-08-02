import React, { useEffect, useState } from "react";
import styles from "./SearchBarCompany.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SearchBarCompany() {

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
  }, []);
  
  const navigate = useNavigate();
  let error;
  const handleClickCreate = () => {
    if (company.plan === "PENDIENTE") {
        error = "Antes de crear un evento debe adquirir un Plan.";
        mensaje_error_Toast();
    } else if((company.name === "" || company.name === null) || (company.country === "" || company.country === null) || (company.descriptionShort === "" || company.descriptionShort === null) || (company.image === "" || company.image === null)){
        error = "Antes de crear un evento debe actualizar sus datos de perfil principales.";
        mensaje_error_Toast();
    } else {
        navigate("/company/create");
    }
  }

 
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
          width: "340px",
        },
      });
    }
  };
  
  return (
    <div className={styles.container}>
       
      <div className={styles.buttons}>
        <button onClick={handleClickCreate}>Crear Evento</button>
        <button>Eventos Finalizados</button>
        <button>Talentos Contactados</button>
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
