import React, { useEffect, useState } from "react";
import style from "./TalentSearch.module.css";
import NavBarLateral from "../../Components/NavBarLateral/NavBarLateral";
import CardJobs from "./TalentComponent/CardJobs";
import SearchComp from "./TalentComponent/SearchComp";
import Detail from "./TalentComponent/Detail";
import { useDispatch, useSelector } from "react-redux";
import { getAllEvents } from "../../redux/actions";

const TalentSearch = () => {
  const dispatch = useDispatch();

  let [id, setId] = useState("");
  let [eventSelected, setEventSelected] = useState({});

  const events = useSelector((state) => state.allEvents);
  //const error = useSelector((state) => state.errors);
  //const eventDet = useSelector((state) => state.eventDetail);
  //const details = useSelector((state) => state.companyDetail);
  //console.log(events); //detalles de los eventos
  //console.log(eventDet); //

  // Paginación
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 3;

  const lastIndex = currentPage * eventsPerPage;
  const firstIndex = lastIndex - eventsPerPage;
  const currentEvents = events.slice(firstIndex, lastIndex);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = Math.ceil(events.length / eventsPerPage);
  const pagination = Array.from(
    { length: pageNumbers },
    (_, index) => index + 1
  );

  
  const handleClick=(eventId) => {
    console.log(eventId);
    setId(eventId);
    setEventSelected(events.find((event) => event.id === id));
  };

  const listedEvents = currentEvents.map((event) => (
    <div key={event.id}>
      <CardJobs
        name={event.name}
        event={event}
        onClick={() => handleClick(event.id)}
      />
      {/*<CardJobs event={event} onClick={() =>console.log('jesus')} />*/}
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
    //dispatch(get_event_by_id())
  }, [dispatch]);

  //console.log(id.length === 0, 'condicion');
  //console.log(eventSelected);

  return (
    <div className={style.containerGralTalent}>
      <div className={style.searchFil}>
        <SearchComp
          ubication={singleLocation}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <div className={style.secciones}>
        <div className={style.navLateral}>
          <NavBarLateral />
        </div>
        <div className={style.cardJobsStyle}>{listedEvents}</div>
        <div className={style.detailStyle}>
          {/*<Detail events={events} />*/}
          {id.length === 0 ? (
            <Detail events={events[0]} />
          ) : (
            <Detail events={eventSelected} />
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
