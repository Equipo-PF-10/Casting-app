import React, { useEffect } from "react";
import styleCard from "./CardJobs.module.css";
import { get_company_by_id, send_id_of_card } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const CardJobs = ({event}) => {
  //const idCompany = event.CompanyId;
  //console.log(idCompany);
  //const companyData=useSelector((state) => state.companyDetail);
  //console.log(companyData);
  //const eventsD = useSelector((state) => state.eventDetail);
  //console.log(companyData);
  const dispatch=useDispatch();
  
  const handleClick = (id) => {
    dispatch(send_id_of_card(id));
  };

  //useEffect(() => {
  //  dispatch(get_company_by_id(event.id));
  //},[dispatch,event.id]);
  
  //useEffect(() => {
  //  dispatch(get_event_by_id(event));
  //}, [dispatch, event]);

  return (
    <div
      className={styleCard.containerCardJobs}
      onClick={() => handleClick(event.id)}
    >
      <h2>{event.name}</h2>
      <p>{event.ubication}</p>
      <h5>{event.habilityRequired}</h5>
      {/*<h5>{companyData.name}</h5>*/}
      {/*<div className={style.brLinea}></div>*/}
    </div>
  );
};

export default CardJobs;
