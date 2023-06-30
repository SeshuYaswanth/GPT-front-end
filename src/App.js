import React from "react";

import { CTA, Brand, Navbar } from "./Components";
import { Blog, Possiblity, Features, GPT, Header } from "./Containers";
import { End } from "./Containers/footer/End";
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
      <End />
    </div>
  );
};
