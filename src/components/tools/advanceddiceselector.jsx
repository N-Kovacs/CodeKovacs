import { useState } from "react";

import AdvancedDiceSelectorItem from "./advanceddiceselectoritem";

const itemlist = [];

export default function AdvancedDiceSelector(props) {
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [state, setState] = useState({
    rolls: [],
    lastAction: "",
  });

  function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
  }
  const upScore1 = () => {
    setScore1(score1 + 1);
    setState((prev) => ({
      ...prev,
      lastAction: "Up Score 1",
    }));
  };
  const upScore2 = () => {
    setScore2(score2 + 1);
    setState((prev) => ({
      ...prev,
      lastAction: "Up Score 2",
    }));
  };
  const downScore1 = () => {
    setScore1(score1 - 1);
    setState((prev) => ({
      ...prev,
      lastAction: "Down Score 1",
    }));
  };
  const downScore2 = () => {
    setScore2(score2 - 1);
    setState((prev) => ({
      ...prev,
      lastAction: "Down Score 2",
    }));
  };
  function hasDuplicates(array) {
    return new Set(array).size !== array.length;
  }

  const rolling = () => {
    let rolls = [
      getRandomInt(4),
      getRandomInt(6),
      getRandomInt(10),
      getRandomInt(12),
      getRandomInt(20),
    ];
    while (hasDuplicates(rolls)) {
      console.log("newrolls");
      rolls = [
        getRandomInt(4),
        getRandomInt(6),
        getRandomInt(10),
        getRandomInt(12),
        getRandomInt(20),
      ];
    }

    setState((prev) => ({
      ...prev,
      rolls: rolls,
    }));
    console;
  };

  const items = itemlist.map((item) => {
    return (
      <AdvancedDiceSelectorItem
        key={item.ranking}
        ranking={item.ranking}
        name={item.name}
        rolls={state.rolls}
      />
    );
  });
  return (
    <div>
      <h4> Team1: {score1} </h4>
      <h4> Team2: {score2} </h4>
      <button onClick={upScore1}>1+</button>
      <button onClick={downScore1}>1-</button>
      <button onClick={rolling}>Click to Roll</button>
      <button onClick={upScore2}>1+</button>
      <button onClick={downScore2}>1-</button>
      <h4>Last Action: {state.lastAction}</h4>
      <table>
        <th>Ranking</th>
        <th>Name</th>
        {items}
      </table>
    </div>
  );
}
