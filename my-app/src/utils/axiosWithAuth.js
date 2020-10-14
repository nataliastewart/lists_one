import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "https://appone-lists.herokuapp.com/",
    headers: {
      Authorization: token,
    },
  });
};
