import React, { useState } from "react";
import { Animated } from "react-animated-css";
import { useTranslation } from "react-i18next";

import TextInput from "../../Components/Input/TextInput";
import MailIcon from "../../Asset/Icon/mainIcon.png";
import linkedIn from "../../Asset/Icon/LinkedIn.png";
import facebook from "../../Asset/Icon/facebook.png";
import instagram from "../../Asset/Icon/Instagram.png";
import mobile from "../../Asset/Icon/mobile.png";
import mail from "../../Asset/Icon/mail.png";
import map from "../../Asset/Icon/map.png";
import cityBuldg from "../../Asset/Img/City Buildings.png";
import cityBuldgMobile from "../../Asset/Img/City BuildingsMobile.png";

import style from "./contactUs.module.scss";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

function ContactUs() {
  const [formData, setFormData] = useState({ ...initialFormData });
  const [contactForm, setContactForm] = useState(false);
  const [isMobile] = useState(
    Math.min(window.screen.width, window.screen.height) < 768 ||
      navigator.userAgent.indexOf("Mobi") > -1
  );
  const { i18n, t } = useTranslation();

  return (
    <div className={style.contactUsContainer}>
      {contactForm && (
        <Animated
          animationIn="fadeInUp"
          isVisible={true}
          animationInDelay={300}
          animationInDuration={500}
          className={style.outerContainer}
        >
          <div className={style.blackLine}></div>
          <div className={style.contactForm}>
            <div className={style.formContainer}>
              <div
                className={`${style.headingContainer} ${
                  i18n.language === "he" && style.rowReverse
                }`}
              >
                <div className={style.actualHeading}>
                  <h1 className={style.heading}>{t("contactUsTitleTwo")}</h1>
                  <div className={style.underline} />
                </div>
                <div>
                  <img
                    src={MailIcon}
                    alt="mail Icon"
                    className={style.mainIcon}
                  />
                </div>
              </div>
              <div className={style.form}>
                <TextInput
                  placeHolder={t("contactInputName")}
                  className={style.contactInput}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <TextInput
                  placeHolder={t("contactInputEmail")}
                  className={style.contactInput}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <TextInput
                  placeHolder={t("contactInputMobile")}
                  className={style.contactInput}
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
                <div className={style.inputContainer}>
                  <div className={style.inputLabel}>
                    {t("contactInputMessage")}
                  </div>
                  <textarea
                    rows={10}
                    cols={isMobile ? 45 : 70}
                    className={style.textArea}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>
                <div className={style.btnImgContainer}>
                  <button className={style.submitBtn}>Submit</button>
                  {isMobile && (
                    <img
                      src={cityBuldgMobile}
                      alt="cityBuldgMobile"
                      className={style.btnCityBuldg}
                    />
                  )}
                </div>
              </div>
            </div>
            {!isMobile && (
              <div className={style.detailsContainer}>
                <div className={style.iconLabelContainer}>
                  <img
                    src={mobile}
                    alt="mobile"
                    className={`${style.detialsIcon} ${style.borderIcon}`}
                  />
                  <label className={style.detialsLabel}>
                    {i18n.language === "en" && t("phoneLabel")} 04-8889810{" "}
                    {i18n.language === "he" && t("phoneLabel")}
                  </label>
                </div>
                <div className={style.iconLabelContainer}>
                  <img
                    src={mail}
                    alt="mail"
                    className={`${style.detialsIcon} ${style.borderIcon}`}
                  />

                  <label className={style.detialsLabel}>
                    {i18n.language === "en" && t("emailLabel")}{" "}
                    Office@ibengineer.com{" "}
                    {i18n.language === "he" && t("emailLabel")}
                  </label>
                </div>
                <div className={style.iconLabelContainer}>
                  <img src={map} alt="map" className={style.detialsIcon} />
                  <label className={style.detialsLabel}>
                    {i18n.language === "en" && t("officeLabel")}
                    {t("officeAddressValue")}
                    {i18n.language === "he" && t("officeLabel")}
                  </label>
                </div>
                <div className={style.detialsSubText}>
                  {t("socialMediaLabel")}
                </div>
                <div className={style.socialMediaIconcontainer}>
                  <img
                    onClick={() => {
                      window.location.href =
                        "https://www.facebook.com/profile.php?id=61550946452760";
                    }}
                    src={facebook}
                    alt="facebook"
                    className={style.mediaIcon}
                  />
                  <img
                    src={instagram}
                    alt="instagram"
                    className={style.mediaIcon}
                  />
                  <img
                    onClick={() => {
                      window.location.href =
                        "https://www.linkedin.com/company/ibeng/about/";
                    }}
                    src={linkedIn}
                    alt="facebook"
                    className={style.mediaIcon}
                  />
                </div>
                <div className={style.cityBuldContainer}>
                  <img
                    className={style.cityBuldg}
                    src={cityBuldg}
                    alt="city building"
                  />
                </div>
              </div>
            )}
          </div>
        </Animated>
      )}
      {!contactForm && (
        <>
          {!contactForm && (
            <Animated
              animationOut="hinge"
              isVisible={true}
              animationOutDuration={300}
              className={style.contactUsHero}
            >
              <div className={style.backgroundShade} />
              <div className={style.herotextContainer}>
                <h1 className={style.heroMaintext}>{t("contactUsTitle")}</h1>
                <div className={style.heroSubText}>
                  {t("contactSubTitleOne")}
                </div>
                <div className={style.actualSubText}>
                  {t("contactSubTitleTwo")}
                </div>
                <button
                  className={style.contactUsBtn}
                  onClick={() => setContactForm(true)}
                >
                  {t("contactUsBtnText")}
                </button>
                <div className={style.greyTextContainer}>
                  {t("allRightsReserved")}
                </div>
              </div>
            </Animated>
          )}
        </>
      )}
    </div>
  );
}

export default ContactUs;
