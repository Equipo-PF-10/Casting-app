import React, { useEffect, useState } from "react";
import style from "./TalentSearch.module.css";
import NavBarLateral from "../../Components/NavBarLateral/NavBarLateral";
import CardJobs from "./TalentComponent/CardJobs";
import SearchComp from "./TalentComponent/SearchComp";
import Detail from "./TalentComponent/Detail";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getAllEvents,
  filterByEvent,
  get_event_by_id,
  clear_message_postulated
} from "../../redux/actions";

const TalentSearch=() => {

  const dispatch = useDispatch();
  const events = useSelector((state) => state.allEvents);
  const evento = useSelector((state) => state.eventDetail);
  const eventFilter = useSelector((state) => state.eventsFiltered);
  const postulantCreated = useSelector((state) => state.postulantCreated);
  //console.log(postulantCreated);
  let messagePostulated;
  if(postulantCreated?.status === "Pendiente") messagePostulated = "Se ha postulado corectamente al evento."
  /*
  EventId:"ad470678-9a47-4784-a732-3581a3da605b"
  active: true
  changeDate: null
  date: "2023-07-28"
  id: "8f1e8364-e28a-4527-99ec-856b7fa82fb7"
  status: "Pendiente"
*/
  
  const idUser = useSelector((state) => state.idUser);
  
  let idTalent; //Se mantiene el idTalent excepto si refrescan la pagina
  if(idUser.length > 0) idTalent=idUser; //Mantengo guardado el id del usuario (talento)

  let [id, setId] = useState(""); //id cambian segun carta
  //let [eventSelected, setEventSelected] = useState({});


  const filters = useSelector((state) => state.filtersEvent);


  // Paginación
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 3;

  const lastIndex = currentPage * eventsPerPage;
  const firstIndex = lastIndex - eventsPerPage;
  const currentEvents = events.slice(firstIndex, lastIndex);
  const currentEventsFilter = eventFilter.slice(firstIndex, lastIndex);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = Math.ceil(events.length / eventsPerPage);
  const pagination = Array.from(
    { length: pageNumbers },
    (_, index) => index + 1
  );

  const handleClick = (eventId) => {
    //console.log(eventId);
    setId(eventId);
    setEventSelected(events.find((event) => event.id === id));
  };

  const listedEvents = currentEvents.map((event) => (
    <div key={event.id}>
      <CardJobs
        setId={setId}
        name={event.name}
        event={event}
        onClick={() => handleClick(event.id)}
      />
    </div>
  ));
  //copia
  const listedEventsFilter = currentEventsFilter.map((event) => (
    <div key={event.id}>
      <CardJobs
        setId={setId}
        name={event.name}
        event={event}
        onClick={() => handleClick(event.id)}
      />
    </div>
  ));

  const ubication = events.map((e) => {
    return e.ubication;
  });

  // Evita ubicaciones repetidas
  const singleLocation = ubication.filter((item, index) => {
    return ubication.indexOf(item) === index;
  });

  useEffect(() => {
    dispatch(getAllEvents());
    dispatch(filterByEvent());
  }, [dispatch]);

  //useEffect(() => {
  //  dispatch(get_event_by_id(id));
  //}, [id]);

  let currentToastIdSuccess = null;
  //Evita que se renderice mas de 1 toast
  const mensaje_success_Toast = () => {
    if (currentToastIdSuccess) {
      toast.update(currentToastIdSuccess, {
        render: messagePostulated,
        autoClose: 5000,
      });
    } else {
      currentToastIdSuccess = toast.success(messagePostulated, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        toastId: "custom-toast-id",
        style: {
          width: "400px",
        },
      });
    }
  };

  //-------------Mensaje Success Toast que viene de los registros (Talento o Empresa)
  useEffect(() => {
    if (messagePostulated) {
      mensaje_success_Toast();
      dispatch(clear_message_postulated({}));
    }
  }, [messagePostulated]);


  return (
    <div className={style.containerGralTalent}>
      <div>
        <ToastContainer />
      </div>
      <div className={style.searchFil}>
        <SearchComp
          ubication={singleLocation}
          setCurrentPage={setCurrentPage}
          eventFilter={eventFilter}
        />
      </div>
      <div className={style.secciones}>
        <div className={style.navLateral}>
          <NavBarLateral />
        </div>
        {listedEventsFilter.length===0? 
        <div  className={style.text}>
           <h3>No se han encontrado resultados.</h3>
        </div>
          :
        filters ? (
          <div className={style.cardJobsStyle}>{listedEventsFilter}</div>
        ) : (
          <div className={style.cardJobsStyle}>{listedEvents}</div>
        )
        }
        <div className={style.detailStyle}>
          {/*<Detail events={events} />*/}
          {id.length === 0 ? (
            <Detail detail={events[0]} idTalent={idTalent} idEvent={id} />
          ) : (
            <Detail detail={evento} idTalent={idTalent} idEvent={id} />
          )}
        </div>
      </div>
      <ul className={style.pagination}>
        {pagination.map((number, index) => (
          <li
            key={index}
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

export default TalentSearch;
