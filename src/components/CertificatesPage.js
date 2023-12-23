import "./css/CertificatesPage.css";
import Cert from "../img/certificatesPic.svg";
function CertificatesPage() {
  return (
    <div className="certificates_main">
      <div className="certificates_container">
        <img src={Cert} />
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
    </div>
  );
}
export default CertificatesPage;
