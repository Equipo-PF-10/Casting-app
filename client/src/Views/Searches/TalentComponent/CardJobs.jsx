import styleCard from "./CardJobs.module.css";

const CardJobs=({event}) => {
  

  return (
    <div
      className={styleCard.containerCardJobs}
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
