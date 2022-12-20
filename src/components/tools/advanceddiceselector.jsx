import { useState } from "react";

import AdvancedDiceSelectorItem from "./advanceddiceselectoritem";

const itemlist = [
  { name: "lucina", ranking: 1 },
  { name: "yoshi", ranking: 2 },
];

export default function AdvancedDiceSelector(props) {
  const [score1, setScore1] = useState(0)
  const [score2, setScore2] = useState(0)
  const [state, setState] = useState({
    d4: null,
    d6: null,
    d10: null,
    d12: null,
    d20: null,
    lastAction: "",
  });

  function getRandomInt(max) {
    return Math.floor(Math.random() * max)+1;
  }
  const upScore1 = () => {
    setScore1(score1+1)
    setState(prev=>({
      ...prev,
      lastAction:"Up Score 1"
    }));
  }
  const upScore2 = () => {
    setScore2(score2+1)
    setState(prev=>({
      ...prev,
      lastAction:"Up Score 2"
    }));
  }
  const downScore1 = () => {
    setScore1(score1-1)
    setState(prev=>({
      ...prev,
      lastAction:"Down Score 1"
    }));
  }
  const downScore2 = () => {
    setScore2(score2-1)
    setState(prev=>({
      ...prev,
      lastAction:"Down Score 2"
    }));
  }

  const rolling = () => {
    setState(prev => ({
      ...prev,
      d4: getRandomInt(4),
      d6: getRandomInt(6),
      d10: getRandomInt(10),
      d12: getRandomInt(12),
      d20: getRandomInt(20),
    }));
  };

  const items = itemlist.map((item) => {
    return (
      <AdvancedDiceSelectorItem
        key={item.ranking}
        ranking={item.ranking}
        name={item.name}
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
      <h4>{state.d4}</h4>
      <h4>{state.d6}</h4>
      <h4>{state.d10}</h4>
      <h4>{state.d12}</h4>
      <h4>{state.d20}</h4>
      <h4>Last Action: {state.lastAction}</h4>
      <table>
        <th>Ranking</th>
        <th>Name</th>
        {items}
      </table>
    </div>
  );
}
