import React, { useContext, useEffect, useState } from "react";
import "./Card.css";
import { AppState } from "../context/AppState";
import cardChip from "../../public/images/chip.svg";

const colors = ["gold", "green", "blue", "violet", "maroon"];
export const Card = () => {
  const [cardPatriotDesignimages, cardSportDesignImages] = useContext(AppState);

  const [visualCardImage, setVisualCardImage] = useState("");
  const [cardColor, setCardColor] = useState("");
  const [selectCardCategory, setSelectCardCategory] = useState("patriot");
  const [cloneDesignImages, setCloneDesignImages] = useState([]);

  function handleSelectCardCategory(element) {
    setSelectCardCategory(element.dataset.value);
    const detailsEL = element.closest("details[class='card_select_category']");
    detailsEL.open = false;
    setVisualCardImage("");
  }

  useEffect(() => {
    selectCardCategory === "patriot"
      ? setCloneDesignImages(cardPatriotDesignimages)
      : selectCardCategory === "sport"
      ? setCloneDesignImages(cardSportDesignImages)
      : "";
  }, [handleSelectCardCategory]);

  function handleSelectCardDesign(index) {
    selectCardCategory != "" && selectCardCategory === "sport"
      ? setVisualCardImage(cardSportDesignImages[index])
      : setVisualCardImage(cardPatriotDesignimages[index]);
  }

  function handleSelectCardColor(colorValue) {
    setCardColor(colorValue);
  }

  return (
    <div className="card_wrapper">
      <div className="card_category_container">
        <details className="card_select_category">
          <summary>Select card category:</summary>
          <p
            className={`${selectCardCategory === "patriot" ? "active" : ""}`}
            data-value="patriot"
            onClick={(e) => handleSelectCardCategory(e.target)}
          >
            Patriot
          </p>
          <p
            className={`${selectCardCategory === "sport" ? "active" : ""}`}
            data-value="sport"
            onClick={(e) => handleSelectCardCategory(e.target)}
          >
            Sport
          </p>
        </details>
      </div>
      <div className="card_design_container">
        <h3>Select card design:</h3>
        <div className="select_card_design_content">
          {cloneDesignImages.map((cardDesignImage, index) => (
            <div
              key={index}
              className={`select_card_design ${
                cardDesignImage == visualCardImage
                  ? "selected"
                  : index == 0 && visualCardImage == ""
                  ? "selected"
                  : ""
              }`}
            >
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
            ></button>
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
