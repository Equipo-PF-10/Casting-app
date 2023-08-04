import React from "react";
import NavBarLateral from "../../Components/NavBarLateral/NavBarLateral";
import "./FinishedEvents.module.css";

const FinishedEvents = () => {
  return (
    <div className="containerGral">
      <div>
        <NavBarLateral />
      </div>
      <div className="containerTable">
        <div className="logoContainer">
            <img
              src="/Logo con Letras.svg"
              alt="Casting App"
              className="imgLogo"
            />
        </div>
        <h3 className="titulo">Eventos Finalizados</h3>
        <div className="container">
          <div className="row">
            <div className="col">
              <table className="table table-success align-middle table-striped table-hover table-bordered">
                <thead className="rounded-5">
                  <tr className="table-primary">
                    <th>Nombre</th>
                    <th>Descripción Corta</th>
                    <th>Ubicacion</th>
                    <th>Fecha de inicio</th>
                    <th>Fecha de finalización</th>
                  </tr>
                </thead>
                <tbody>
                  {/* APLICAR LOGICA PARA MAPEAR UN ARREGLO DE EVETOS FINALIZADOS */}
                  <tr>
                    <td>Imagen</td>
                    <td>El mañana antes del despues</td>
                    <td>Lionel Messi</td>
                    <td>Argentino</td>
                    <td>Futbolista</td>
                  </tr>
                  <tr>
                    <td>Imagen</td>
                    <td>El mañana antes del despues</td>
                    <td>Lionel Messi</td>
                    <td>Argentino</td>
                    <td>Futbolista</td>
                  </tr>
                  <tr>
                    <td>Imagen</td>
                    <td>El mañana antes del despues</td>
                    <td>Lionel Messi</td>
                    <td>Argentino</td>
                    <td>Futbolista</td>
                  </tr>
                  <tr>
                    <td>Imagen</td>
                    <td>El mañana antes del despues</td>
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

export default FinishedEvents;
