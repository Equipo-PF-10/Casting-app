import React from 'react';
import styles from './Preloader.module.css'; // Asegúrate de que el archivo CSS esté importado correctamente

const Loader = () => {
  return (
    <div className={styles.container}>
    <div className={styles.loader}>
      <div className={styles.slider} style={{ '--i': 0 }}></div>
      <div className={styles.slider} style={{ '--i': 1 }}></div>
      <div className={styles.slider} style={{ '--i': 2 }}></div>
      <div className={styles.slider} style={{ '--i': 3 }}></div>
    </div>
    </div>
  );
};

export default Loader;
