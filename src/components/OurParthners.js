import "./css/OurParthners.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import WOW from "wowjs";
import "wowjs/css/libs/animate.css";

const settings = {
  arrows: true,
  dots: true,
  autoplay: true,
  infinite: true,
  //   autoplaySpeed: 5000,
  pauseOnHover: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        dots: false,
        slidesToShow: 1,
      },
    },
  ],
};
function OurParthners() {
  useEffect(() => {
    const wow = new WOW.WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: false,
      live: true,
    });
    wow.init();
    return () => wow.sync();
  }, []);
  return (
    <div className="our_parthners">
      <div className="container">
        <div className="container_ins">
          <h2 className="wow fadeInDown">Наши партнеры</h2>
          <div className="line"></div>

          <Slider {...settings} className="slider_component">
            <div className="sliders_parthners">
              <div className="slider1 slider"></div>
            </div>
            {/* --------------------------------1 */}
            <div className="sliders_parthners">
              <div className="slider2 slider"></div>
            </div>
            {/* --------------------------------2 */}
            <div className="sliders_parthners">
              <div className="slider3 slider"></div>
            </div>
            {/* --------------------------------3 */}
            <div className="sliders_parthners">
              <div className="slider4 slider"></div>
            </div>
            {/* --------------------------------4 */}
            <div className="sliders_parthners">
              <div className="slider5 slider"></div>
            </div>
            {/* --------------------------------5 */}
            <div className="sliders_parthners">
              <div className="slider6 slider"></div>
            </div>
            {/* --------------------------------6 */}
            <div className="sliders_parthners">
              <div className="slider7 slider"></div>
            </div>
            {/* --------------------------------7 */}
            <div className="sliders_parthners">
              <div className="slider8 slider"></div>
            </div>
            {/* --------------------------------8 */}
          </Slider>
        </div>
      </div>
    </div>
  );
}
export default OurParthners;
