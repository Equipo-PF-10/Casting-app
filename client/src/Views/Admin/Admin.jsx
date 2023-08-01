import React from "react";
import style from "./Admin.module.css";
import { Link } from "react-router-dom";
import Reportes from "../../Components/AdminComponents/Reportes/Reportes";
import Metricas from "../../Components/AdminComponents/Métricas/Metricas";
import Usuarios from "../../Components/AdminComponents/Usuarios/Usuarios";

const Admin = () => {
  return (
    <div className={style.containerGral}>
      <div className={style.logoContainer}>
        <Link to={"/"}>
          <img
            src="/Logo con Letras.svg"
            alt="Casting App"
            className={style.imgLogo}
          />
        </Link>
      </div>
      <div className={style.containerComponent}>
        <div className={style.izq}>
          <Metricas />
          <Reportes />
        </div>
        <div className={style.der}>
          <Usuarios />
        </div>
      </div>
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
    </div>
  );
};

export default Admin;
