import React, {useEffect, useState} from 'react'
import style from './SearchComp.module.css'
import {useDispatch} from 'react-redux';
import { filterByTalent, getAllEvents, getEventsByName} from '../../../redux/actions';

const SearchComp=(props) => {
  //console.log(props);
  const { ubication, setCurrentPage } = props;
  const dispatch = useDispatch();

  //buscar por nombre
  const [name, setName] = useState("");

  //busqueda por nombre
  const handleInputChange = (event) => {
    setName(event.target.value);
    //console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    //console.log(name); //nombre submitiedo
    event.preventDefault();
    dispatch(getEventsByName(name));
    setName("");
  };

  //recargar postulantes
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getAllEvents());
  };

  // Habilidades
  const optionshabilityRequired = [
    { value: "Actuación", label: "Actuación" },
    { value: "Animador/a", label: "Animador/a" },
    { value: "Bailarín/a", label: "Bailarín/a" },
    { value: "Blogger", label: "Blogger" },
    { value: "Cantante", label: "Cantante" },
    { value: "DJ", label: "DJ" },
    { value: "Influencer", label: "Influencer" },
    { value: "Locutor/a", label: "Locutor/a" },
    { value: "Mago/a", label: "Mago/a" },
    { value: "Músico/a", label: "Músico/a" },
    { value: "Modelo", label: "Modelo" },
    { value: "Presentador/a", label: "Presentador/a" },
    { value: "Promotor/a", label: "Promotor/a" },
  ];

  const optionTags = optionshabilityRequired.map((item) => {
    return (
      <option value={item.value} key={item.value}>
        {item.label}
      </option>
    );
  });

  // Ubicaciones
  const handleHabilities = (event) => {
    dispatch(filterByTalent(event.target.value));
    setCurrentPage(1);
  };

  const locationTags = ubication.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  return (
    <div className={style.containerGe}>
      {/*INPUT*/}
      <div className={style.searchI}>
        <input
          type="text"
          placeholder="Buscar eventos.."
          name="search"
          id="search"
          value={name}
          onChange={(event) => handleInputChange(event)}
          className={style.inputTalent}
        />
        <button
          type="submit"
          className={style.lupaButton}
          onClick={(event) => handleSubmit(event)}
        >
          <svg className={style.lupa} aria-hidden="true" viewBox="0 0 24 24">
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
        </button>
      </div>
      {/*selects filtros y ordenamientos*/}
      <select className={style.selectFilter}>
        <option value="">Eventos</option>
        {optionTags}
      </select>
      <select className={style.selectFilter}>
        <option defaultChecked value="">
          Ubicación
        </option>
        <option value="Todos">Todas</option>
        {locationTags}
      </select>
      {/*BOTON RECARGAR*/}
      <div>
        <button
          onClick={(e) => {
            handleClick(e);
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
}

export default SearchComp
