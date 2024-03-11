import React from "react";
import ButtonComponent from "./ButtonComponent";
import ImageComponent from "./ImageComponent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ButtonComponent buttonText="Cliccami!" />
      <ImageComponent src="url-dell-immagine.jpg" altText="Descrizione dell'immagine" />
    </div>
  );
}

export default App;
