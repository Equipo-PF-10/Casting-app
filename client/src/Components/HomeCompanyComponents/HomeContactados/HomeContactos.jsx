import CardContacto from './ContactoCard/CardContacto';
import styles from './HomeContactos.module.css';

const HomeContactos = (props) => {
  return (
    <div className={styles.container}>
        <h1>{props.title}</h1>
        <hr />
        {props.contactedTalents ? props.contactedTalents.map((talent, index) => {

          return (
            <CardContacto
              key = {index}
              name = {talent.name}
              habilities = {talent.hability}
              url = {props.url}
              id = {talent.id}
            />
          )
        })
      :null}
    </div>
  );
};

export default HomeContactos;