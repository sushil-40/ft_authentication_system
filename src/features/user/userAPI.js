// call api processor to fetch user
//GET  {{rootUrl}}/api/v1/users/profile

import { apiProcessor } from "../../services/api.js";

const apiBaseUrl = "http://localhost:8000";
const userApiEP = apiBaseUrl + "/api/v1/auth";
export const fetchUserApi = async () => {
  const obj = {
    url: userApiEP + "/profile",
    method: "get",

    showToast: false,
  };
  const result = await apiProcessor(obj);
  console.log(result);
  return result;
};
