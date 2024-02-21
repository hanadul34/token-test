import React, { useState } from "react";
import "./App.css";
import {
  bgMain,
  colorDarkBgMain,
  colorDarkTextTitle,
  colorLightBgMain,
  colorLightTextSubtitle,
  colorLightTextTitle,
  colorDarkTextSubtitle,
} from "./build/web/variables";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };
  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? colorDarkBgMain : colorLightBgMain,
        color: `${theme + bgMain}`,
      }}
    >
      <h1
        style={{
          color: theme === "dark" ? colorDarkTextTitle : colorLightTextTitle,
        }}
      >
        {"colorBgMain"}
      </h1>
      <p
        style={{
          color: theme === "dark" ? colorDarkTextTitle : colorLightTextTitle,
        }}
      >
        {"colorTextTitle"}
      </p>
      <p
        style={{
          color:
            theme === "dark" ? colorDarkTextSubtitle : colorLightTextSubtitle,
        }}
      >
        {"colorTextSubtitle"}
      </p>
      <button onClick={toggleTheme}>click</button>
    </div>
  );
}

export default App;
