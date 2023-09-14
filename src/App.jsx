import { useEffect, useState } from "react";
import "./App.css";
import Top from "./components/Top/Top";
import Main from "./components/Main/Main";
import Products from "./components/Products/Products";
import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro/Intro"
import Footer from "./components/Footer/Footer";

function App() {

 

 
  return (
    <div className="App">
      <Top/>
      <Main />
      <Intro/>
      <Products />
      <Footer/>
    </div>
  );
}

export default App;
