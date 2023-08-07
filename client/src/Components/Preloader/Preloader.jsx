import React from 'react';
import styles from './Preloader.module.css'; 

const Preloader = () => {
  return (
    <div className={styles.preloaderContainer}>
     
      <div className={styles.title}>Casting App</div>

      
      <div className={styles.container}>
        <div className={styles.loader}>
          <div className={styles.slider} style={{ '--i': 0 }}></div>
          <div className={styles.slider} style={{ '--i': 1 }}></div>
          <div className={styles.slider} style={{ '--i': 2 }}></div>
          <div className={styles.slider} style={{ '--i': 3 }}></div>
        </div>
        
       
        <div className={styles.loadingText}> Cargando..</div>
      </div>
    </div>
  );
};

export default Preloader;
