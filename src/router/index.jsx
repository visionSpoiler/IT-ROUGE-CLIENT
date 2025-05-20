import React from "react";
import { Routes, Route, Outlet } from "react-router";
import Layout from "../layouts/Layout";
import { MainPage, UserPostsPage } from "../pages";

const AppRouter = () => {
  return (
    <Routes>
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
