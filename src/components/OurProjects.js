import "./css/OurProjects.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../img/Rectangle.svg";
// LightGallery.css
import LightGallery from "lightgallery/react/Lightgallery.es5";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";

// LightGallery plugins
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgShare from "lightgallery/plugins/share";
import lgRotate from "lightgallery/plugins/rotate";
const settings = {
  arrows: false,
  dots: false,
  autoplay: true,
  infinite: true,
  //   autoplaySpeed: 5000,
  pauseOnHover: false,
  slidesToShow: 3,
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

function OurProjects() {
  return (
    <div className="our_project">
      <div className="container">
        <div className="container_ins">
          <h2>Наши проекты</h2>
          <div className="line"></div>

          <Slider {...settings} className="slider_components">
            <nav className="sliders_project">
              <LightGallery
                plugins={[lgZoom, lgThumbnail, lgAutoplay, lgShare, lgRotate]}
              >
                <a href={Img1}>
                  <div className="slideOne slide"></div>
                </a>
              </LightGallery>
              <article>
                <h2>Стажировка по программе Австрия, Чехия, Германия</h2>
                <p>с 27 ноября по 4 декабря 2023 года</p>
              </article>
            </nav>

            {/* ----------------------------------------1 */}
            <nav className="sliders_project">
              <div className="slideTwo slide"></div>
              <article>
                <h2>
                  Программа международной стажировки по медицинскому бизнесу в
                  Южной Корее в городе Сеул, Южная Корея.
                </h2>
                <p>с 03 по 09 марта 2024 года</p>
              </article>
            </nav>
            {/* ----------------------------------------2 */}
            <nav className="sliders_project">
              <div className="slideThree slide"></div>
              <article>
                <h2>
                  Программа стажировки «Менеджмент в высшем образовании на
                  примере ОАЭ» в г. Дубай.
                </h2>
                <p>с 14 по 19 января 2024 года</p>
              </article>
            </nav>
            {/* ----------------------------------------3 */}
            <nav className="sliders_project">
              <div className="slideFour slide"></div>
              <article>
                <h2>
                  Международная стажировка «Медицинский бизнес в Южной Корее, г.
                  Сеул»
                </h2>
                <p>с 03 по 09 марта 2024 года</p>
              </article>
            </nav>
            {/* ----------------------------------------4 */}
            <nav className="sliders_project">
              <div className="slideFive slide"></div>
              <article>
                <h2>
                  Международная стажировка «Современные стандарты в
                  арт-менеджменте: Опыт ОАЭ, г. Дубай»
                </h2>
                <p>с 24 по 30 марта 2024 года</p>
              </article>
            </nav>
            {/* ----------------------------------------5 */}
          </Slider>
        </div>
      </div>
    </div>
  );
}
export default OurProjects;
