import style from "./Card.module.css";
import { useDispatch } from "react-redux";
import { send_id_of_card } from "../../../redux/actions";
import { useState } from "react";

const Card = (props) => {
  const { id, name, image, gender, hability, handlerClick } = props;
  const dispatch = useDispatch();

  let habilidades = hability?.join(", ");

  const [color, setColor] = useState("");

  const handleClick = (id) => {
    setColor(id === color ? "" : id)
    dispatch(send_id_of_card(id));
  };

  const select = id === color;

  return (
    <div
      className={`${style.containerCard} ${select ? style.selected : ''}`}
      onClick={() => handleClick(id)}
    >
      <div className={style.imagen}>
        <img style={{width:"130px", marginTop:"10px"}} src={image} alt="foto de perfil" />
      </div>
      <div>
        <h4>{name}</h4>
        <p className={style.hability}>{habilidades}</p>
        <p>{gender}</p>
      </div>
    </div>
  );
};

export default Card;
