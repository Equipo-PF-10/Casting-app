import style from "./Card.module.css";
import { useDispatch } from "react-redux";
import { send_id_of_card } from "../../../redux/actions";

const Card = (props) => {
  const {id, name, image, gender, hability, handlerClick} = props;
  const dispatch = useDispatch();

  let habilidades = hability.join(", ");

  const handleClick = (id)=> {
    dispatch(send_id_of_card(id))
  }

  
  return (
      <div className={style.containerCard} onClick={() => handleClick(id)}>
        <div className={style.imagen}>
          <img src={image} alt="" />
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
