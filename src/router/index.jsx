import React from "react";
import { Routes, Route } from "react-router";
import Layout from "../layouts/Layout";
import { Pages } from "../pages";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Pages.MainPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
