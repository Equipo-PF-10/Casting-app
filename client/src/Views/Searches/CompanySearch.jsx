import React from "react";
import Card from "./CompanyComponent/Card";
import style from "./CompanySearch.module.css";
import Search from "./CompanyComponent/Search";
import Navbar from "../../Components/Navbar/Navbar";

const CompanySearch = () => {
  return (
    <div className={style.containerG}>
      <div>
        <Navbar/>
      </div>
      <div className={style.searchFil}>
        <Search/>
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
    </div>
  );
};

export default CompanySearch;