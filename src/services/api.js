import axios from "axios";
export const apiProcessor = async ({ url, method, payload }) => {
  try {
    const response = await axios({
      url,
      method,
      payload,
      Headers,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
