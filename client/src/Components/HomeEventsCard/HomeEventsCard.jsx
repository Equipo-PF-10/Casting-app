import styles from './HomeEventsCard.module.css';
import HomeEvent from './HomeEvent/HomeEvent.jsx';

const HomeEventsCard = (props) => {
  return (
    <div className={styles.container}>
        <h1>{props.title}</h1>
        <HomeEvent />
        <HomeEvent />
        <HomeEvent />
    </div>
  );
};

export default HomeEventsCard;