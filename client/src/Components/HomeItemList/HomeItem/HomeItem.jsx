import styles from "./HomeItem.module.css";
import { useDispatch } from "react-redux";

const HomeItem = (props) => {
  const dispatch = useDispatch();
  
  const handleClickDelete = () => {
    //dispatch(delete_favorite_postulant()) verificar si le paso el id del postulante
  }
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h3 className={styles.text}>Nombre</h3>
        <h3 className={styles.text}>Orientacion Artistica</h3>
        {/* {props.title} */}
      </div>
      <div className={styles.options}>

      
      <div className={styles.mail}>
        {/* AGREGAR FUNCIONALIDAD DE ENVIAR UN MAIL, MOSTRAR MODADL DE CONFIRMACION */}
        <button>
          <svg
            width="30"
            height="30"
            viewBox="0 0 63 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.80658 0.043457H55.5638C57.4356 0.043457 59.1384 0.825224 60.3713 2.08333L60.4427 2.16167C61.6329 3.41344 62.3696 5.11941 62.3696 6.98995V39.0543C62.3696 40.9652 61.6027 42.7036 60.3713 43.9601C59.1384 45.2182 57.4356 46 55.5638 46H6.80658C4.93473 46 3.23192 45.2182 1.99901 43.9601L1.92768 43.881C0.736642 42.6284 0 40.9232 0 39.0543V6.98995C0 5.07905 0.766108 3.34144 1.99901 2.08333C3.23192 0.825224 4.93473 0.043457 6.80658 0.043457ZM4.40357 3.50523L31.1848 25.2824L57.966 3.50523C57.2852 3.01386 56.4555 2.72425 55.5638 2.72425H6.80658C5.91485 2.72425 5.08516 3.01306 4.40357 3.50523ZM59.5316 5.65271L32.0013 28.0391C31.7671 28.2298 31.488 28.324 31.2104 28.3295H31.1654C30.8824 28.324 30.6032 28.2298 30.369 28.0391L2.83879 5.65351C2.70154 6.07446 2.6271 6.5239 2.6271 6.98995V39.0543C2.6271 40.2016 3.07374 41.2453 3.79642 42.0096L3.85535 42.0658C4.61293 42.8389 5.65819 43.3192 6.80658 43.3192H55.5638C56.7122 43.3192 57.7574 42.8389 58.515 42.0658C59.271 41.2943 59.7425 40.2269 59.7425 39.0543V6.98995C59.7425 6.5231 59.668 6.07367 59.5316 5.65271Z"
              fill="#324844"
            />
          </svg>
        </button>
      </div>
      <div className={styles.delete}>
        <button onClick={handleClickDelete}>
          <h2>X</h2>
        </button>
      </div>
      </div>
    </div>
  );
};

export default HomeItem;


/*

mainRouter.use("/companies/favorites", talentsFavoriteRouter);
? Esta ruta es para que una empresa pueda borrar talentos favoritos.
companyRouter.delete("/", handleDeleteFavoriteTalent);

*/