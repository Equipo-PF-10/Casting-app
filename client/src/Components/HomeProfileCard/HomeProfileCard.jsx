import styles from './HomeProfileCard.module.css';

const HomeProfileCard = () => {
  return (
    <div className={styles.container}>
        <div className={styles.cardImage}>
        </div>
        <h3 className={styles.cardText}>NOMBRE</h3>
        <h5 className={styles.cardText}>Titulo</h5>
    </div>
  );
};

export default HomeProfileCard;