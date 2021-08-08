import React from "react";
import "./App.css";

const Recipe = ({ title, calories, totalTime, ingredientLines, image }) => {
  return (
    <div className="infoContainer">
      <h1>{title}</h1>
      <p className="cal">Calories {Math.round(calories)}</p>
      <ul>
        Ingredients
        {ingredientLines.map((ingredient) => (
          <li> {ingredient}</li>
        ))}
      </ul>
      <p>
        <br>Total Time:cvs</br>
        {totalTime}
      </p>

      <img className="img" src={image} alt="" />
    </div>
  );
};

export default Recipe;
