import "./css/Advantage.css";
import Svg1 from "../img/Frame (1).svg";
import Svg2 from "../img/Frame (2).svg";
import Svg3 from "../img/Frame (3).svg";
import Svg4 from "../img/Frame (4).svg";
import Svg5 from "../img/Frame (5).svg";

function Advantage() {
  return (
    <div className="advantage">
      <div className="container">
        <div className="container_ins">
          <h2>Преимущества CIEI</h2>
          <div className="line"></div>
          <div className="container_blog">
            <div className="blog">
              <img src={Svg1} />
              <p>Повышение профессионального уровня специалиста</p>
            </div>
            <div className="blog">
              <img src={Svg2} />
              <p>Приобретение полезных навыков для будущего сотрудничества</p>
            </div>
            <div className="blog">
              <img src={Svg3} />
              <p>Получение сертификата международного образца</p>
            </div>
            <div className="blog">
              <img src={Svg4} />
              <p>
                Возможность отработки навыка использования разговорного
                английского языка
              </p>
            </div>
            <div className="blog">
              <img src={Svg5} />
              <p>Знакомство с культурой другой страны «изнутри»</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Advantage;
