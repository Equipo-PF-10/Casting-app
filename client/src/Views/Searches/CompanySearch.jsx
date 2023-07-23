import React from "react";
import Card from "./CompanyComponent/Card";
import style from "./CompanySearch.module.css";
import Search from "./CompanyComponent/Search";
import Detail from "./CompanyComponent/Detail";
import NavBarLateral from "../../Components/NavBarLateral/NavBarLateral";

const CompanySearch = () => {
  return (
    <div className={style.containerG}>
      <div className={style.searchFil}>
        <Search />
      </div>
      <div className={style.secciones}>
        <div className={style.navLateral}>
          <NavBarLateral />
        </div>
        <div className={style.grid}>
          <div className={style.cards}>
            <Card />
          </div>
          <div className={style.cards}>
            <Card />
          </div>
          <div className={style.cards}>
            <Card />
          </div>
          <div className={style.cards}>
            <Card />
          </div>
          <div className={style.cards}>
            <Card />
          </div>
          <div className={style.cards}>
            <Card />
          </div>
          <div className={style.cards}>
            <Card />
          </div>
          <div className={style.cards}>
            <Card />
          </div>
          <div className={style.cards}>
            <Card />
          </div>
          <div className={style.cards}>
            <Card />
          </div>
          <div className={style.cards}>
            <Card />
          </div>
          <div className={style.cards}>
            <Card />
          </div>
          <div className={style.cards}>
            <Card />
          </div>
          <div className={style.cards}>
            <Card />
          </div>
          <div className={style.cards}>
            <Card />
          </div>
        </div>
        <div className={style.detailCard}>
          <Detail />
        </div>
      </div>
    </div>
  );
};

export default CompanySearch;
