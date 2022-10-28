// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import PageNotFound from "./pages/page404";
import Users from "./pages/users";
import ErrorBoundary from "./components/errorBoundary";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="users" element={<Users />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  </React.StrictMode>
);
