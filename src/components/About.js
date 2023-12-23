import "./css/About.css";
import Picture from "../img/blogTwoPic.svg";
// import React, { useState } from "react";
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

function About() {
  // let blogPicture = "фотография блока 2";
  // const [isZoomed, setIsZoomed] = useState(false);

  // const toggleZoom = () => {
  //   setIsZoomed(!isZoomed);
  // };

  return (
    <div className="main_blog">
      <div className="container">
        {/* <LightGallery plugins={[lgZoom, lgAutoplay, lgShare, lgRotate]}>
          <a href={Picture}> */}
        <img src={Picture} />
        {/* </a> */}
        {/* </LightGallery> */}
        <div className="left_side">
          <div className="info_blog">
            <h2>Об организации</h2>

            <div className="line"> </div>
            {/* <img className="mob_pic" src={Picture} /> */}
            <p>
              Цель Центра международного образования и инноваций CIEI –
              проведение международных программ стажировок, знакомство с
              деятельностью ведущих учреждений системы образования,
              здравоохранения, юридической сферы, сферы искусства и других
              направлений, обмен опытом по совершенствованию профессионального
              мастерства, знакомство с новейшими технологиями обучения и
              перспективами их развития. <br />
              <br /> Мы проводим зарубежные стажировки для всех сфер
              деятельности по странам США, Европа, Южная Корея, Япония, Сингапур
              и др. <br />
              <br /> <span>
                Основные задачи стажировок за рубежом:
              </span> <br /> <br /> · Накопление необходимого опыта у
              иностранных компаний;
              <br /> <br />· Расширение поля мышления; <br />
              <br /> · Использование полученного опыта в своей компании, который
              вносит вклад в развитие Казахстана.
            </p>
          </div>

          <button>Узнать больше</button>
        </div>
      </div>
    </div>
  );
}

export default About;
