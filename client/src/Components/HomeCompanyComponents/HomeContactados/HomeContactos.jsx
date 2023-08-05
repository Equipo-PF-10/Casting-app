import CardContacto from './ContactoCard/CardContacto';
import styles from './HomeContactos.module.css';

const HomeContactos = (props) => {
  return (
    <div className={styles.container}>
        <h1>{props.title}</h1>
        <hr />
        {
        props.contactedTalents ? props.contactedTalents.map((talent, index) => {

          return (
            <CardContacto
              key = {index}
              name = {talent.name}
              habilities = {talent.hability}
              url = {props.url}
              id_talent = {talent.id}
              id_company={props.id_company}
              id_event={props.id_event}
            />
            // <CardContacto
            //   key = "2"
            //   name = "Freddie Mercury"
            //   habilities = "Cantante Musico"
            //   url = {props.url}
            //   id = "08ce36ec-c3af-40ef-83e8-69d58573d998"
            // />
          )
        })
      :
      <h4>En esta sección podrá visualizar a los postulantes a eventos que fueron Contactados.</h4>
      }
    </div>
  );
};

export default HomeContactos;