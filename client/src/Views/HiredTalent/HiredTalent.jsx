import React, { useEffect } from "react";
import NavBarLateral from "../../Components/NavBarLateral/NavBarLateral";
import { Link, useParams } from "react-router-dom";
import "./HiredTable.css";
import { useDispatch, useSelector } from "react-redux";
import {get_hired_by_company} from "../../redux/actions";

const HiredTalent=() => {

  const {id} = useParams()

  const dispatch=useDispatch()
  
  useEffect(() => {
    dispatch(get_hired_by_company(id))
  },[dispatch])
  
  const hired = useSelector((state) => state.hiredByCompany);
  console.log(hired);


  //const id = localStorage.getItem("user_id");
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
