import React from "react";
import { Routes, Route } from "react-router-dom";

import Signup from "./Signup";
import { AuthProvider } from "../contexts/AuthContext";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import SharedLayout from "./SharedLayout";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="auth" element={<SharedLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
