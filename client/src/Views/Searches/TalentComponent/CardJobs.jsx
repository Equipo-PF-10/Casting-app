import React, { useEffect } from "react";
import styleCard from "./CardJobs.module.css";
import { get_company_by_id, get_event_by_id } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const CardJobs = ({event}) => {
  //const idCompany = event.CompanyId;
  //console.log(name);
  const companyData = useSelector((state) => state.companyDetail);
  //const eventsD = useSelector((state) => state.eventDetail);
  //console.log(companyData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_company_by_id(event.id));
  },[dispatch,event]);
  
  //useEffect(() => {
  //  dispatch(get_event_by_id(event));
  //}, [dispatch, event]);

  return (
    <div className={styleCard.containerCardJobs}>
      <h2>{event.name}</h2>
      <p>{event.ubication}</p>
      <h5>{event.habilityRequired}</h5>
      <h5>{companyData.name}</h5>
      {/*<div className={style.brLinea}></div>*/}
    </div>
  );
};

export default CardJobs;
