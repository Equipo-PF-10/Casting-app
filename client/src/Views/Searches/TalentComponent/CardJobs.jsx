import React from "react";
import style from '../TalentSearch.module.css'
import styleCard from './CardJobs.module.css'

const CardJobs = () => {
  return (
    <div className={styleCard.containerCardJobs}>
      <h2>Trabajo - Evento</h2>
      <h5>Locación</h5>
      <h5>Empresa</h5>
      <div className={style.brLinea}></div>
    </div>
  );
};

export default CardJobs;
