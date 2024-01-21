import React, { useEffect, useState } from "react";

import TextInput from "../../Components/Input/TextInput";
import Button from "../../Components/Button/Button";
import { onAuthenticated } from "../../API/Axios";
import { getFormData } from "../../utils";
import { apiV1 } from "../../API/apiList";
import Delete from "../../Asset/Icon/delete.png";
import Edit from "../../Asset/Icon/edit.png";
import DeleteIcon from "../../Asset/Icon/close.png";
import Loading from "../../utils/Loading/Loading";

import style from "./adminAddProduct.module.scss";

const AdminAddProduct = () => {
  const [projectData, setProjectData] = useState({
    projectName: "",
    description: "",
    images: [],
    mainImage: null,
    background: "",
  });
  const [propertyList, setPropertyList] = useState(null);
  const [error, setError] = useState({ show: false, message: "" });
  const [pageLoading, setPageLoading] = useState(false);
  const [updateMainImage, setUpdateMainImage] = useState(false);
  const [updateSubImage, setUpdateSubImage] = useState(false);

  useEffect(() => {
    if (!propertyList) {
      setPageLoading(true);
      getPropertyData();
    }

    async function getPropertyData() {
      await onAuthenticated({ url: `${apiV1}/property`, method: "get" }).then(
        (res) => {
          setPropertyList(res.data);
          setPageLoading(false);
        }
      );
    }
  }, [propertyList]);

  const addProject = () => {
    const { images, mainImage, ...restProps } = projectData;
    if (restProps.description === "" || restProps.projectName === "") {
      setError({ show: true, message: "Form is Invalid" });
    } else {
      const sendObj = getFormData(restProps);
      images[0] = mainImage;
      Array.from(projectData.images).forEach((imgItem) => {
        sendObj.append("img", imgItem);
      });

      const payload = {
        url: `${apiV1}/property/add`,
        method: "post",
        data: sendObj,
      };
      setPageLoading(true);
      onAuthenticated(payload, true)
        .then((res) => {
          setPageLoading(false);
          console.log(res.status);
        })
        .catch((err) => {
          setPageLoading(false);
          setError({ show: true, message: err });
          console.log(err);
        });
    }
  };

  const updateProject = () => {
    const { images, mainImage, ...restProps } = projectData;
    let sendObj = null;
    if (restProps.description === "" || restProps.projectName === "") {
      setError({ show: true, message: "Form is Invalid" });
    } else {
      setError({ show: false, message: "" });
      if (updateMainImage || updateSubImage) {
        sendObj = getFormData(restProps);
        if (updateMainImage) {
          sendObj.append("mainImageChange", true);
        }
        if (updateSubImage) {
          sendObj.append("subImageChange", true);
        }
        images[0] = mainImage;
        images.map((m) => {
          sendObj.append("img", m);
        });
      } else {
        sendObj = projectData;
      }
      const payload = {
        url: `${apiV1}/property`,
        method: "put",
        data: sendObj,
      };
      setPageLoading(true);
      onAuthenticated(payload, updateMainImage || updateSubImage)
        .then((res) => {
          setPageLoading(false);
          console.log(res.status);
        })
        .catch((err) => {
          setPageLoading(false);
          console.log(err);
        });
    }
  };

  const editProjectItem = (editProjectData) => {
    console.log(editProjectData);
    setProjectData({ ...editProjectData });
  };
  const removeImage = (removeImg) => {
    setProjectData({
      ...projectData,
      removedImg: Array.isArray(projectData.removedImg)
        ? [...projectData.removedImg, removeImg]
        : [removeImg],
      images: projectData.images.filter((f) => f != removeImg),
    });
  };

  const deleteProject = (selectedProject) => {
    const payload = {
      url: `${apiV1}/property`,
      method: "delete",
      data: selectedProject,
    };
    setPageLoading(true);
    onAuthenticated(payload)
      .then((res) => {
        setPageLoading(false);
      })
      .catch((err) => {
        setPageLoading(false);
      });
  };

  console.log(projectData, " <>?");

  return (
    <div className={style.addAdminProductContainer}>
      {pageLoading ? (
        <Loading />
      ) : (
        <>
          <div className={style.addProject}>
            <center>
              <h1>Add Project</h1>
            </center>
            <div className={style.inputContainer}>
              <TextInput
                placeHolder="Project Name"
                value={projectData.projectName}
                className={style.addProjextInput}
                onChange={(e) =>
                  setProjectData({
                    ...projectData,
                    projectName: e.target.value,
                  })
                }
              />
              <div>
                <TextInput
                  label="Main Image"
                  className={style.imgInput}
                  type="file"
                  onChange={(e) => {
                    projectData._id && setUpdateMainImage(true);
                    setProjectData({
                      ...projectData,
                      previousMainImage: projectData.mainImage,
                      mainImage: e.target.files[0],
                    });
                  }}
                />
                <TextInput
                  disable={!projectData._id && !projectData.mainImage}
                  label="Sub Images"
                  multiple={true}
                  className={style.imgInput}
                  type="file"
                  onChange={(e) => {
                    setUpdateSubImage(true);
                    setProjectData({
                      ...projectData,
                      images: [...projectData.images, ...e.target.files],
                    });
                  }}
                />
              </div>
            </div>
            {/* <TextInput
              placeHolder="Background color"
              className={style.addProjextInput}
              value={projectData.background}
              onChange={(e) =>
                setProjectData({ ...projectData, background: e.target.value })
              }
            /> */}
            <textarea
              rows={13}
              cols={48}
              placeholder="Description"
              className={style.projectDescription}
              onChange={(e) =>
                setProjectData({ ...projectData, description: e.target.value })
              }
              value={projectData.description}
            />
            {projectData._id && (
              <div className={style.mainIMageContainer}>
                <h4>Current Main Image</h4>
                <img
                  src={`https://ibeng.s3.ap-south-1.amazonaws.com/${projectData.mainImage}`}
                  className={style.mainImage}
                  alt=""
                />
              </div>
            )}
            {projectData._id && (
              <div>
                <h4>Sub Images</h4>
                <div className={style.projectImg}>
                  {projectData.images.map((image, index) => (
                    <div className={style.imgContainer}>
                      <img
                        className={style.editImageShow}
                        src={`https://ibeng.s3.ap-south-1.amazonaws.com/${image}`}
                        alt="projectImg"
                      />
                      <img
                        src={DeleteIcon}
                        alt="delete icon"
                        className={style.removeImage}
                        onClick={() => removeImage(image)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            <center>
              <Button
                label={`${projectData._id ? "Update" : "Add"}  Project`}
                className={`${style.addProjectBtn} ${
                  projectData._id && style.marginTop
                }`}
                onClick={() =>
                  projectData._id ? updateProject() : addProject()
                }
              />
            </center>
            {error.show && (
              <center className={style.error}>{error.message}</center>
            )}
          </div>
          <div className={style.projectList}>
            <center>
              <h1>Project List</h1>
            </center>
            <ul className={style.projectListUl}>
              {Array.isArray(propertyList) &&
                propertyList.map((m) => (
                  <li key={m._id} className={style.projectListItem}>
                    <div className={style.headingImageContainer}>
                      <h1 className={style.projectTitle}>{m.projectName}</h1>
                      <img
                        className={style.listImg}
                        src={`https://ibeng.s3.ap-south-1.amazonaws.com/${m.mainImage}`}
                      />
                    </div>
                    <div className={style.actionBtn}>
                      <img
                        onClick={() => editProjectItem(m)}
                        src={Edit}
                        className={style.actionIcon}
                        alt="Action Icon"
                      />
                      <img
                        src={Delete}
                        onClick={() => deleteProject(m)}
                        className={style.actionIcon}
                        alt="Action Icon"
                      />
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminAddProduct;
