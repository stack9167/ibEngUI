import React, { useEffect, useState } from "react";
import { Animated } from "react-animated-css";
import { useTranslation } from "react-i18next";

import { projectDataHebrew, projectDataEnglish } from "../../utils";
import leftBackIcon from "../../Asset/Icon/backLeftIcon.png";
import city1 from "../../Asset/Img/City Buildings_1.png";
import city2 from "../../Asset/Img/City Buildings_2.png";
import city3 from "../../Asset/Img/City Buildings_3.png";
import upBtn from "../../Asset/Icon/upArrowBlue.png";
import downBtn from "../../Asset/Icon/downArrowBlue.png";
import whiteUpArrow from "../../Asset/Icon/whiteUpArrow.png";
import whiteDownArrow from "../../Asset/Icon/whiteDownArrow.png";
import mobileBackIcon from "../../Asset/Icon/mobileBackIcon.png";
import { onAuthenticated } from "../../API/Axios";
import Loading from "../../utils/Loading/Loading";
import { apiV1 } from "../../API/apiList";

import style from "./protfolio.module.scss";

const initialProjectSelectedData = {
  showProject: false,
  projectData: null,
};

function Protfolio() {
  const [projectSelected, setProjectSelected] = useState({
    ...initialProjectSelectedData,
  });
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [upMouse, setUpMouse] = useState(false);
  const [downMouse, setDownMouse] = useState(false);
  const [isMobile] = useState(
    Math.min(window.screen.width, window.screen.height) < 768 ||
      navigator.userAgent.indexOf("Mobi") > -1
  );
  const [project, setProject] = useState(null);
  const [pageLoading, setPageLoading] = useState(false);

  const { i18n, t } = useTranslation();

  useEffect(() => {
    if (!project) {
      const getProject = async () => {
        await onAuthenticated({ url: `${apiV1}/property`, method: "get" }).then(
          (res) => {
            setProject(res.data);
            setPageLoading(false);
          }
        );
      };
      getProject();
    }
  }, [project]);

  const generateDescription = (description) => {
    const descArr = description.split(".");
    return descArr.map((m) => <div className={style.subTextItem}>{m}</div>);
  };

  const projectData =
    i18n.language === "he" ? projectDataHebrew : projectDataEnglish;

  return (
    <div className={style.protfolioContainer}>
      {pageLoading ? (
        <Loading />
      ) : (
        <>
          {!projectSelected.showProject ? (
            <>
              <Animated
                animationIn="fadeIn"
                isVisible={true}
                animationInDelay={800}
                animationInDuration={1000}
                className={style.protfolioHeroContainer}
              >
                <div className={style.protfolioHeroContainerHighlight} />
                <div className={style.heroText}>
                  {t("protfoliHeadingOne")}
                  <br />
                  {t("protfoliHeadingTwo")}
                </div>
              </Animated>
              <div className={style.ourProjectContainer}>
                <div className={style.headingContainer}>
                  <div className={style.mainHeading}>
                    {t("protfoliSubHeadingOne")}
                  </div>
                  <div className={style.subHeading}>
                    <span className={style.dash} />
                    <span className={style.dashText}>
                      {t("protfoliSubHeadingTwo")}
                    </span>
                    <span className={style.dash} />
                  </div>
                </div>
              </div>
              <div className={style.actualprojectContainer}>
                <div className={style.projectCardContainer}>
                  {/* Array.isArray(project) && */}
                  {projectData.map((m, index) => (
                    <div
                      key={m._id}
                      className={style.projectCard}
                      onClick={() => {
                        setProjectSelected({
                          showProject: true,
                          projectData: index,
                        });
                        window.scroll(0, 0);
                      }}
                    >
                      <img
                        src={m.mainProject}
                        alt="project1"
                        className={style.projectImg}
                      />
                      <div className={style.imgOverLay} />
                      <div className={style.projectText}>{m.projectName}</div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div
              className={style.projectSelectedContainer}
              style={{
                background: `${
                  projectData[projectSelected.projectData || 0].imgBackground[
                    currentProjectIndex
                  ].background
                }`,
              }}
            >
              <div className={style.upperActionContainer}>
                <img
                  alt=""
                  src={isMobile ? mobileBackIcon : leftBackIcon}
                  className={style.leftIcon}
                  onClick={() => {
                    setCurrentProjectIndex(0);
                    setProjectSelected({
                      projectData: null,
                      showProject: false,
                    });
                  }}
                />
                {isMobile && (
                  <div className={style.heading}>
                    {projectData[projectSelected.projectData || 0].projectName}
                  </div>
                )}
              </div>
              <div className={style.imgtextContainer}>
                <div className={style.textContainer}>
                  {!isMobile && (
                    <div className={style.heading}>
                      {
                        projectData[projectSelected.projectData || 0]
                          .projectName
                      }
                    </div>
                  )}
                  {isMobile && (
                    <div className={style.btnContainer}>
                      <div
                        onMouseEnter={() => setUpMouse(true)}
                        onMouseLeave={() => setUpMouse(false)}
                        className={style.imgContainer}
                      >
                        <img
                          src={upMouse ? upBtn : whiteUpArrow}
                          onClick={(e) =>
                            currentProjectIndex === 0
                              ? e.preventDefault()
                              : setCurrentProjectIndex((data) => data - 1)
                          }
                          alt="up btn"
                          className={style.arrowBtn}
                        />
                      </div>
                      <div
                        onMouseEnter={() => setDownMouse(true)}
                        onMouseLeave={() => setDownMouse(false)}
                        className={style.imgContainer}
                      >
                        <img
                          src={downMouse ? downBtn : whiteDownArrow}
                          alt="down  btn"
                          onClick={(e) =>
                            currentProjectIndex + 1 ===
                            projectData[projectSelected.projectData || 0]
                              .imgBackground.length
                              ? e.preventDefault()
                              : setCurrentProjectIndex((data) => data + 1)
                          }
                          className={style.arrowBtn}
                        />
                      </div>
                    </div>
                  )}
                  <div className={style.subTextContainer}>
                    {/* {generateDescription(
                      projectData[projectSelected.projectData || 0]
                        .projectDetails
                    )} */}
                    {projectData[
                      projectSelected.projectData || 0
                    ].projectDetails.map((m) => (
                      <div
                        className={`${style.subTextItem} ${
                          i18n.language === "en" && style.textLeft
                        }`}
                      >
                        {m}
                      </div>
                    ))}
                    {/* <div className={style.subTextItem}>
                      {
                        projectData[projectSelected.projectData || 0]
                          .projectDetails[1]
                      }
                    </div> */}
                  </div>
                  <div className={style.cityImgConmtainer}>
                    <img src={city1} alt="city 1" className={style.city1Icon} />
                    <img src={city2} alt="city 2" className={style.city2Icon} />
                    <img src={city3} alt="city 3" className={style.city3Icon} />
                  </div>
                </div>
                <div className={style.imgContainer}>
                  {projectData[projectSelected.projectData].imgBackground.map(
                    (imgdata, imgIndex) => (
                      <>
                        {imgIndex === currentProjectIndex && (
                          <Animated
                            animationIn="fadeInUp"
                            animationOut="fadeOutUp"
                            isVisible={true}
                            animationInDelay={300}
                            animationInDuration={700}
                          >
                            <img
                              src={
                                projectData[projectSelected.projectData]
                                  .imgBackground[currentProjectIndex].img
                              }
                              className={style.projectImg}
                              alt="project Image"
                            />
                          </Animated>
                        )}
                      </>
                    )
                  )}
                  {!isMobile && (
                    <div className={style.btnAndLineContainer}>
                      <div className={style.lineContainer}>
                        {projectData[
                          projectSelected.projectData || 0
                        ].imgBackground.map((m, imgIndex) => (
                          <>
                            {currentProjectIndex === imgIndex ? (
                              <Animated
                                animationIn="pulse"
                                isVisible={true}
                                animationInDelay={300}
                                animationInDuration={700}
                                className={style.activeLine}
                              ></Animated>
                            ) : (
                              <div
                                className={`${style.line}`}
                                onClick={() => setCurrentProjectIndex(imgIndex)}
                              />
                            )}
                          </>
                        ))}
                      </div>
                      <div className={style.btnContainer}>
                        <div
                          onMouseEnter={() => setUpMouse(true)}
                          onMouseLeave={() => setUpMouse(false)}
                          className={style.imgContainer}
                        >
                          <img
                            src={upMouse ? upBtn : whiteUpArrow}
                            onClick={(e) =>
                              currentProjectIndex === 0
                                ? e.preventDefault()
                                : setCurrentProjectIndex((data) => data - 1)
                            }
                            alt="up btn"
                            className={style.arrowBtn}
                          />
                        </div>
                        <div
                          onMouseEnter={() => setDownMouse(true)}
                          onMouseLeave={() => setDownMouse(false)}
                          className={style.imgContainer}
                        >
                          <img
                            src={downMouse ? downBtn : whiteDownArrow}
                            alt="down  btn"
                            onClick={(e) =>
                              currentProjectIndex + 1 ===
                              projectData[projectSelected.projectData || 0]
                                .imgBackground.length
                                ? e.preventDefault()
                                : setCurrentProjectIndex((data) => data + 1)
                            }
                            className={style.arrowBtn}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Protfolio;
