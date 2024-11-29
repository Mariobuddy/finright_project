import React from "react";
import "./index.css";

const Popup = ({ setClosePopUp, handleToGame, handleToWebsite }) => {
  return (
    <div className="main-pop-div">
      <h1 className="nt_avl">Network Available</h1>

      <div className="button-div">
        <button class="continue-button" onClick={handleToGame}>
          Continue to Game
        </button>

        <button class="continue-button">Continue to Website</button>
      </div>
    </div>
  );
};

export default Popup;
