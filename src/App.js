import React from "react";

import { CTA, Brand, Navbar } from "./Components";
import { Footer, Blog, Possiblity, Features, GPT, Header } from "./Containers";
import "./app.css";

export const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <GPT />
      <Features />
      <Possiblity />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};
