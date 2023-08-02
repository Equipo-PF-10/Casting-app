import React, { useEffect} from "react";
import styles from "./HomeCompany.module.css";
import NavBarLateral from "../../Components/NavBarLateral/NavBarLateral";
import SearchBarCompany from "../../Components/HomeCompanyComponents/SearchBarCompany";
import User from "../../Components/HomeCompanyComponents/User";
import HomeEventsCard from "../../Components/HomeEventsCard/HomeEventsCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllEvents } from "../../redux/actions";
import HomeItemList from "../../Components/HomeItemList/HomeItemList";
import ChartsComponent from "../../Components/ChartsComponent/ChartsComponent";

export default function HomeCompany () {
const dispatch = useDispatch();
const allEvents = useSelector((state) => state.allEvents);

useEffect(() => {
    dispatch(getAllEvents());
},[])

return (
    <div className={styles.container}>
        <div className={styles.navbarLat}> <NavBarLateral/></div>
        <div className={styles.view}>
            <div className={styles.navBar}> <SearchBarCompany/></div>
            <div className={styles.middleSection}>
                <div className={styles.middleSectionUser}>
                    <User />
                </div>
                <div className={styles.middleSectionEvents}>
                    <HomeEventsCard 
                    title={"Eventos publicados"}
                    events={allEvents}
                    url={"company/search"}
                    />
                </div>
            </div>
            <div className={styles.bottomSection}> 
            <div className={styles.favs}>
                {/* ENVIAR POSTULANTES FAVORITOS POR PROPS */}
                <HomeItemList/>
            </div>
            <div className={styles.metricas}>
                <hr />
                <h2>Metricas de tu Empresa</h2>
                <ChartsComponent/>
            </div>
            </div>
        </div>
        
    </div>
    )
}