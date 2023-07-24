import style from "./Card.module.css";
import { NavLink, useParams } from "react-router-dom";

const Card = (props) => {

  const {id, name, image, gender, hability} = props;

  let habilidades = hability.join(", ");

  return (
    <NavLink to={`/talents/${id}`} className={style.navLink}>
      <div className={style.containerCard}>
        <div className={style.imagen}>
          <img src={image} alt="" />
        </div>
        <div>
          <h4>{name}</h4>
          <p className={style.hability}>{habilidades}</p>
          <p>{gender}</p>
        </div>
      </div>
    </NavLink>
  );
};

export default Card;
