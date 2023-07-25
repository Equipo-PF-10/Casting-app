import style from "./Card.module.css";

const Card = (props) => {

  const {id, name, image, gender, hability} = props;

  let habilidades = hability.join(", ");

  return (
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
  );
};

export default Card;

{/* 
Colocar en el detail de la card
<NavLink to={`/talents/${id}`} className={style.navLink}></NavLink> 
*/}