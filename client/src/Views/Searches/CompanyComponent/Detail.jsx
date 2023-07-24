import style from "./Detail.module.css";

const Detail = ({talent}) => {

  const {name, aboutMe, ubication, hability} = talent;

  return (
    <div className={style.containerDetail}>
      <h2>{name}</h2>
      <h5>{ubication}</h5>
      <p className={style.textoDetail}>
        {aboutMe}
      </p>
      <div className={style.acomodarOrientacion}>
        <h3 className={style.orientacionArt}>Orientacion Artistica</h3>
      </div>
      {/*carta de orientacion*/}
      <div className={style.habilidades}>
        <div className={style.habilidad}>
          {hability?.map((habilit) => {
            <h4>{habilit}</h4>
          })}
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
