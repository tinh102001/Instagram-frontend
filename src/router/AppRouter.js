import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import ChangePassword from "../pages/ChangePassword/ChangePassword";
import MyProfile from "../pages/MyProfile/MyProfile";
import Profile from "../pages/Profile/Profile";
import Setting from "../pages/Setting/Setting";
import PrivateRoute from "./PrivateRoute";

const HomePage = lazy(() => import("../pages/HomePage"));
const Register = lazy(() => import("../pages/Auth/Register"));
const Login = lazy(() => import("../pages/Auth/Login"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));
function AppRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/myprofile"
        element={
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route
        path="/setting"
        element={
          <PrivateRoute>
            <Setting />
          </PrivateRoute>
        }
      />
      <Route
        path="/changepassword"
        element={
          <PrivateRoute>
            <ChangePassword />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
