import React, { useState, useEffect } from "react";

import "./css/About.css";
import Picture from "../img/blogTwoPic.svg";
import { HashLink as Link } from "react-router-hash-link";

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
  const [text, setText] = useState("");
  const originalText = "Об организации";

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex <= originalText.length) {
        setText(originalText.substring(0, currentIndex));
        currentIndex++;
      } else {
        currentIndex = 0;
      }
    }, 200);

    return () => {
      clearInterval(intervalId);
    };
  }, [originalText]);

  return (
    <div className="main_blog">
      <div className="container">
        <LightGallery plugins={[lgZoom, lgAutoplay, lgShare, lgRotate]}>
          <a className="light_galleryLink" href={Picture}>
            <img className="light_galleryImg" src={Picture} />
          </a>
        </LightGallery>
        <div className="left_side">
          <div className="info_blog">
            <h2>{text}</h2>

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

          <Link to="/about#about">Узнать больше</Link>
        </div>
      </div>
    </div>
  );
}

export default About;
