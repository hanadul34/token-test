import React, { useState } from "react";
import { BaseSpacing, Basics } from "../components/themes/tokens";

function App(a: BaseSpacing) {
  const [theme, setTheme] = useState("dark");
  console.log("a.$value => ", a.$value);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };
  return <p>test</p>;
}

export default App;
