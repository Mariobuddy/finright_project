import React, { useEffect, useState,useRef } from "react";
import "./index.css";
import Mario from "../../assets/pngimg.com - mario_PNG88.png";
import Dragon from "../../assets/dragon.png";
import musicAudio from "../../assets/music.mp3"
import overAudio from "../../assets/failure.mp3"
import jumpAudio from "../../assets/jump.mp3"
import Popup from "./Popup";



const DragonGame = () => {
  const [jump, setJump] = useState(false);
  const [isJumping, setIsJumping] = useState(false); 
  const [dragonJumping, setDragonJumping] = useState(false); 
  const [startGame, setStartGame] = useState(false); 
  const bgAudioRef = useRef("");
  const overAudioRef = useRef(""); 
  const jumpAudioRef = useRef(""); 
  const marioRef=useRef("")
  const dragonRef=useRef("")


  const handleStartGame=()=>{
     setStartGame(true)
     setDragonJumping(true)
     if(bgAudioRef?.current){
      bgAudioRef?.current?.play()
     }
  }


  useEffect(() => {
    const handleKeyEvent = (e) => {
      if ((e.keyCode === 38 || e.keyCode === 32) && !isJumping) {
          if(startGame){
            setJump(true);
            setIsJumping(true);
            if(jumpAudioRef?.current){
              jumpAudioRef?.current?.play()
            }
    
            setTimeout(() => {
              setJump(false);
              setIsJumping(false);
            }, 600);
          }
      }
      if (e.keyCode === 39  ) {
       if(startGame){
        if(marioRef?.current){
          let marioLeft=parseInt(window.getComputedStyle(marioRef?.current).getPropertyValue("left"));
          marioRef.current.style.left = `${marioLeft + 50}px`;
        }
       }
      }

      if (e.keyCode === 37  ) {
        if(startGame){
          if(marioRef?.current){
            let marioLeft=parseInt(window.getComputedStyle(marioRef?.current).getPropertyValue("left"));
            marioRef.current.style.left = `${marioLeft - 50}px`;
           }
        }
      }
    };

    window.addEventListener('keydown', handleKeyEvent);

    return () => {
      window.removeEventListener('keydown', handleKeyEvent);
    };
  }, [isJumping,startGame]); 

  useEffect(() => {
   setInterval(()=>{
    if(dragonRef?.current && marioRef?.current){
      let dragonLeft=parseInt(window.getComputedStyle(dragonRef?.current).getPropertyValue("left"));
      let dragonBottom=parseInt(window.getComputedStyle(dragonRef?.current).getPropertyValue("bottom"));
      let marioLeft=parseInt(window.getComputedStyle(marioRef?.current).getPropertyValue("left"));
      let marioBottom=parseInt(window.getComputedStyle(marioRef?.current).getPropertyValue("bottom"));
       

      let offsetX=Math.abs(dragonLeft-marioLeft);
      let offsetY=Math.abs(dragonBottom-marioBottom);


      if(offsetX<58 && offsetY<65){
        setDragonJumping(false)
        setStartGame(false)
        if(marioRef?.current){
          marioRef.current.style.left = `${5}%`;
        }
        if(bgAudioRef?.current){
          bgAudioRef?.current?.pause()
         }
         if(overAudioRef?.current){
          overAudioRef?.current?.play()
         }
      }
      
    }


   },100)

  }, []);
  return (
    <div className="gameMainDiv">
      <Popup/>
      <audio src={musicAudio} ref={bgAudioRef} controls style={{display:"none"}}></audio>
      <audio src={overAudio} ref={overAudioRef} controls style={{display:"none"}}></audio>
      <audio src={jumpAudio} ref={jumpAudioRef} controls style={{display:"none"}}></audio>
      <button id="playButton" className="play-button" onClick={handleStartGame} style={{display:startGame?"none":"flex"}}>▶ Play</button>
      <img src={Dragon} alt="dragon" className={dragonJumping?"dragon animationdragon":"dragon"} ref={dragonRef} />
      <img src={Mario} alt="dino" className={jump?"mario animationmario":"mario"} ref={marioRef} />
    </div>
  );
};

export default DragonGame;
