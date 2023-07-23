import styles from './HomeEvent.module.css';

const HomeEvent = (props) => {
  return (
    <div className={styles.container}>
        <h2>{props.title}</h2>
        <h5>{props.subTitle}</h5>
    </div>
  );
};

export default HomeEvent;