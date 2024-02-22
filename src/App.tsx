import React, { useState } from "react";
import { Palette } from "../components/themes/tokens";

function App(a: Pick<Palette, "primary30">) {
  const [theme, setTheme] = useState("dark");
  console.log("a.$value => ", a.primary30);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };
  return <p>test</p>;
}

export default App;
