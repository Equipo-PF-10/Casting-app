import { React, useEffect } from "react";
import Card from "./CompanyComponent/Card";
import style from "./CompanySearch.module.css";
import Search from "./CompanyComponent/Search";
import Detail from "./CompanyComponent/Detail";
import NavBarLateral from "../../Components/NavBarLateral/NavBarLateral";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get_all_postulations } from "../../redux/actions";
import { get_talent_by_id } from "../../redux/actions";

const CompanySearch = () => {
  //const {id_event} = useParams();
  const dispatch = useDispatch();

  const postulations = useSelector((state) => state.postulationsByEvent);
  // let postulaciones =
  // [
  //   "6b5b015e-add8-4616-b913-94ce9681bf3b",
  //   "58ac00c1-dbbd-44ed-88ce-39cc8cd3747c",
  //   "ffadbcb7-5a67-4157-86f9-13e1ecf6dbd4",
  //   "afa8885a-b23e-4f5a-90e7-2a613f370061"
  // ];

  
  const talent = useSelector((state) => state.talentById);
  
  //console.log(postulaciones[0]); ////
  
  let id = "56eeca36-8b43-459b-969f-07713fb74e87";
  useEffect(() => {
    dispatch(get_all_postulations(id));
  }, [dispatch]);
  
  
  //Obtener el primer postulante, cuando se monta el componente y mostrarlo en el detail
  useEffect(() => {
    dispatch(get_talent_by_id("6b5b015e-add8-4616-b913-94ce9681bf3b"));
  }, []);
  
  console.log("postulaciones: " + postulations);
  console.log(talent);
  /*
  //Obtener todos los talentos a partir del arreglo de postulaciones
  let all_postulations = [];
  useEffect(() => {
    dispatch(get_talent_by_id(postulations.evento[0]));
  }, []);
  */

  return (
    <div className={style.containerG}>
      <div className={style.searchFil}>
        <Search />
      </div>
      <div className={style.secciones}>
        <div className={style.navLateral}>
          <NavBarLateral />
        </div>
        <div className={style.grid}>
          <div className={style.cards}>
            {/* {postulations?.map((postulation, index) => {
              <Card postulation={postulation} key={index} />;
            })} */}
          </div>
        </div>
        <div className={style.detailCard}>
          <Detail talent={talent} />
        </div>
      </div>
    </div>
  );
};

export default CompanySearch;
