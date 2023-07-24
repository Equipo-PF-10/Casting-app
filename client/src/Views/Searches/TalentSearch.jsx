import React, {useEffect} from "react";
import style from "./TalentSearch.module.css";
import NavBarLateral from "../../Components/NavBarLateral/NavBarLateral";
import CardJobs from "./TalentComponent/CardJobs";
import SearchComp from "./TalentComponent/SearchComp";
import Detail from "./TalentComponent/Detail";
import {useDispatch, useSelector} from "react-redux";
import { getAllEvents } from "../../redux/actions";

const TalentSearch=() => {
  const events = useSelector((state) => state.allEvents)
  const dispatch=useDispatch();

  useEffect(() => {
    dispatch(getAllEvents());
  },[dispatch])

  return (
    <div className={style.containerGralTalent}>
      <div className={style.searchFil}>
        <SearchComp />
      </div>
      <div className={style.secciones}>
        <div className={style.navLateral}>
          <NavBarLateral />
        </div>
        <div>
          {events?.map((event) => {
            <CardJobs
              name={event.name}
              ubication={event.ubication}
              
            />
          })}
          {/*<div className={style.cardJobsStyle}>
            <CardJobs />
          </div>*/}
        </div>
        <div className={style.detailStyle}>
          <Detail/>
        </div>
      </div>
    </div>
  );
};

export default TalentSearch;
