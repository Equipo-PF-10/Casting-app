import styles from './HomeEvent.module.css';
import { Link } from "react-router-dom";

const HomeEvent = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.fonts}>
        <Link to={`/${props.url}/${props.id}`}>
          <h2 className={styles.text}>{props.title}</h2>
          <h5 className={styles.text}>{props.subTitle}</h5>
        </Link>
      </div >
      <div className={styles.options}>
        <button className={styles.buttonEdit}>Editar Evento</button>
        <button className={styles.buttonClose}>Cerrar Evento</button>
      </div>
    </div>
  );
};

export default HomeEvent;