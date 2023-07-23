import styles from './HomeItemList.module.css';
import HomeItem from './HomeItem/HomeItem.jsx';

const HomeItemList = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.text}>Mis Postulaciones</h1>
        <HomeItem />
        <HomeItem />
        <HomeItem />
        <HomeItem />
        <HomeItem />
    </div>
  );
};

export default HomeItemList;