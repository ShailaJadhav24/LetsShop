import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PageNotFound from "./components/Pagenotfound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Contact from "./components/Contact";
import Account from "./components/Account";
import BillingDetails from "./components/BillingDetails";
import Breadcrumb from './common/Breadcrumb';
import About from "./components/About";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Header headerName="Exclusive" message="What are you looking for?" />
    <BrowserRouter>
    <Breadcrumb />
      <Routes>
        <Route path="/">
          <Route index path="/" element={<App />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="pagenotfound" element={<PageNotFound />} />
          <Route path="contact" element={<Contact />} />
          <Route path="account" element={<Account />} />
          <Route path="billingdetails" element={<BillingDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer footerName="Exclusive" input="Subscribe" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
