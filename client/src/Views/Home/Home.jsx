//Nos vamos a manejar con el scroll completo, en la navbar van a haber botones que te redirigen a distintas posiciones de la pagina
//Por ejemplo, servicios, contacto, redes

import NavBarLateral from '../../Components/NavBarLateral/NavBarLateral.jsx';
import HomeProfileCard from '../../Components/HomeProfileCard/HomeProfileCard.jsx';
import HomeEventsCard from '../../Components/HomeEventsCard/HomeEventsCard.jsx';
import HomeItemList from '../../Components/HomeItemList/HomeItemList.jsx';
import ChartsComponent from '../../Components/ChartsComponent/ChartsComponent.jsx';
import styles from './Home.module.css';

const Home = () => {
  return (
    <>
      <NavBarLateral />
      <div className={styles.container}>
        <HomeProfileCard />
        <HomeEventsCard title="Publicaciones Recientes"/>
        <HomeEventsCard title="Publicaciones de Interes"/>
        <HomeItemList />

        {/* <div className={styles.testSection}>
        <h2>Solicitudes de Empresas</h2>
        </div> */}

        <ChartsComponent />
      </div>
    </>
  );
};

export default Home;