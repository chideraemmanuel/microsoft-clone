import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import heroBg from "../../../assets/images/hero-bg-desktop.webp";
import heroBg2 from "../../../assets/images/hero-bg2-desktop.jpg";
import Button from "../../Button";
import { FaChevronRight } from "react-icons/fa";

const HeroDesktop = () => {
  return (
    <div className="hero-desktop">
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
            <img src={heroBg} alt="Microsoft Office" />
            <div className="hero-text">
              <h1>Microsoft 365</h1>
              <p>Everything you need to achieve more in less time</p>
              <div className="cta">
                <Button text="For 1 person" />
                <a href="/">
                  <span>
                    <p>For up to 6 people</p>
                  </span>
                  <FaChevronRight />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-bg2">
            <img src={heroBg2} alt="Xbox" />
            <div className="hero-text">
              <h1>Xbox Series S</h1>
              <p>Next-gen performance in the smallest Xbox ever</p>
              <Button text="Shop now" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroDesktop;
