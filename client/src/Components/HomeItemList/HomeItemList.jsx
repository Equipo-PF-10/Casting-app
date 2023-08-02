import styles from "./HomeItemList.module.css";
import HomeItem from "./HomeItem/HomeItem.jsx";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_favorite_postulant_by_name } from "../../redux/actions";

const HomeItemList = (props) => {
  const dispatch = useDispatch();
  //const allFavoritePostulants = useSelector((state) => state.allFavoritePostulants);
  //const allFavoritePostulantsFiltered = useSelector((state) => state.allFavoritePostulantsFiltered);
  //const filtersFavoritePostulants = useSelector((state) => state.filtersFavoritePostulants);
  const [input, setInput] = useState("");

  const handleChange = (event) => setInput(event.target.value);

  const handleClick = (event) => {
    //Despachar la action para buscar por nombre
    //dispatch(get_favorite_postulant_by_name(input));
  };

  /* ESPERAR LA RUTA Y PROBAR EN HOMECOMPANY
  useEffect(() => {
    get_all_favorite_postulant();
  },[])
  */

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h3>Postulantes Favoritos</h3>
      </div>
      <hr />
      <div className={styles.divisor}>
      <div className={styles.searchBarContainer}>
        <input
          value={input}
          onChange={handleChange}
          type="search"
          className={styles.input}
          placeholder="Ingrese un nombre..."
        />
        <button
          onClick={handleClick}
          className={styles.searchButton}
          disabled={!input.length}
        >
          Buscar
        </button>
        </div>
        {/*BOTON RECARGAR*/}
        <div>
          <button
            // onClick={(event) => {
            //   handleClick(event);
            // }}
            className={styles.recargar}
          >
            <svg
              viewBox="0 0 16 16"
              className="bi bi-arrow-repeat"
              fill="currentColor"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"></path>
              <path
                d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
                fillRule="evenodd"
              ></path>
            </svg>
            
          </button>
        </div>
      </div>
      <h1 className={styles.text}>{props.title}</h1>
      {/* filtersFavoritePostulants ? <HomeItem allFavoritePostulantsFiltered={allFavoritePostulantsFiltered} : <HomeItem allFavoritePostulants={allFavoritePostulants} /> */}
      <HomeItem title="Title" />
      <HomeItem title="Title" />
      <HomeItem title="Title" />
      <HomeItem title="Title" />
      <HomeItem title="Title" />
      <HomeItem title="Title" />
    </div>
  );
};

export default HomeItemList;

/*
mainRouter.use("/companies/favorites", talentsFavoriteRouter);
? Esta ruta es para encontrar todos los talentos favoritos de una empresa por Id. También se puede buscar por name mediante query.
companyRouter.get("/:id", handleGetFavoritesTalentsById);


*/
