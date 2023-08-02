import styles from "./HomeItemList.module.css";
import HomeItem from "./HomeItem/HomeItem.jsx";

const HomeItemList = (props) => {
  
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h3>Postulantes Favoritos</h3>
      </div>
        <hr />
      <h1 className={styles.text}>{props.title}</h1>
      <HomeItem title="Title" />
      <HomeItem title="Title" />
      <HomeItem title="Title" />
      <HomeItem title="Title" />
      <HomeItem title="Title" />
      <HomeItem title="Title" />
    </div>
  );
};

export default HomeItemList;
