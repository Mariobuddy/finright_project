import React, { useEffect, useState,useRef } from "react";
import "./index.css";
import Mario from "../../assets/pngimg.com - mario_PNG88.png";
import Dragon from "../../assets/dragon.png";
const DragonGame = () => {
  const [jump, setJump] = useState(false);
  

  const marioRef=useRef("")
  const dragonRef=useRef("")

  useEffect(() => {
    const handleKeyEvent = (e) => {
       if(e.keyCode===38 || e.keyCode===32){
        setJump(true);
        setTimeout(() => {
          setJump(false);
        }, 700);
       }  
    };

    window.addEventListener("keydown", handleKeyEvent);
   return (()=>{
    window.removeEventListener("keydown", handleKeyEvent);
   })

  }, []);

  useEffect(() => {
   setInterval(()=>{
  let dragonLeft=window.getComputedStyle(dragonRef?.current).getPropertyValue("left");
  let dragonBottom=window.getComputedStyle(dragonRef?.current).getPropertyValue("bottom");
  let marioLeft=window.getComputedStyle(marioRef?.current).getPropertyValue("left");
  let marioBottom=window.getComputedStyle(marioRef?.current).getPropertyValue("bottom");

  console.log(marioBottom)
  console.log(dragonBottom)

   },100)

  }, []);
  return (
    <div className="gameMainDiv">
      <img src={Dragon} alt="dragon" className="dragon animationdragon" ref={dragonRef} />
      <img src={Mario} alt="dino" className={jump?"mario animationmario":"mario"} ref={marioRef} />
    </div>
  );
};

export default DragonGame;
