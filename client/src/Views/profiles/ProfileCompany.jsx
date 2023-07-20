import React from "react";
import style from "./ProfileCompany.module.css";

const profileCompany = () => {
  return (
    <div className={style.containerGeneral}>
      <div className={style.cardContainer}>
        <div className={style.image}>
          <img src="" alt="" />
        </div>
        <div>
          <h2 className={style.nombre}>Nombre Apellido</h2>
          <p className={style.titulo}>Titulo</p>
          <p className={style.descripcion}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            dapibus egestas tortor, fermentum sagittis sem tincidunt sit amet.
            Ut at risus magna. Nulla in ullamcorper urna.
          </p>
        </div>
      </div>
    </div>
  );
};

export default profileCompany;
