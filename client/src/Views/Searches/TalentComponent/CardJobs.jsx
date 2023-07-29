import React, { useEffect } from "react";
import styleCard from "./CardJobs.module.css";
import { get_company_by_id, get_event_by_id, send_id_of_card } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const CardJobs=({event,setId}) => {
  
  const dispatch=useDispatch()
  
  const handleClick=(id) => {
    dispatch(get_event_by_id(id));
    setId(id);
  }

  //console.log(event); // eventos dublicados


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
