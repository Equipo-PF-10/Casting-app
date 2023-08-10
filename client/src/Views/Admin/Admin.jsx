import React, { useState } from "react";
import style from "./Admin.module.css";
import { Link } from "react-router-dom";
import Reportes from "../../Components/AdminComponents/Reportes/Reportes";
import Metricas from "../../Components/AdminComponents/Métricas/Metricas";
import Usuarios from "../../Components/AdminComponents/Usuarios/Usuarios";
import AdminCharts from "../../Components/AdminComponents/Métricas/AdminCharts/AdminCharts";
import EmpresasAdmin from "../../Components/AdminComponents/Empresas/EmpresasAdmin";
import PagosAdmin from "../../Components/AdminComponents/Pagos/PagosAdmin";
import AdminReviews from "../../Components/AdminComponents/Reviews/AdminReviews";

const Admin = () => {
  const [selectedOption, setSelectedOption] = useState("DASHBOARD");
  return (
    <div className={style.containerGral}>
      <div className={style.overlay}>
        <div className={style.sideBar}>
        <div className={style.logoContainer}>
          <Link to={"/"}>
            <img
              src="/Logo con Letras.svg"
              alt="Casting App"
              className={style.imgLogo}
            />
          </Link>
        </div>
        <div className={style.optionsContainer}>
          <ul className={style.list}>
          <li  className={selectedOption === "DASHBOARD" ? style.selectedOption : style.option} onClick={() => setSelectedOption("DASHBOARD")}>MÉTRICAS</li>
          <li  className={selectedOption === "PAYMENTS" ? style.selectedOption : style.option} onClick={() => setSelectedOption("PAYMENTS")}>VENTAS</li>
          <li  className={selectedOption === "TALENTS" ? style.selectedOption : style.option} onClick={() => setSelectedOption("TALENTS")}>TALENTOS</li>
          <li  className={selectedOption === "COMPANIES" ? style.selectedOption : style.option} onClick={() => setSelectedOption("COMPANIES")}>EMPRESAS</li>
          <li  className={selectedOption === "REVIEWS" ? style.selectedOption : style.option} onClick={() => setSelectedOption("REVIEWS")}>REVIEWS</li>
          </ul>
        </div>
        </div>
        {/* <div className={style.logoContainer}>
          <Link to={"/"}>
            <img
              src="/Logo con Letras.svg"
              alt="Casting App"
              className={style.imgLogo}
            />
          </Link>
        </div> */}
        <div className={style.containerComponent}>
          {/* <AdminCharts /> */}
          {/* <div className={style.talentsContainer}>
          <Usuarios />
          </div> */}
          {/* <div className={style.talentsContainer}>
          <EmpresasAdmin />
          </div> */}
          { selectedOption === "DASHBOARD" ? 
            <AdminCharts />
          :null }
          {selectedOption === "PAYMENTS" ? 
          (
            <div className={style.talentsContainer}>
              <PagosAdmin />
            </div>
          ) :null }
          {selectedOption === "TALENTS" ? 
          (
            <div className={style.talentsContainer}>
              <Usuarios />
            </div>
          ) :null }
          {selectedOption === "COMPANIES" ? 
          (
            <div className={style.talentsContainer}>
              <EmpresasAdmin />
            </div>
          ) :null }
          {selectedOption === "REVIEWS" ? 
          (
            <div className={style.talentsContainer}>
              <AdminReviews />
            </div>
          ) :null }
          {/* <div className={style.izq}>
            <Metricas />
            <Reportes />
          </div>
          <div className={style.der}>
            <Usuarios />
          </div> */}
        </div>
        { selectedOption === "DASHBOARD" ? 
            (
              <svg
          className={style.vector}
          width="500"
          height="100"
          viewBox="0 0 1417 418"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2525.11 142.197C2327.85 43.9905 2086.61 -4.64757 1825.5 1.13836C1564.39 6.92428 1292.53 66.9318 1037.06 175.17C781.599 283.409 551.466 436.092 369.639 617.976C187.813 799.861 60.6533 1004.58 0.855708 1211.71L1111.64 1191.86C1126.88 1139.05 1159.31 1086.85 1205.66 1040.48C1252.02 994.109 1310.7 955.181 1375.83 927.585C1440.96 899.988 1510.28 884.689 1576.85 883.214C1643.42 881.738 1704.93 894.139 1755.22 919.178L2525.11 142.197Z"
            fill="#7E7193"
          />
        </svg>
            )
          :null }
        
      </div>
    </div>
  );
};

export default Admin;
