import InfoCard from "../../InfoCard";
import heroBgMobile from "../../../assets/images/hero-bg-tablet.webp";
import heroBg2Mobile from "../../../assets/images/hero-bg2-tablet.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

const HeroMobile = () => {
  return (
    <div className="hero-mobile">
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
          <img src={heroBgMobile} alt="Microsoft 365" />
          <InfoCard
            heading="Microsoft 365"
            details="Everything you need to achieve more in less time"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src={heroBg2Mobile} alt="Xbox Series S" />
          <InfoCard
            heading="Xbox Series S"
            details="Next-gen performance in the smallest Xbox ever"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroMobile;
