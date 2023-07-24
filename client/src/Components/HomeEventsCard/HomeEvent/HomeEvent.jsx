import styles from './HomeEvent.module.css';
import { Link } from "react-router-dom";

const HomeEvent = (props) => {
  return (
    <div className={styles.container}>
      <Link to={`/${props.url}/${props.id}`}>
        <h2 className={styles.text}>{props.title}</h2>
        <h5 className={styles.text}>{props.subTitle}</h5>
      </Link>
    </div>
  );
};

export default HomeEvent;