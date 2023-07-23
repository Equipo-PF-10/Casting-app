import styles from './HomeItemList.module.css';
import HomeItem from './HomeItem/HomeItem.jsx';

const HomeItemList = (props) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.text}>{props.title}</h1>
        <HomeItem title="Title" />
        <HomeItem title="Title" />
        <HomeItem title="Title" />
        <HomeItem title="Title" />
        <HomeItem title="Title" />
    </div>
  );
};

export default HomeItemList;