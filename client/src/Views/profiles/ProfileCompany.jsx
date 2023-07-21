import React from "react";
import style from "./ProfileCompany.module.css";
import empresa from "../../../assets/PNG/facebook 1.png";

const profileCompany = () => {
  return (
    <div className={style.containerGeneral}>
      {/*carta con foto y descripcion*/}
      <div className={style.cardContainer}>
        <div className={style.image}>
          <img className={style.imgPerfil} src={empresa} alt="logo empresa" />
        </div>
        <div className={style.textoCard}>
          <h2 className={style.nombre}>Empresa</h2>
          <h5 className={style.titulo}>Titulo</h5>
          <p className={style.descripcion}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            dapibus egestas tortor, fermentum sagittis sem tincidunt sit amet.
            Ut at risus magna. Nulla in ullamcorper urna. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Etiam dapibus egestas tortor,
            fermentum sagittis sem tincidunt sit amet. Ut at risus magna. Nulla
            in ullamcorper urna.
          </p>
        </div>
      </div>
      {/*carta de orientacion*/}
      <div className={style.orientacionCard}>
        <h3 className={style.orientacionTexto}>Orientacion Artistica</h3>
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
      </div>
      {/*carta de imagenes*/}
      <div className={style.imagenesCard}>
        <div className={style.contImg}>
          <p className={style.imgs}>ImagenUno</p>
        </div>
        <div className={style.contImg}>
          <p className={style.imgs}>ImagenDos</p>
        </div>
        <div className={style.contImg}>
          <p className={style.imgs}>ImagenTres</p>
        </div>
        <div className={style.contImg}>
          <p className={style.imgs}>ImagenCuatro</p>
        </div>
      </div>
      {/*carta de proyectos*/}
      <div className={style.proyectosCard}>
        <div className={style.textoProyectos}>
          <h3>Proyectos</h3>
          <div className={style.proyP}>
            <p className={style.pe}>
              Aenean id arcu dapibus, cursus nisl ut, facilisis est.
            </p>
            <p className={style.pe}>
              Aenean id arcu dapibus, cursus nisl ut, facilisis est.
            </p>
            <p className={style.pe}>
              Aenean id arcu dapibus, cursus nisl ut, facilisis est.
            </p>
            <p className={style.pe}>
              Aenean id arcu dapibus, cursus nisl ut, facilisis est.
            </p>
          </div>
        </div>
      </div>
      {/*carta de trabajos postulados*/}
      <div className={style.trabajosPostulados}>
        <h3 className={style.tituloTrabajos}>Trabajos postulados</h3>
        <p className={style.textoTrab}>
          Ut consequat justo eu accumsan porta. fermentum vitae vel elit.
        </p>
        <p className={style.textoTrab}>
          Mauris eu eros aliquet magna viverra fermentum vitae vel elit.
        </p>
        <p className={style.textoTrab}>
          Aenean id arcu dapibus, cursus nisl ut, facilisis est.
        </p>
        <p className={style.textoTrab}>
          Aenean id arcu dapibus, cursus nisl ut, facilisis est.
        </p>
      </div>
      {/*carta de contacto*/}
      <div>
        <div className={style.contactos}>
          <h3>Contactos</h3>
        </div>
        <div className={style.listaContactos}>
          <p>telefono con svg</p>
          <p>facebook con svg</p>
          <p>mail con svg</p>
          <p>instagram con svg</p>
          <p>twiter con svg</p>
          <p>pagina web con svg</p>
        </div>
      </div>
    </div>
  );
};

export default profileCompany;
