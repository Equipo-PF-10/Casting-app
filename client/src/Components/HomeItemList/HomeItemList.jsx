import styles from './HomeItemList.module.css';
import HomeItem from './HomeItem/HomeItem.jsx';

const HomeItemList = (props) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.text}>{props.title}</h1>
        <HomeItem title={props.type === "talent" ? "Deporte" : "Aleksej Urošević"} />
        <HomeItem title={props.type === "talent" ? "Humor" : "Simon Gagnon"} />
        <HomeItem title={props.type === "talent" ? "Arte" : "Ronnie Mccoy"} />
        <HomeItem title={props.type === "talent" ? "Baile" : "Carmelo Serrano"} />
        <HomeItem title={props.type === "talent" ? "Magia" : "Jasmine Harris"} />
    </div>
  );
};

export default HomeItemList;