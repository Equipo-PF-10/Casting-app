import style from "./Search.module.css";
import { filterByTalent, filterByGender } from "../../../redux/actions";
import {useDispatch} from "react-redux";
import { getAllTalents } from "../../../redux/actions";

const Search = (props) => {

  const {ubication, setCurrentPage} = props;

  const dispatch = useDispatch()
  

  // Habilidades

  const optionshabilityRequired = [
    { value: 'Actuación', label: 'Actuación' },
    { value: 'Animador/a', label: 'Animador/a' },
    { value: 'Bailarín/a', label: 'Bailarín/a' },
    { value: 'Blogger', label: 'Blogger' },
    { value: 'Cantante', label: 'Cantante' },
    { value: 'DJ', label: 'DJ' },
    { value: 'Influencer', label: 'Influencer' },
    { value: 'Locutor/a', label: 'Locutor/a' },
    { value: 'Mago/a', label: 'Mago/a' },
    { value: 'Músico/a', label: 'Músico/a' },
    { value: 'Modelo', label: 'Modelo' },
    { value: 'Presentador/a', label: 'Presentador/a' },
    { value: 'Promotor/a', label: 'Promotor/a' },
  ];

  const optionTags = optionshabilityRequired.map((item) => {
    return <option value={item.value} key={item.value}>{item.label}</option>;
  });

  // Ubicaciones
  
  const handleHabilities = (event) => {
    dispatch(filterByTalent(event.target.value))
    setCurrentPage(1)
  }

  const locationTags = ubication.map((item, index) => (
    <option key={index} value={item}>{item}</option>
  ))

  // Género

  const handleGenders = (event) => {
    dispatch(filterByGender(event.target.value))
    setCurrentPage(1)
  }


  //Recargar Postulantes, ----Aplicarlo con los postulantes (No los talentos)
  const handleClick = (event) => {
    dispatch(getAllTalents());
  }

  return (
    <div className={style.containerGe}>
      {/*INPUT*/}
      <div className={style.searchI}>
        <input
          type="text"
          placeholder="Buscar talentos.."
          className={style.inputTalent}
        />
        <button className={style.lupaButton}>
          <svg className={style.lupa} aria-hidden="true" viewBox="0 0 24 24">
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
        </button>
      </div>
      {/*selects filtros y ordenamientos*/}
      <select className={style.selectFilter}  onChange={handleHabilities}>
        <option value="Todos">Talentos</option>
        {optionTags}
      </select>
      <select className={style.selectFilter}>
        <option value="">Edad</option>
      </select>
      <select className={style.selectFilter}  onChange={handleGenders}>
        <option value="Todos">Generos</option>
        <option value="Masculino">Masculino</option>
        <option value="Femenino">Femenino</option>
        <option value="Otro">Otro</option>
      </select>
      <select className={style.selectFilter}>
        <option value="">Ubicación</option>
        <option value="Todos">Todas</option>
        {locationTags}
      </select>
      {/*BOTON RECARGAR*/}
      <div>
        <button
          onClick={(event) => {
            handleClick(event);
          }}
          className={style.recargar}
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
          Recargar
        </button>
      </div>
    </div>
  );
};

export default Search;
