import { useEffect, useState } from "react";
import Card from "./CompanyComponent/Card";
import style from "./CompanySearch.module.css";
import Search from "./CompanyComponent/Search";
import Detail from "./CompanyComponent/Detail";
import NavBarLateral from "../../Components/NavBarLateral/NavBarLateral";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get_all_postulations , get_event_by_id, get_talent_by_id } from "../../redux/actions";

const CompanySearch = () => {
  //  const id_event = useParams();

  const dispatch = useDispatch();
  const evento = useSelector((state) => state.eventDetail);
  const postulantes = useSelector((state) =>  state.postulatedTalentsByEvent ); 
  const postulantesCopy = useSelector((state) =>  state.postulatedTalentsByEventFiltered ); 
  const idCard = useSelector((state) =>  state.idCard); 
  const talent = useSelector((state) =>  state.talentById);
  const filters = useSelector((state) =>  state.filters);

  
  let [id, setId] = useState("");
  

  // Paginación

  const [currentPage, setCurrentPage] = useState(1);
  const talentsPerPage = 8;

  const lastIndex = currentPage * talentsPerPage;
  const firstIndex = lastIndex - talentsPerPage;
  const currentTalents = postulantes.slice(firstIndex, lastIndex);
  const currentTalentsCopy = postulantesCopy.slice(firstIndex, lastIndex);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbersCopy = Math.ceil(postulantesCopy.length / talentsPerPage);
  const pageNumbers = Math.ceil(postulantes.length / talentsPerPage);
  const pagination = Array.from(
    { length: pageNumbers },
    (_, index) => index + 1
  );

  //Dispatch

  let id_event = "fb615033-e4ec-4213-b65b-af21fb1a3599";
  //Obtener todos los postulantes en base al id del evento
  //Obtener el detalle del evento para renderizar el nombre del mismo como un Titulo
  useEffect(() => {
    dispatch(get_all_postulations(id_event));
    dispatch(get_event_by_id(id_event));
  }, [dispatch, id_event]);

//Funcion para traerme el detail de un postulante, muestra el detail de un talento al hacer click en la Card
useEffect(()=>{
  dispatch(get_talent_by_id(idCard));
},[idCard])

  // Función que muestra el detail de un talento al hacer click en la Card
  const handleClick = (talentoId) => {
    setId(talentoId);
    setTalentSelected(postulantes.find((talent) => talent.id === id));
  };

  //Map Talentos
  // { filters ? <Card allPostulants={postulantesCopy}/> : <Card allPostulants={postulantes}/>}
  const listedTalents = currentTalents.map((talento) => (
    <li key={talento.id}>
      <Card
        id={talento.id}
        name={talento.name}
        image={talento.image}
        gender={talento.gender}
        hability={talento.hability}
        handlerClick={handleClick}
      />
    </li>
  ));
  const listedTalentsCopy = currentTalentsCopy.map((talento) => (
    <li key={talento.id}>
      <Card
        id={talento.id}
        name={talento.name}
        image={talento.image}
        gender={talento.gender}
        hability={talento.hability}
        handlerClick={handleClick}
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
        <Search ubication={singleLocation} setCurrentPage={setCurrentPage} id_event={id_event} />
      </div>
      <div className={style.secciones}>
        <div className={style.navLateral}>
          <NavBarLateral />
        </div>
       
        
        {
          postulantesCopy.length === 0 ?
          <div  className={style.text}>
           <h3>No se han encontrado postulantes con el nombre ingresado.</h3>
           </div>
          :
         
          filters ?
          <div className={style.grid}>
           <div><h2>Postulantes al Evento: {evento.name}</h2></div>
          <div className={style.cards}>{listedTalentsCopy}</div>
        </div>
          :
          <div className={style.grid}>
           <div><h2>Postulantes al Evento: {evento.name}</h2></div>
          <div className={style.cards}>{listedTalents}</div>
        </div>
        }
        <div className={style.detailCard}>
          {/* estado local .length === 0 le paso la info del primer postulante,
              sino, al hacer click en una card se pasa el id de la card al estado local,
              con ese id filtro el array de postulantes y luego le paso el postulante
              filtrado a Detail
          */}
           {
            idCard.length === 0 ?
            <Detail className={style.detail} talent={postulantes[0]} />
            :
            <Detail className={style.detail} talent={talent} key={talent.id}/>
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
