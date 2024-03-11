import React from "react";
import ButtonComponent from "./Components/ButtonComponent";
import ImageComponent from "./Components/ImageComponent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ButtonComponent buttonText="Cliccami!" />
      <ImageComponent src="https://placedog.net/640/480?r" altText="randomdog" />
    </div>
  );
}

export default App;
