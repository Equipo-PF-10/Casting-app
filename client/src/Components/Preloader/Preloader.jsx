import React from 'react';
import styles from './Preloader.module.css'; // Asegúrate de tener importado correctamente tu archivo de estilos

const Preloader = () => {
  return (
    <div className={styles.preloaderContainer}>
      {/* Texto "Casting App" centrado arriba de la animación */}
      <div className={styles.title}>Casting App</div>

      {/* Contenedor de la animación */}
      <div className={styles.container}>
        <div className={styles.loader}>
          <div className={styles.slider} style={{ '--i': 0 }}></div>
          <div className={styles.slider} style={{ '--i': 1 }}></div>
          <div className={styles.slider} style={{ '--i': 2 }}></div>
          <div className={styles.slider} style={{ '--i': 3 }}></div>
        </div>
        
        {/* Texto "Cargando..." centrado abajo de la animación */}
        <div className={styles.loadingText}> Cargando..</div>
      </div>
    </div>
  );
};

export default Preloader;
