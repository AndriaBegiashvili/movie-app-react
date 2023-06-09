import React from "react";
import classes from "../modules/MovieList.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const MovieList = (props) => {
  const klasebi = `${classes.clients} row`;

  const centeredSlides = () => {
    if (props.movies.length === 1) {
      return true; // Center slide if only one result
    }
    return false;
  };

  return (
    <>
      <div className="container mt-32">
        {props.movies.length > 0 && props.name && <h1>{props.name}</h1>}
        <div className={klasebi}>
          <Swiper
            breakpoints={{
              360: {
                spaceBetween: 50,
                height: 20,
                slidesPerView: 1.3,
              },
              445: {
                spaceBetween: 50,
                height: 20,
                slidesPerView: 1.5,
              },
              460: {
                spaceBetween: 50,
                height: 20,
                slidesPerView: 1.6,
              },
              500: {
                spaceBetween: 50,
                height: 20,
                slidesPerView: 1.8,
              },
              600: {
                spaceBetween: 50,
                height: 20,
                slidesPerView: 2.3,
              },
              1400: {
                spaceBetween: 50,
                slidesPerView: 4.5,
              },
              1500: {
                spaceBetween: 50,
                slidesPerView: 5.3,
              },
              870: {
                spaceBetween: 50,
                slidesPerView: 3.3,
              },
              1080: {
                spaceBetween: 50,
                slidesPerView: 3.5,
              },
              1250: {
                spaceBetween: 50,
                slidesPerView: 3.7,
              },

      
            }}
          >
            <div className="row">
              {props.movies.map((movie, index) => (
                <SwiperSlide key={index}>
                  <div className="imageContainer row">
                    <img
                      src={movie.Poster}
                      className={classes.img}
                      alt={movie.Title}
                    />
                    <div className="overlay">
                      <div className={classes.text}>
                        {movie.Title}
                        <hr />
                        <p
                          style={{ cursor: "pointer" }}
                          onClick={() => props.handleFavouritesClick(movie)}
                        >
                          {props.AddOrDel}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default MovieList;
