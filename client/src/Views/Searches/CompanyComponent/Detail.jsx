import style from "./Detail.module.css";
import { NavLink } from "react-router-dom";

const Detail = ({ talent }) => {
  
  //const { id, name, aboutMe, ubication, hability } = talent;
 
  return (
    <div className={style.containerDetail}>
      <div className={style.head}>
        <NavLink to={`/model/profile/${talent?.id}`} className={style.navLink}>
          <button>Ver perfil del Postulante</button>
        </NavLink>
      </div>

      <h2>{talent?.name}</h2>
      <h5>Ubicación: {talent?.ubication}</h5>
      {
        talent?.aboutMe === null ?
        <p className={style.textoDetail}>El postulante aún no ha escrito su información personal.</p>
        :
      <p className={style.textoDetail}>{talent?.aboutMe}</p>
      }
      <div className={style.acomodarOrientacion}>
        <h3 className={style.orientacionArt}>Orientacion Artistica</h3>
      </div>
      {/*carta de orientacion*/}
      <div className={style.habilidades}>
        <div className={style.habilidad}>
          {talent?.hability?.map((habilit, key) => 
            (<button key={key}>{habilit}</button>)
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
