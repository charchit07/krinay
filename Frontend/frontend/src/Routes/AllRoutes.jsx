import React from "react";
import { Routes, Route } from "react-router-dom";
import { Register } from "../Pages/Register";
import { Login } from "../Pages/Login";

import Todo from "../Components/Todo";
import PrivateRoute from "../Components/PrivateRoute";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Todo />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export { AllRoutes };
