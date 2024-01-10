import "./css/Header.css";
import Logo from "../img/log.svg";
import Call from "../img/call.svg";
import LogoSvg from "../img/svg/Logo";
import Envelop from "../img/envelop.svg";
import { Link } from "react-router-dom";
import React, { useState } from "react";

function Header() {
  let altTel = "логотип телефона";
  let env = "логотип рассылки";

  const [isOpen, setIsOpen] = useState(false);
  const [isCross, setIsCross] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
    setIsCross(!isCross);
  };

  return (
    <header>
      <div className="container flex_s">
        <a href="#">
          <LogoSvg />
        </a>
        <menu className="flex_s">
          <li>
            <Link to="/"> Главная</Link>
          </li>
          <li>
            <Link to="/about"> О Нас</Link>
          </li>
          <li>
            {" "}
            <Link to="/projects">Проекты</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/certificates">Сертификаты</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/contact">Контакты</Link>{" "}
          </li>
        </menu>
        <a href="" className="flex_s telIcon">
          <img src={Call} alt={altTel} />
          <h3>+7(777)777-77-77</h3>
        </a>
        <div className="sand_panel" onClick={handleToggle}>
          <div className={isCross ? "crossLine1 crossActive" : ""}></div>
          <div className={isCross ? "crossLine2 crossActive" : ""}></div>
          <div className={isCross ? "crossLine3 crossActive" : ""}></div>
        </div>
      </div>
      {/* --------------------------- */}
      <div className={`burger-menu ${isOpen ? "active" : ""}`}>
        <menu className="burger-menu__list">
          <li>
            <Link to="/"> Главная</Link>
          </li>
          <li>
            <Link to="/about"> О Нас</Link>
          </li>
          <li>
            {" "}
            <Link to="/projects">Проекты</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/certificates">Сертификаты</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/contact">Контакты</Link>{" "}
          </li>
        </menu>
      </div>
    </header>
  );
}
export default Header;
