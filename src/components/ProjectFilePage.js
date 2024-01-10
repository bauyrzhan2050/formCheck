import Header from "./Header";
import Footer from "./Footer";
import "./css/ProjectFilePage.css";
import Black from "../img/Black.svg";
import Rec1 from "../img/Rectangle.svg";
import Rec2 from "../img/Rectangle2.svg";
import Rec3 from "../img/Rectangle3.svg";
import Rec4 from "../img/Rectangle4.svg";
import Rec5 from "../img/Rectangle5.svg";
import Compl1 from "../img/compl1.svg";
import Compl2 from "../img/compl2.svg";
import Compl3 from "../img/compl3.svg";
import Compl4 from "../img/compl4.svg";
import Compl5 from "../img/compl5.svg";
import Compl6 from "../img/compl6.svg";
import Compl7 from "../img/compl7.svg";
import Cross from "../img/cross.svg";
import Fut1 from "../img/future1.svg";
import Fut2 from "../img/future2.svg";
import Fut3 from "../img/future3.svg";
import Fut4 from "../img/future4.svg";
import Fut5 from "../img/future5.svg";
import Fut6 from "../img/future6.svg";
import Fut7 from "../img/future7.svg";
import Fut8 from "../img/future8.svg";
import Fut from "../img/fnew.svg";

import { useState } from "react";
import Modal from "react-modal";
import InputMask from "react-input-mask";
// import ModalWindow from "./ModalWindow";

Modal.setAppElement("#root");

function ProjectFilePage() {
  const [activeTab, setActiveTab] = useState(0);
  const [modalIsOpen, setmModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [inputValue, setInputValue] = useState("");

  const openModal = (content) => {
    setModalContent(content);
    setmModalIsOpen(true);
  };

  const closeModal = () => {
    setmModalIsOpen(false);
  };

  const numberValidation = (el) => {
    const newValue = el.target.value.replace(/[^0-9]/g, "");
    setInputValue(newValue);
  };

  // const submitForm = (shutDown) => {
  //   shutDown.preventDefault();
  // };
  const tabs = [
    {
      tabName: "Актуальные ",
      tabContent: (
        <div>
          <div className="projectFile_section">
            <img src={Rec1} />
            <div className="projectFile_sectionColumn">
              <div className="projectFile_sectionText">
                <h2>Международная стажировка</h2>
                <h3>Стажировка по программе Австрия, Чехия, Германия</h3>

                <p>Дата проведения: с 27 ноября по 4 декабря 2023 года</p>
              </div>
              <div className="projectFile_sectionBtnBlock">
                <button>Скачать программу</button>
                <button
                  onClick={() =>
                    openModal(
                      "Стажировка по программе Австрия, Чехия, Германия. C 27 ноября по 4 декабря 2023 года"
                    )
                  }
                >
                  Записаться на стажировку
                </button>
              </div>
            </div>
          </div>
          {/* -------------------------------------1 */}
          <div className="projectFile_section">
            <img src={Rec2} />
            <div className="projectFile_sectionColumn">
              <div className="projectFile_sectionText">
                <h2>Международная стажировка</h2>
                <h3>
                  «Современные стандарты в арт-менеджменте: Опыт Турции, г.
                  Стамбул»
                </h3>
                <p>Дата проведения: с 17 по 24 декабря 2023 года</p>
              </div>
              <div className="projectFile_sectionBtnBlock">
                <button>Скачать программу</button>
                <button
                  onClick={() =>
                    openModal(
                      "«Современные стандарты в арт-менеджменте: Опыт Турции, г. Стамбул» C 17 по 24 декабря 2023 года"
                    )
                  }
                >
                  Записаться на стажировку
                </button>
              </div>
            </div>
          </div>
          {/* -------------------------------------2 */}
          <div className="projectFile_section">
            <img src={Rec3} />
            <div className="projectFile_sectionColumn">
              <div className="projectFile_sectionText">
                <h2>Международная стажировка</h2>
                <h3>«Менеджмент в высшем образовании на примере ОАЭ»</h3>
                <p>Дата проведения: с 14 по 19 января 2024 года</p>
              </div>
              <div className="projectFile_sectionBtnBlock">
                <button>Скачать программу</button>
                <button
                  onClick={() =>
                    openModal(
                      "«Менеджмент в высшем образовании на примере ОАЭ» C 14 по 19 января 2024 года"
                    )
                  }
                >
                  Записаться на стажировку
                </button>
              </div>
            </div>
          </div>
          {/* -------------------------------------3 */}
          <div className="projectFile_section">
            <img src={Rec4} />
            <div className="projectFile_sectionColumn">
              <div className="projectFile_sectionText">
                <h2>Международная стажировка</h2>
                <h3>«Медицинский бизнес в Южной Корее, г. Сеул»</h3>
                <p>Дата проведения: с 03 по 09 марта 2024 года</p>
              </div>
              <div className="projectFile_sectionBtnBlock">
                <button>Скачать программу</button>
                <button
                  onClick={() =>
                    openModal(
                      "«Медицинский бизнес в Южной Корее, г. Сеул» C 03 по 09 марта 2024 года"
                    )
                  }
                >
                  Записаться на стажировку
                </button>
              </div>
            </div>
          </div>
          {/* -------------------------------------4 */}
          <div className="projectFile_section">
            <img src={Rec5} />
            <div className="projectFile_sectionColumn">
              <div className="projectFile_sectionText">
                <h2>Международная стажировка</h2>
                <h3>
                  «Современные стандарты в арт-менеджменте: Опыт ОАЭ, г. Дубай»
                </h3>
                <p>Дата проведения: с 24 по 30 марта 2024 года</p>
              </div>
              <div className="projectFile_sectionBtnBlock">
                <button>Скачать программу</button>
                <button
                  onClick={() =>
                    openModal(
                      "«Современные стандарты в арт-менеджменте: Опыт ОАЭ, г. Дубай» C 24 по 30 марта 2024 года"
                    )
                  }
                >
                  Записаться на стажировку
                </button>
              </div>
            </div>
          </div>
          {/* -------------------------------------3 */}
        </div>
      ),
    },
    {
      tabName: "Будущие ",
      tabContent: (
        <div>
          <div className="projectFile_section">
            <img src={Fut1} />
            <div className="projectFile_sectionColumn">
              <div className="projectFile_sectionText">
                <h2>Международная стажировка</h2>
                <h3> «Менеджмент в образовании ОАЭ»</h3>

                <p>Дата проведения: с 27 ноября по 4 декабря 2023 года</p>
              </div>
              <div className="projectFile_sectionBtnBlock">
                <button>Скачать программу</button>
                <button
                  onClick={() =>
                    openModal(
                      "Менеджмент в образовании ОАЭ C 27 ноября по 4 декабря 2023 года"
                    )
                  }
                >
                  Записаться на стажировку
                </button>
              </div>
            </div>
          </div>
          {/* -------------------------------------1 */}
          <div className="projectFile_section">
            <img src={Fut8} />
            <div className="projectFile_sectionColumn">
              <div className="projectFile_sectionText">
                <h2>Международная стажировка</h2>
                <h3>«Медицинский бизнес: Beauty-индустрия, Южная Корея»</h3>
                <p>Дата проведения: с 17 по 24 декабря 2023 года</p>
              </div>
              <div className="projectFile_sectionBtnBlock">
                <button>Скачать программу</button>
                <button
                  onClick={() =>
                    openModal(
                      "Медицинский бизнес: Beauty-индустрия, Южная Корея C 17 по 24 декабря 2023 года"
                    )
                  }
                >
                  Записаться на стажировку
                </button>
              </div>
            </div>
          </div>
          {/* -------------------------------------2 */}
          <div className="projectFile_section">
            <img src={Fut2} />
            <div className="projectFile_sectionColumn">
              <div className="projectFile_sectionText">
                <h2>Международная стажировка</h2>
                <h3>«STEAM-технологии в обучении, Сингапур»</h3>
                <p>Дата проведения: с 14 по 19 января 2024 года</p>
              </div>
              <div className="projectFile_sectionBtnBlock">
                <button>Скачать программу</button>
                <button
                  onClick={() =>
                    openModal(
                      "«STEAM-технологии в обучении, Сингапур» C 14 по 19 января 2024 года"
                    )
                  }
                >
                  Записаться на стажировку
                </button>
              </div>
            </div>
          </div>
          {/* -------------------------------------3 */}
          <div className="projectFile_section">
            <img src={Fut3} />
            <div className="projectFile_sectionColumn">
              <div className="projectFile_sectionText">
                <h2>Международная стажировка</h2>
                <h3>
                  «Система организации институтов адвокатуры, нотариата,
                  медиации и международных судов Англии: опыт и современные
                  тенденции, Англия»
                </h3>
                <p>Дата проведения: с 03 по 09 марта 2024 года</p>
              </div>
              <div className="projectFile_sectionBtnBlock">
                <button>Скачать программу</button>
                <button
                  onClick={() =>
                    openModal(
                      "«Система организации институтов адвокатуры, нотариата, медиации и международных судов Англии: опыт и современные тенденции, Англия» C 03 по 09 марта 2024 года"
                    )
                  }
                >
                  Записаться на стажировку
                </button>
              </div>
            </div>
          </div>
          {/* -------------------------------------4 */}
          <div className="projectFile_section">
            <img src={Fut5} />
            <div className="projectFile_sectionColumn">
              <div className="projectFile_sectionText">
                <h2>Международная стажировка</h2>
                <h3>«Современные стандарты в образовании, США »</h3>
                <p>Дата проведения: с 24 по 30 марта 2024 года</p>
              </div>
              <div className="projectFile_sectionBtnBlock">
                <button>Скачать программу</button>
                <button
                  onClick={() =>
                    openModal(
                      "«Современные стандарты в образовании, США» C 24 по 30 марта 2024 года"
                    )
                  }
                >
                  Записаться на стажировку
                </button>
              </div>
            </div>
          </div>
          {/* -------------------------------------5*/}
          <div className="projectFile_section">
            <img src={Fut} />
            <div className="projectFile_sectionColumn">
              <div className="projectFile_sectionText">
                <h2>Международная стажировка</h2>
                <h3>« Новые технологии в строительной отрасли, Турция»</h3>
                <p>Дата проведения: с 24 по 30 марта 2024 года</p>
              </div>
              <div className="projectFile_sectionBtnBlock">
                <button>Скачать программу</button>
                <button
                  onClick={() =>
                    openModal(
                      "«Новые технологии в строительной отрасли, Турция» C 24 по 30 марта 2024 года"
                    )
                  }
                >
                  Записаться на стажировку
                </button>
              </div>
            </div>
          </div>
          {/* -------------------------------------6 */}
          <div className="projectFile_section">
            <img src={Fut6} />
            <div className="projectFile_sectionColumn">
              <div className="projectFile_sectionText">
                <h2>Международная стажировка</h2>
                <h3>«WORLDSKILLS 2024, Франция»</h3>
                <p>Дата проведения: с 24 по 30 марта 2024 года</p>
              </div>
              <div className="projectFile_sectionBtnBlock">
                <button>Скачать программу</button>
                <button
                  onClick={() =>
                    openModal(
                      "WORLDSKILLS 2024, Франция C 24 по 30 марта 2024 года"
                    )
                  }
                >
                  Записаться на стажировку
                </button>
              </div>
            </div>
          </div>

          {/* -------------------------------------7 */}
          <div className="projectFile_section">
            <img src={Fut7} />
            <div className="projectFile_sectionColumn">
              <div className="projectFile_sectionText">
                <h2>Международная стажировка</h2>
                <h3>«Образование в новом мире, Япония»</h3>
                <p>Дата проведения: с 24 по 30 марта 2024 года</p>
              </div>
              <div className="projectFile_sectionBtnBlock">
                <button>Скачать программу</button>
                <button
                  onClick={() =>
                    openModal(
                      "«Образование в новом мире, Япония» C 24 по 30 марта 2024 года"
                    )
                  }
                >
                  Записаться на стажировку
                </button>
              </div>
            </div>
          </div>
          {/* -------------------------------------8 */}
        </div>
      ),
    },
    {
      tabName: "Завершенные ",
      tabContent: (
        <div className="projectFile_completedBox">
          <div className="projectFile_sectionComplited">
            <img src={Compl1} />

            <div className="projectFile_sectionText">
              <h2>
                «Формирование профессионального мастерства на основе стандартов
                WorldSkills. Прогрессивные технологии профессионального
                образования. Опыт Южной Кореи»
              </h2>
              <p>с 12 по 18 октября 2022 года</p>
            </div>
          </div>
          {/* ---------------------------------------1 */}
          <div className="projectFile_sectionComplited">
            <img src={Compl2} />

            <div className="projectFile_sectionText">
              <h2>
                «Современные стандарты профессионального медицинского
                образования. Опыт ОАЭ, г. Дубай»
              </h2>
              <p>с 05 по 11 февраля 2023 года</p>
            </div>
          </div>
          {/* ---------------------------------------2 */}
          <div className="projectFile_sectionComplited">
            <img src={Compl3} />

            <div className="projectFile_sectionText">
              <h2>
                «Современные стандарты в профессиональном образовании. Опыт
                Франции, г. Париж»
              </h2>
              <p>с 07 по 13 марта 2023 года</p>
            </div>
          </div>
          {/* ---------------------------------------3 */}
          <div className="projectFile_sectionComplited">
            <img src={Compl4} />

            <div className="projectFile_sectionText">
              <h2>«Практики менеджмента в образовании: опыт Грузии»</h2>
              <p>с 11 по 17 июня 2023 года</p>
            </div>
          </div>
          {/* ---------------------------------------4 */}
          <div className="projectFile_sectionComplited">
            <img src={Compl5} />

            <div className="projectFile_sectionText">
              <h2>
                «Развитие системы профессионального образования на основе
                международных стандартов Worldskills. Опыт Польши»
              </h2>
              <p>с 06 по 12 сентября 2023 года</p>
            </div>
          </div>
          {/* ---------------------------------------5 */}
          <div className="projectFile_sectionComplited">
            <img src={Compl6} />

            <div className="projectFile_sectionText">
              <h2>
                «Система организации институтов адвокатуры, нотариата, медиации
                и международных судов Европейского Союза: опыт и современные
                тенденции»
              </h2>
              <p>с 01 по 10 октября 2023 года</p>
            </div>
          </div>
          {/* ---------------------------------------6 */}
          <div className="projectFile_sectionComplited">
            <img src={Compl7} />

            <div className="projectFile_sectionText">
              <h2>
                «Современные стандарты в профессиональном образовании. Опыт США,
                г. Нью-Йорк»
              </h2>
              <p>с 21 по 27 октября 2023 года</p>
            </div>
          </div>
          {/* ---------------------------------------7 */}
        </div>
      ),
    },
  ];
  return (
    <div className="projectFile" id="projects">
      <Modal
        className="bookModal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="exampleModal"
      >
        <form className="appointment_insaidBlock">
          <img className="btnClouse" src={Cross} onClick={closeModal} />
          <h2>Записаться на стажировку</h2>
          <div className="line"></div>
          <div className="p">
            <p>{modalContent}</p>
          </div>
          <input
            name="FIO"
            type="text"
            placeholder="ФИО по паспорту"
            required
            minLength={3}
          />
          <input
            value={inputValue}
            name="passport"
            type="text"
            placeholder="№ паспорта"
            required
            onChange={numberValidation}
          />
          <InputMask
            required
            type="tel"
            placeholder="+7 (...)"
            mask="+7 (999) 999-99-99"
          />
          <input type="email" placeholder="Эл.почта" required />
          <input name="org" type="text" placeholder="Организация" />
          <input name="positions" type="text" placeholder="Должность" />
          {/* <button onClick={submitForm}>Отправить</button> */}
          <button>Отправить</button>
        </form>
      </Modal>

      <div className="projectFile_cont">
        <div className="img"></div>

        <div className="projectFile_menu">
          <div className="projectFile_menuFlex">
            <div className="projectFile_text">
              <h2>Наши проекты</h2>
              <div className="line"></div>
            </div>
            <div className="tabs">
              {/* <div className="projectFile_btnBlock"> */}
              {tabs.map((tab, index) => (
                <div
                  onClick={() => setActiveTab(index)}
                  key={index}
                  className={`tab ${activeTab === index ? "active" : ""}`}
                >
                  {tab.tabName}
                </div>
              ))}
            </div>
          </div>
          <div className="tabsContent">{tabs[activeTab].tabContent}</div>
        </div>
      </div>
    </div>
  );
}
export default ProjectFilePage;
