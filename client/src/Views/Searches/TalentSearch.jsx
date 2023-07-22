import React from "react";
import style from "./TalentSearch.module.css";
import NavBarLateral from "../../Components/NavBarLateral/NavBarLateral";
import CardJobs from "./TalentComponent/CardJobs";
import SearchComp from "./TalentComponent/SearchComp";
import Detail from "./TalentComponent/Detail";

const TalentSearch = () => {
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
          <div className={style.cardJobsStyle}>
            <CardJobs />
          </div>
          <div className={style.cardJobsStyle}>
            <CardJobs />
          </div>
          <div className={style.cardJobsStyle}>
            <CardJobs />
          </div>
          <div className={style.cardJobsStyle}>
            <CardJobs />
          </div>
          <div className={style.cardJobsStyle}>
            <CardJobs />
          </div>
          <div className={style.cardJobsStyle}>
            <CardJobs />
          </div>
        </div>
        <div className={style.detailStyle}>
          <Detail/>
        </div>
      </div>
    </div>
  );
};

export default TalentSearch;
