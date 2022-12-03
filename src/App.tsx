import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { DefaultLayout } from "@/ui/layouts/DefaultLayout";
import { Error404 } from "@/ui/pages/Error404";
import { Login } from "./ui/pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<div />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
