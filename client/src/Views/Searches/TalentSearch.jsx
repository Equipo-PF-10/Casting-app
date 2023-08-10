import { useEffect, useState } from "react";
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
  clear_message_postulated,
  message_error_postulate,
} from "../../redux/actions";

const TalentSearch = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.allEvents);
  const eventFilter = useSelector((state) => state.eventsFiltered);
  const postulantCreated = useSelector((state) => state.postulantCreated);
  const filters = useSelector((state) => state.filtersEvent);
  const errorPostulate = useSelector((state) => state.errorPostulate);
  let messagePostulated;
  if (postulantCreated?.status === "Pendiente")
  messagePostulated = "Se ha postulado corectamente al evento.";

  const idTalent = localStorage.getItem("user_id");

  // Paginación
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 3;

  const lastIndex = currentPage * eventsPerPage;
  const firstIndex = lastIndex - eventsPerPage;
  const currentEvents = Array.isArray(events) ? events.slice(firstIndex, lastIndex) : [];
  const currentEventsFilter = Array.isArray(eventFilter) ? eventFilter.slice(firstIndex, lastIndex) : [];
  
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  const pageNumbers = Math.ceil(eventFilter.length / eventsPerPage);
  const pagination = Array.from(
    { length: pageNumbers },
    (_, index) => index + 1
  );

  // Eventos
  const eventFromHome = useSelector((state) => state.eventById);
  
  const [id, setId] = useState("");
  const [eventSelected, setEventSelected] = useState({});
  
  const handleClick = (event, eventId) => {
      setId(eventId);
      setEventSelected(event);
  };
  
  const flatedEvents = currentEvents.flat();
  
  const listedEvents = flatedEvents.map((event) => (
      <div key={event.id} onClick={() => handleClick(event, event.id)}>
          <CardJobs
              name={event.name}
              event={event}
          />
      </div>
  ));
  
  const flatedEventsFilter = currentEventsFilter.flat();
  
  //copia
  const listedEventsFilter = flatedEventsFilter.map((event) => (
      <div key={event.id} onClick={() => handleClick(event, event.id)}>
          <CardJobs
              name={event.name}
              event={event}
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

  //Error Toast --------------------
  let currentToastId = null;
  //Evita que se renderice mas de 1 toast
  const mensaje_error_Toast = () => {
    if (currentToastId) {
      toast.update(currentToastId, {
        render: errorPostulate,
        autoClose: 5000,
      });
    } else {
      currentToastId = toast.error(errorPostulate, {
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
          // marginTop: "120px",
          width: "500px",
        },
      });
    }
  };

  //-------------Mensaje Success Toast
  useEffect(() => {
    if (messagePostulated) {
      mensaje_success_Toast();
      dispatch(clear_message_postulated({}));
    }
  }, [messagePostulated]);

  //-------------Mensaje Error Toast
  useEffect(() => {
    if (Object.keys(errorPostulate).length > 0) {
      mensaje_error_Toast();
      dispatch(message_error_postulate({})); //Limpio el estado global
    }
  }, [errorPostulate]);

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
        {listedEventsFilter.length === 0 ? (
          <div className={style.text}>
            <h3>No se han encontrado resultados.</h3>
          </div>
        ) : filters ? (
          <div className={style.cardJobsStyle}>
            {listedEventsFilter}
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
        ) : (
          <div className={style.cardJobsStyle}>
            {listedEvents}
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
        )}
        <div className={style.detailStyle}>
          {id.length === 0 ? (
            <Detail detail={Object.keys(eventFromHome).length === 0 ? eventFilter[0] : eventFromHome} idTalent={idTalent} idEvent={id} />
          ) : (
            <Detail detail={eventSelected} idTalent={idTalent} idEvent={id} />
          )}
        </div>
      </div>
      {/* <ul className={style.pagination}>
        {pagination.map((number, index) => (
          <li
            key={index}
            className={number === currentPage ? style.active : ""}
            onClick={() => paginate(number)}
          >
            {number}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default TalentSearch;
