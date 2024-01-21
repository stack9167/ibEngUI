import React, { useState } from "react";
import { Animated } from "react-animated-css";
import { useTranslation } from "react-i18next";

import heroImg from "../../Asset/Img/whoAreWeHeroImg.png";
import intialConOne from "../../Asset/Img/initialConOne.png";
import intialConTow from "../../Asset/Img/initialConTwo.png";
import heroImgMobile from "../../Asset/Img/missionAndVIsionMobile.jpeg";

import style from "./missionAndVision.module.scss";

function MissionAndVision() {
  const [containerOne, setContainerOne] = useState(false);
  const [containerTwo, setContainerTwo] = useState(false);
  const [containerThree, setContainerThree] = useState(false);
  const [isMobile] = useState(
    Math.min(window.screen.width, window.screen.height) < 768 ||
      navigator.userAgent.indexOf("Mobi") > -1
  );
  const { i18n, t } = useTranslation();

  return (
    <div className={style.whoWeAreContaineParent}>
      <div className={style.heroContainer}>
        <div className={style.imgTextContainer}>
          <img
            alt="hero img"
            src={isMobile ? heroImgMobile : heroImg}
            className={style.heroImg}
          />
          <div className={style.heroImgOverLay} />
          <Animated
            animationIn="slideInLeft"
            animationOut="fadeOut"
            isVisible={true}
            animationInDelay={500}
            animationInDuration={1000}
          >
            <div className={style.heroText}>
              <div
                className={`${style.borderUnderLine} ${
                  i18n.language === "he" && style.textCenter
                }`}
              >
                {t("missionVissionHeading")}
              </div>
            </div>
          </Animated>
        </div>
        <div className={style.vissionContainer}>
          <Animated
            animationIn="slideInRight"
            animationOut="fadeOut"
            isVisible={true}
            animationInDelay={500}
            animationInDuration={1000}
          >
            <div className={style.rectBox}>{t("visionLabel")}</div>
          </Animated>
        </div>
        <div className={style.verticalLine} />
      </div>
      <div className={style.initialParent}>
        <div className={style.initialBorderContainerOne}>
          <div className={style.rightTopBorder} />
          <div className={`${style.initialborderContainerHeadingOne} `}>
            <div
              className={`${style.heading} ${style.containerTwoHeadingWidth}`}
            >
              <Animated
                animationIn="slideInLeft"
                animationOut="fadeOut"
                isVisible={true}
                animationInDelay={500}
                animationInDuration={1000}
              >
                {t("visionTextOne")}
              </Animated>
            </div>
            <div
              className={`${style.heading} ${style.containerTwoHeadingWidth} ${style.marginTop}`}
            >
              <Animated
                animationIn="slideInRight"
                animationOut="fadeOut"
                isVisible={true}
                animationInDelay={500}
                animationInDuration={1000}
              >
                {t("visionTextTwo")}
              </Animated>
            </div>
          </div>
        </div>
        <div
          className={style.initialBorderContainerTwo}
          onMouseEnter={() => setContainerOne(true)}
        >
          {containerOne && (
            <Animated
              animationIn="fadeInUp"
              animationOut="fadeInUp"
              isVisible={containerOne}
              animationInDelay={500}
              animationInDuration={1000}
              className={style.imgTextcontainer}
            >
              <img
                src={intialConOne}
                alt="initial"
                className={style.initialOneImg}
              />
              <div
                className={
                  isMobile ? style.mobileBlackHighlight : style.blackHighlight
                }
              >
                <div
                  className={`${style.textContainer} ${
                    isMobile && style.mobileText
                  }`}
                >
                  <div className={style.text}>{t("visionTextThree")}</div>
                  <div className={style.text}>{t("visionTextFour")}</div>
                </div>
              </div>
              {/* </Animated> */}
              {/* </div> */}
            </Animated>
          )}
        </div>
        <div
          className={style.initialBorderContainerThree}
          onMouseEnter={() => setContainerTwo(true)}
        >
          <div className={style.borderRightBottom} />
          {containerTwo && (
            <div className={style.lineTextContainer}>
              <Animated
                animationIn="slideInRight"
                animationOut="fadeInUp"
                isVisible={containerTwo}
                animationInDelay={500}
                animationInDuration={1000}
                className={`${style.vissionContainer} ${style.withBorderLTR} ${style.containerThreePosition}`}
              >
                <div className={style.rectBox}>{t("missionTitle")}</div>
              </Animated>
              <div className={style.verticalLine} />
              <Animated
                animationIn="slideInLeft"
                animationOut="fadeInUp"
                isVisible={containerTwo}
                animationInDelay={500}
                animationInDuration={1000}
              >
                <div
                  className={`${style.heading} ${style.initialContainerThreeText} ${style.smallLaptopMargin}`}
                >
                  {t("missionTextOne")}
                </div>
                <div
                  className={`${style.heading} ${style.initialContainerThreeText} ${style.smallLaptopMargin}`}
                >
                  {t("missionTextTwo")}
                </div>
              </Animated>
            </div>
          )}
        </div>
        <div
          className={style.initialBorderContainerFour}
          onMouseEnter={() => setContainerThree(true)}
        >
          <div className={style.topLeftBorder} />
          <div className={style.bottomLeftBorder} />
          {containerThree && (
            <div className={style.initialBorderImgContainer}>
              <Animated
                animationIn="fadeInUp"
                animationOut="fadeInUp"
                isVisible={containerThree}
                animationInDelay={500}
                animationInDuration={1000}
              >
                <img alt="img" src={intialConTow} className={style.heroImg} />
              </Animated>
              <Animated
                animationIn="fadeInUp"
                animationOut="fadeInUp"
                isVisible={containerThree}
                animationInDelay={500}
                animationInDuration={1000}
              >
                <div
                  className={
                    isMobile ? style.mobileHighlight : style.blackHighlight
                  }
                >
                  <div
                    className={`${style.textContainer} ${
                      isMobile && style.mobileText
                    }`}
                  >
                    <div className={style.text}>{t("missionTextThree")}</div>
                    <div className={style.text}>{t("missionTextFour")}</div>
                  </div>
                </div>
              </Animated>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MissionAndVision;
