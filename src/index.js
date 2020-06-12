import React from "react";
import ReactDOM from "react-dom";
import RecipesHeader from "./RecipesHeader";

class App extends React.Component {
  render() {
    return <RecipesHeader />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
