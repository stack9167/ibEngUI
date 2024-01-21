import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import TextInput from "../../Components/Input/TextInput";

import style from "./adminLogin.module.scss";
import Button from "../../Components/Button/Button";

const AdminLogin = () => {
  const [formData, setFormData] = useState({ userName: "", password: "" });

  const navigate = useNavigate();

  const submitForm = () => {
    if (formData.userName === "admin" && formData.password === "admin") {
      navigate("/admin/addProduct");
    }
  };

  return (
    <div className={style.adminLoginContainer}>
      <div className={style.adminLoginBox}>
        <TextInput
          placeHolder="UserName"
          value={formData.userName}
          onChange={(e) => {
            setFormData({ ...formData, userName: e.target.value });
          }}
          className={style.loginInput}
        />
        <TextInput
          placeHolder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          className={style.loginInput}
        />
        <Button
          label="Login"
          className={style.loginBtn}
          onClick={() => submitForm()}
        />
      </div>
    </div>
  );
};

export default AdminLogin;
