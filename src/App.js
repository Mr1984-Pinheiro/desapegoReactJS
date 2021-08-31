import React from 'react'
import { connect } from "react-redux";
import { BrowserRouter, Router } from 'react-router-dom';

import './App.css'

import { Template } from './components/MainComponents'
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

import Routes from './Routes';

const Page = (props) => {
  return (
    <BrowserRouter>
      <Template>
        <Header />
        <Routes />
        <Footer />
      </Template>
    </BrowserRouter>

  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
}

const mapDispathToPeops = (dispath) => {
  return {

  };
}

export default connect(mapStateToProps, mapDispathToPeops)(Page);