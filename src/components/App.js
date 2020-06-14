import React from "react";
import RecipesHeader from "./RecipesHeader";
import ImageList from "./ImageList";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <RecipesHeader />
        <ImageList />
      </div>
    );
  }
}

export default App;
