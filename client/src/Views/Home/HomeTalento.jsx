import NavBarLateral from "../../Components/NavBarLateral/NavBarLateral";
import Styles from "./Talent.module.css";
import {useDispatch, useSelector} from "react-redux"
import { get_talent_by_id } from "../../redux/actions";
import LogoutButton from "../../Components/LogoutButton/LogoutButton";
import { NavLink } from "react-router-dom";

const HomeTalento = () => {

    const dispatch = useDispatch()

    // UserInfo

    const userId = localStorage.getItem("user_id");

    dispatch(get_talent_by_id(userId));

    const talent = useSelector((state) => state. talentById);

    // Eventos

    const allEvents = useSelector((state) => state.allEvents)
    
    const events = allEvents.map((evento, index) => (
        <li key={index}>
            <h2>{evento.name}</h2>
            <h5>{evento.habilityRequired}</h5>
            <p>{evento.shortDescription}</p>
        </li>
    )) 

    return (
        <div className={Styles.div}>
            <NavBarLateral/>
            <section className={Styles.btnCont}>
                <LogoutButton/>
            </section>
            <section className={Styles.section}>
                <article className={Styles.container}>                                                       
                    <article className={Styles.card}>
                        <article  className={Styles.image}>
                            {talent.image ? <img src={talent.image} alt="Profile Picture"/> : 
                            <svg width="250" height="250" viewBox="0 0 187 187" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g filter="url(#filter0_d_497_36)">
                                                <g clipPath="url(#clip0_497_36)">
                                                <rect x="3" y="1" width="181" height="181" rx="90.5" fill="#F5F5F5"/>
                                                <rect x="57.2197" y="30.0244" width="72.5612" height="72.5612" rx="36.2806" fill="#4B31A1"/>
                                                <rect x="-42.3506" y="121.734" width="271.702" height="271.702" rx="135.851" fill="#4B31A1"/>
                                                </g>
                                                </g>
                                                <defs>
                                                <filter id="filter0_d_497_36" x="0.581292" y="0.193764" width="185.837" height="185.837" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                                <feMorphology radius="0.806236" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_497_36"/>
                                                <feOffset dy="1.61247"/>
                                                <feGaussianBlur stdDeviation="0.806236"/>
                                                <feComposite in2="hardAlpha" operator="out"/>
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_497_36"/>
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_497_36" result="shape"/>
                                                </filter>
                                                <clipPath id="clip0_497_36">
                                                <rect x="3" y="1" width="181" height="181" rx="90.5" fill="white"/>
                                                </clipPath>
                                                </defs>
                            </svg>} 
                        </article>
                        {talent.name ? <h2>{talent.name}</h2> : <h2>Nombre Apellido</h2>}
                    </article>
                    <article className={Styles.info}>
                        <h3>Empresas que te han contactado</h3>
                        <ul>
                            <NavLink to="/company/id" className={Styles.link}>
                                <li>
                                    Compañia 1
                                </li>
                            </NavLink>
                            <NavLink to="/company/id" className={Styles.link}>
                                <li>
                                    Compañia 2
                                </li>
                            </NavLink>
                            <NavLink to="/company/id" className={Styles.link}>
                                <li>
                                    Compañia 3
                                </li>
                            </NavLink>
                        </ul>
                    </article>
                    <article className={Styles.info}>
                        <h3>Tus Eventos</h3>
                        <ul>
                            <NavLink to="/event/id" className={Styles.link}>
                                <li>
                                    Evento 1
                                </li>
                            </NavLink>
                            <NavLink to="/event/id" className={Styles.link}>
                                <li>
                                    Evento 2
                                </li>
                            </NavLink>
                            <NavLink to="/event/id" className={Styles.link}>
                                <li>
                                    Evento 3
                                </li>
                            </NavLink>
                        </ul>
                    </article>
                </article>
                <article className={Styles.eventos}>
                    <h1>Últimas publicaciones</h1>
                    <ul>
                        {events}
                    </ul>
                </article>
            </section>
        </div>
    )
}

export default HomeTalento