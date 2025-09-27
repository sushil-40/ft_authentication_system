import { fetchUserApi } from "./userAPI";
import { setUser } from "./userSlice";

export const fetchUserAction = () => async (dispatch) => {
  // call api
  const { status, payload } = await fetchUserApi();
  //   console.log(userInfo);
  //recieve user
  //dispatch user to redux store

  status === "success" && payload?._id && dispatch(setUser(payload));
};
