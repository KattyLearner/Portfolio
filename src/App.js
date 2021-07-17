import React from 'react';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import WorkFromHome from "./wfh/WorkFromHome";
import Footer from "./footer/Footer";
import Contacts from "./contacts/Contacts";

function App() {
  return (
    <div className="App">
      <Header/>
        <Main />
        <Skills/>
        <Projects/>
        <WorkFromHome />
        <Contacts />
        <Footer />
    </div>
  );
}

export default App;
