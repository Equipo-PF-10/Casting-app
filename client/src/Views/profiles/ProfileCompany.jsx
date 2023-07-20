import React from "react";
import style from "./ProfileCompany.module.css";

const profileCompany = () => {
  return (
    <div className={style.containerGeneral}>
      {/*carta con foto y descripcion*/}
      <div className={style.cardContainer}>
        <div className={style.image}>
          <img src="" alt="" />
        </div>
        <div className={style.textoCard}>
          <h2 className={style.nombre}>Empresa</h2>
          <p className={style.titulo}>Titulo</p>
          <p className={style.descripcion}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            dapibus egestas tortor, fermentum sagittis sem tincidunt sit amet.
            Ut at risus magna. Nulla in ullamcorper urna.
          </p>
        </div>
      </div>
      {/*carta de orientacion*/}
      <div className={style.orientacion}>
        <h3>Orientacion Artistica</h3>
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
        <div>
          <p>ImagenUno</p>
        </div>
        <div>
          <p>ImagenDos</p>
        </div>
        <div>
          <p>ImagenTres</p>
        </div>
        <div>
          <p>ImagenCuatro</p>
        </div>
      </div>
      {/*carta de proyectos*/}
      <div className={style.proyectosCard}>
        <div className={style.textoProyectos}>
          <h3>Proyectos</h3>
          <p>proyecto 1</p>
          <p>proyecto 2</p>
          <p>proyecto 3</p>
        </div>
          </div>
          {/*carta de trabajos postulados*/}
          <div>
              <div>
                  <h3>Trabajos postulados</h3>
                  <p>trabajo 1</p>
                  <p>trabajo 2</p>
                  <p>trabajo 3</p>
                  <p>trabajo 4</p>
              </div>
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
