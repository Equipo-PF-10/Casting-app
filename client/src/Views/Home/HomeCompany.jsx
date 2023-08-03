import { useEffect} from "react";
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
},[dispatch])


return (
    <div className={styles.container}>
        <NavBarLateral/>
        <article className={styles.content}>
            <SearchBarCompany/>
            <section className={styles.grid}>
                <article className={styles.gridItem1}>
                    <User />
                    <HomeItemList/>
                    <div className={styles.favs}>
                        {/* ENVIAR POSTULANTES FAVORITOS POR PROPS */}
                    </div>
                </article>
                <article className={styles.gridItem2}>
                    <div>
                        <HomeEventsCard 
                            title={"Eventos publicados"}
                            events={allEvents}
                            url={"company/search"}
                            />
                    </div>
                    <div>
                        <h3>Metricas de tu Empresa</h3>
                        <ChartsComponent/>
                    </div>
                </article>
            </section>
        </article>
    </div>
    )
}