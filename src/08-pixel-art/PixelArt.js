import React, { useContext, useEffect, useState } from "react";

const ColorPickerContext = React.createContext();

function ColorPicker() {
  const { colors, setActiveColor } = useContext(ColorPickerContext);
  return (
    <div>
      <h1>Choose a color</h1>
      {colors.map((color) => (
        <button
          key={color}
          style={{ backgroundColor: color }}
          onClick={() => setActiveColor(color)}
        />
      ))}
    </div>
  );
}

function Pixel() {
  const [pixelColor, setPixelColor] = useState("lightGray");
  const { activeColor, cleared } = useContext(ColorPickerContext);

  useEffect(() => {
    console.log("pixel");
    setPixelColor("lightGray");
  }, [cleared]);

  return (
    <div
      onClick={() => setPixelColor(activeColor)}
      style={{
        height: "20px",
        width: "20px",
        backgroundColor: pixelColor,
        margin: "1px",
      }}
    />
  );
}

function Pixels() {
  const { cleared, setCleared } = useContext(ColorPickerContext);

  const pixels = [];

  for (let i = 0; i < 100; i++) pixels.push(<Pixel key={i} />);

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(10, 1fr)",
          width: "210px",
          margin: "0 auto",
        }}
      >
        {pixels}
      </div>
      <button onClick={() => setCleared(!cleared)}>Clear</button>
    </>
  );
}

export default function PixelArt() {
  const colors = ["red", "blue", "yellow", "green", "black", "white", "purple"];
  const [activeColor, setActiveColor] = useState("lightGrey");
  const [cleared, setCleared] = useState(false);
  return (
    <div>
      <ColorPickerContext.Provider
        value={{ colors, activeColor, setActiveColor, cleared, setCleared }}
      >
        <ColorPicker />
        <Pixels />
      </ColorPickerContext.Provider>
    </div>
  );
}
