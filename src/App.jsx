import React from "react";
import "./App.css";
import { AppState } from "./context/AppState";
import { Card } from "./components/Card";
import imgEmpty from "../public/images/imgEmpty.webp";
import imgPatriot1 from "../public/images/patriot1.webp";
import imgPatriot2 from "../public/images/patriot2.webp";
import imgPatriot3 from "../public/images/patriot3.webp";
import imgPatriot4 from "../public/images/patriot4.webp";
import imgPatriot5 from "../public/images/patriot5.webp";
import imgPatriot6 from "../public/images/patriot6.webp";
import imgPatriot7 from "../public/images/patriot7.webp";
import imgPatriot8 from "../public/images/patriot8.webp";
import imgPatriot9 from "../public/images/patriot9.webp";
import imgPatriot10 from "../public/images/patriot10.webp";
import imgPatriot11 from "../public/images/patriot11.webp";
import imgSport1 from "../public/images/sport1.webp";
import imgSport2 from "../public/images/sport2.webp";
import imgSport3 from "../public/images/sport3.webp";
import imgSport4 from "../public/images/sport4.webp";
import imgSport5 from "../public/images/sport5.webp";
import imgSport6 from "../public/images/sport6.webp";
import imgSport7 from "../public/images/sport7.webp";
import imgSport8 from "../public/images/sport8.webp";
import imgSport9 from "../public/images/sport9.webp";
import imgSport10 from "../public/images/sport10.webp";
import imgSport11 from "../public/images/sport11.webp";

const cardPatriotDesignimages = [
  imgEmpty,
  imgPatriot1,
  imgPatriot2,
  imgPatriot3,
  imgPatriot4,
  imgPatriot5,
  imgPatriot6,
  imgPatriot7,
  imgPatriot8,
  imgPatriot9,
  imgPatriot10,
  imgPatriot11,
];
const cardSportDesignImages = [
  imgEmpty,
  imgSport1,
  imgSport2,
  imgSport3,
  imgSport4,
  imgSport5,
  imgSport6,
  imgSport7,
  imgSport8,
  imgSport9,
  imgSport10,
  imgSport11,
];

const App = () => {
  return (
    <AppState.Provider value={[cardPatriotDesignimages, cardSportDesignImages]}>
      <div className="container">
        <Card />
      </div>
      ;
    </AppState.Provider>
  );
};

export default App;
