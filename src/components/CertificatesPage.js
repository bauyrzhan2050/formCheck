import "./css/CertificatesPage.css";
import React, { useEffect, useRef } from "react";
import Cert from "../img/certificatesPic.svg";
import ListCert from "../img/listcertificates.svg";
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

function CertificatesPage() {
  return (
    <div className="certificates_main" id="certificates">
      <div className="certificates_container">
        <LightGallery plugins={[lgZoom, lgAutoplay, lgShare, lgRotate]}>
          <a className="light_galleryLink" href={Cert}>
            <img className="light_galleryImg" src={Cert} />
          </a>
        </LightGallery>
        <div className="certificates_info ">
          <h2>Проверка подлинности</h2>
          <div className="line"></div>
          <h5>Тема:</h5>
          <p>
            Современные стандарты в профессиональном <br /> образовании. <br />{" "}
            Опыт США г. Нью-Йорк
          </p>
          <h5>Кому выдан:</h5>
          <p>Abdeldinov Samat</p>
          <h5>Дата:</h5>
          <p>21-27 октября 2023 г.</p>
          <h5> Номер сертификата: </h5>
          <p>IS0001</p>
        </div>
      </div>
      <h2 className="title">Сертификаты наших студентов</h2>
      <div className="many_certificates">
        <div className="list_certificates">
          <LightGallery plugins={[lgZoom, lgAutoplay, lgShare, lgRotate]}>
            <a className="light_galleryLink" href={ListCert}>
              <img className="light_galleryImg" src={ListCert} />
            </a>
          </LightGallery>

          <h4>Abdeldinov Samat</h4>
          <p>IS0001</p>
        </div>
        <div className="list_certificates">
          <LightGallery plugins={[lgZoom, lgAutoplay, lgShare, lgRotate]}>
            <a className="light_galleryLink" href={ListCert}>
              <img src={ListCert} />
            </a>
          </LightGallery>
          <h4>Abzal Aiman</h4>
          <p>IS0001</p>
        </div>
        <div className="list_certificates">
          <LightGallery plugins={[lgZoom, lgAutoplay, lgShare, lgRotate]}>
            <a className="light_galleryLink" href={ListCert}>
              <img src={ListCert} />
            </a>
          </LightGallery>
          <h4>Akhmetov Bekturgan</h4>
          <p>IS0001</p>
        </div>
        <div className="list_certificates">
          <LightGallery plugins={[lgZoom, lgAutoplay, lgShare, lgRotate]}>
            <a className="light_galleryLink" href={ListCert}>
              <img src={ListCert} />
            </a>
          </LightGallery>
          <h4>Akulova Aliya</h4>
          <p>IS0001</p>
        </div>
        <div className="list_certificates">
          <LightGallery plugins={[lgZoom, lgAutoplay, lgShare, lgRotate]}>
            <a className="light_galleryLink" href={ListCert}>
              <img src={ListCert} />
            </a>
          </LightGallery>
          <h4>Baidauletova Venera</h4>
          <p>IS0001</p>
        </div>
        <div className="list_certificates">
          <LightGallery plugins={[lgZoom, lgAutoplay, lgShare, lgRotate]}>
            <a className="light_galleryLink" href={ListCert}>
              <img src={ListCert} />
            </a>
          </LightGallery>
          <h4>Bissekenova Roza</h4>
          <p>IS0001</p>
        </div>
        <div className="list_certificates">
          <LightGallery plugins={[lgZoom, lgAutoplay, lgShare, lgRotate]}>
            <a className="light_galleryLink" href={ListCert}>
              <img src={ListCert} />
            </a>
          </LightGallery>
          <h4>Abdeldinov Samat</h4>
          <p>IS0001</p>
        </div>
        <div className="list_certificates">
          <LightGallery plugins={[lgZoom, lgAutoplay, lgShare, lgRotate]}>
            <a className="light_galleryLink" href={ListCert}>
              <img src={ListCert} />
            </a>
          </LightGallery>
          <h4>Abdeldinov Samat</h4>
          <p>IS0001</p>
        </div>
        <div className="list_certificates">
          <LightGallery plugins={[lgZoom, lgAutoplay, lgShare, lgRotate]}>
            <a className="light_galleryLink" href={ListCert}>
              <img src={ListCert} />
            </a>
          </LightGallery>
          <h4>Abdeldinov Samat</h4>
          <p>IS0001</p>
        </div>
        <div className="list_certificates">
          <LightGallery plugins={[lgZoom, lgAutoplay, lgShare, lgRotate]}>
            <a className="light_galleryLink" href={ListCert}>
              <img src={ListCert} />
            </a>
          </LightGallery>
          <h4>Ibraev Nartay</h4>
          <p>IS0001</p>
        </div>
        <div className="list_certificates">
          <LightGallery plugins={[lgZoom, lgAutoplay, lgShare, lgRotate]}>
            <a className="light_galleryLink" href={ListCert}>
              <img src={ListCert} />
            </a>
          </LightGallery>
          <h4>Iztayeva Gulissiana</h4>
          <p>IS0001</p>
        </div>
        <div className="list_certificates">
          <LightGallery plugins={[lgZoom, lgAutoplay, lgShare, lgRotate]}>
            <a className="light_galleryLink" href={ListCert}>
              <img src={ListCert} />
            </a>
          </LightGallery>
          <h4>Kanatova Almagul</h4>
          <p>IS0001</p>
        </div>
        <div className="list_certificates">
          <LightGallery plugins={[lgZoom, lgAutoplay, lgShare, lgRotate]}>
            <a className="light_galleryLink" href={ListCert}>
              <img src={ListCert} />
            </a>
          </LightGallery>
          <h4>Abdeldinov Samat</h4>
          <p>IS0001</p>
        </div>
        <div className="list_certificates">
          <LightGallery plugins={[lgZoom, lgAutoplay, lgShare, lgRotate]}>
            <a className="light_galleryLink" href={ListCert}>
              <img src={ListCert} />
            </a>
          </LightGallery>
          <h4>Abdeldinov Samat</h4>
          <p>IS0001</p>
        </div>
        <div className="list_certificates">
          <LightGallery plugins={[lgZoom, lgAutoplay, lgShare, lgRotate]}>
            <a className="light_galleryLink" href={ListCert}>
              <img src={ListCert} />
            </a>
          </LightGallery>
          <h4>Abdeldinov Samat</h4>
          <p>IS0001</p>
        </div>
        <div className="list_certificates">
          <LightGallery plugins={[lgZoom, lgAutoplay, lgShare, lgRotate]}>
            <a className="light_galleryLink" href={ListCert}>
              <img src={ListCert} />
            </a>
          </LightGallery>
          <h4>Abdeldinov Samat</h4>
          <p>IS0001</p>
        </div>
        <div className="list_certificates">
          <LightGallery plugins={[lgZoom, lgAutoplay, lgShare, lgRotate]}>
            <a className="light_galleryLink" href={ListCert}>
              <img src={ListCert} />
            </a>
          </LightGallery>
          <h4>Abdeldinov Samat</h4>
          <p>IS0001</p>
        </div>
        <div className="list_certificates">
          <LightGallery plugins={[lgZoom, lgAutoplay, lgShare, lgRotate]}>
            <a className="light_galleryLink" href={ListCert}>
              <img src={ListCert} />
            </a>
          </LightGallery>
          <h4>Abdeldinov Samat</h4>
          <p>IS0001</p>
        </div>
      </div>
    </div>
  );
}
export default CertificatesPage;
