import Axios from "axios";

export const onAuthenticated = async (payload, formData = false) => {
  try {
    const axiosApi = Axios.create({
      baseURL: "http://localhost:5000",
      headers: {
        "Content-type": formData ? "multipart/form-data" : "application/json",
      },
    });
    return await axiosApi(payload.url, {
      method: payload.method,
      data: payload.data,
    });
  } catch (error) {
    console.log(error);
  }
};
