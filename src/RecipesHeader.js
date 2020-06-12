import "./RecipesHeader.css";
import React from "react";

const RecipesHeader = () => {
  return (
    <div className="recipes-header">
      <h1 className="ui header">
        <i className="massive icon utensils" />
        <div className="content">Welcome to Mama's Recipes!</div>
        <i className="massive icon coffee" />
      </h1>
    </div>
  );
};

export default RecipesHeader;
