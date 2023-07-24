import { React, useEffect } from "react";
import Card from "./CompanyComponent/Card";
import style from "./CompanySearch.module.css";
import Search from "./CompanyComponent/Search";
import Detail from "./CompanyComponent/Detail";
import NavBarLateral from "../../Components/NavBarLateral/NavBarLateral";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get_event_by_id } from "../../redux/actions";



const CompanySearch = () => {
  const {id_event} = useParams();
  const dispatch = useDispatch();
  const event_by_id = useSelector((state) => state.Detail);  ////

  //Limpia el estado global antes de desmontarse el componente (PENDIENTE)
  useEffect(() => {
    dispatch(get_event_by_id(id_event));
    //return ()=>{dispatch(clearDetail())}
  }, [dispatch, id_event]);


  return (
    <div className={style.containerG}>
      <div className={style.searchFil}>
        <Search />
      </div>
      <div className={style.secciones}>
        <div className={style.navLateral}>
          <NavBarLateral />
        </div>
        <div className={style.grid}>
          <div className={style.cards}>
            <Card />
          </div>
          <div className={style.cards}>
            <Card />
          </div>
          <div className={style.cards}>
            <Card />
          </div>
          <div className={style.cards}>
            <Card />
          </div>
          <div className={style.cards}>
            <Card />
          </div>
          <div className={style.cards}>
            <Card />
          </div>
          <div className={style.cards}>
            <Card />
          </div>
          <div className={style.cards}>
            <Card />
          </div>
          <div className={style.cards}>
            <Card />
          </div>
          <div className={style.cards}>
            <Card />
          </div>
          <div className={style.cards}>
            <Card />
          </div>
          <div className={style.cards}>
            <Card />
          </div>
          <div className={style.cards}>
            <Card />
          </div>
          <div className={style.cards}>
            <Card />
          </div>
          <div className={style.cards}>
            <Card />
          </div>
        </div>
        <div className={style.detailCard}>
          <Detail />
        </div>
      </div>
    </div>
  );
};

export default CompanySearch;
