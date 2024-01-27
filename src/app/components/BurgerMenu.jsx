import React from 'react'
import './BurgerMenu.css'
import { animateScroll, scroller } from 'react-scroll';

export default function BurgerMenu({className, closeBurger, isDarkMode, switchTheme}) {
  const scrollToSection = (id) => {
    scroller.scrollTo(id, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };
  
  return (

    <div className={className}>
        <div className="burger-nav">
            <ul className="burger-list">
                <li className="burger-list-item mb-[1rem]"><a onClick={() => {closeBurger(); scrollToSection("service")}} href="#service" className="burger-link">О сервисе</a></li>
                <li className="burger-list-item mb-[1rem]"><a onClick={() => {closeBurger(); scrollToSection("advantages")}} href="#advantages" className="burger-link">Преимущества</a></li>
                <li className="burger-list-item mb-[1rem]"><a onClick={() => {closeBurger(); scrollToSection("tarifs")}} href="#tarifs" className="burger-link">Тарифы</a></li>
                <li className="burger-list-item mb-[1rem]"><a onClick={() => {closeBurger(); scrollToSection("articles")}} href="#articles" className="burger-link">Статьи</a></li>
                <li className="burger-list-item mb-[1rem]"><a onClick={() => {closeBurger(); scrollToSection("order")}} href="#order" className="burger-link">Заказать</a></li>
            </ul>
            <div className="flex md:flex lg:flex border border-white border-solid rounded w-[10.5rem]">
            <div
              onClick={switchTheme}
              className={`  text-[1rem]  mr-[-0.3rem] w-[5.55rem] h-[1.625rem] text-center cursor-pointer rounded border border-white ${
                !isDarkMode ? "text-[wheat]" : "bg-violet-500"
              }  font-[Gilroy-Regular] `}
            >
              тёмная
            </div>
            <div
              onClick={switchTheme}
              className={` font-normal cursor-pointer w-[5.5rem] text-[1rem] h-[1.625rem] text-center  ${
                !isDarkMode ? "bg-white" : "text-[wheat]"
              }  rounded text-[wheat] font-[Gilroy-Regular]  `}
            >
              светлая
            </div>
          </div>
        </div>
    </div>
  )
}
