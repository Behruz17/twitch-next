"use client";
import Image from "next/image";
import photo from "./assets/images/desk.png";
import dots from "./assets/images/dots.png";
import dotsDark from "./assets/images/Group 8.png";
import Card from "./components/Card";
import TarifCard from "./components/TarifCard";
import dotss from "./assets/images/Frame 12.png";
import burgerMenu from "./assets/images/burger.svg";
import burgerMenuClose from "./assets/images/burger-x.svg";
import { useEffect, useState } from "react";
import darkBg from "./assets/images/Group-fon.png";
import lightBg from "./assets/images/fonn.png";
import deskDet from "./assets/images/Frame-desk.png";
import Articles from "./components/Articles";
import darkBigBg from "./assets/images/darcFon.png";
import lightBigBg from "./assets/images/lightFon.png";

import bigDarkServices from "./assets/images/bigDarkServices.png";
import bigLightServices from "./assets/images/bigLightServices.png";
import smallLightServices from "./assets/images/smallLightServices.png";
import smallDarkServices from "./assets/images/logBg.png";
import BurgerMenu from "./components/BurgerMenu";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export default function Home() {
  // new start
  const scrollToSection = (sectionId) => {
    scroll.scrollTo(sectionId, {
      duration: 500, // Animation duration in milliseconds
      smooth: "easeInOutQuart", // Animation timing function
    });
  };

  // new end

  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const [iconSrc, setIconSrc] = useState("assets/burger.svg");

  const handleButtonClick = () => {
    setShowBurgerMenu(!showBurgerMenu);
  };

  function closeBurger() {
    setShowBurgerMenu(false);
  }

  useEffect(() => {
    showBurgerMenu === true
      ? setIconSrc(burgerMenuClose)
      : setIconSrc(burgerMenu);
  }, [showBurgerMenu]);

  //new end
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function switchTheme() {
    setIsDarkMode(!isDarkMode);
  }

  const bgImg = isDarkMode
    ? isSmallScreen
      ? darkBg.src
      : darkBigBg.src
    : isSmallScreen
    ? lightBg.src
    : lightBigBg.src;
  const bgImgFon = isDarkMode
    ? isSmallScreen
      ? smallDarkServices.src
      : bigDarkServices.src
    : isSmallScreen
    ? smallLightServices.src
    : bigLightServices.src;
  console.log(bgImg);
  const mainCard = isDarkMode ? dotsDark.src : dotsDark.src;

  return (
    <div className="overflow-hidden">
      <section>
        {showBurgerMenu ? (
          <BurgerMenu
            switchTheme={switchTheme}
            isDarkMode={isDarkMode}
            closeBurger={closeBurger}
            className="burger-menu-block menu-opened"
          />
        ) : (
          <BurgerMenu
            closeBurger={closeBurger}
            className="burger-menu-block menu-closed"
          />
        )}
        <header
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          // pb-[8rem]
          className="lg:pb-[11.8rem] xl:pb-[13.4rem] 2xl:pb-[15.4rem] md:pb-[8.8rem] sm:pb-[0rem] "
        >
          <div className="flex justify-between  md:items-center  lg:items-center pt-[3rem] md:pt-[3.2rem] lg:pt-[3.3rem] px-[2.1rem] md:px-[8rem] lg:px-[8.43rem] ">
            <div className="cursor-pointer text-3xl  font-[Angry-Regular] text-white w-min">
              LOGO
            </div>
            <div className="w-[34.75rem] hidden sm:hidden  md:flex lg:flex gap-[1.2rem]  ">
              <ScrollLink
                to="service"
                smooth={true}
                duration={500}
                className="cursor-pointer text-white text-lg font-normal font-[Gilroy-Regular]"
              >
                О сервисе
              </ScrollLink>
              <ScrollLink
                to="advantages"
                smooth={true}
                duration={500}
                className="cursor-pointer text-white text-lg font-normal font-[Gilroy-Regular] "
              >
                Преимущества
              </ScrollLink>
              <ScrollLink
                to="tarifs"
                smooth={true}
                duration={500}
                className="cursor-pointer text-white text-lg font-normal font-[Gilroy-Regular] "
              >
                Тарифы
              </ScrollLink>
              <ScrollLink
                to="articles"
                smooth={true}
                duration={500}
                className="cursor-pointer text-white text-lg font-normal font-[Gilroy-Regular] "
              >
                Статьи
              </ScrollLink>
              <ScrollLink
                to="contacts"
                smooth={true}
                duration={500}
                className="cursor-pointer text-white text-lg font-normal font-[Gilroy-Regular] "
              >
                Заказать
              </ScrollLink>
            </div>
            <div className="flex sm:hidden hidden  md:flex lg:flex border border-white border-solid rounded">
              <div
                onClick={switchTheme}
                className={`text-white  text-[1rem] mr-[-0.3rem] w-[5.55rem] h-[1.625rem] text-center cursor-pointer rounded border border-white ${
                  !isDarkMode ? "" : "bg-violet-500"
                }  font-[Gilroy-Regular] `}
              >
                тёмная
              </div>
              <div
                onClick={switchTheme}
                className={`text-violet-950 font-normal cursor-pointer w-[5.5rem] text-[1rem] h-[1.625rem] text-center  ${
                  !isDarkMode ? "bg-white" : "text-white"
                }  rounded  font-[Gilroy-Regular]  `}
              >
                светлая
              </div>
            </div>
            <div className=" flex items-center hidden justify-center w-[10.2rem] h-[2.2rem] bg-violet-500 text-[1rem] text-white  sm:hidden  md:flex lg:flex rounded border border-white ">
              Регистрация/Вход
            </div>
            <Image
              src={iconSrc}
              width={20}
              height={20}
              alt="Group"
              className="w-[1.875rem] h-[1.25rem] md:hidden lg:hidden "
              onClick={handleButtonClick}
            />
            <Image
              src={dotss}
              alt="dots3"
              className="absolute w-[5rem] top-[13.5rem] left-[22rem] md:hidden lg:hidden"
            />
          </div>
          <div className=" md:ml-[8.43rem] lg:ml-[8.43rem] mt-[2.9rem] md:mt-[5.6rem] md:block lg:block md:w-[26.5rem]">
            <div className=" text-center md:w-[23rem] md:text-[3.1rem] lg:text-[3.1rem] md:text-left lg:text-left  lg:w-[23.25rem] text-white text-5xl px-[2.1rem] md:px-[0rem] lg:px-[0rem] mx-auto md:m-[0] lg:m-[0] mt-[2.1rem] md:mt-[0] lg:mt-[0] font-normal p2MASS-J1808 leading-1">
              Накрутка зрителей на Twitch
            </div>
            <div className="w-[19rem] md:w-[26.1rem] md:mt-[1.9rem] lg:mt-[1.9rem]   mt-[2.1rem] md:leading-[1.9rem] lg:leading-[1.9rem] md:text-left lg:text-left md:text-[1.6rem]   text-center text-white text-2xl mx-auto md:m-[0] lg:m-[0] font-normal font-[Gilroy-Regular]">
              Увеличим вашу аудиторию в разы!
            </div>
          </div>

          <div className=" flex md:ml-[8.43rem]  md:z-[2]  relative items-center md:block lg:block md:mt-[5rem]  justify-center mt-[21.7rem] pb-[17rem] md:pb-[0rem]">
            <div className="w-[19.1rem] button_box-shadow h-[5.6rem]  bg-gradient-to-r from-cyan-300 to-sky-500 rounded-md shadow inline-flex items-center gap-2.5 hover:bg-gradient-to-r cursor-pointer hover:from-cyan-400 hover:to-sky-600 transition-all">
              <div className=" text-center m-auto text-white text-[1.6rem] font-normal p2MASS-J1808 uppercase leading-snug">
                накрутить
              </div>
            </div>
          </div>

          <Image
            src={deskDet}
            alt="desk"
            className="sm:hidden hidden  md:block lg:block mt-[-0.5rem] ml-[0.625rem]   relative z-[1]"
          />
        </header>

        <section className={`${isDarkMode ? "bg-[#291A5D]" : ""}`}>
          <div
            id="service"
            className="md:w-[79.6rem] lg:w-[79.6rem] flex flex-col lg:flex-row-reverse  lg:justify-end md:flex-row-reverse md:justify-end"
          >
            <div>
              <div
                id="NewRootRoot"
                className="mt-[2rem] md:mt-[1rem] l  md:ml[3.6rem]   ml-[2.6rem] md:mb-[2.8rem] mb-[4rem] "
              >
                <div
                  className={`${
                    isDarkMode ? "text-white" : ""
                  } text-4xl md:text-[3.6rem] font-['2MASS_J1808'] leading-[2.25rem] uppercase text-[#4f4f4f]`}
                >
                  О сервисе
                </div>
              </div>
              <div
                className={`ml-[2.6rem] md:ml[3.6rem] ${
                  isDarkMode ? "text-white" : ""
                }   w-[24.06rem] md:w-[36.2rem]   h-[20.75rem] md:h-[30.75rem]  text-neutral-600 text-xs font-normal font-[Gilroy-Regular] leading-7 md:leading-[2rem]  text-xs md:text-2xl lg:text-2xl md:text-2xl`}
              >
                Каковы преимущества работы с нами? Предлагаем уникальные
                возможности для значительного увеличения аудитории вашего канала
                на Twitch. Наш личный кабинет поможет вам привлечь больше
                зрителей, увеличить количество просмотров и получить новых
                подписчиков.
                <br />
                <br />
                Мы гарантируем безопасность. Наш подход основан на соблюдении
                политики безопасности и правил платформы. Мы не требуем ваш
                пароль или другие личные данные, что гар7антирует полную
                конфиденциальность. Наша репутация подкреплена тысячами
                довольных клиентов, которые уже воспользовались нашими услугами
                и успешно развивают свои каналы на Twitch.
              </div>
            </div>
            <div className="mt-[2.6rem] mb-[4rem] md:mt-[0rem] md:mb-[7.06rem]">
              <Image
                src={photo}
                alt="1"
                className="w-[20rem]  h-[20rem] md:w-[40.8rem]  md:h-[40.7rem] lg:h-[40rem]"
              />
            </div>
          </div>
          <div
            id="advantages"
            className={`ml-[1.5rem] md:w-[75rem] lg:w-[75rem] md:mx-auto lg:mx-auto mb-[3.6rem] md:text-[3.6rem] lg:text-[3.6rem] md:mb-[4.9rem] h-[3.6rem] text-neutral-600 text-4xl font-normal p2MASS-J1808 ${
              isDarkMode ? "text-white" : ""
            } uppercase leading-9`}
          >
            Преимущества
          </div>
          <div className="relative">
            <Image
              src={deskDet}
              alt="dots"
              className=" md:flex sm:hidden hidden   absolute   mt-[362px] "
            />
            <div className="md:block  lg:block  md:w-[72rem] lg:w-[72.5rem]  mx-auto ">
              <div className="md:justify-between lg:justify-between  md:pb-[2.5rem]  sm:block   md:flex lg:flex md:items-center  lg:items-center ">
                <div
                  className={`relative  bg-[#9146FF] rounded-[6rem] mb-[3.75rem]  mx-auto md:m-[0rem] w-[22.5rem] md:h-[25.8rem] l lg:h-[25.8rem] h-[25.8rem]  `}
                >
                  <div
                    className={` ${
                      isDarkMode ? "drop-shadowBlock" : ""
                    }   w-[22.5rem] h-[25.8rem] w-[22.5rem]   rounded-br-[12rem] rounded-[0.75rem]   bg-[#291A5D] `}
                  >
                    <div className="w-[16.6rem] mx-auto pt-[2.8rem]">
                      <div className="text-zinc-100 text-xl font-normal p2MASS-J1808 mb-[1rem]">
                        Соответствие
                      </div>
                      <div className=" text-zinc-100 text-xl font-normal font-[Gilroy-Regular] leading-[2rem]">
                        100% соответствие реальным зрителям. Наши зрители
                        просматривают рекламу, участвуют в голосованиях,
                        прогнозах и рейдах, пишут в чат и подписываются на
                        каналы
                      </div>
                    </div>
                  </div>
                </div>

                <Image
                  src={dots}
                  alt="dots"
                  className=" absolute sm:flex  md:hidden lg:hidden  mt-[-5.5rem] w-[12.5rem]"
                />

                <div className=" md:mt-[0rem] lg:mt-[0rem] ">
                  <Card
                    isDarkMode={isDarkMode}
                    title="Анонимность"
                    text="Мы не передаем данные наших клиентов третим лицам"
                    className=""
                  />
                </div>
                <Card
                  isDarkMode={isDarkMode}
                  title="Безопасность"
                  text="Наши зрители идентичны настоящим и соблюдают правила использования площадки Twitch, что гарантирует вам полную безопасность"
                />
              </div>

              <div className="sm:block md:justify-between lg:justify-between  md:flex lg:flex">
                <Card
                  isDarkMode={isDarkMode}
                  title="Индивидуальный подход"
                  text="Мы подходим индивидуально к каждому клиенту, даем рекомендации по развитию канала и легко дорабатываем недостающий функционал"
                />
                <Card
                  isDarkMode={isDarkMode}
                  title="Техническая поддержка"
                  text="Наша поддержка всегда на связи и готова оказать помощь в любое время суток"
                />
                <Card
                  isDarkMode={isDarkMode}
                  title="Эффективность"
                  text="Наша уникальная технология не имеет аналогов во всем мире и уже доказала свою эффективность в работе с популярными стримерами"
                />
              </div>
            </div>
          </div>
        </section>
        <section
          className="fon pb-[20rem] "
          style={{ backgroundImage: `url(${bgImgFon})` }}
        >
          <div className=" md:w-[72rem]   mx-auto ">
            <div className=" md:pb-[3.6rem] lg:pb-[3.7re] pt-[20rem] md:pt-[23.06rem] pb-[6.4rem] md:pb-[3.6rem] text-center md:text-start lg:text-start text-white text-4xl md:text-[3.6rem] font-normal p2MASS-J1808 uppercase leading-9">
              Услуги и цены
            </div>
            <div
              id="tarifs"
              className="flex items-center flex-col md:flex-row md:justify-center lg:flex-row gap-[3.3rem] md:gap-[2.5rem]"
            >
              <TarifCard
                bgColor="bg-purple-600"
                hit={true}
                title="Зрители"
                list1="Авторизованные зрители"
                list2="Расхождение до 5%"
                list3="Обход проверок"
                list4="Техническая поддержка"
                list5="Полный возврат средств при неполадках"
                choice="Выберите количество зрителей: "
                period="Выберите период:"
                manth="Месяц"
                select={true}
              />
              <TarifCard
                bgColor="bg-purple-900"
                hit={false}
                title="Фолловеры"
                list1="Пожизненная гарантия"
                list2="Расхождение до 5% "
                list3="На большой заказ цена меньше!"
                list4="Техническая поддержка"
                list5="Интервал подписок доступен в панели"
                choice="Выберите количество фолловеров:"
                select={false}
                period="_"
              />
              <TarifCard
                bgColor="bg-[#4200A4]"
                hit={false}
                title="Просмотры"
                list1="Пожизненная гарантия"
                list2="Без расхождения "
                list3="На большой заказ цена меньше!"
                list4="Техническая поддержка"
                list5="Интервал просмотров доступен в панели"
                choice="Выберите количество просмотров:"
                period="Выберите цель:"
                manth="Выбрать"
                select={true}
              />
            </div>
          </div>
        </section>

        <section
          className={`${
            isDarkMode ? "bg-[#291A5D]" : ""
          }  md:pl-[9rem] md:pr-[9rem] md:block flex flex-col items-center`}
        >
          <div
            id="articles"
            className={`${
              isDarkMode ? "text-white" : ""
            } self-start pl-[1.9rem] pt-[7.1rem] md:pt-[0rem] md:pl-[0rem] rounded-br-[6.25rem] mb-[3.5rem] md:mb-[3.9rem]  text-neutral-600 md:text-[3.5rem] text-4xl font-normal p2MASS-J1808 uppercase leading-9`}
          >
            статьи
          </div>

          <Articles isDarkMode={isDarkMode} />
        </section>
        <section
          className={`pl-[2rem] md:pl-[0rem] ${
            isDarkMode ? "bg-[#291A5D]" : ""
          } `}
        >
          <div className="md:w-[72.5rem] md:mx-auto md:pb-[2rem]">
            <div
              id="order"
              className={`${
                isDarkMode ? "text-[#fff]" : "text-neutral-600"
              } w-[22.6rem] md:hidden   text-2xl font-normal font-[Gilroy-Regular] uppercase pt-[4.93rem] leading-[1.9rem]`}
            >
              Введите свои контактные данные и мы с Вами свяжемся
            </div>
            <div className="text-center sm:hidden hidden md:block pt-[5.8rem] text-violet-500 text-xl  font-normal p2MASS-J1808 underline uppercase leading-tight">
              Смотреть больше статей
            </div>
            <div
              className={`${
                isDarkMode ? "bg-[#64DCFA]" : "bg-[#9146FF]"
              } relative  rounded-[0.7rem] md:rounded-[6rem]   w-[22.6rem] h-[34.8rem] md:h-[30.2rem]  md:w-[72.5rem]`}
            >
              <div
                className={`${
                  isDarkMode ? "bg-[#FFF]" : "bg-[#291A5D]"
                } flex flex-col md:pl-[3.75rem]    rounded-br-[5rem] md:rounded-br-[15rem] md:h-[30.2rem] h-[34.8rem] justify-center rounded-[0.7rem]   mt-[6.5rem] md:w-[72.5rem] w-[22.6rem] pb-[4.4rem] md:pb-[5.25rem] pt-[3.7rem] md:pt-[4.8rem] `}
              >
                <div
                  id="order"
                  className={`${
                    isDarkMode ? "text-[#4F4F4F]" : "text-zinc-100"
                  } md:pl-[1rem]   text-[1.5rem] sm:hidden hidden md:block lg:block font-normal p2MASS-J1808 uppercase leading-[30.12px]`}
                >
                  Введите свои контактные данные и мы с Вами свяжемся
                </div>
                <div className="  md:mt-[3.4rem] ">
                  <div className="md:flex md:w-[35rem] md:items-center sm:block block md:justify-between md:mb-[1.75rem] ">
                    <input
                      type="text"
                      placeholder="Введите имя"
                      className={`flex mx-auto w-[19.19rem] md:w-[16.25rem]  md:h-[3.75rem] md:m-[0rem]  pt-[0.9rem] pb-[0.9rem] pl-[2.1rem] pr-[9.rem]   rounded-md text-neutral-500 text-xs font-normal font-[Gilroy-Regular] leading-snug tracking-wid border-none outline-none ${
                        isDarkMode ? "bg-[#F3F3F3]" : "bg-white"
                      }`}
                    />

                    <input
                      type="text"
                      placeholder="Введите почту"
                      className={`flex mb-[2.07rem] md:mb-[0rem] md:w-[16.25rem]  md:h-[3.75rem]  md:mt-[0rem] mt-[2.07rem] mx-auto md:m-[0rem] w-[19.19rem] pt-[0.9rem] pb-[0.9rem] pl-[2.1rem] pr-[9.4rem]  rounded-md text-neutral-500 text-xs font-normal font-[Gilroy-Regular] leading-snug tracking-wid border-none outline-none ${
                        isDarkMode ? "bg-[#F3F3F3]" : "bg-white"
                      }`}
                    />
                  </div>
                  <div className="   flex flex-col md:flex-row  gap-[2.75rem] md:gap-[5rem] items-center ">
                    <input
                      type="text"
                      placeholder="Введите текст"
                      className={`pt-[0.8rem] pb-[6.75rem]  md:w-[35rem]  mx-auto md:m-[0rem] w-[19.2rem] md:pt-[0.9rem] md:pb-[7.5rem] pl-[2.1rem]  md:pl-[3.75rem]  rounded-md text-neutral-500 text-xs font-normal font-[Gilroy-Regular] leading-snug tracking-wid border-none outline-none  ${
                        isDarkMode ? "bg-[#F3F3F3]" : "bg-white"
                      }`}
                    />

                    <div className="hover:bg-gradient-to-r cursor-pointer hover:from-cyan-400 hover:to-sky-600 transition-all button_box-shadow  w-[20rem] h-[5.6rem] px-[3,75rem] py-[3,75] bg-gradient-to-r from-cyan-300 to-sky-500 rounded-md shadow justify-center items-center gap-[0.16rem] inline-flex">
                      <div className=" text-center text-white text-[1.6rem] font-normal p2MASS-J1808 uppercase leading-snug">
                        Отправить
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className={`pt-[0rem] mt-[] footer_fon pb-[4.75rem] md:pb-[6.8rem] ${
            isDarkMode ? "bg-[#291A5D]" : ""
          }`}
        >
          <div className="h-[10rem]  " />
          <div className="text-center mt-[4rem] mb-[2.06rem] text-white text-3xl font-normal font-[Angry-Regular]">
            logo
          </div>
          <div />
          <div className="sm:dlock md:flex  dlock md:w-[31.5rem] md:mx-auto md:items-center md:justify-between ">
            <div className=" mb-[0.7rem] md:mb-[0rem] text-center text-white text-lg font-normal font-[Gilroy-Regular] leading-[3rem]">
              Преимущества
            </div>
            <div className="mb-[0.7rem] md:mb-[0rem] text-center text-white text-lg font-normal font-[Gilroy-Regular] leading-[3rem]">
              О сервисе
            </div>
            <div className="mb-[0.7rem] md:mb-[0rem] text-center text-white text-lg font-normal font-[Gilroy-Regular] leading-[3rem">
              Тарифы
            </div>
            <div className="text-center text-white text-lg font-normal font-[Gilroy-Regular] leading-[3rem]">
              Заказать
            </div>
          </div>
          <div />
        </section>
      </section>
    </div>
  );
}
