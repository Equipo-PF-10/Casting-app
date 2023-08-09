import React, {useEffect} from "react";
import style from "./ProfileModel.module.css";
import {useDispatch, useSelector} from "react-redux";
import {get_talent_by_id} from "../../redux/actions";
import {useParams, Link} from "react-router-dom";
import NavBarLateral from "../../Components/NavBarLateral/NavBarLateral";
import lapiz from "../../assets/lapiz.png";

const ProfileModel=() => {
  const { id }=useParams()
  //console.log(id);
  const userImage = localStorage.getItem("user_image");
  const userEmail = localStorage.getItem("user_email");
  const dispatch=useDispatch()

  
  useEffect(() => {
    dispatch(get_talent_by_id(id))
  },[dispatch])
  
  
  const talentId=useSelector((state) => state.talentById)
  //console.log(talentId);
  //const talentsAll= useSelector((state) => state.talents)
  //console.log(talentsAll +'Aca esta');
  
  let habilidades=talentId?.hability;
  //console.log(habilidades?.join(", "));
  let numero=talentId?.contact;
  //console.log(numero?.join(", "));
  

  return (
    <div className={style.fondo}>
      <div className={style.navLateral}>
          <NavBarLateral />
      </div>
      <div className={style.containerGeneral}>
        <div>
          {/*carta con foto y descripcion*/}
          <div className={style.cardContainer}>
            <div className={style.image}>
              {
                talentId?.image ?
                <img src={talentId?.image} alt={talentId.name} />
                :
                <img src={userImage} alt={talentId.name} />
              }
            </div>
            <div className={style.textoCard}>
              <h3 className={style.nombre}>{talentId?.name}</h3>
              <h5 className={style.titulo}>{habilidades?.join(", ")}</h5>
              {/* <p className={style.descripcion}>
                {talentId?.aboutMe}
              </p> */}
              {
                talentId?.email === userEmail ?
              <Link to={"/form/talent"}>
              <div className={style.update}>
                <img style={{width:"20px", paddingBottom:"6px"}} src={lapiz} alt="Editar perfil" />
                <h5>Actualiza tu perfil aquí</h5>
              </div>
              </Link>
              :
              null
              }
            </div>
          </div>
          {/*carta de orientacion*/}
          <div className={style.orientacionCard}>
            <h3 className={style.orientacionTexto}>Orientación Artistica</h3>
            {
              habilidades ?
            // <div className={style.habilidades}>
            //   <h4 className={style.habilidad}>
            //     {habilidades?.join(", ")}
            //   </h4>
            // </div>
            <div className={style.habilidades}>
              <div className={style.habilidad}>

            {habilidades?.map((habilit, key) => (
              <span key={key}>{habilit}</span>
              ))}
              </div>
            </div>
            :
            <h5 className={style.habilityEmpty}>Actualiza tu perfil y escoge tus habilidades artísticas. </h5>
            }
          </div>
          {/*carta de Reviews*/}
          <div className={style.reviews}>
          <h3>Puntuación y Reseñas</h3>
          <h3>Puntuacion: Estrellas</h3>
          <h4>Aquí podrá ver los comentarios de parte de las empresas que te han contratado.</h4>
          </div>
        </div>
        <div className={style.divDerecho}>
          {/*carta de datos*/}
          <div className={style.proyectosCard}>
            <div className={style.textoProyectos}>
              <h3>Datos</h3>
                  <p className={style.dato}><span className={style.datoTitle}>Ubicación: </span>{talentId?.ubication ? talentId.ubication : <span className={style.value}> Pendiente de actualizar.</span> }</p>

                  <p className={style.dato}> <span className={style.datoTitle}>Nacionalidad: </span> {talentId?.nationality ? talentId.nationality : <span className={style.value}> Pendiente de actualizar.</span>}</p>
            </div>
          </div>
          {/*carta de trabajos postulados*/}
          <div className={style.trabajosPostulados}>
            <h3 className={style.tituloTrabajos}>Características</h3>
            <p className={style.textoTrab}>
              <span className={style.spanTitle}>Género: </span>
              {talentId?.gender ? talentId.gender : <span className={style.value}> Pendiente de actualizar.</span>}
            </p>
            <p className={style.textoTrab}>
              <span className={style.spanTitle}>Peso: </span>
              {talentId?.weight ? talentId.weight : <span className={style.value}> Pendiente de actualizar.</span>}
            </p>
            <p className={style.textoTrab}>
              <span className={style.spanTitle}>Altura: </span>
              {talentId?.height ? talentId.height : <span className={style.value}> Pendiente de actualizar.</span>}
            </p>
            <p className={style.textoTrab}>
              <span className={style.spanTitle}>Contextura: </span>
              {talentId?.contexture ? talentId.contexture : <span className={style.value}> Pendiente de actualizar.</span>}
            </p>
            <p className={style.textoTrab}>
              <span className={style.spanTitle}>Origen étnico: </span>
              {talentId?.ethnicOrigin ? talentId.ethnicOrigin : <span className={style.value}> Pendiente de actualizar.</span>}
            </p>
          </div>
          {/*carta de contacto*/}
          <div className={style.cardContactos}>
            <div className={style.contactos}>
              <h2>Contactos</h2>
            </div>
            <div className={style.listaContactos}>
              <p className={style.datosSvg}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 63 63"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={style.svgIcono}
                >
                  <path
                    d="M46.9947 62.3696C43.7167 62.3696 40.2646 61.5863 36.6965 60.0778C33.2154 58.5984 29.7053 56.5677 26.2822 54.102C22.8882 51.6072 19.6101 48.8223 16.5062 45.7764C13.4312 42.6724 10.6463 39.3944 8.18057 36.0293C5.68578 32.5482 3.68416 29.0671 2.26271 25.7021C0.754236 22.1049 0 18.6238 0 15.3458C0 13.0831 0.406127 10.9364 1.18937 8.9348C2.00163 6.87516 3.30704 4.96056 5.07659 3.30704C7.31029 1.10235 9.86309 0 12.5899 0C13.7213 0 14.8817 0.261082 15.868 0.725227C16.9993 1.24739 17.9566 2.03064 18.6528 3.07496L25.383 12.5609C25.9922 13.4022 26.4563 14.2145 26.7754 15.0267C27.1525 15.897 27.3556 16.7673 27.3556 17.6085C27.3556 18.7109 27.0365 19.7842 26.4273 20.7995C25.9921 21.5828 25.3249 22.424 24.4837 23.2653L22.5111 25.3249C22.5401 25.412 22.5691 25.47 22.5981 25.528C22.9462 26.1372 23.6424 27.1815 24.9768 28.748C26.3983 30.3725 27.7327 31.852 29.0671 33.2154C30.7787 34.8979 32.2001 36.2324 33.5345 37.3347C35.188 38.7271 36.2614 39.4234 36.8996 39.7425L36.8416 39.8875L38.9592 37.7989C39.8585 36.8996 40.7288 36.2324 41.57 35.7972C43.1655 34.8109 45.1962 34.6369 47.2268 35.4781C47.981 35.7972 48.7933 36.2324 49.6636 36.8416L59.2946 43.6877C60.3679 44.4129 61.1512 45.3412 61.6153 46.4436C62.0505 47.5459 62.2535 48.5612 62.2535 49.5765C62.2535 50.969 61.9344 52.3614 61.3252 53.6668C60.716 54.9722 59.9618 56.1036 59.0045 57.1479C57.351 58.9755 55.5524 60.2809 53.4638 61.1222C51.4621 61.9344 49.2865 62.3696 46.9947 62.3696ZM12.5899 4.35137C10.9944 4.35137 9.51498 5.04758 8.09354 6.44002C6.75912 7.68741 5.83083 9.05084 5.25065 10.5303C4.64146 12.0388 4.35136 13.6343 4.35136 15.3458C4.35136 18.0437 4.98956 20.9736 6.26596 23.9905C7.57137 27.0655 9.39895 30.2565 11.7197 33.4475C14.0404 36.6385 16.6802 39.7425 19.5811 42.6724C22.482 45.5443 25.615 48.2131 28.835 50.5629C31.968 52.8546 35.188 54.7112 38.379 56.0456C43.3396 58.1632 47.981 58.6564 51.8102 57.0609C53.2897 56.4517 54.5951 55.5234 55.7845 54.189C56.4517 53.4638 56.9739 52.6805 57.409 51.7522C57.7571 51.027 57.9312 50.2728 57.9312 49.5185C57.9312 49.0544 57.8441 48.5902 57.6121 48.0681C57.525 47.894 57.351 47.5749 56.7998 47.1978L47.1688 40.3517C46.5886 39.9455 46.0664 39.6554 45.5733 39.4524C44.9351 39.1913 44.674 38.9302 43.6877 39.5394C43.1075 39.8295 42.5854 40.2646 42.0052 40.8448L39.8005 43.0205C38.6691 44.1228 36.9286 44.3839 35.5942 43.8908L34.8109 43.5427C33.6215 42.9045 32.2291 41.9181 30.6916 40.6127C29.2992 39.4234 27.7907 38.0309 25.9631 36.2324C24.5417 34.7819 23.1203 33.2444 21.6408 31.5329C20.2774 29.9374 19.291 28.574 18.6819 27.4426L18.3337 26.5723C18.1597 25.9051 18.1017 25.528 18.1017 25.1219C18.1017 24.0776 18.4788 23.1493 19.204 22.424L21.3797 20.1613C21.9599 19.5811 22.395 19.03 22.6851 18.5368C22.9172 18.1597 23.0042 17.8406 23.0042 17.5505C23.0042 17.3184 22.9172 16.9703 22.7721 16.6222C22.5691 16.1581 22.25 15.6359 21.8438 15.0847L15.1137 5.56975C14.8236 5.16362 14.4755 4.87353 14.0404 4.67046C13.5763 4.4674 13.0831 4.35137 12.5899 4.35137ZM36.8416 39.9165L36.3774 41.8891L37.1607 39.8585C37.0156 39.8295 36.8996 39.8585 36.8416 39.9165Z"
                    fill="#324844"
                  />
                </svg>
                {talentId?.numero ? talentId.numero?.join(", ") : <span className={style.valueContact}>xxx-xxx-xxxx</span>}
              </p>
              <p className={style.datosSvg}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 64 67"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={style.svgIcono}
                >
                  <path
                    d="M63.7521 47.5365C63.7521 59.7305 56.835 67 45.2321 67H41.4389C39.6857 67 38.2513 65.4925 38.2513 63.65V44.3205C38.2513 43.416 38.9526 42.6455 39.8132 42.6455L45.4234 42.545C45.8697 42.5115 46.2522 42.1765 46.3478 41.7075L47.4635 35.309C47.5591 34.706 47.1128 34.1365 46.5072 34.1365L39.7176 34.237C38.825 34.237 38.1238 33.5 38.0919 32.5955L37.9644 24.388C37.9644 23.852 38.3788 23.383 38.9207 23.383L46.5709 23.249C47.1128 23.249 47.5272 22.8135 47.5272 22.244L47.3997 14.204C47.3997 13.6345 46.9853 13.199 46.4434 13.199L37.8369 13.333C32.5455 13.4335 28.3378 17.9895 28.4335 23.5505L28.5928 32.763C28.6247 33.701 27.9234 34.438 27.0309 34.4715L23.2058 34.5385C22.6639 34.5385 22.2495 34.974 22.2495 35.5435L22.3452 41.9085C22.3452 42.478 22.7595 42.9135 23.3014 42.9135L27.1265 42.8465C28.0191 42.8465 28.7203 43.5835 28.7522 44.488L29.0391 63.583C29.071 65.459 27.6365 67 25.8515 67H18.52C6.91711 67 0 59.7305 0 47.503V19.4635C0 7.2695 6.91711 0 18.52 0H45.2321C56.835 0 63.7521 7.2695 63.7521 19.4635V47.5365Z"
                    fill="#324844"
                  />
                </svg>
                {talentId.facebook ? talentId.facebook : <span className={style.valueContact}>usuario_facebook</span>}
              </p>
              <p className={style.datosSvg}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 63 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={style.svgIcono}
                >
                  <path
                    d="M6.80658 0.043457H55.5638C57.4356 0.043457 59.1384 0.825224 60.3713 2.08333L60.4427 2.16167C61.6329 3.41344 62.3696 5.11941 62.3696 6.98995V39.0543C62.3696 40.9652 61.6027 42.7036 60.3713 43.9601C59.1384 45.2182 57.4356 46 55.5638 46H6.80658C4.93473 46 3.23192 45.2182 1.99901 43.9601L1.92768 43.881C0.736642 42.6284 0 40.9232 0 39.0543V6.98995C0 5.07905 0.766108 3.34144 1.99901 2.08333C3.23192 0.825224 4.93473 0.043457 6.80658 0.043457ZM4.40357 3.50523L31.1848 25.2824L57.966 3.50523C57.2852 3.01386 56.4555 2.72425 55.5638 2.72425H6.80658C5.91485 2.72425 5.08516 3.01306 4.40357 3.50523ZM59.5316 5.65271L32.0013 28.0391C31.7671 28.2298 31.488 28.324 31.2104 28.3295H31.1654C30.8824 28.324 30.6032 28.2298 30.369 28.0391L2.83879 5.65351C2.70154 6.07446 2.6271 6.5239 2.6271 6.98995V39.0543C2.6271 40.2016 3.07374 41.2453 3.79642 42.0096L3.85535 42.0658C4.61293 42.8389 5.65819 43.3192 6.80658 43.3192H55.5638C56.7122 43.3192 57.7574 42.8389 58.515 42.0658C59.271 41.2943 59.7425 40.2269 59.7425 39.0543V6.98995C59.7425 6.5231 59.668 6.07367 59.5316 5.65271Z"
                    fill="#324844"
                  />
                </svg>
                {talentId?.email ? talentId.email : <span className={style.valueContact}>ejemplo@gmail.com</span>}
              </p>
              <p className={style.datosSvg}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="35"
                  viewBox="6.5 0 50 50"
                  className={style.svgIconoInst}
                >
                  <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                </svg>
                {talentId?.instagram ? talentId.instagram : <span className={style.valueContact}>usuario_instagram</span>}
              </p>
              <p className={style.datosSvg}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="32"
                  height="35"
                  viewBox="0 0 50 50"
                  className={style.svgIcono}
                >
                  <path d="M 34.21875 5.46875 C 28.238281 5.46875 23.375 10.332031 23.375 16.3125 C 23.375 16.671875 23.464844 17.023438 23.5 17.375 C 16.105469 16.667969 9.566406 13.105469 5.125 7.65625 C 4.917969 7.394531 4.597656 7.253906 4.261719 7.277344 C 3.929688 7.300781 3.632813 7.492188 3.46875 7.78125 C 2.535156 9.386719 2 11.234375 2 13.21875 C 2 15.621094 2.859375 17.820313 4.1875 19.625 C 3.929688 19.511719 3.648438 19.449219 3.40625 19.3125 C 3.097656 19.148438 2.726563 19.15625 2.425781 19.335938 C 2.125 19.515625 1.941406 19.839844 1.9375 20.1875 L 1.9375 20.3125 C 1.9375 23.996094 3.84375 27.195313 6.65625 29.15625 C 6.625 29.152344 6.59375 29.164063 6.5625 29.15625 C 6.21875 29.097656 5.871094 29.21875 5.640625 29.480469 C 5.410156 29.742188 5.335938 30.105469 5.4375 30.4375 C 6.554688 33.910156 9.40625 36.5625 12.9375 37.53125 C 10.125 39.203125 6.863281 40.1875 3.34375 40.1875 C 2.582031 40.1875 1.851563 40.148438 1.125 40.0625 C 0.65625 40 0.207031 40.273438 0.0507813 40.71875 C -0.109375 41.164063 0.0664063 41.660156 0.46875 41.90625 C 4.980469 44.800781 10.335938 46.5 16.09375 46.5 C 25.425781 46.5 32.746094 42.601563 37.65625 37.03125 C 42.566406 31.460938 45.125 24.226563 45.125 17.46875 C 45.125 17.183594 45.101563 16.90625 45.09375 16.625 C 46.925781 15.222656 48.5625 13.578125 49.84375 11.65625 C 50.097656 11.285156 50.070313 10.789063 49.777344 10.445313 C 49.488281 10.101563 49 9.996094 48.59375 10.1875 C 48.078125 10.417969 47.476563 10.441406 46.9375 10.625 C 47.648438 9.675781 48.257813 8.652344 48.625 7.5 C 48.75 7.105469 48.613281 6.671875 48.289063 6.414063 C 47.964844 6.160156 47.511719 6.128906 47.15625 6.34375 C 45.449219 7.355469 43.558594 8.066406 41.5625 8.5 C 39.625 6.6875 37.074219 5.46875 34.21875 5.46875 Z M 34.21875 7.46875 C 36.769531 7.46875 39.074219 8.558594 40.6875 10.28125 C 40.929688 10.53125 41.285156 10.636719 41.625 10.5625 C 42.929688 10.304688 44.167969 9.925781 45.375 9.4375 C 44.679688 10.375 43.820313 11.175781 42.8125 11.78125 C 42.355469 12.003906 42.140625 12.53125 42.308594 13.011719 C 42.472656 13.488281 42.972656 13.765625 43.46875 13.65625 C 44.46875 13.535156 45.359375 13.128906 46.3125 12.875 C 45.457031 13.800781 44.519531 14.636719 43.5 15.375 C 43.222656 15.578125 43.070313 15.90625 43.09375 16.25 C 43.109375 16.65625 43.125 17.058594 43.125 17.46875 C 43.125 23.71875 40.726563 30.503906 36.15625 35.6875 C 31.585938 40.871094 24.875 44.5 16.09375 44.5 C 12.105469 44.5 8.339844 43.617188 4.9375 42.0625 C 9.15625 41.738281 13.046875 40.246094 16.1875 37.78125 C 16.515625 37.519531 16.644531 37.082031 16.511719 36.683594 C 16.378906 36.285156 16.011719 36.011719 15.59375 36 C 12.296875 35.941406 9.535156 34.023438 8.0625 31.3125 C 8.117188 31.3125 8.164063 31.3125 8.21875 31.3125 C 9.207031 31.3125 10.183594 31.1875 11.09375 30.9375 C 11.53125 30.808594 11.832031 30.402344 11.816406 29.945313 C 11.800781 29.488281 11.476563 29.097656 11.03125 29 C 7.472656 28.28125 4.804688 25.382813 4.1875 21.78125 C 5.195313 22.128906 6.226563 22.402344 7.34375 22.4375 C 7.800781 22.464844 8.214844 22.179688 8.355469 21.746094 C 8.496094 21.3125 8.324219 20.835938 7.9375 20.59375 C 5.5625 19.003906 4 16.296875 4 13.21875 C 4 12.078125 4.296875 11.03125 4.6875 10.03125 C 9.6875 15.519531 16.6875 19.164063 24.59375 19.5625 C 24.90625 19.578125 25.210938 19.449219 25.414063 19.210938 C 25.617188 18.96875 25.695313 18.648438 25.625 18.34375 C 25.472656 17.695313 25.375 17.007813 25.375 16.3125 C 25.375 11.414063 29.320313 7.46875 34.21875 7.46875 Z"></path>
                </svg>
                {talentId?.twiter ?  talentId.twiter : <span className={style.valueContact}>usuario_twitter</span>}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModel;
