import React, { Component } from 'react';
import Body from "./components/Body";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Body />
        <Footer />
      </div>
    );
  }
}
