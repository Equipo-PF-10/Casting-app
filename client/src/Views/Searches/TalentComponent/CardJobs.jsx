import React, { useEffect } from "react";
//import style from '../TalentSearch.module.css'
import styleCard from "./CardJobs.module.css";
import {get_company_by_id} from "../../../redux/actions";
//import { get_event_by_id } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const CardJobs=({event}) => {
  
  const idCompany = event.idEmpresa;
  //console.log(event);
  const companyData = useSelector((state) => state.companyDetail);
  //console.log(companyData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_company_by_id(idCompany));
  }, [dispatch, idCompany]);

  return (
    <div className={styleCard.containerCardJobs}>
      <h2>{event.name}</h2>
      <h5>{event.ubication}</h5>
      <h5>{companyData.name}</h5>
      {/*<div className={style.brLinea}></div>*/}
    </div>
  );
};

export default CardJobs;
