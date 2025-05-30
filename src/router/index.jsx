import React from "react";
import { Routes, Route, Outlet } from "react-router";
import Layout from "../layouts/Layout";
import { MainPage, UserPostsPage } from "../pages";
import WritePage from "../pages/write/WritePage";
import TestPage from "../pages/test/TestPage";
import RegisterPage from "../pages/register/RegisterPage";
import LoginPage from "../pages/login/LoginPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/write" element={<WritePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/test" element={<TestPage />} />
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path=":username" element={<Outlet />}>
          <Route path="posts" element={<UserPostsPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
