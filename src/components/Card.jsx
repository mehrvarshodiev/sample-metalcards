import React, { useContext, useState } from "react";
import "./Card.css";
import { AppState } from "../context/AppState";
import cardChip from "../../public/images/chip.svg";

const colors = ["gold", "green", "blue", "violet", "maroon"];
export const Card = () => {
  const [...cardDesignImages] = useContext(AppState);
  const [visualCardImage, setVisualCardImage] = useState("");
  const [cardColor, setCardColor] = useState("");

  function handleSelectCardDesign(index) {
    // console.log(index);
    // console.log(cardDesignImages[index]);
    setVisualCardImage(cardDesignImages[index]);
  }

  function handleSelectCardColor(colorValue) {
    setCardColor(colorValue);
  }

  return (
    <div className="card_wrapper">
      <div className="card_design_container">
        <h3>Select card design:</h3>
        <div className="select_card_desig_content">
          {cardDesignImages.map((cardDesignImage, index) => (
            <div key={index} className="select_card_design">
              <img
                src={cardDesignImage}
                className="card_design_img"
                alt="card_design_img"
                onClick={(e) => handleSelectCardDesign(index)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="visual_card_content">
        <div className="visual_card_colors">
          <p>Select card color:</p>
          {colors.map((color, index) => (
            <button
              className={color}
              key={index}
              onClick={() => handleSelectCardColor(color)}
            >
              {/* {color} */}
            </button>
          ))}
        </div>
        <div className={`visual_card ${cardColor != "" ? cardColor : ""}`}>
          <div className="card_chip">
            <img src={cardChip} alt="chip-img" />
          </div>
          <div className="card_cover_img">
            {visualCardImage !== "" && <img src={visualCardImage} alt="img1" />}
          </div>
        </div>
      </div>
    </div>
  );
};
