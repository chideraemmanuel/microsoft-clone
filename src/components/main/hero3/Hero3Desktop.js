import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import hero3Bg from "../../../assets/images/hero3-bg-desktop.webp";
import hero3Bg2 from "../../../assets/images/hero3-bg2-desktop.jpg";
import Button from "../../Button";
// import { FaChevronRight } from "react-icons/fa";

const Hero3Desktop = () => {
  return (
    <div className="hero3-desktop">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="hero-bg">
            <img src={hero3Bg} alt="Microsoft Office" />
            <div className="hero-card-inner">
              <h2>Empowering the next generation</h2>
              <p>
                Together with NBA player Donovan Mitchell, we outfitted the
                children's Village in Dobbs Ferry, NY with a tech lab and an
                entire STEM curriculum
              </p>
              <Button text="Learn about the partnership" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero3-bg2">
            <img src={hero3Bg2} alt="Xbox" />
            <div className="hero-text">
              <h1>Beyond Stats turns data into metrics with LaLiga</h1>
              <p>
                Learn how Microsoft Azure powers AI to turn 3.5 million data
                points per game into 50 exciting new player metrics
              </p>
              <Button text="Read the story" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero3Desktop;
