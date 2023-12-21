import React from "react";
import "./App.css";
import { AppState } from "./context/AppState";
import { Card } from "./components/Card";
import img1 from "../public/images/1.webp";
import img2 from "../public/images/2.webp";
import img3 from "../public/images/3.webp";
import img4 from "../public/images/4.webp";
import img5 from "../public/images/5.webp";
import img6 from "../public/images/6.webp";
import img7 from "../public/images/7.webp";
import img8 from "../public/images/8.webp";
import img9 from "../public/images/9.webp";
import img10 from "../public/images/10.webp";
import img11 from "../public/images/11.webp";
import imgEmpty from "../public/images/imgEmpty.webp";

const App = () => {
  return (
    <AppState.Provider
      value={[
        imgEmpty,
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
      ]}
    >
      <div className="container">
        <Card />
      </div>
      ;
    </AppState.Provider>
  );
};

export default App;
