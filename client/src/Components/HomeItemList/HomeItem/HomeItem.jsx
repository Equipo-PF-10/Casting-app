import styles from './HomeItem.module.css';


const HomeItem = (props) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.text}>{props.title}</h1>
    </div>
  );
};

export default HomeItem;