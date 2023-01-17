import InfoCard from "../../InfoCard";
import hero3BgMobile from "../../../assets/images/hero3-bg-tablet.webp";
import hero3Bg2Mobile from "../../../assets/images/hero3-bg2-tablet.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

const Hero3Mobile = () => {
  return (
    <div className="hero3-mobile">
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
          <img src={hero3BgMobile} alt="Microsoft 365" />
          <InfoCard
            heading="Empowering the next generation"
            details="Together with NBA player Donovan Mitchell, we outfitted the
                children's Village in Dobbs Ferry, NY with a tech lab and an
                entire STEM curriculum"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hero3Bg2Mobile} alt="Xbox Series S" />
          <InfoCard
            heading="Beyond Stats turns data into metrics with LaLiga"
            details="Learn how Microsoft Azure powers AI to turn 3.5 million data
                points per game into 50 exciting new player metrics"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero3Mobile;
