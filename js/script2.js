//parameters
var cards = [{"ID":1,"number":"2","suit":"clubs","value":2},{"ID":2,"number":"3","suit":"clubs","value":3},{"ID":3,"number":"4","suit":"clubs","value":4},{"ID":4,"number":"5","suit":"clubs","value":5},{"ID":5,"number":"6","suit":"clubs","value":6},{"ID":6,"number":"7","suit":"clubs","value":7},{"ID":7,"number":"8","suit":"clubs","value":8},{"ID":8,"number":"9","suit":"clubs","value":9},{"ID":9,"number":"T","suit":"clubs","value":10},{"ID":10,"number":"J","suit":"clubs","value":11},{"ID":11,"number":"Q","suit":"clubs","value":12},{"ID":12,"number":"K","suit":"clubs","value":13},{"ID":13,"number":"A","suit":"clubs","value":14},{"ID":14,"number":"2","suit":"diams","value":2},{"ID":15,"number":"3","suit":"diams","value":3},{"ID":16,"number":"4","suit":"diams","value":4},{"ID":17,"number":"5","suit":"diams","value":5},{"ID":18,"number":"6","suit":"diams","value":6},{"ID":19,"number":"7","suit":"diams","value":7},{"ID":20,"number":"8","suit":"diams","value":8},{"ID":21,"number":"9","suit":"diams","value":9},{"ID":22,"number":"T","suit":"diams","value":10},{"ID":23,"number":"J","suit":"diams","value":11},{"ID":24,"number":"Q","suit":"diams","value":12},{"ID":25,"number":"K","suit":"diams","value":13},{"ID":26,"number":"A","suit":"diams","value":14},{"ID":27,"number":"2","suit":"hearts","value":2},{"ID":28,"number":"3","suit":"hearts","value":3},{"ID":29,"number":"4","suit":"hearts","value":4},{"ID":30,"number":"5","suit":"hearts","value":5},{"ID":31,"number":"6","suit":"hearts","value":6},{"ID":32,"number":"7","suit":"hearts","value":7},{"ID":33,"number":"8","suit":"hearts","value":8},{"ID":34,"number":"9","suit":"hearts","value":9},{"ID":35,"number":"T","suit":"hearts","value":10},{"ID":36,"number":"J","suit":"hearts","value":11},{"ID":37,"number":"Q","suit":"hearts","value":12},{"ID":38,"number":"K","suit":"hearts","value":13},{"ID":39,"number":"A","suit":"hearts","value":14},{"ID":40,"number":"2","suit":"spades","value":2},{"ID":41,"number":"3","suit":"spades","value":3},{"ID":42,"number":"4","suit":"spades","value":4},{"ID":43,"number":"5","suit":"spades","value":5},{"ID":44,"number":"6","suit":"spades","value":6},{"ID":45,"number":"7","suit":"spades","value":7},{"ID":46,"number":"8","suit":"spades","value":8},{"ID":47,"number":"9","suit":"spades","value":9},{"ID":48,"number":"T","suit":"spades","value":10},{"ID":49,"number":"J","suit":"spades","value":11},{"ID":50,"number":"Q","suit":"spades","value":12},{"ID":51,"number":"K","suit":"spades","value":13},{"ID":52,"number":"A","suit":"spades","value":14}]

// combinations
var board5C3 = [[1,2,3],
[1,2,4],
[1,2,5],
[1,3,4],
[1,3,5],
[1,4,5],
[2,3,4],
[2,3,5],
[2,4,5],
[3,4,5]];

var board5C4 = [[1,2,3,4],
[1,2,3,5],
[1,2,4,5],
[1,3,4,5],
[2,3,4,5]];

// Shuffle function
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

/////////////////////////// DO STUFF //////////////////////////
var iterations = 40;
var results = [];
var monte = 1000;

for (var m = 0; m < monte; m++) {
	// results.push = [];
	var cash = 0;	
	var playerWins = 0;
	var dealerWins = 0;
	var boardWins = 0;
	var ties = 0;
	for (var i = 0; i < iterations; i++) {
		// console.log(m);
		// console.log(i);
		loop(m,i);

	}	
	results.push(cash);
	console.log("average is: " + average(results))
	// console.log("Dealer Wins About " + (dealerWins / iterations * 100) + "%");
	// console.log("Board Wins About " + (boardWins / iterations * 100) + "%");
	// console.log("Ties About " + (ties / iterations * 100) + "%");
}

console.log(results); 
console.log("average is: " + average(results))
console.log("standard Deviation is: " + standardDeviation(results))
console.log("min: " + Math.min.apply(null,results));
console.log("max: " + Math.max.apply(null,results));
// var testhand = Hand.solve(['3s','3d','4s','Ac','Ts']);
// console.log(testhand);
// console.log(testhand.cards[0].rank);

///////////////////////// loop function /////////////////////////////
function loop(monte,iterations) {
	// results[monte][iterations] = cash;

	// console.log(cash);
		//Shuffle cards
	cards = shuffle(cards);

	var player1 = [cards[0],cards[2]];
	var dealer = [cards[1],cards[3]];
	var board = [cards[5],cards[6],cards[7],cards[9],cards[11]];
	var allcards = [cards[0],cards[2],cards[5],cards[6],cards[7],cards[9],cards[11],cards[1],cards[3]];
	var ids = ["card1","card2","board1","board2","board3","board4","board5","dealer1","dealer2"];

	// build the cards on the DOM
	for (var i = ids.length - 1; i >= 0; i--) {
			var current = allcards[i];	
			$('#' + ids[i]).removeClass().addClass("card rank-" + current.number.toLowerCase() + " " + current.suit);
			$('#' + ids[i] + " .rank").text(current.number);
			$('#' + ids[i] + " .suit").html("&" + current.suit + ";");
		}

	var possHands = [];

	/////////////////////// player hands! ////////////////////////

	// combos 2 player cards and 5C3 of board cards
	for (var i = board5C3.length - 1; i >= 0; i--) {
		var bc1 = board5C3[i][0] - 1;
		var bc2 = board5C3[i][1] - 1;
		var bc3 = board5C3[i][2] - 1;	
		var card1 = player1[0].number + player1[0].suit.charAt(0);
		var card2 = player1[1].number + player1[1].suit.charAt(0);
		var card3 = board[bc1].number + board[bc1].suit.charAt(0);
		var card4 = board[bc2].number + board[bc2].suit.charAt(0);
		var card5 = board[bc3].number + board[bc3].suit.charAt(0);

		var solution = Hand.solve([card1,card2,card3,card4,card5]);

		possHands.push(solution);
	}

	// combos 1 player card and 5C4 of board cards with first card
	for (var i = board5C4.length - 1; i >= 0; i--) {
		var bc1 = board5C4[i][0] - 1;
		var bc2 = board5C4[i][1] - 1;
		var bc3 = board5C4[i][2] - 1;
		var bc4 = board5C4[i][3] - 1;
		var card1 = player1[0].number + player1[0].suit.charAt(0);	
		var card2 = board[bc1].number + board[bc1].suit.charAt(0);
		var card3 = board[bc2].number + board[bc2].suit.charAt(0);
		var card4 = board[bc3].number + board[bc3].suit.charAt(0);
		var card5 = board[bc4].number + board[bc4].suit.charAt(0);

		var solution = Hand.solve([card1,card2,card3,card4,card5]);

		possHands.push(solution);
	}

	// combos 1 player card and 5C4 of board cards with second card
	for (var i = board5C4.length - 1; i >= 0; i--) {
		var bc1 = board5C4[i][0] - 1;
		var bc2 = board5C4[i][1] - 1;
		var bc3 = board5C4[i][2] - 1;
		var bc4 = board5C4[i][3] - 1;
		var card1 = player1[1].number + player1[1].suit.charAt(0);	
		var card2 = board[bc1].number + board[bc1].suit.charAt(0);
		var card3 = board[bc2].number + board[bc2].suit.charAt(0);
		var card4 = board[bc3].number + board[bc3].suit.charAt(0);
		var card5 = board[bc4].number + board[bc4].suit.charAt(0);

		var solution = Hand.solve([card1,card2,card3,card4,card5]);

		possHands.push(solution);
	}

	///////////////////// DEALER HANDS ////////////////////////////

	// combos 2 dealer cards and 5C3 of board cards
	for (var i = board5C3.length - 1; i >= 0; i--) {
		var bc1 = board5C3[i][0] - 1;
		var bc2 = board5C3[i][1] - 1;
		var bc3 = board5C3[i][2] - 1;	
		var card1 = dealer[0].number + dealer[0].suit.charAt(0);
		var card2 = dealer[1].number + dealer[1].suit.charAt(0);
		var card3 = board[bc1].number + board[bc1].suit.charAt(0);
		var card4 = board[bc2].number + board[bc2].suit.charAt(0);
		var card5 = board[bc3].number + board[bc3].suit.charAt(0);

		var solution = Hand.solve([card1,card2,card3,card4,card5]);

		possHands.push(solution);
	}

	// combos 1 dealer card and 5C4 of board cards with first card
	for (var i = board5C4.length - 1; i >= 0; i--) {
		var bc1 = board5C4[i][0] - 1;
		var bc2 = board5C4[i][1] - 1;
		var bc3 = board5C4[i][2] - 1;
		var bc4 = board5C4[i][3] - 1;
		var card1 = dealer[0].number + dealer[0].suit.charAt(0);	
		var card2 = board[bc1].number + board[bc1].suit.charAt(0);
		var card3 = board[bc2].number + board[bc2].suit.charAt(0);
		var card4 = board[bc3].number + board[bc3].suit.charAt(0);
		var card5 = board[bc4].number + board[bc4].suit.charAt(0);

		var solution = Hand.solve([card1,card2,card3,card4,card5]);

		possHands.push(solution);
	}

	// combos 1 dealer card and 5C4 of board cards with second card
	for (var i = board5C4.length - 1; i >= 0; i--) {
		var bc1 = board5C4[i][0] - 1;
		var bc2 = board5C4[i][1] - 1;
		var bc3 = board5C4[i][2] - 1;
		var bc4 = board5C4[i][3] - 1;
		var card1 = dealer[1].number + dealer[1].suit.charAt(0);	
		var card2 = board[bc1].number + board[bc1].suit.charAt(0);
		var card3 = board[bc2].number + board[bc2].suit.charAt(0);
		var card4 = board[bc3].number + board[bc3].suit.charAt(0);
		var card5 = board[bc4].number + board[bc4].suit.charAt(0);

		var solution = Hand.solve([card1,card2,card3,card4,card5]);
		possHands.push(solution);
	}

	//////////////////// compare to board ////////////////////
		var card1 = board[0].number + board[0].suit.charAt(0);	
		var card2 = board[1].number + board[1].suit.charAt(0);
		var card3 = board[2].number + board[2].suit.charAt(0);
		var card4 = board[3].number + board[3].suit.charAt(0);
		var card5 = board[4].number + board[4].suit.charAt(0);

	// ///////////////// compare dealer and other hands /////////////////////
	var BoardBest = Hand.solve([card1,card2,card3,card4,card5]);
	possHands.push(BoardBest);

	var winner = Hand.winners(possHands);

	// Preflop decision 
	// is 2/7? and unsuited BUT COULD BE ANY OTHER DECISIONS
	var fold = 0; //if 0 = don't fold, 1 = fold
	var bonus = 0; //if 0 = no bonus, 1 = bonus
	var flop = 0; //if 0 = don't bet post flop, 1 = bet post flop
	var turn = 0; // if 0 = don't bet the turn, 1 = bet post turn

// for preflop fold
	if (is27(player1) === true && isSuited(player1[0],player1[1]) === false) {
	// if (is27(player1) === true) {
		fold = 1;
	}

	var player1card1 = player1[0].number + player1[0].suit.charAt(0);
	var player1card2 = player1[1].number + player1[1].suit.charAt(0);

	flop = betFlop(player1card1,player1card2,card1,card2,card3);
	turn = betTurn(player1card1,player1card2,card1,card2,card3,card4);
	var flopturn = flop + turn;

	if (winner.length === 1) {
		for (var i = possHands.length - 1; i >= 0; i--) {
			if (winner[0] === possHands[i]) {
				if (i <=19) {
					// If player wins outright
					playerWins += 1;
					bonus = isBonus(winner);
					// console.log('the bonus is on' + bonus);
					bets(1,fold,bonus,flopturn);
				} else if (i === 40) {
					boardWins += 1;
					bets(2,fold,bonus,flopturn);
				} else {
					dealerWins +=1;
					bets(0,fold,bonus,flopturn);
				}
			}		
		}
	}
	else if (winner.length >= 2) {
		var tiebreakers = [0,0,0];
		for (var j = winner.length - 1; j >= 0; j--) {
			for (var i = possHands.length - 1; i >= 0; i--) {
				if (winner[j] === possHands[i]) {				
					if (i <=19) {
						tiebreakers[0] += 1;
					} else if (i === 40) {
						tiebreakers[2] += 1;
					} else {
						tiebreakers[1] += 1;
					}
				}
			}			
		}
		// console.log(tiebreakers)
		if (tiebreakers[2] > 0 ) {
			ties +=1;
			boardWins += 1;
			bets(2,fold,bonus,flopturn);

		} else if (tiebreakers[0] > 0 && tiebreakers[1] > 0) {
			ties +=1;
			boardWins += 1;
			bets(2,fold,bonus,flopturn);			

		} else if (tiebreakers[0] > 0) {
			playerWins += 1;
			bonus = isBonus(winner);
			bets(1,fold,bonus,flopturn);

		} else if (tiebreakers[1] > 0) {
			dealerWins +=1;
			bets(0,fold,bonus,flopturn);
		}
	}

}

function is27(d) {
	if (d[0].value === 2) {
		// and other is 3-6
		if (d[1].value > 2 && d[1].value < 8) {
			return true;
		}
		else return false	
	} 
	else if (d[1].value === 2) {
		if (d[0].value > 2 && d[0].value < 8) {
			return true;
		}	
		else return false	
	}
	// else if (d[0].value === 3) {
	// 	if (d[1].value === 4) {
	// 		return true;
	// 	}
	// 	else return false	
	// }
	// else if (d[1].value === 3) {
	// 	if (d[0].value === 4) {
	// 		return true;
	// 	}
	// 	else return false	
	// }
	else {
		return false;
	}
}

// definitions of combos
function isPair(card1,card2) {
	if (card1.value === card2.value) return true;
	else return false;
}

function isSuited(card1,card2) {
	if (card1.suit === card2.suit) return true;
	else return false;
}

function bets(x,f,b,flopturn) {
	if (f === 1) {
		//preflop fold DOESN'T MATTER IF YOU WOULD HAVE WON
		cash -= 25;

	} else if (x === 0) {
		// If you bet lose
		cash -= 75;
		cash -= (25*flopturn);

	} else if (x === 1 && b === 1) {
		// if you win, bonus
		cash += 75;
		cash += (25*flopturn);

	} else if (x === 1 && b === 0) {
		// if you win, regular
		cash += 50;
		cash += (25*flopturn);

	} else if (x === 2) {
		// push, i.e. you get your money back. 
		cash += 0;
	}
}

function isBonus(w) {	
	if (w[0].rank >= 5) {
		return 1;
	}
	else return 0;
}

// DOESNT CHECK FOR SUITED OR NOT

function betFlop(player1card1,player1card2,card1,card2,card3) {	
	var flopHand = Hand.solve([player1card1,player1card2,card1,card2,card3]);
	if (flopHand.rank >= 2) {
		// if its a pair && its a pair of 4s or less fold
		if (flopHand.rank === 2 && flopHand.cards[0].rank <= 3 ) {
			return 0
		} 
		else return 1;		
		// return 1;
	}
	else return 0;
}

function betTurn(player1card1,player1card2,card1,card2,card3,card4) {
	//run through best hand of your 2 cards and 
	var turnHand = Hand.solve([player1card1,player1card2,card1,card2,card3,card4]);
	if (turnHand.rank >= 2) {	
		// if its a pair && its a pair of 4s or less fold
		if (turnHand.rank === 2 && turnHand.cards[0].rank <= 3 ) {
			return 0
		} 
		else return 1;
		// return 1;
	}
	else return 0;
}
 
function standardDeviation(values){
  var avg = average(values);
  
  var squareDiffs = values.map(function(value){
    var diff = value - avg;
    var sqrDiff = diff * diff;
    return sqrDiff;
  });
  
  var avgSquareDiff = average(squareDiffs);

  var stdDev = Math.sqrt(avgSquareDiff);
  return stdDev;
}

function average(data){
  var sum = data.reduce(function(sum, value){
    return sum + value;
  }, 0);

  var avg = sum / data.length;
  return avg;
}