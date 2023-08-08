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
  get_all_postulants_contacted_by_id,
  clear_message_plan_updated,
  message_hired_or_refused_talents,
} from "../../redux/actions";
import HomeItemList from "../../Components/HomeItemList/HomeItemList";
import HomeContactos from "../../Components/HomeCompanyComponents/HomeContactados/HomeContactos";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function HomeCompany() {
  const dispatch = useDispatch();
  const id_company = localStorage.getItem("user_id");
  const messagePlanUpdated = useSelector((state) => state.messagePlanUpdated);
  const eventDetail=useSelector((state) => state.eventDetail);
  const allPostulantsContacted = useSelector((state) => state.allPostulantsContacted);
  const allFavoritePostulants = useSelector((state) => state.allFavoritePostulants);
  const allFavoritePostulantsFiltered = useSelector((state) => state.allFavoritePostulantsFiltered);
  const hiredTalents = useSelector((state) => state.hiredTalents);
  const message_hired_or_refused = useSelector((state) => state.hiredOrRefusedMessage);

  const handleDelete = (id) => {
    dispatch(close_event_by_id(id, id_company));
    dispatch(get_event_by_id(id_company));
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
  
    useEffect(() => {
        dispatch(get_all_postulants_contacted_by_id(id_company));
    },[dispatch])
  
  
  let message_success_toastify = "¡Se ha actualizado su plan con éxito!";
  //Mostrar mensaje cuando se actualiza un plan correctamente
  let currentToastIdSuccess = null;
  const mensaje_success_Toast = () => {
    if (currentToastIdSuccess) {
      toast.update(currentToastIdSuccess, {
        render: message_success_toastify,
        autoClose: 5000,
      });
    } else {
      currentToastIdSuccess = toast.success(message_success_toastify, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        toastId: "custom-toast-id",
        style: {
          width: "500px",
        },
      });
    }
    // const timeoutId = setTimeout(() => {
    //   dispatch(clear_message_plan_updated(""));
    //  }, 5000);
  };


  //Mostrar mensaje cuando se actualiza un plan correctamente
  let currentToastIdSuccessContacted = null;
  const mensaje_success_Toast_contacted = () => {
    if (currentToastIdSuccessContacted) {
      toast.update(currentToastIdSuccessContacted, {
        render: message_hired_or_refused,
        autoClose: 5000,
      });
    } else {
      currentToastIdSuccessContacted = toast.success(message_hired_or_refused, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        toastId: "custom-toast-id",
        style: {
          width: "500px",
        },
      });
    }
  };

  
    if(messagePlanUpdated === "PRUEBA GRATIS" || messagePlanUpdated === "PREMIUM" || messagePlanUpdated === "BASICO") {
      mensaje_success_Toast();
    } 

    useEffect(()=>{
      return ()=>{
        dispatch(clear_message_plan_updated(""));
      }
    })

  if(message_hired_or_refused === "¡Se ha contratado al postulante con éxito!"){
    mensaje_success_Toast_contacted();
    dispatch(message_hired_or_refused_talents(""));
  }

  if(message_hired_or_refused === "¡Se ha rechazado al postulante con éxito!"){
    mensaje_success_Toast_contacted();
    dispatch(message_hired_or_refused_talents(""));
  }
  

  return (
    <div className={styles.container}>
      <NavBarLateral />
      <article className={styles.content}>
        <SearchBarCompany />
        <div>
          <ToastContainer />
        </div>
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
                eventDetail={eventDetail}
                title={"Postulantes Contactados"}
                contactedTalents={allPostulantsContacted}
                url={"model/profile"}
                id_company={id_company}
              />
            </div>
          </article>
        </section>
      </article>
    </div>
  );
}

