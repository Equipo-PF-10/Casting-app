import React, {useEffect} from "react";
import style from "./ProfileCompany.module.css";
import NavBarLateral from "../../Components/NavBarLateral/NavBarLateral";
import {useParams, Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { get_company_id } from "../../redux/actions";
import lapiz from "../../assets/lapiz.png";

const profileCompany=() => {
  const {id}=useParams()
  //console.log(id);
  const userImage = localStorage.getItem("user_image");
  const userEmail = localStorage.getItem("user_email");
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(get_company_id(id))
  },[dispatch])
  
  const company=useSelector((state) => state.companyById)
  console.log(company);

  return (
    <div className={style.fondo}>
      <div className={style.navLateral}>
          <NavBarLateral />
      </div>
        <div className={style.containerGeneral}>
          <div className={style.divIzquierdo}>
            {/*carta con foto y descripcion*/}
            <div className={style.cardContainer}>
              <div className={style.image}>
                {
                  company?.logo ?
                  <img src={company?.logo} alt={company?.name} />
                  :
                  <img src={userImage} alt={company?.name} />
                }
              </div>
              <div className={style.textoCard}>
              <h3 className={style.nombre}>{company?.name}</h3>
                {/* <p className={style.descripcion}>
                  {company?.descriptionShort}
                </p> */}
                {
                  company.email === userEmail ?
                <Link to={"/form/company"}>
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
              <h3 className={style.orientacionTexto}>Orientación Comercial</h3>
              {/* <div className={style.habilidades}>
                <div className={style.habilidad}>
                  <h4>{company?.industryMain}</h4>
                </div>
              </div> */}
              {
                company?.industryMain 
                ?
                <div className={style.habilidades}>
                <div className={style.habilidad}>
                <span>{company.industryMain}</span>
                </div>
              </div>
                :
                <h5 className={style.habilityEmpty}>Actualiza tu perfil y describe tu industria principal.</h5>
              }
            </div>
            {/*carta de reviews*/}
            <div className={style.reviews}>
              
              <h3>Puntuación y Reseñas</h3>
              <h3>Puntuacion: Estrellas</h3>
              <h4>Aquí podrá ver los comentarios de parte de los talentos que has contratado.</h4>
            </div>
          </div>
          <div className={style.divDerecho}>
            {/*carta de proyectos*/}
            <div className={style.proyectosCard}>
              <div className={style.textoProyectos}>
                <h3>Datos</h3>
              
                  <p className={style.dato}> <span className={style.datoTitle}>Fecha de registro: </span> {company?.creationDate ?  <span className={style.valueInput}>{company.creationDate}</span>  : <span className={style.value}> Pendiente de actualizar.</span>}
                  </p>
                  <p className={style.dato}> <span className={style.datoTitle}>Ubicación: </span> {company?.country ?  <span className={style.valueInput}>{company.country}</span>  : <span className={style.value}> Pendiente de actualizar.</span>}
                  </p>
                  <p className={style.dato}> <span className={style.datoTitle}>Plan actual: </span> {company?.plan ?  <span className={style.valueInput}>{company.plan}</span>  : <span className={style.value}> Pendiente de actualizar.</span>}
                  </p>
              </div>
            </div>
            {/*Sobre nosotros*/}
            <div className={style.trabajosPostulados}>
              <h3 className={style.tituloTrabajos}>Sobre Nosotros</h3>
              <p className={style.textoTrab}>
                {company?.description ? company.description : <span className={style.value}> Pendiente de actualizar.</span> 
                }
              </p>
            </div>
            {/*carta de contacto*/}
            <div className={style.cardContactos}>
              <div className={style.contactos}>
                <h2>Contactos</h2>
              </div>
              <div className={style.listaContactos}>
                <p>
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
                  
                  {company?.phoneNumber ?<span className={style.valueContact}>{company.phoneNumber?.join(", ")}</span>
                    : <span className={style.valueContact}>xxx-xxx-xxxx</span>}
                </p>
                <p>
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
                  {company.facebook ? <span className={style.valueContact}>{company.facebook}</span> : <span className={style.valueContact}>usuario_facebook</span>}
                </p>
                <p>
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
                  {company.email ? <span className={style.valueContact}>{company.email}</span> : <span className={style.valueContact}>ejemplo@gmail.com</span>}
                </p>
                <p>
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
                  {company.instagram ? <span className={style.valueContact}>{company.instagram}</span> : <span className={style.valueContact}>usuario_instagram</span>}
                </p>
                <p>
                  <svg className={style.svgIconoInst} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="2 0 55 50">
    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
</svg>
                  {company.linkedin ? <span className={style.valueContact}>{company.linkedin}</span> : <span className={style.valueContact}>usuario_linkedin</span>}
                </p>
                <p>
                  <svg
                    width="33"
                    height="38"
                    viewBox="0 0 70 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={style.svgIcono}
                  >
                    <path
                      d="M22.3097 60.9877C22.2222 60.9877 22.1056 61.046 22.0181 61.046C16.3597 58.246 11.7514 53.6085 8.92225 47.9502C8.92225 47.8627 8.98058 47.746 8.98058 47.6585C12.5389 48.7085 16.2139 49.496 19.8597 50.1085C20.5014 53.7835 21.2597 57.4293 22.3097 60.9877ZM61.0752 47.9793C58.1877 53.7835 53.3752 58.4793 47.5127 61.3085C48.621 57.6043 49.5543 53.871 50.1668 50.1085C53.8418 49.496 57.4585 48.7085 61.0168 47.6585C60.9877 47.7752 61.0752 47.8918 61.0752 47.9793ZM61.3085 22.4877C57.6335 21.3793 53.9293 20.4752 50.1668 19.8335C49.5543 16.071 48.6502 12.3377 47.5127 8.69183C53.5502 11.5793 58.421 16.4502 61.3085 22.4877ZM22.3127 9.00975C21.2627 12.5681 20.5043 16.1847 19.8918 19.8597C16.1293 20.4431 12.396 21.3764 8.69183 22.4847C11.521 16.6222 16.2168 11.8097 22.021 8.92225C22.1085 8.92225 22.2252 9.00975 22.3127 9.00975ZM45.1852 19.221C38.4185 18.4627 31.5935 18.4627 24.8268 19.221C25.556 15.2252 26.4893 11.2293 27.8018 7.37933C27.8602 7.146 27.831 6.971 27.8602 6.73766C30.1643 6.1835 32.5268 5.8335 35.006 5.8335C37.456 5.8335 39.8477 6.1835 42.1227 6.73766C42.1518 6.971 42.1518 7.146 42.2102 7.37933C43.5227 11.2585 44.456 15.2252 45.1852 19.221ZM19.221 45.1852C15.196 44.456 11.2293 43.5227 7.37933 42.2102C7.146 42.1518 6.971 42.181 6.73766 42.1518C6.1835 39.8477 5.8335 37.4852 5.8335 35.006C5.8335 32.556 6.1835 30.1643 6.73766 27.8893C6.971 27.8602 7.146 27.8602 7.37933 27.8018C11.2585 26.5185 15.196 25.556 19.221 24.8268C18.4918 31.5935 18.4918 38.4185 19.221 45.1852ZM64.1668 35.006C64.1668 37.4852 63.8168 39.8477 63.2627 42.1518C63.0293 42.181 62.8543 42.1518 62.621 42.2102C58.7418 43.4935 54.7752 44.456 50.7793 45.1852C51.5377 38.4185 51.5377 31.5935 50.7793 24.8268C54.7752 25.556 58.771 26.4893 62.621 27.8018C62.8543 27.8602 63.0293 27.8893 63.2627 27.8893C63.8168 30.1935 64.1668 32.556 64.1668 35.006ZM45.1852 50.7793C44.456 54.8043 43.5227 58.771 42.2102 62.621C42.1518 62.8543 42.1518 63.0293 42.1227 63.2627C39.8477 63.8168 37.456 64.1668 35.006 64.1668C32.5268 64.1668 30.1643 63.8168 27.8602 63.2627C27.831 63.0293 27.8602 62.8543 27.8018 62.621C26.5335 58.7485 25.5394 54.7915 24.8268 50.7793C28.2102 51.1585 31.5935 51.421 35.006 51.421C38.4185 51.421 41.831 51.1585 45.1852 50.7793ZM45.9756 45.9756C38.6876 46.8959 31.3127 46.8959 24.0247 45.9756C23.1045 38.6876 23.1045 31.3128 24.0247 24.0247C31.3128 23.1045 38.6876 23.1045 45.9756 24.0247C46.8959 31.3127 46.8959 38.6876 45.9756 45.9756Z"
                      fill="#324844"
                    />
                  </svg>
                  {company.domain ? <span className={style.valueContact}>{company.domain}</span> : <span className={style.valueContact}>www.ejemplo.com</span>}
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default profileCompany;
