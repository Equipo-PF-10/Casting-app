import NavBarLateral from "../../Components/NavBarLateral/NavBarLateral";
import Styles from "./Talent.module.css";
import LogoutButton from "../../Components/LogoutButton/LogoutButton";
import { NavLink } from "react-router-dom";
import axios from "axios";
import {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { get_event_by_id_event } from "../../redux/actions";

const HomeTalento = () => {

    // UserInfo
    
    const userId = localStorage.getItem("user_id");

    const [talent, setTalent] = useState({hability: []})

    useEffect(() => {
        const getTalent = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/talents/${userId}`)
                const data = response.data;
                setTalent(data)
            } catch (error) {
                console.log(error);
            }
        }
        getTalent();
    },[userId])

    // Dispatch para eventos

    const dispatch = useDispatch()

  const eventClick = async (eventId) => {
    dispatch(get_event_by_id_event(eventId))
  }

    // Todos los Eventos

    const [allEvents, setAllEvents] = useState([])

    useEffect(() => {
        const getAllEvents = async () => {
            try {
                const response = await axios.get("http://localhost:3001/events");
                const data = response.data;
                setAllEvents(data)
            } catch (error) {
                console.log(error);
            }
        }
        getAllEvents()
    }, [])

    
    const Events = allEvents.map((evento) => (
        <NavLink key={evento.id} onClick={() => eventClick(evento.id)} className={Styles.link} to="/model/search/">
            <li>
                <h2>{evento.name}</h2>
                <p className={Styles.shortDescription}>{evento.shortDescription}</p>
                <p>{evento.habilityRequired.join(", ")}</p>
            </li>
        </NavLink>
    ))

    // Eventos filtrados por habilidad principal

    const [filterEvents, setFilterEvents] = useState([]);

    useEffect(() => {
        if(talent && talent.hability && talent.hability.length !== 0){        

            const events4U = talent.hability[0];
    
            const eventsURL = `http://localhost:3001/events/habilityRequired?hability=${events4U}`
    
            const filteredEvents = async () => {
                try {
                    const response = await axios.get(eventsURL);
                    const data = response.data;
                    setFilterEvents(data);
                } catch (error) {
                    console.log(`No hay eventos para ti`);
                }
            }
            filteredEvents();}
    
    },[talent])

    const eventsPerHability = () => {
        if(filterEvents && filterEvents.length !== 0){
        const FilterEvents = filterEvents.map((evento) => (
            <NavLink key={evento.id} className={Styles.link} to="/model/search/"  onClick={() => eventClick(evento.id)}>
            <li>
                <h2>{evento.name}</h2>
                <p>{evento.shortDescription}</p>
                <p>{evento.habilityRequired.join(", ")}</p>
            </li>
        </NavLink>
        ))
        return FilterEvents
    } else {
        const FilterEvents = (
            <h3>No hay eventos para ti</h3>
        )
        return FilterEvents
    }

    }

    const [showHabilityEvents, setShowHabilityEvents] = useState(true);

    const handleMoveLeft = () => {
      setShowHabilityEvents(true);
    };
  
    const handleMoveRight = () => {
      setShowHabilityEvents(false);
    };

    //? Eventos Aplicados

    const [events, setEvents] = useState([])

    const [status, setStatus] = useState("")

    const URLAppliedEvents = `http://localhost:3001/applied/talent/${userId}`;

    useEffect(() => {
        const getEvents = async () => {
          try {
            const response = await axios.get(URLAppliedEvents);
            const data = response.data;
            const eventsIds = data.map(item => item.EventId);
            setEvents(eventsIds);
            const status = data.map(item => item.status);
            setStatus(status)
          } catch (error) {
            console.error('Error al obtener los eventos:', error);
          }
        };
        getEvents();
      }, [URLAppliedEvents]);

    //! Encontrar Eventos Aplicados

    const [eventData, setEventData] = useState([]);

    useEffect(() => {
       
        const findEventById = async (id) => {
            try {
              const response = await axios.get(`http://localhost:3001/events/eventid/${id}`);
              return response.data;
            } catch (error) {
              console.log(error);
              return null;
            }
          };

          const fetchEventsData = async () => {
            try {
              const eventPromises = events.map((eventId) => findEventById(eventId));
              const eventResponses = await Promise.all(eventPromises);
              setEventData(eventResponses);
            } catch (error) {
              console.log(error);
            }
          };
      
          fetchEventsData();
    },[events])

    useEffect

    const eventInfo = eventData.map((event,index) => (
        <NavLink key={event.id} className={Styles.link}>
            <li className={Styles.aplication}>
                <h4>{event.name}</h4>
                <h4>{status[index]}</h4>
            </li>
        </NavLink>
    ))

    // Compañias que te han contactado 

    const [contact, setContact] = useState([]);
    const [companies, setCompanies] = useState([]);
    
    const URLContact = `http://localhost:3001/applied/contactedForNameCompany?TalentId=${userId}`;
    
    useEffect(() => {
      const fetchContactData = async () => {
        try {
          const response = await axios.get(URLContact);
          const data = response.data;
          setContact(data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchContactData();
    }, [URLContact]);
    
    useEffect(() => {
      const fetchCompaniesInfo = async () => {
        try {
          if (contact.length === 0) return;
    
          const companiesData = await Promise.all(
            contact.map(async (companyName) => {
              const response = await axios.get(
                `http://localhost:3001/companies/email/${companyName}`
              );
              return response.data;
            })
          );
          setCompanies(companiesData);
        } catch (error) {
          console.log(error);
        }
      };
      fetchCompaniesInfo();
    }, [contact]);

    const companyInfo = () => {
        const flattenedCompanies = companies.flat(); 
      
        if (flattenedCompanies.length <= 0) {
          return (
            <h4>En esta sección se mostrarán las compañias que te han contactado</h4>
          );
        }
      
        return flattenedCompanies.map((company, index) => (
          <NavLink key={index} to={`/company/profile/${company.id}`} className={Styles.link1}>
            <li className={Styles.aplication2}>
                <h4>{company.name}</h4>
            </li>
          </NavLink>
        ));
      };


    return (
        <div className={Styles.div}>
            <NavBarLateral/>
            <section className={Styles.btnCont}>
                <LogoutButton/>
            </section>
            <section className={Styles.section}>
                <article className={Styles.container}>     
                <NavLink to={`/model/profile/${userId}`}> 
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
                </NavLink>                                                  

                    <article className={Styles.info}>
                        <h3 className={Styles.title2}>Empresas que te han contactado</h3>
                        <ul className={Styles.info}>
                            {companyInfo()}
                        </ul>
                    </article>
                    <article className={Styles.info}>
                        <h3>Tus Eventos</h3>
                        <ul className={Styles.yourEvents}>
                            {eventInfo.length > 0 ? eventInfo : <h4 className={Styles.infoCard}>En esta sección se mostrarán tus postulaciones activas</h4>}
                        </ul>
                    </article>
                </article>
                <article className={Styles.eventos} >
                    <button onClick={handleMoveLeft}>&larr; </button>
                    <div style={{ display: showHabilityEvents ? 'block' : 'none'}}>
                        <h2 className={Styles.title}>Últimas publicaciones para ti</h2>
                        <ul className={Styles.eventList}>
                        {eventsPerHability()}
                        </ul>
                    </div>
                    <div style={{ display: !showHabilityEvents ? 'block' : 'none'}}>
                        <h1>Últimas publicaciones </h1>
                        <ul className={Styles.eventList}>
                        {Events}
                        </ul>
                    </div>
                    <button onClick={handleMoveRight}>&rarr;</button>
                </article>

            </section>
        </div>
    )
}
export default HomeTalento