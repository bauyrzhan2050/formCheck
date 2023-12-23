import "./css/MainBlock.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MainBlock() {
  const settings = {
    arrows: false,
    dots: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="mySlider">
      <Slider {...settings} className="hello">
        <div className="slide1 slide">
          <nav>
            <div className="slider-container">
              <article>
                <h2>ИССЛЕДУЙ МИР С НАМИ!</h2>
                <h3>Центр CIEI Ваш путь к глобальному успеху</h3>
                <p>
                  Наш Центр CIEI - это ваш билет в мир бескрайних возможностей и
                  глобального роста. Откройте двери к карьерным перспективам и
                  культурным приключениям, которые изменят вашу жизнь.
                </p>
              </article>
            </div>
          </nav>
        </div>
        {/* ------------------------------2 */}
        <div className="slide2 slide">
          <nav>
            <div className="slider-container">
              <article>
                <h2>ПУТЕШЕСТВИЯ И ПРИКЛЮЧЕНИЯ</h2>
                <h3>Исследуйте новые страны и культурыу</h3>
                <p>
                  Наши стажировки - это не только работа, но и уникальная
                  возможность исследовать мир. Путешествуйте, познавайте разные
                  культуры и создавайте незабываемые воспоминания на пути к
                  успеху.
                </p>
              </article>
            </div>
          </nav>
        </div>
        {/* -----------------------------3 */}
        <div className="slide3 slide">
          <nav>
            <div className="slider-container">
              <article>
                <h2>ПРИСОЕДИНЯЙТЕСЬ К НАМ СЕГОДНЯ</h2>
                <h3>Ваши международные стажировки ждут вас</h3>
                <p>
                  Готовы начать свой мировой путь? Присоединяйтесь к нашему
                  Центру CIEI откройте двери к бескрайним возможностям. Начните
                  сегодня и создайте свой путь к успеху!
                </p>
              </article>
            </div>
          </nav>
        </div>
        {/* -----------------------------4 */}
        <div className="slide4 slide">
          <nav>
            <div className="slider-container">
              <article>
                <h2>НАШИ ПРЕИМУЩЕСТВА</h2>
                <h3>Почему выбирают нас?</h3>
                <p>
                  Мы предоставляем: - Качественные стажировки в лучших
                  международных организациях; - Поддержку и обучение в течение
                  всей стажировки; - Возможности для культурного обогащения и
                  языкового развития; - Гарантированный рост вашей
                  профессиональной карьеры.
                </p>
              </article>
            </div>
          </nav>
        </div>
        {/* -----------------------------5 */}
        <div className="slide5 slide">
          <nav>
            <div className="slider-container">
              <article>
                <h2>СДЕЛАЙТЕ СВОЙ ВЫБОР</h2>
                <h3>Ваша карьера, ваше будущее</h3>
                <p>
                  Решите сегодня начать свой путь к мировым возможностям. Наш
                  центр международных стажировок - ваш ключ к глобальному
                  успеху. Сделайте свой выбор и начните свою увлекательную
                  международную стажировку уже сейчас!
                </p>
              </article>
            </div>
          </nav>
        </div>
        {/* -----------------------------6 */}
        <div className="slide6 slide">
          <nav>
            <div className="slider-container">
              <article>
                <h2>РАБОТАЕМ С ЛУЧШИМИ</h2>
                <h3>Наши партнеры - мировые лидеры в индустрии</h3>
                <p>
                  Мы сотрудничаем с ведущими мировыми компаниями, что
                  обеспечивает нашим стажерам доступ к проектам на передовой
                  индустрии. У нас есть партнеры, которые доверяют нам свои
                  будущие лидеры.
                </p>
              </article>
            </div>
          </nav>
        </div>
      </Slider>
    </div>
  );
}
export default MainBlock;
