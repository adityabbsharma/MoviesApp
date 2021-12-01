import React, { useState } from "react";
import Home from "../screens/home/Home";
import Details from "../screens/details/Details";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BookShow from "../screens/bookshow/BookShow";
import Confirmation from "../screens/confirmation/Confirmation";


const Controller = () => {
  const [userDetails, setUserDetails] = useState({
    "email_address": "",
    "first_name": "",
    "last_name": "",
    "mobile_number": "",
    "password": ""
  });
  // const [token, setToken] = useState(false);
  const [bookShowButtonShow, setBookShowButtonShow] = useState(false);
  const baseUrl = "/api/v1/";
  // function logInHandler() {
  //   setToken(true);
  // }
  const [idbtn, setIdbtn] = useState("");
  const idBtnHandler = (id) => {
    setIdbtn(id);
  }

  const bookShowButtonHandler = (bol) => {
    if (bol) {
      setBookShowButtonShow(true);
    }
    else {
      setBookShowButtonShow(false);
    }
  }

  return (
    <Router>
      <div className="main-container">
        <Route
          exact
          path="/"
          render={(props) => <Home {...props} idbtn={idbtn} idBtnHandler={idBtnHandler} bookShowButtonShow={bookShowButtonShow} bookShowButtonHandler={bookShowButtonHandler} setUserDetails={setUserDetails} userDetails={userDetails} baseUrl={baseUrl} />}
        />
        <Route
          path="/movie/:id"
          render={(props) => <Details {...props} idbtn={idbtn} idBtnHandler={idBtnHandler} bookShowButtonShow={bookShowButtonShow} bookShowButtonHandler={bookShowButtonHandler} baseUrl={baseUrl} />}
        />
        <Route
          path="/bookshow/:id"
          render={(props) => <BookShow {...props} idbtn={idbtn} idBtnHandler={idBtnHandler} bookShowButtonShow={bookShowButtonShow} bookShowButtonHandler={bookShowButtonHandler} baseUrl={baseUrl} />}
        />
        <Route
          path="/confirm/:id"
          render={(props) => <Confirmation {...props} idbtn={idbtn} idBtnHandler={idBtnHandler} bookShowButtonShow={bookShowButtonShow} bookShowButtonHandler={bookShowButtonHandler} baseUrl={baseUrl} />}
        />
      </div>
    </Router>


  );
};

export default Controller;
