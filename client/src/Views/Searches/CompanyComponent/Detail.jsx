import React from "react";
import style from "./Detail.module.css";

const Detail = () => {
  return (
    <div className={style.containerDetail}>
      <h2>Nombre Apellido</h2>
      <h5>Locacion</h5>
      <p className={style.textoDetail}>
        Fusce ac lacus ac diam ullamcorper egestas ut nec velit. Duis facilisis
        urna vel sapien elementum euismod. Phasellus aliquet feugiat pretium.
        Etiam id dignissim dui. Maecenas ex velit, fringilla non scelerisque ut,
        ullamcorper vel tellus. In lacinia tincidunt lorem et ullamcorper. Etiam
        nec facilisis felis.imperdiet.
      </p>
      <div className={style.acomodarOrientacion}>
        <h3 className={style.orientacionArt}>Orientacion Artistica</h3>
      </div>
      {/*carta de orientacion*/}
      <div className={style.habilidades}>
        <div className={style.habilidad}>
          <h4>Deporte</h4>
        </div>
        <div className={style.habilidad}>
          <h4>Arte</h4>
        </div>
        <div className={style.habilidad}>
          <h4>Humor</h4>
        </div>
      </div>
      <div className={style.buttonsContainer}>
        <div className={style.conteinerConectar}>
          <button className={style.conectar}>Conectar</button>
        </div>
        <div className={style.conteinerRechazar}>
          <button className={style.rechazar}>Rechazar</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
