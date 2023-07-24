import styles from './HomeProfileCard.module.css';

const HomeProfileCard = (props) => {
  return (
    <div className={styles.container}>
        <div className={styles.cardImage}>
          <img className={styles.image} src={props.image} alt={props.name} />
        </div>
        <h3 className={styles.cardText}>{props.name}</h3>
        <h5 className={styles.cardText}>{props.hability}</h5>
    </div>
  );
};

export default HomeProfileCard;