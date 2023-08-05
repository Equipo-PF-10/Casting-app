import React, { useEffect } from "react";
import NavBarLateral from "../../Components/NavBarLateral/NavBarLateral";
import { Link } from "react-router-dom";
import "./HiredTable.css";
import { useDispatch } from "react-redux";

const HiredTalent=() => {

  //const dispatch = useDispatch()

  const id = localStorage.getItem("user_id");
  //console.log(id);

  //useEffect(() => {
  //  dispatch(get_talents_hired());
  //})

  return (
    <div className="containerGral">
      <div>
        <NavBarLateral />
      </div>
      <div className="containerTable">
        <div className="logoContainer">
          <Link to={"/"}>
            <img
              src="/Logo con Letras.svg"
              alt="Casting App"
              className="imgLogo"
            />
          </Link>
        </div>
        <h3 className="titulo">Talentos Contratados</h3>
        <div className="container">
          <div className="row">
            <div className="col">
              <table className="table table-success align-middle table-striped table-hover table-bordered">
                <thead className="rounded-5">
                  <tr className="table-primary">
                    <th>Foto de Perfil</th>
                    <th>Nombre</th>
                    <th>Nacionalidad</th>
                    <th>Talento</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Imagen</td>
                    <td>Lionel Messi</td>
                    <td>Argentino</td>
                    <td>Futbolista</td>
                  </tr>
                  <tr>
                    <td>Imagen</td>
                    <td>Lionel Messi</td>
                    <td>Argentino</td>
                    <td>Futbolista</td>
                  </tr>
                  <tr>
                    <td>Imagen</td>
                    <td>Lionel Messi</td>
                    <td>Argentino</td>
                    <td>Futbolista</td>
                  </tr>
                  <tr>
                    <td>Imagen</td>
                    <td>Lionel Messi</td>
                    <td>Argentino</td>
                    <td>Futbolista</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiredTalent;
