import { useEffect } from "react";
import styles from "./HomeCompany.module.css";
import NavBarLateral from "../../Components/NavBarLateral/NavBarLateral";
import SearchBarCompany from "../../Components/HomeCompanyComponents/SearchBarCompany";
import User from "../../Components/HomeCompanyComponents/User";
import HomeEventsCard from "../../Components/HomeEventsCard/HomeEventsCard";
import { useDispatch, useSelector } from "react-redux";
import {
  close_event_by_id,
  getAllEvents,
  get_all_favorite_postulants,
  get_event_by_id,
} from "../../redux/actions";
import HomeItemList from "../../Components/HomeItemList/HomeItemList";
import HomeContactos from "../../Components/HomeCompanyComponents/HomeContactados/HomeContactos";

export default function HomeCompany() {
  const dispatch = useDispatch();
  const id_company = localStorage.getItem("user_id");
  //const allEvents = useSelector((state) => state.allEvents);
    const eventDetail=useSelector((state) => state.eventDetail);
    //const companyId = localStorage.getItem("user_id");
  //console.log(eventDetail);
  const allFavoritePostulants = useSelector(
    (state) => state.allFavoritePostulants
  );
  const allFavoritePostulantsFiltered = useSelector(
    (state) => state.allFavoritePostulantsFiltered
  );

  const handleDelete = (id) => {
    dispatch(close_event_by_id(id, id_company));
    dispatch(get_event_by_id(id_company));
    //console.log(allEvents);
  };

  //Trae todos los eventos creados
  useEffect(() => {
    dispatch(get_event_by_id(id_company));
  }, [dispatch]);

  //Trae todos los talentos favoritos
  useEffect(() => {
    dispatch(get_all_favorite_postulants(id_company));
  }, [dispatch]);

  //Traer todos los talentos contactos
  /*
    useEffect(() => {
        dispatch(get_all_contacted_talents_by_id(id_company));
    },[dispatch])
*/
  return (
    <div className={styles.container}>
      <NavBarLateral />
      <article className={styles.content}>
        <SearchBarCompany />
        <section className={styles.grid}>
          <article className={styles.gridItem1}>
            <User />
            <HomeItemList
              allFavoritePostulants={allFavoritePostulants}
              allFavoritePostulantsFiltered={allFavoritePostulantsFiltered}
              id_company={id_company}
            />
          </article>
          <article className={styles.gridItem2}>
            <div>
              <HomeEventsCard
                title={"Eventos Publicados"}
                eventDetail={eventDetail}
                url={"company/search"}
                handleDelete={handleDelete}
              />
            </div>
            <div className={styles.contactados}>
              <HomeContactos
                title={"Postulantes Contactados"}
                // contactedTalents={contactedTalents}
                url={"model/profile"}
              />
            </div>
          </article>
        </section>
      </article>
    </div>
  );
}

/*
mainRouter.use("/companies/favorites", talentsFavoriteRouter);


? Esta ruta es para encontrar todos los talentos favoritos de una empresa por Id. También se puede buscar por name mediante query.
companyRouter.get("/:id", handleGetFavoritesTalentsById);
*/
