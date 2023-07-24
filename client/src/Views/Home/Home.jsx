//Nos vamos a manejar con el scroll completo, en la navbar van a haber botones que te redirigen a distintas posiciones de la pagina
//Por ejemplo, servicios, contacto, redes

import NavBarLateral from '../../Components/NavBarLateral/NavBarLateral.jsx';
import HomeProfileCard from '../../Components/HomeProfileCard/HomeProfileCard.jsx';
import HomeEventsCard from '../../Components/HomeEventsCard/HomeEventsCard.jsx';
import HomeItemList from '../../Components/HomeItemList/HomeItemList.jsx';
import ChartsComponent from '../../Components/ChartsComponent/ChartsComponent.jsx';
import SolicitudesDeEmpresas from '../../Components/SolicitudesDeEmpresas/SolicitudesDeEmpresas.jsx';
import styles from './Home.module.css';

const Home = (props) => {
  return (
    <>
      <NavBarLateral />
      <div className={styles.container}>
        <HomeProfileCard />
        <HomeEventsCard title={
          props.type === "talent" ? "Publicaciones Recientes" : "Mis Publicaciones"
        }/>
        <HomeEventsCard title={
          props.type === "talent" ? "Publicaciones de Interes" : "Contactados"
        }/>
        <HomeItemList title={
          props.type === "talent" ? "Tus Postulaciones" : "Tus Favoritos"
        }/>
        {
          props.type === "talent" ? 
          <SolicitudesDeEmpresas /> : <ChartsComponent />
        }
        
        
      </div>
    </>
  );
};

export default Home;