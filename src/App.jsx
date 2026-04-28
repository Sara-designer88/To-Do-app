import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

import { Routes, Route, Link } from "react-router-dom";

import "./index.css";

import AboutPage from "./pages/AboutPage";
import ItemDetailsPage from "./pages/ItemDetailsPage";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";

import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div id="root">
        <main className="main-content">
          <Navbar />
          <Routes>
            <Route path={"/about"} element={<AboutPage />} />
            <Route path={"/user-list"} element={<DashboardPage />} />
            <Route path={"/ItemDetailsPage"} element={<ItemDetailsPage />} />
            {/* <Route path={"*"} element={<NotFoundPage />} /> */}
          </Routes>
          {/* <aside className="sidebar">
          <Sidebar />
          </aside> */}

          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
