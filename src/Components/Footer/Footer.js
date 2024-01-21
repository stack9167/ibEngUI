import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import mobile from "../../Asset/Icon/mobile.png";
import mail from "../../Asset/Icon/mail.png";
import map from "../../Asset/Icon/map.png";
import TextInput from "../Input/TextInput";
import Button from "../Button/Button";
import linkedIn from "../../Asset/Icon/LinkedIn.png";
import facebook from "../../Asset/Icon/facebook.png";
import instagram from "../../Asset/Icon/Instagram.png";
import { apiV1 } from "../../API/apiList";
import { onAuthenticated } from "../../API/Axios";
import { validateEmail } from "../../utils";

import style from "./footer.module.scss";

const initialFormData = {
  name: "",
  email: "",
  message: "",
};

function Footer() {
  const [formData, setFormData] = useState({ ...initialFormData });
  const [pageLoading, setPageLoading] = useState(false);
  const [validation, setvalidation] = useState({
    name: { show: false, message: "" },
    email: { show: false, message: "" },
    message: { show: false, message: "" },
  });
  const [formError, setFormError] = useState("");

  const { i18n, t } = useTranslation();

  const sendInquery = async () => {
    if (
      validation.name.show ||
      validation.email.show ||
      validation.message.show ||
      formData.email === "" ||
      formData.name === "" ||
      formData.message === ""
    ) {
      setFormError(t("contactFormError"));
    } else {
      setPageLoading(true);
      setFormError("");
      const payload = {
        url: `${apiV1}/inquery`,
        method: "post",
        data: formData,
      };
      await onAuthenticated(payload)
        .then((apiRes) => {
          setPageLoading(false);
          console.log("got res 200 ", apiRes);
        })
        .catch((err) => {
          setPageLoading(false);
          console.log(err);
        });
    }
  };

  return (
    <div className={style.footerContainer}>
      <div className={style.containerOne}>
        <ul className={style.contactInfoList}>
          <li className={style.contactListItem}>
            <img
              src={mobile}
              alt="phone"
              className={`${style.borderIcon} ${style.footerIcon}`}
            />
            <a
              href="tele:04-8889810"
              className={`${style.footerIconLabel} ${style.phoneLink}`}
            >
              {i18n.language === "en" && t("phoneLabel")} 04-8889810
              {i18n.language === "he" && t("phoneLabel")}
            </a>
          </li>
          <li className={style.contactListItem}>
            <img
              src={mail}
              alt="mail"
              className={`${style.borderIcon} ${style.footerIcon}`}
            />
            <span className={style.footerIconLabel}>
              {i18n.language === "en" && t("emailLabel")}
              Office@ibengineer.com {i18n.language === "he" && t("emailLabel")}
            </span>
          </li>
          <li className={style.contactListItem}>
            <img src={map} alt="map" className={style.footerIcon} />
            <span className={style.footerIconLabel}>
              {i18n.language === "en" && t("officeLabel")}
              {t("officeAddressValue")}
              {i18n.language === "he" && t("officeLabel")}
            </span>
          </li>
        </ul>
      </div>
      <div className={style.containerTwo}>
        <TextInput
          className={style.formInput}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeHolder={`${t("nameLabel")}`}
          onBlur={() => {
            setvalidation({
              ...validation,
              name:
                formData.name === ""
                  ? { show: true, message: t("contactNameRequired") }
                  : { show: false, message: "" },
            });
          }}
          validation={true}
          validationData={validation.name}
        />
        <TextInput
          className={style.formInput}
          value={formData.email}
          onChange={(e) => {
            setvalidation({
              ...validation,
              email: !validateEmail(e.target.value)
                ? { show: true, message: t("contactNotEmailRequired") }
                : { show: false, message: "" },
            });
            setFormData({ ...formData, email: e.target.value });
          }}
          placeHolder={`${t("footerEmailLabel")}`}
          onBlur={() => {
            if (formData.email === "") {
              setvalidation({
                ...validation,
                email: { show: true, message: t("contactEmailRequired") },
              });
            }
          }}
          validation={true}
          validationData={validation.email}
        />
        <TextInput
          className={style.formInput}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          onBlur={() => {
            setvalidation({
              ...validation,
              message:
                formData.message === ""
                  ? { show: true, message: t("contactMessageRequired") }
                  : { show: false, message: "" },
            });
          }}
          placeHolder={`${t("footerMessageLabel")}`}
          validation={true}
          validationData={validation.message}
        />
        <Button
          className={style.footerBtn}
          label={`${t("btnSendLabel")}`}
          loading={pageLoading}
          onClick={(e) => sendInquery(e)}
        />
        {formError !== "" && <div className={style.errorText}>{formError}</div>}
      </div>
      <div className={style.containerThree}>
        <label className={style.containerThreeLabel}>
          {t("socialMediaLabel")}
        </label>
        <div className={style.iconContainer}>
          <img
            onClick={() => {
              window.location.href =
                "https://www.facebook.com/profile.php?id=61550946452760";
            }}
            src={facebook}
            alt="facebook"
            className={style.mediaIcon}
          />
          <img src={instagram} alt="instagram" className={style.mediaIcon} />
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
      </div>
    </div>
  );
}

export default Footer;
