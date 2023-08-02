import { useDispatch, useSelector } from "react-redux";
import "./AddsModule.css";
import { useEffect } from "react";
import { getEventsPremium } from "../../redux/actions";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Adds() {
  const dispatch = useDispatch();
  const eventsPr = useSelector((state) => state.eventsPremium);
  //console.log(eventsPr);

  useEffect(() => {
    dispatch(getEventsPremium());
  }, [dispatch]);

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        //scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 25,
          },
          "@0.50": {
            slidesPerView: 1.25,
            spaceBetween: 25,
          },
          "@1.00": {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          "@1.25": {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          "@1.50": {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          "@1.75": {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {eventsPr.length > 0 &&
          eventsPr?.map((e, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="card-container">
                  <div className="card-info">
                    <p className="text-title">{e.name}</p>
                    <div className="card-img">
                      <img src={e.image} alt="imagen del evento" />
                    </div>
                    <div className="divDescr">
                      <p className="text-body">{e.shortDescription}</p>
                    </div>
                  </div>
                  <div className="card-footer">
                    <label className="talento-label">
                      {e.habilityRequired.join(", ")}
                    </label>
                  </div>
                  <div className="boton-postulate">
                    <button className="talento-button">Postulate</button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}

export default Adds;
