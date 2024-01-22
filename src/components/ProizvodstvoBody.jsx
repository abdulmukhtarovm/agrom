import { getText } from "../locales";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// import required modules
import { EffectFade, Autoplay } from "swiper/modules";

const ProizvodstvoBody = () => {
  return (
    <div className="proiz-body">
      <div className="container">
        <h3 className="proiz-body__title">{getText("proiz_title1")}</h3>
        <p className="mb-5">{getText("proiz_desc1")}</p>
        <h3 className="proiz-body__title">{getText("production")}</h3>
        <p className="mb-5">{getText("proiz_desc2")}</p>
        <p className="mb-5">{getText("proiz_desc22")}</p>
        <p className="mb-5">{getText("proiz_desc23")}</p>
        <p className="mb-5">{getText("proiz_desc24")}</p>

        <div className="video">
          <iframe
          loading="lazy"
            className="w-100 h-100"
            src="https://www.youtube.com/embed/y3iBaXJM1Jw?si=IxYnsZX6AhEQqEiC"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <h3 className="proiz-body__title">{getText("proiz_title3")}</h3>
        <p className="mb-2">{getText("proiz_desc3")}</p>
        <ul className="mb-5">
          <li>{getText("proiz_desc3_li1")}</li>
          <li>{getText("proiz_desc3_li2")}</li>
          <li>{getText("proiz_desc3_li3")}</li>
          <li>{getText("proiz_desc3_li4")}</li>
        </ul>
        <div className="map">
          <iframe
          loading="lazy"
            className="w-100 h-100"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12608.800363583508!2d67.56614800000001!3d37.808782!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b55794464d0c33%3A0x7253dbd22cf82381!2sAgro%20Processing%20Group!5e0!3m2!1sru!2sus!4v1704112467668!5m2!1sru!2sus"
           
          ></iframe>
        </div>

        <h3 className="proiz-body__title">{getText("proiz_title4")}</h3>
        <p>{getText("proiz_desc4")}</p>

        <h3 className="proiz-body__title">{getText("proiz_title5")}</h3>
        <p>{getText("proiz_desc5")}</p>
        <p>{getText("proiz_desc51")}</p>
        <p>{getText("proiz_desc52")}</p>
        <p>{getText("proiz_desc53")}</p>
        <p>{getText("proiz_desc54")}</p>
        <p>{getText("proiz_desc55")}</p>
        <ul className="mb-5">
          <li>{getText("proiz_desc5_li1")}</li>
          <li>{getText("proiz_desc5_li2")}</li>
        </ul>
        <p>{getText("proiz_desc56")}</p>

        <div className="video">
          <iframe
          loading="lazy"
            className="w-100 h-100"
            src="https://www.youtube.com/embed/r80fGEd1f7U?si=Uzd0OXFydH0DCzfa"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <h3 className="proiz-body__title">{getText("proiz_title6")}</h3>
        <p>{getText("proiz_desc61")}</p>
        <p>{getText("proiz_desc62")}</p>
      </div>

      <div className="slider-pics">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz1.jpg" />
          </SwiperSlide>
          {/* <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz2.jpg" />
          </SwiperSlide> */}
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz5.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz6.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz7.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz8.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz9.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz10.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz11.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz12.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz13.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz14.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz15.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz16.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz17.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz18.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz19.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz20.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz21.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz22.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz23.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz24.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz25.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz26.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz27.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz28.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz29.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz30.jpg" />
          </SwiperSlide>
        </Swiper>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz1.jpg" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz2.jpg" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz3.jpg" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz4.jpg" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz5.jpg" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz6.jpg" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz7.jpg" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz8.jpg" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz9.jpg" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz10.jpg" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz11.jpg" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz12.jpg" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz13.jpg" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz14.jpg" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz15.jpg" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz16.jpg" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz17.jpg" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz18.jpg" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz19.jpg" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz20.jpg" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz21.jpg" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz22.jpg" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz23.jpg" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz24.jpg" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz25.jpg" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz26.jpg" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz27.jpg" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz28.jpg" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz29.jpg" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz30.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProizvodstvoBody;
