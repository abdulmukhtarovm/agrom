import { getText } from "../locales";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/effect-creative";
import 'swiper/css/navigation';

// import required modules
import { EffectCards, EffectCreative, Navigation } from "swiper/modules";

const Gallery = () => {
  return (
    <>
      <div className="gallery mt-5">
        <div className="container">
          <div className="row justify-content-center mt-5">
            <div className="col-md-4">
              <div className="main__title">
                <h2>{getText("ourProduction")}</h2>
              </div>
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/newprod1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/newprod2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/newprod3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/newprod4.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/newprod5.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/newprod6.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/newprod7.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/newprod8.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/newprod9.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/newprod10.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/newprod11.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/newprod12.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/prod1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/prod2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/prod3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/prod4.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/prod5.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/prod6.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/prod7.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/prod8.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/prod9.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/prod10.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/prod11.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/prod12.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/prod13.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/prod14.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/prod15.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/prod16.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/prod17.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/prod18.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/prod19.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/prod20.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/prod21.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/prod22.jpg" alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="col-12 mt-5">
              <div className="main__title">
                <h2>{getText("zavod")}</h2>
              </div>
              <Swiper
                grabCursor={true}
                effect={"creative"}
                creativeEffect={{
                  prev: {
                    shadow: true,
                    translate: [0, 0, -400],
                  },
                  next: {
                    translate: ["100%", 0, 0],
                  },
                }}
                navigation={true}
                modules={[EffectCreative, Navigation]}
                className="mySwiper"
              >
               <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod4.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod5.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod6.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod7.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod8.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod9.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod10.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod11.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod12.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod13.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod14.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod15.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod16.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod17.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod18.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod19.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod20.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod21.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod22.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod23.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod24.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod25.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod26.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod27.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod28.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod29.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod30.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod31.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod32.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod33.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod34.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod35.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod36.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod37.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod38.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod39.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod40.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod41.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod42.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod43.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod44.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod45.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod46.jpg" alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
