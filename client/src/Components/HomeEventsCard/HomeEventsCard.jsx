import styles from './HomeEventsCard.module.css';
import HomeEvent from './HomeEvent/HomeEvent.jsx';

const HomeEventsCard = (props) => {
  return (
    <div className={styles.container}>
        <h1>{props.title}</h1>
        <hr />
        {props.events ? props.events.map((event) => {
          return (
            <HomeEvent 
              title = {event.name}
              subTitle = {event.shortDescription}
              url = {props.url}
              id = {event.id}
            />
          )
        })
      :null}
        {/* <HomeEvent 
          title = "Lorem ipsum dolor sit amet."
          subTitle = "Lorem ipsum dolor sit amet."
        />
        <HomeEvent 
          title = "Lorem ipsum dolor sit amet."
          subTitle = "Lorem ipsum dolor sit amet."
        />
        <HomeEvent 
          title = "Lorem ipsum dolor sit amet."
          subTitle = "Lorem ipsum dolor sit amet."
        /> */}
    </div>
  );
};

export default HomeEventsCard;