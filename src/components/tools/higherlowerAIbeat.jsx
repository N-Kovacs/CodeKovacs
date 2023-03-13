import { useState } from "react";


const suits = ["spades", "diamonds", "clubs", "hearts"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
// const cardlist = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52];
// function getDeck()
// {
// 	let deck = new Array();

// 	for(let i = 0; i < suits.length; i++)
// 	{
// 		for(let x = 0; x < values.length; x++)
// 		{
// 			let card = {Value: values[x], Suit: suits[i]};
// 			deck.push(card);
// 		}
// 	}

// 	return deck;
// }
// function shuffle(deck)
// {
// 	// for 1000 turns
// 	// switch the values of two random cards
// 	for (let i = 0; i < 1000; i++)
// 	{
// 		let location1 = Math.floor((Math.random() * deck.length));
// 		let location2 = Math.floor((Math.random() * deck.length));
// 		let tmp = deck[location1];

// 		deck[location1] = deck[location2];
// 		deck[location2] = tmp;
// 	}
// }

export default function higherlowerAI(props) {


  return (
    <div>
      <h4> Cards: {score1} </h4>
    </div>
  );
}
