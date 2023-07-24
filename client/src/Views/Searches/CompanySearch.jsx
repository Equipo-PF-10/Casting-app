import { useEffect, useState } from "react";
import Card from "./CompanyComponent/Card";
import style from "./CompanySearch.module.css";
import Search from "./CompanyComponent/Search";
import Detail from "./CompanyComponent/Detail";
import NavBarLateral from "../../Components/NavBarLateral/NavBarLateral";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get_all_postulations } from "../../redux/actions";
import { get_talent_by_id } from "../../redux/actions";
import { getAllTalents } from "../../redux/actions";

const CompanySearch = () => {
  
//  const idEvent = useParams();
  const dispatch = useDispatch();

  const postulations = useSelector((state) => state.postulationsByEvent);

  const talents = useSelector((state) => state.talents);

  // Paginación

  const [currentPage, setCurrentPage] = useState(1);
  const talentsPerPage = 8;

  const lastIndex = currentPage * talentsPerPage;
  const firstIndex = lastIndex - talentsPerPage;
  const currentTalents = talents.slice(firstIndex, lastIndex);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = Math.ceil(talents.length / talentsPerPage);
  const pagination = Array.from({ length: pageNumbers }, (_, index) => index + 1);

  //Dispatch
  
  useEffect(() => {
    dispatch(get_all_postulations(postulations));
  }, [dispatch, postulations]);
  
  
  //Obtener el primer postulante, cuando se monta el componente y mostrarlo en el detail
  useEffect(() => {
    dispatch(get_talent_by_id());
  }, [dispatch]);
  
  useEffect(() => {
    dispatch(getAllTalents());
  }, [dispatch])

  /*
  //Obtener todos los talentos a partir del arreglo de postulaciones
  let all_postulations = [];
  useEffect(() => {
    dispatch(get_talent_by_id(postulations.evento[0]));
  }, []);
  */

  //Map Talentos

  const listedTalents = currentTalents.map((talento) => (
    <li key={talento.id}>
      <Card
      id={talento.id}
      name={talento.name}
      image={talento.image}
      gender={talento.gender}
      hability={talento.hability}

      />
    </li>
  ))

  return (
    <div className={style.containerG}>
      <div className={style.searchFil}>
        <Search/>
      </div>
      <div className={style.secciones}>
        <div className={style.navLateral}>
          <NavBarLateral />
        </div>
        <div className={style.grid}>
          <div className={style.cards}>
            {listedTalents}
          </div>
        </div>
        <div className={style.detailCard}>
          <Detail talent={talents} className={style.detail}/>
        </div>
      </div>
       <ul className={style.pagination}>
        {pagination.map((number) => (
          <li
            key={number}
            className={number === currentPage ? style.active : ""}
            onClick={() => paginate(number)}
          >
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanySearch;
