import React from "react";
import style from "./Blog.module.css";

const Blog = () => {
  return (
    <div>
      <div className={style.container}>
        <div className={style.cardContainer1}>
          <div className={style.card}>
            <div className={style.frontContainer}>
              <p className={style.pTexto}>
                Elementos esenciales en fotografías exitosas para tu casting
              </p>
            </div>
            <div className={style.content1}>
              <p className={style.heading1}>Fotografías</p>
              <p className={style.pTextoA}>
                Mira a la cámara, sonríe, y no tapes tu cara. Evita estar con el
                sol frente a ti, ya que tus ojos tienden a cerrarse, evita el
                sol en tu espalda, porque el rostro se verá oscuro. Muestra las
                manos (brazos cruzados, pulgares en los bolsillos, manos a la
                cintura, etc.).
              </p>
            </div>
          </div>
        </div>
        <div className={style.cardContainer2}>
          <div className={style.card}>
            <div className={style.frontContainer}>
              <p className={style.pTexto}>
                ¿Cómo ser seleccionado en un casting online?
              </p>
            </div>
            <div className={style.content2}>
              <p className={style.heading2}>Castings</p>
              <p>
                A la hora de participar de un casting, debes tener en cuenta que
                solo tienes un par de segundos para generar un marca que te
                distinga de los demás. La fotografía que colocas en tu compuse
                es lo único que te va a vender.
              </p>
            </div>
          </div>
        </div>
        <div className={style.cardContainer3}>
          <div className={style.card}>
            <div className={style.frontContainer}>
              <p className={style.pTexto}>
                ¿Qué información debo subir a Casting App?
              </p>
            </div>
            <div className={style.content3}>
              <p className={style.heading3}>Tu info</p>
              <p className={style.pTextoA}>
                Llegaste a la plataforma que te las opciones que estás buscando,
                ya que en Casting App tenemos las herramientas para que filtres
                nuestro talento lo máximo posible y así llegar a esa persona que
                estás buscando.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
