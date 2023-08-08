import React, { useEffect } from "react";
import NavBarLateral from "../../Components/NavBarLateral/NavBarLateral";
import { Link, useParams } from "react-router-dom";
import "./HiredTable.css";
import { useDispatch, useSelector } from "react-redux";
import { add_and_delete_favorite_postulant, get_hired_by_company } from "../../redux/actions";

const HiredTalent = () => {
  const {id}=useParams();
  //console.log(id);

  const dispatch=useDispatch();
  //const id_talent = id

  const id_company=localStorage.getItem("user_id");
  //console.log(id_company);
  
  const handleClickDelete=(event) => {
    //console.log(event);
    dispatch(add_and_delete_favorite_postulant(event, id_company))
  }

  useEffect(() => {
    dispatch(get_hired_by_company(id));
  }, [dispatch]);

  const hired = useSelector((state) => state.hiredByCompany);
  //console.log(hired);

  //console.log(id);

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
          <div className="row" style={{ borderRadius: 100}}>
            <div className="col" style={{ borderRadius: 100 }}>
              <table className="table table-success align-middle table-striped table-hover table-bordered">
                <thead className="rounded-5">
                  <tr className="table-primary">
                    <th>Foto de Perfil</th>
                    <th>Nombre</th>
                    <th>Nacionalidad</th>
                    <th>Talento</th>
                    <th>Favorito</th>
                    <th>Reseña</th>
                  </tr>
                </thead>
                <tbody>
                  {hired.length > 0 &&
                    hired?.map((event) =>
                      event.Applieds?.map((talentArray) =>
                        talentArray.map((talent, index) => {
                        return (
                          <tr key={index}>
                            <td className="imageTd">
                              <img src={talent.image} alt="Talent" />
                            </td>
                            <td>{talent.name}</td>
                            <td>{talent.nationality}</td>
                            <td>{talent.hability.join(", ")}</td>
                            <td className="containerStart">
                              <div className="favorite">
                                <button
                                  onClick={() => handleClickDelete(talent.id)}
                                >
                                  <label className="star">
                                    <input type="checkbox" />
                                    <svg
                                      height="24px"
                                      id="Layer_1"
                                      version="1.2"
                                      viewBox="0 0 24 24"
                                      width="24px"
                                      xmlSpace="preserve"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                    >
                                      <g>
                                        <g>
                                          <path d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521    c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506    c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625    c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191    s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586    s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z"></path>
                                        </g>
                                      </g>
                                    </svg>
                                  </label>
                                </button>
                              </div>
                            </td>
                            <td>
                              <div className="reseña">
                                <Link to={`/company/review/${talent.id}`}>
                                  {/*<Link to={`/company/review/`}>*/}
                                  Dar reseña
                                </Link>
                              </div>
                            </td>
                          </tr>
                        );
                      }))
                    )}
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
