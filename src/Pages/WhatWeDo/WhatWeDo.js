import React, { useState } from "react";
import { Animated } from "react-animated-css";
import { useTranslation } from "react-i18next";

import containerOneImg from "../../Asset/Img/containeroneImg.png";
import containerTwoImg from "../../Asset/Img/containerTwoImg.png";
import greyContainer1 from "../../Asset/Img/greycontainer1.png";
import greyContainer2 from "../../Asset/Img/greyContainer2.png";
import greyContainer3 from "../../Asset/Img/greyContainer3.png";
import greyContainer4 from "../../Asset/Img/greyContainer4.png";
import whatWeDoMobile1 from "../../Asset/Img/whatWedoMobile1.png";
import whatWeDoMobile2 from "../../Asset/Img/whatWeDoMobile2.png";
import mobileRedDot from "../../Asset/Icon/mobileRedDot.png";
import redDot from "../../Asset/Img/redDot.png";

import style from "./whatWeDo.module.scss";

function WhatWeDo() {
  const [containerOne, setContainerOne] = useState(false);
  const [containerTwo, setContainerTwo] = useState(false);
  const [containerThree, setContainerThree] = useState(false);
  const [containerFour, setContainerFour] = useState(false);
  const [isMobile] = useState(
    Math.min(window.screen.width, window.screen.height) < 768 ||
      navigator.userAgent.indexOf("Mobi") > -1
  );

  const { i18n, t } = useTranslation();

  return (
    <div className={style.whatWeDoContainer}>
      <div className={style.twoColumnContainer}>
        <div className={style.containerOne}>
          <div className={style.containerOneCard}>
            {isMobile ? (
              <div className={style.mobileCardHeading}>
                <div className={style.heading}>{t("whatWeDoTitleOne")}</div>
                <div className={style.heading}>{t("whatWeDoTitleTwo")}</div>
                <div className={style.heading}>{t("whatWeDoTitleThree")}</div>
              </div>
            ) : (
              <div className={style.cardHeading}>
                {t("whatWeDoTitleOne")}
                <br />
                {t("whatWeDoTitleTwo")}
                <br />
                {t("whatWeDoTitleThree")}
              </div>
            )}
            <Animated
              animationIn="fadeInUp"
              isVisible={true}
              animationInDelay={500}
              animationInDuration={1000}
            >
              <img
                src={isMobile ? whatWeDoMobile2 : containerOneImg}
                alt="containerOneImg"
                className={style.containerOneImg}
              />
            </Animated>
          </div>
        </div>
        <div className={style.containerTwo}>
          <Animated
            animationIn="fadeInDown"
            isVisible={true}
            animationInDelay={500}
            animationInDuration={1000}
          >
            <img
              src={isMobile ? whatWeDoMobile1 : containerTwoImg}
              alt=""
              className={style.containerTwoimg}
            />
          </Animated>
          <Animated
            animationIn="fadeInDown"
            isVisible={true}
            animationInDelay={500}
            animationInDuration={1000}
          >
            <div className={style.verticalDevider} />
          </Animated>
        </div>
      </div>
      <div className={style.greyContainer}>
        <div
          className={style.imageTextContainer}
          onMouseEnter={() => setContainerOne(true)}
        >
          {containerOne && (
            <div className={style.textIconContainer}>
              {i18n.language === "he" && (
                <Animated
                  className={style.mainGeadingZIndex}
                  animationIn="fadeInDown"
                  isVisible={true}
                  animationInDelay={500}
                  animationInDuration={1000}
                >
                  <img
                    src={isMobile ? mobileRedDot : redDot}
                    alt="red Dot"
                    className={style.redDot}
                  />
                </Animated>
              )}
              <Animated
                className={style.mainGeadingZIndex}
                animationIn="fadeInDown"
                isVisible={true}
                animationInDelay={500}
                animationInDuration={1000}
              >
                <div
                  className={`${style.containerHeading} ${style.contatinerTextOne}`}
                >
                  {t("whatWeDoContainerTitle")}
                </div>
              </Animated>
              {i18n.language === "en" && (
                <Animated
                  className={style.mainGeadingZIndex}
                  animationIn="fadeInDown"
                  isVisible={true}
                  animationInDelay={500}
                  animationInDuration={1000}
                >
                  <img
                    src={isMobile ? mobileRedDot : redDot}
                    alt="red Dot"
                    className={style.redDot}
                  />
                </Animated>
              )}
            </div>
          )}
          <div className={style.imgContainer}>
            <div className={style.imgShadeContainer}>
              {containerOne && (
                <Animated
                  animationIn="slideInLeft"
                  isVisible={true}
                  animationInDelay={500}
                  animationInDuration={1000}
                >
                  <img
                    src={greyContainer1}
                    alt="img 1"
                    className={style.greyImage}
                  />
                  <div className={style.shade} />
                </Animated>
              )}
            </div>
            <div className={style.alignContainer}>
              <div
                className={`${style.subTextContainer} ${style.firstTextContainer}`}
              >
                {containerOne && (
                  <Animated
                    animationIn="fadeIn"
                    isVisible={true}
                    animationInDelay={500}
                    animationInDuration={1000}
                    className={i18n.language === "he" && style.textRight}
                  >
                    <div className={style.imgTextChild}>
                      {t("whatWeDoContainerOne")}
                    </div>
                    <div className={style.imgTextChild}>
                      {t("whatWeDoContainerTwo")}
                    </div>
                    <div className={style.imgTextChild}>
                      {t("whatWeDoContainerThree")}
                    </div>
                  </Animated>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${style.imageTextContainerTwo} ${style.mobileImageTextContainerTwo}`}
          onMouseEnter={() => setContainerTwo(true)}
        >
          <div className={style.firstColumnContainer}>
            {!isMobile && (
              <div className={style.headingImgContainer}>
                {containerTwo && (
                  <Animated
                    animationIn="fadeInDown"
                    isVisible={true}
                    animationInDelay={500}
                    animationInDuration={1000}
                  >
                    <div className={style.verticalLine} />
                  </Animated>
                )}
                {containerTwo && (
                  <Animated
                    animationIn="slideInLeft"
                    isVisible={true}
                    animationInDelay={500}
                    animationInDuration={1000}
                    className={style.containerHeadingTwo}
                  >
                    {t("whatWeDoContainerFour")}
                  </Animated>
                )}
              </div>
            )}
            <div
              className={`${style.subTextContainer} ${style.firstTextContainer} ${style.topMarginTextContainer}`}
            >
              {containerTwo && (
                <Animated
                  animationIn="fadeIn"
                  isVisible={true}
                  animationInDelay={500}
                  animationInDuration={1000}
                  className={i18n.language === "he" && style.textRight}
                >
                  <div className={style.imgTextChild}>
                    {t("whatWedoContainerFive")}
                  </div>
                  <div className={style.imgTextChild}>
                    {t("whatWedoContainerSix")}
                  </div>
                  <div className={style.imgTextChild}>
                    {t("whatWedoContainerSeven")}
                  </div>
                </Animated>
              )}
            </div>
          </div>
          <div className={style.secondColumnContainer}>
            {isMobile && (
              <div className={style.headingImgContainerMobile}>
                {containerTwo && (
                  <Animated
                    animationIn="fadeInDown"
                    isVisible={true}
                    animationInDelay={500}
                    animationInDuration={1000}
                  >
                    <div className={style.verticalLine} />
                  </Animated>
                )}
                {containerTwo && (
                  <Animated
                    animationIn="slideInLeft"
                    isVisible={true}
                    animationInDelay={500}
                    animationInDuration={1000}
                    className={style.containerHeadingTwo}
                  >
                    <span translate="yes">בדיקת מבנים</span>
                  </Animated>
                )}
              </div>
            )}
            <div className={`${style.imgShadeContainer} ${style.imgMarginTop}`}>
              {containerTwo && (
                <Animated
                  animationIn="slideInRight"
                  isVisible={true}
                  animationInDelay={500}
                  animationInDuration={1000}
                  className={style.containerHeadingTwo}
                >
                  <img
                    src={greyContainer2}
                    alt="img 1"
                    className={`${style.greyImage} `}
                  />
                  <div className={style.shade} />
                </Animated>
              )}
            </div>
          </div>
        </div>
        <div
          className={style.imageTextContainerThree}
          onMouseEnter={() => setContainerThree(true)}
        >
          <div className={style.firstColumnContainer}>
            {isMobile && (
              <div className={style.headingImgContainerMobile}>
                {containerThree && (
                  <Animated
                    animationIn="fadeInDown"
                    isVisible={true}
                    animationInDelay={500}
                    animationInDuration={1000}
                  >
                    <div className={style.verticalLine} />
                  </Animated>
                )}
                {containerThree && (
                  <Animated
                    animationIn="slideInLeft"
                    isVisible={true}
                    animationInDelay={500}
                    animationInDuration={1000}
                    className={style.containerHeadingTwo}
                  >
                    עיצוב פנים
                    <span className={style.headingIcon}>IN</span>
                  </Animated>
                )}
              </div>
            )}
            {containerThree && (
              <Animated
                animationIn="slideInLeft"
                isVisible={true}
                animationInDelay={500}
                animationInDuration={1000}
                className={`${style.imgShadeContainer} ${style.imgMarginTop}`}
              >
                <img
                  src={greyContainer3}
                  alt="img 1"
                  className={`${style.greyImage} `}
                />
                <div className={style.shade} />
              </Animated>
            )}
          </div>
          <div className={style.secondColumnContainer}>
            <div className={style.headingImgContainer}>
              {containerThree && !isMobile && (
                <Animated
                  animationIn="fadeInDown"
                  isVisible={true}
                  animationInDelay={500}
                  animationInDuration={1000}
                >
                  <div className={style.verticalLine} />
                </Animated>
              )}
              <div
                className={`${style.imgShadeContainer} ${style.imgMarginTop}`}
              >
                {containerThree && !isMobile && (
                  <Animated
                    animationIn="slideInRight"
                    isVisible={true}
                    animationInDelay={500}
                    animationInDuration={1000}
                    className={`${style.containerHeadingThree} `}
                  >
                    <span translate="yes">{t("whatWedoContainerEight")}</span>
                    {i18n.language === "he" ? (
                      <img
                        src={isMobile ? mobileRedDot : redDot}
                        alt="red Dot"
                        className={style.redDot}
                      />
                    ) : (
                      <span className={style.headingIcon}>IN</span>
                    )}
                  </Animated>
                )}

                <div
                  className={`${style.subTextContainer} ${
                    style.thirdTextContainer
                  } ${style.topMarginTextContainer} ${
                    i18n.language === "he" && style.textRight
                  }`}
                >
                  {/* <div className={style.imgTextChild}> */}
                  {containerThree && (
                    <Animated
                      animationIn="fadeIn"
                      isVisible={true}
                      animationInDelay={500}
                      animationInDuration={1000}
                      className={style.imgTextChild}
                    >
                      <span translate="yes">{t("whatWedoContainerNine")}</span>
                    </Animated>
                  )}
                  {/* </div> */}
                  {containerThree && (
                    <Animated
                      animationIn="fadeIn"
                      isVisible={true}
                      animationInDelay={650}
                      animationInDuration={1000}
                      className={style.imgTextChild}
                    >
                      <span>{t("whatWedoContainerTen")}</span>
                    </Animated>
                  )}
                  {containerThree && (
                    <Animated
                      animationIn="fadeIn"
                      isVisible={true}
                      animationInDelay={800}
                      animationInDuration={1000}
                      className={style.imgTextChild}
                    >
                      <span>{t("whatWeDoContainerEleven")}</span>
                    </Animated>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${style.imageTextContainerTwo} ${style.mobilePaddingContainerTwo} ${style.mobileImageTextContainerTwo}`}
          onClick={() => setContainerFour(true)}
          onMouseEnter={() => setContainerFour(true)}
        >
          <div className={style.firstColumnContainer}>
            {!isMobile && (
              <div
                className={`${style.headingImgContainer} ${style.additionalContainerFourClass}`}
              >
                {containerFour && (
                  <Animated
                    animationIn="fadeInDown"
                    isVisible={true}
                    animationInDelay={500}
                    animationInDuration={1000}
                  >
                    <div className={style.verticalLine} />
                  </Animated>
                )}
                {containerFour && (
                  <Animated
                    animationIn="slideInLeft"
                    isVisible={true}
                    animationInDelay={500}
                    animationInDuration={1000}
                    className={`${style.containerHeadingFour} `}
                  >
                    {t("whatWeDoTwelve")}
                  </Animated>
                )}
              </div>
            )}
            <div
              className={`${style.subTextContainer} ${style.firstTextContainer} ${style.topMarginTextContainer}`}
            >
              {containerFour && (
                <Animated
                  animationIn="fadeIn"
                  isVisible={true}
                  animationInDelay={800}
                  animationInDuration={1000}
                  className={style.imgTextChild}
                >
                  <span translate="yes">{t("whatWeDoContainerThirteen")}</span>
                </Animated>
              )}
              {containerFour && (
                <Animated
                  animationIn="fadeIn"
                  isVisible={true}
                  animationInDelay={800}
                  animationInDuration={1000}
                  className={style.imgTextChild}
                >
                  <span translate="yes">{t("whatWeDoContainerFourteen")}</span>
                </Animated>
              )}
              {containerFour && (
                <Animated
                  animationIn="fadeIn"
                  isVisible={true}
                  animationInDelay={800}
                  animationInDuration={1000}
                  className={style.imgTextChild}
                >
                  {t("whatWeDoContainerFifteen")}
                </Animated>
              )}
            </div>
          </div>
          <div className={style.secondColumnContainer}>
            {isMobile && containerFour && (
              <div
                className={`${style.headingImgContainer} ${style.additionalContainerFourClass}`}
              >
                <Animated
                  className={style.mobileVerticalContainerFour}
                  animationIn="fadeInDown"
                  isVisible={true}
                  animationInDelay={500}
                  animationInDuration={1000}
                >
                  <div className={style.verticalLine} />
                </Animated>
                <Animated
                  animationIn="slideInLeft"
                  isVisible={true}
                  animationInDelay={500}
                  animationInDuration={1000}
                  className={`${style.containerHeadingFour} `}
                >
                  ייעוץ הנדסי
                </Animated>
              </div>
            )}
            {containerFour && (
              <Animated
                animationIn="slideInRight"
                isVisible={true}
                animationInDelay={500}
                animationInDuration={1000}
                className={`${style.imgShadeContainer} ${style.imgMarginTop}`}
              >
                <img
                  src={greyContainer4}
                  alt="img 1"
                  className={`${style.greyImage} `}
                />
                <div className={style.shade} />
              </Animated>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
