import { useDispatch, useSelector } from "react-redux";
import "./AddsModule.css";
import { useEffect } from "react";
import { getEventsPremium } from "../../redux/actions";

function Adds() {
  const dispatch = useDispatch();
  const eventsPr = useSelector((state) => state.eventsPremium);
  //console.log(eventsPr);

  useEffect(() => {
    dispatch(getEventsPremium());
  },[dispatch]);
  

  return (
    <>
      {eventsPr.length > 0 &&
        eventsPr?.map((e) => {
          return (
            <div className="card-container">
              <div className="card-img">
                <img src={e.image} alt="imagen del evento" />
              </div>
              <div className="card-info">
                <p className="text-title">{e.name}</p>
                <p className="text-body">{e.shortDescription}</p>
              </div>
              <div className="card-footer">
                <label className="talento-label">{e.habilityRequired.join(', ')}</label>
              </div>
              <div className="boton-postulate">
                <button className="talento-button">Postulate</button>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default Adds;
