import React from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../components/layouts/DefaultLayout";
import SignInPage from "../pages/auth/SignInPage";
import SignUpPage from "../pages/auth/SignUpPage";
import UserLayout from "@components/layouts/UserLayout";
import HomePage from "@pages/home/HomePage";
import DashboardPage from "@pages/dashboard/DashboardPage";
import ForgetPasswordPage from "@pages/auth/ForgetPasswordPage";
import { VerifyUser } from "../pages/index.js";
const AppRoutes = () => {
  return (
    <Routes>
      {/* default routing */}
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="login" element={<SignInPage />}></Route>
        <Route path="signup" element={<SignUpPage />}></Route>
        <Route path="activate-user" element={<VerifyUser />}></Route>
        <Route path="forgot-password" element={<ForgetPasswordPage />}></Route>
      </Route>
      {/* private routing  */}
      <Route path="/user" element={<UserLayout />}>
        <Route index element={<DashboardPage />}></Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
