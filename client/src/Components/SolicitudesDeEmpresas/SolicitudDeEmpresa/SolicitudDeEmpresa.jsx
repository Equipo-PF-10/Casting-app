import styles from './SolicitudDeEmpresa.module.css';

const SolicitudDeEmpresa = (props) => {
  return (
    <div className={styles.container}>
        <h4>{props.companyName}</h4>
        <h5>{props.eventName}</h5>
    </div>
  );
};

export default SolicitudDeEmpresa;