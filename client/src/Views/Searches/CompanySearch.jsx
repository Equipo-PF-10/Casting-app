import { useEffect, useState } from "react";
import Card from "./CompanyComponent/Card";
import style from "./CompanySearch.module.css";
import Search from "./CompanyComponent/Search";
import Detail from "./CompanyComponent/Detail";
import NavBarLateral from "../../Components/NavBarLateral/NavBarLateral";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get_all_id_postulations, get_event_by_id, get_talent_by_id } from "../../redux/actions";


const CompanySearch = () => {
  //  const id_event = useParams();

  let [id, setId] = useState("");
  let [talentSelected, setTalentSelected] = useState({});
  const dispatch = useDispatch();
  const evento = useSelector((state) => state.eventDetail);
  const idPostulations = useSelector((state) => state.postulationsByEvent);
  /*
  {
    evento: [
      ids
    ]
  }
  */
  console.log(idPostulations); 
  const postulantes = useSelector((state) =>  state.talentsById ); // [postulantes]
 
  // Paginación

  const [currentPage, setCurrentPage] = useState(1);
  const talentsPerPage = 8;

  const lastIndex = currentPage * talentsPerPage;
  const firstIndex = lastIndex - talentsPerPage;
  const currentTalents = postulantes.slice(firstIndex, lastIndex);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = Math.ceil(postulantes.length / talentsPerPage);
  const pagination = Array.from(
    { length: pageNumbers },
    (_, index) => index + 1
  );

  //Dispatch

  let id_event = "21";
  //Obtener el los id de los postulantes al evento
  //Obtener el detalle del evento para renderizar el nombre del mismo como un Titulo
  useEffect(() => {
    dispatch(get_all_id_postulations(id_event));
    dispatch(get_event_by_id(id_event))
  }, [dispatch, id_event]);

  //Obtener todos los talentos a partir del arreglo de idPostulaciones
  for (let i = 0; i < idPostulations.length; i++) {
    //pushea el arreglo de postulantes
    dispatch(get_talent_by_id(idPostulations.evento[i]));
  }

  // Función para manejar el clic en la Card
  const handleClick = (talentoId) => {
    setId(talentoId);
    setTalentSelected(postulantes.find((talent) => talent.id === id));
  };

  

  //Map Talentos
  const listedTalents = currentTalents.map((talento) => (
    <li key={talento.id}>
      <Card
        id={talento.id}
        name={talento.name}
        image={talento.image}
        gender={talento.gender}
        hability={talento.hability}
        onClick={() => handleClick(talento.id)}
      />
    </li>
  ));

  const ubication = postulantes.map((postulante) => {
    return postulante.ubication;
  });

  // Evita ubicaciones repetidas

  const singleLocation = ubication.filter((item, index) => {
    return ubication.indexOf(item) === index;
  });

  return (
    <div className={style.containerG}>
      <div className={style.searchFil}>
        <Search ubication={singleLocation} setCurrentPage={setCurrentPage} postulantes={postulantes} />
      </div>
      <div className={style.secciones}>
        <div className={style.navLateral}>
          <NavBarLateral />
        </div>
        {/* <div><h2>Postulantes al Evento: {evento.name}</h2></div> */}
        <div className={style.grid}>
          <div className={style.cards}>{listedTalents}</div>
        </div>
        <div className={style.detailCard}>
          {/* estado local .length === 0 le paso la info del primer postulante,
              sino, al hacer click en una card se pasa el id de la card al estado local,
              con ese id filtro el array de postulantes y luego le paso el postulante
              filtrado a Detail
          */}
          {
            id.length === 0 ?
            <Detail className={style.detail} talent={postulantes[0]} />
            :
            <Detail className={style.detail} talent={talentSelected} />
          }
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
