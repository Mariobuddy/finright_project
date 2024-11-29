import React, { useState, useEffect } from "react";
import DragonGame from "./Components/DragonGame";
import "./App.css";
import network from "../src/assets/network.png";
import internet from "../src/assets/internet.png";

const App = () => {
  const [isNetworkAvailable, setIsNetworkAvailable] = useState(false);
  const [closePopUp, setClosePopUp] = useState(false);

  const generateRandomNumber = () => {
    const min = 5;
    const max = 20;
    const random = Math.floor(Math.random() * (max - min + 1)) + min;

    setTimeout(() => {
      setIsNetworkAvailable(true);
      setClosePopUp(true);
    }, random * 1000);
  };

  useEffect(() => {
    generateRandomNumber();
  }, []);

  console.log(isNetworkAvailable);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <header className="top_headers">
        <img
          alt="network"
          src={isNetworkAvailable ? internet : network}
          className="network"
        />
        <h1
          className="no-connection"
          style={{ color: isNetworkAvailable ? "green" : "#ff4c4c" }}
        >
          {isNetworkAvailable ? "Network Available" : "No Connection Found"}
        </h1>
      </header>

      <DragonGame
        isNetworkAvailable={isNetworkAvailable}
        closePopUp={closePopUp}
        setClosePopUp={setClosePopUp}
      />
    </div>
  );
};

export default App;
