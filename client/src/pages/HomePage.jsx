import React from "react";
import "../css/home.css";

export const HomePage = () => {
  return (
    <div className="homePage">
      <header>
        <div className="logo-wrapper">
          <div className="left-strip"></div>
          <div className="logo">
            <div className="rectangle">
              <span>TIMUR.</span>
              <div className="innerRectangle">
                <span>SHOP</span>
              </div>
            </div>
          </div>
          <div className="right-strip"></div>
        </div>
        <ul className="header-menu">
          <li className="header-menu-item">
            <a href="/tshirts">Футболки</a>
          </li>
          <li className="header-menu-item">
            <a href="/tshirts">Свитшоты</a>
          </li>
          <li className="header-menu-item">
            <a href="/tshirts">Штаны</a>
          </li>
          <li className="header-menu-item">
            <a href="/tshirts">Худи</a>
          </li>
          <li className="header-menu-item">
            <a href="/tshirts">Шапки</a>
          </li>
          <li className="header-menu-item">
            <a href="/tshirts">Обувь</a>
          </li>
        </ul>
      </header>
      <div className="pageDimmer"></div>
      <main>
        <video className="bg-video" loop autoPlay playsInline muted>
          <source src="/video/bg.mp4?" type="video/mp4" />
        </video>

        <div className="tagline">
          <h2>Одежда, достойная <span className="emphasize">вашего</span> неповторимого стиля</h2>
        </div>
      </main>
    </div>
  );
};
