import React, { useState, useRef, useEffect } from "react";
import { Link } from "@reach/router";
import { socket } from "../../client-socket.js";
import { BigramList } from "../modules/BigramList.js";
import { get, post } from "../../utilities";
import { navigate } from "@reach/router";

import "../pages/SinglePlayerGame.css";

/*

Code for timer modified from https://www.geeksforgeeks.org/how-to-create-a-countdown-timer-using-reactjs/

*/

let fails = 0;
let startFall = 0;

const Timer = (props) => {
  const Ref = useRef(null);

  const [timer, setTimer] = useState("8");

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    startFall = 1;

    return {
      total,
      seconds,
    };
  };

  const noTime = (props) => {
    let randomBigram = BigramList[Math.floor(Math.random() * BigramList.length)];
    props.handleBigram();

    fails = fails + 1;
    clearTimer(getDeadTime());
    if (fails >= 1) {
      setHeart1("hidden");
    }

    if (fails >= 2) {
      setHeart2("hidden");
    }

    if (fails >= 3) {
      setHeart3("hidden");
    }
  };

  const startTimer = (e) => {
    let { total, seconds } = getTimeRemaining(e);
    startFall = 1;
    if (total >= 0) {
      setTimer(seconds > 9 ? seconds : seconds);
    }
    if (total === 0) {
      noTime(props);
    }
  };

  let [subPos, setSubPos] = useState(0);

  useEffect(() => {
    if (fails < 3) {
      const interval = setInterval((e) => {
        if (startFall === 1 && fails < 3) {
          setPositionY(778 + 70 - subPos);
          setFruitPositionY(700 + 70 - subPos);
          setSubPos(subPos + 3);
        }
      }, 23);
      return () => clearInterval(interval);
    }
  }, [subPos]);

  if (props.score != 0) {
    startFall = 1;
  }

  const clearTimer = (e) => {
    setTimer("8");

    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
    let tempPos = Math.random() * 1000;
    setPositionX(Math.floor(tempPos) + 150 + "px");
    setFruitPositionX(Math.floor(tempPos) + 10 + "px");
    chooseFruit();
  };

  const getDeadTime = () => {
    let deadline = new Date();

    setPositionY(778 + 70);
    setFruitPositionY(700 + 70);

    setSubPos(0);
    deadline.setSeconds(deadline.getSeconds() + 8);
    return deadline;
  };

  const onClickReset = () => {
    clearTimer(getDeadTime());
    fails = 0;
  };

  useEffect(() => {
    return () => {
      clearInterval(Ref.current);
      fails = 0;
    };
  }, []);

  useEffect(() => {
    if (props.reset === 1) {
      clearTimer(getDeadTime());
    }
  }, [props.reset]);

  const [resetTemp, setResetTemp] = useState(0);

  let handleReset = () => {
    setResetTemp(0);
  };

  if (props.reset === 1 && setResetTemp === 0) {
    clearTimer(getDeadTime());
    setResetTemp(1);
    setTimeout(handleReset, 10);
  }

  if (fails === 3) {
    console.log("game over");

    const body = { id: props.userId, score: props.score };
    console.log(body);
    let link = "/gameover/" + props.userId;
    post("/api/userupdateSP", body).then(navigate(link));
    fails = 4;
  }

  const [heart1, setHeart1] = useState("visible");
  const [heart2, setHeart2] = useState("visible");
  const [heart3, setHeart3] = useState("visible");

  const [positionX, setPositionX] = useState("709px");
  const [positionY, setPositionY] = useState(454);

  const [fruitPositionX, setFruitPositionX] = useState("569px");
  const [fruitPositionY, setFruitPositionY] = useState(376);

  const [fruitID, setFruitID] = useState("apple");
  const chooseFruit = () => {
    let randomFruit = Math.floor(Math.random() * 3);
    if (randomFruit === 0) {
      setFruitID("apple");
    }
    if (randomFruit === 1) {
      setFruitID("orange");
    }
    if (randomFruit === 2) {
      setFruitID("peach");
    }
  };

  return (
    <div>
      <h2 className="timer">{timer}</h2>
      <div className="heartContainer">Lives: </div>
      <div style={{ visibility: heart1 }} className="heart1" />
      <div style={{ visibility: heart2 }} className="heart2" />
      <div style={{ visibility: heart3 }} className="heart3" />
      {/* <button onClick={onClickReset}>Start</button> */}
      {/* <div className="initialApple" style={{ visibility: props.initialApplePos }} /> */}
      <div className="initialInstruction" style={{ visibility: props.initialApplePos }}>
        Input a word to begin!
      </div>
      <div className={fruitID} style={{ left: fruitPositionX, bottom: fruitPositionY + "px" }} />
      <div className="bigram" style={{ left: positionX, bottom: positionY + "px" }}>
        {props.bigram}
      </div>
    </div>
  );
};

export default Timer;
