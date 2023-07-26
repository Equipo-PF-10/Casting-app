import React, { useEffect, useState } from "react";
import style from "./TalentSearch.module.css";
import NavBarLateral from "../../Components/NavBarLateral/NavBarLateral";
import CardJobs from "./TalentComponent/CardJobs";
import SearchComp from "./TalentComponent/SearchComp";
import Detail from "./TalentComponent/Detail";
import { useDispatch, useSelector } from "react-redux";
import { getAllEvents, get_company_by_id } from "../../redux/actions";

const TalentSearch = () => {
  const dispatch = useDispatch();

  const events = useSelector((state) => state.allEvents);
  const details = useSelector((state) => state.companyDetail);
  //console.log(events); //detalles de los eventos
  //console.log(details); //

  // Paginación

  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 4;

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

  const listedEvents = currentEvents.map((event) => (
    <div key={event}>
      <CardJobs
        event={event}
      />
    </div>
  ));

  useEffect(() => {
    dispatch(getAllEvents());
    dispatch(get_company_by_id())
  }, [dispatch]);

  return (
    <div className={style.containerGralTalent}>
      <div className={style.searchFil}>
        <SearchComp setCurrentPage={setCurrentPage} />
      </div>
      <div className={style.secciones}>
        <div className={style.navLateral}>
          <NavBarLateral />
        </div>
        <div className={style.cardJobsStyle}>{listedEvents}</div>
        <div className={style.detailStyle}>
          <Detail details={details} />
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

export default TalentSearch;
