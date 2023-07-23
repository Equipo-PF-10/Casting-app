import styles from './SolicitudesDeEmpresas.module.css';
import SolicitudDeEmpresa from './SolicitudDeEmpresa/SolicitudDeEmpresa';

const SolicitudesDeEmpresas = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.text}>Solicitudes De Empresas</h1>
        <SolicitudDeEmpresa
          companyName="Nombre de la Empresa"
          eventName="Titulo del evento."
        />
        <SolicitudDeEmpresa
          companyName="Nombre de la Empresa"
          eventName="Titulo del evento."
        />
        <SolicitudDeEmpresa
          companyName="Nombre de la Empresa"
          eventName="Titulo del evento."
        />
        <SolicitudDeEmpresa
          companyName="Nombre de la Empresa"
          eventName="Titulo del evento."
        />
    </div>
  );
};

export default SolicitudesDeEmpresas;