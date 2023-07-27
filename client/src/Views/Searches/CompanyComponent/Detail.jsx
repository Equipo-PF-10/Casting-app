import style from "./Detail.module.css";
import { NavLink } from "react-router-dom";

const Detail = ({ talent }) => {
  console.log("talento en Detail: " + talent);
  const { id, name, aboutMe, ubication, hability } = talent; //.dataValues
  console.log(hability);

  return (
    <div className={style.containerDetail}>
      <div className={style.head}>
        <NavLink to={`/model/profile/${id}`} className={style.navLink}>
          <button>Ver perfil del Postulante</button>
        </NavLink>
      </div>

      <h2>{name}</h2>
      <h5>{ubication}</h5>
      {
        aboutMe === null ?
        <p className={style.textoDetail}>El postulante no ha escrito su información personal.</p>
        :
      <p className={style.textoDetail}>{aboutMe}</p>
      }
      <div className={style.acomodarOrientacion}>
        <h3 className={style.orientacionArt}>Orientacion Artistica</h3>
      </div>
      {/*carta de orientacion*/}
      <div className={style.habilidades}>
        <div className={style.habilidad}>
          {hability?.map((habilit) => 
            (<button>{habilit}</button>)
          )}
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
