//Nos vamos a manejar con el scroll completo, en la navbar van a haber botones que te redirigen a distintas posiciones de la pagina
//Por ejemplo, servicios, contacto, redes

import NavBarLateral from '../../Components/NavBarLateral/NavBarLateral.jsx';
import HomeProfileCard from '../../Components/HomeProfileCard/HomeProfileCard.jsx';
import HomeEventsCard from '../../Components/HomeEventsCard/HomeEventsCard.jsx';
import HomeItemList from '../../Components/HomeItemList/HomeItemList.jsx';
import ChartsComponent from '../../Components/ChartsComponent/ChartsComponent.jsx';
import SolicitudesDeEmpresas from '../../Components/SolicitudesDeEmpresas/SolicitudesDeEmpresas.jsx';
import { HomeSearchBar } from '../../Components/HomeSearchBar/HomeSearchBar.jsx';
import styles from './Home.module.css';
import { connect, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getAllEvents } from '../../redux/actions.js';
import { handleLogout } from '../Login/LocalStorageUserData.js';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const [user, setUser] = useState({});

  useEffect(() => {
    if(props.type === "talent") {
      axios(`http://localhost:3001/talents/${localStorage.getItem("id")}`).then(({ data }) => {
        setUser(data);
      });
    } else {
      axios(`http://localhost:3001/companies/${localStorage.getItem("id")}`).then(({ data }) => {
        setUser(data);
      });
    }
    dispatch(getAllEvents());
  }, []);

  return (
    <div className={styles.background}>
      <NavBarLateral />
      <HomeSearchBar
        url={props.type === "talent" ? "model/search" : "company/search"}
      />
      <div className={styles.container}>
        {props.type === "talent" ?
          <HomeProfileCard
          image={user.image}
          name={user.name}
          hability={user.hability ? user.hability.join(" ") : null}
          /> :
          <HomeProfileCard
          image={user.logo}
          name={user.name ? user.name.split("@")[0] :  null}
          hability={user.industryMain}
          />
        }
        
        <HomeEventsCard
          title={props.type === "talent" ? "Publicaciones Recientes" : "Mis Publicaciones"}
          events={props.allEvents}
          url={props.type === "talent" ? "model/search" : "company/search"}
          />
        <HomeEventsCard
          title={props.type === "talent" ? "Publicaciones de Interes" : "Contactados"}
          events={props.allEvents ? props.allEvents.filter(event => {
            if(user.hability) {
              for (let i=0; i<event.habilityRequired.length; i++) {
                return user.hability.includes(event.habilityRequired[i])
              }           
            }
            
          })
        :null}
        />
        <HomeItemList title={
          props.type === "talent" ? "Tus Postulaciones" : "Tus Favoritos"
        }/>
        {
          props.type === "talent" ? 
          <SolicitudesDeEmpresas /> : <ChartsComponent />
        }
        
        <button onClick={() => {
          handleLogout();
          navigate("/");
        }}>Logout</button>
        
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
     idUser: state.idUser,
     allEvents: state.allEvents
  }
}

export default connect(mapStateToProps, null)(Home);