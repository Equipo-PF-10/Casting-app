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
  }

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
        <div className={styles.searchBarContainer}>
                <input value={input} onChange={handleChange} type='search' className={styles.input} placeholder="Ingrese un nombre..." />
                <button onClick={handleClick} className={styles.searchButton} disabled={!input.length}>
                    Buscar
                </button>
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