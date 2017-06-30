var outcomePlayer=[{"StraightFlush":{"containsHand":"False","HandValue":""},"FourOfAKind":{"containsHand":"False","HandValue":""},"FullHouse":{"containsHand":"False","HandValue":""},"Flush":{"containsHand":"False","HandValue":""},"Straight":{"containsHand":"False","HandValue":""},"ThreeOfAKind":{"containsHand":"False","HandValue":""},"TwoPair":{"containsHand":"False","HandValue":""},"OnePair":{"containsHand":"False","HandValue":""},"HighCard":{"containsHand":"False","HandValue":""}}];
var outcomeDealer=[{"StraightFlush":{"containsHand":"False","HandValue":""},"FourOfAKind":{"containsHand":"False","HandValue":""},"FullHouse":{"containsHand":"False","HandValue":""},"Flush":{"containsHand":"False","HandValue":""},"Straight":{"containsHand":"False","HandValue":""},"ThreeOfAKind":{"containsHand":"False","HandValue":""},"TwoPair":{"containsHand":"False","HandValue":""},"OnePair":{"containsHand":"False","HandValue":""},"HighCard":{"containsHand":"False","HandValue":""}}];


// console.log(outcomePlayer[0].Flush)

// outcomePlayer[0].Flush.containsHand = "True";
// console.log(outcomePlayer[0].Flush)

var cards = [{"ID":1,"number":"2","suit":"clubs","value":2},{"ID":2,"number":"3","suit":"clubs","value":3},{"ID":3,"number":"4","suit":"clubs","value":4},{"ID":4,"number":"5","suit":"clubs","value":5},{"ID":5,"number":"6","suit":"clubs","value":6},{"ID":6,"number":"7","suit":"clubs","value":7},{"ID":7,"number":"8","suit":"clubs","value":8},{"ID":8,"number":"9","suit":"clubs","value":9},{"ID":9,"number":"T","suit":"clubs","value":10},{"ID":10,"number":"J","suit":"clubs","value":11},{"ID":11,"number":"Q","suit":"clubs","value":12},{"ID":12,"number":"K","suit":"clubs","value":13},{"ID":13,"number":"A","suit":"clubs","value":14},{"ID":14,"number":"2","suit":"diams","value":2},{"ID":15,"number":"3","suit":"diams","value":3},{"ID":16,"number":"4","suit":"diams","value":4},{"ID":17,"number":"5","suit":"diams","value":5},{"ID":18,"number":"6","suit":"diams","value":6},{"ID":19,"number":"7","suit":"diams","value":7},{"ID":20,"number":"8","suit":"diams","value":8},{"ID":21,"number":"9","suit":"diams","value":9},{"ID":22,"number":"T","suit":"diams","value":10},{"ID":23,"number":"J","suit":"diams","value":11},{"ID":24,"number":"Q","suit":"diams","value":12},{"ID":25,"number":"K","suit":"diams","value":13},{"ID":26,"number":"A","suit":"diams","value":14},{"ID":27,"number":"2","suit":"hearts","value":2},{"ID":28,"number":"3","suit":"hearts","value":3},{"ID":29,"number":"4","suit":"hearts","value":4},{"ID":30,"number":"5","suit":"hearts","value":5},{"ID":31,"number":"6","suit":"hearts","value":6},{"ID":32,"number":"7","suit":"hearts","value":7},{"ID":33,"number":"8","suit":"hearts","value":8},{"ID":34,"number":"9","suit":"hearts","value":9},{"ID":35,"number":"T","suit":"hearts","value":10},{"ID":36,"number":"J","suit":"hearts","value":11},{"ID":37,"number":"Q","suit":"hearts","value":12},{"ID":38,"number":"K","suit":"hearts","value":13},{"ID":39,"number":"A","suit":"hearts","value":14},{"ID":40,"number":"2","suit":"spades","value":2},{"ID":41,"number":"3","suit":"spades","value":3},{"ID":42,"number":"4","suit":"spades","value":4},{"ID":43,"number":"5","suit":"spades","value":5},{"ID":44,"number":"6","suit":"spades","value":6},{"ID":45,"number":"7","suit":"spades","value":7},{"ID":46,"number":"8","suit":"spades","value":8},{"ID":47,"number":"9","suit":"spades","value":9},{"ID":48,"number":"T","suit":"spades","value":10},{"ID":49,"number":"J","suit":"spades","value":11},{"ID":50,"number":"Q","suit":"spades","value":12},{"ID":51,"number":"K","suit":"spades","value":13},{"ID":52,"number":"A","suit":"spades","value":14}]

console.log(cards)

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

//Shuffle cards
cards = shuffle(cards);

var player1 = [cards[0],cards[2]];
var dealer = [cards[1],cards[3]];
var board = [cards[5],cards[6],cards[7],cards[9],cards[11]];
var allcards = [cards[0],cards[2],cards[5],cards[6],cards[7],cards[9],cards[11],cards[1],cards[3]];
var ids = ["card1","card2","board1","board2","board3","board4","board5","dealer1","dealer2"];

for (var i = ids.length - 1; i >= 0; i--) {
		var current = allcards[i];	
		$('#' + ids[i]).removeClass().addClass("card rank-" + current.number.toLowerCase() + " " + current.suit);
		$('#' + ids[i] + " .rank").text(current.number);
		$('#' + ids[i] + " .suit").html("&" + current.suit + ";");
	}

// $('#card1').removeClass();
// $('#card1').addClass();


// SHOULD I BET?
play(player1);

// WHAT HAND DO I HAVE?
whatHand(player1[0],player1[1],board[0],board[1],board[2],board[3],board[4],outcomePlayer);
whatHand(dealer[0],dealer[1],board[0],board[1],board[2],board[3],board[4],outcomeDealer);

// WHO WINS


// ///////////////FUNCTIONS ///////////////////////

// should you play? post deal
function play(player1) {
	
	// is 2/7? and unsuited BUT COULD BE ANY OTHER DECISIONS
	if (is27(player1) === true && isSuited(player1[0],player1[1]) === false) {
		console.log('preflop fold');
		return false;
	}
	else return true;
}

function whatHand(c1,c2,c3,c4,c5,c6,c7,hand) {
	// is royal flush
		// is Straight
		// is flush	
		isFlush(c1,c2,c3,c4,c5,c6,c7,hand); 	
}

function isFlush(c1,c2,c3,c4,c5,c6,c7,hand) {
	var flusher = [c1,c2,c3,c4,c5,c6,c7]
	var suits = [
		{"suit":"clubs","count":0,"cards":[]},
		{"suit":"hearts","count":0,"cards":[]},
		{"suit":"spades","count":0,"cards":[]},
		{"suit":"diams","count":0,"cards":[]}];

	for (var i = flusher.length - 1; i >= 0; i--) {
		if (flusher[i].suit === "clubs") {suits[0].count++;suits[0].cards.push(flusher[i])}
		if (flusher[i].suit === "hearts") {suits[1].count++;suits[1].cards.push(flusher[i])}
		if (flusher[i].suit === "spades") {suits[2].count++;suits[2].cards.push(flusher[i])}
		if (flusher[i].suit === "diams") {suits[3].count++;suits[3].cards.push(flusher[i])}
	}
	console.log(suits);
	for (var i = suits.length - 1; i >= 0; i--) {
	// find out if 5 or more
		if (suits[i].count >= 5) {
			// find out if includes hole card
			if (suits[i].suit === c1.suit || suits[i].suit === c2.suit ) {
				
				// Do something to set "hand" to return the data into the outcomePlayer or outcomeDealer
				return true;
			}
		}
	}
}

// function suitMatch(suit,arr,required) {
// 	if (arr <= required)
// }

// definitions of combos
function isPair(card1,card2) {
	if (card1.value === card2.value) return true;
	else return false;
}

function isSuited(card1,card2) {
	if (card1.suit === card2.suit) return true;
	else return false;
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
	else {
		return false;
	}
}


// Figure out hands
// Figure out best hand
// figure out if win
// Make sure you bean the board?
// Figure out if you would have bet
// my hand is cards 1,3,
// dealer hand is cards 2,4
// burn cards 5,9,11
// table cards 6,7,8,10,12

// decision making
// for the hole cards To BET
// is 2,7?
// is suited?
// is consecutive?
// is pocket pair?

// After flop AND/OR after turn
// has pair?
// has straight draw (4 consecutive)
// has straight draw (3 consecutive)
// has flush draw (4 same AND one in hand)
// has flush draw (4 same AND two in hand)

// After all cards down
//Straight flush
	// Is Straight
	// rank of Straight (high card)
	// Is Flush
	// Uses a hole card
//Four of a kind
	// is 4 of a kind
	// rank of 4 of a kind
	// uses a hole card
	// kicker
//Full house
	// has 3 of a kind
	// rank of 3 of a kind
	// has 2 of a kind
	// rank of 2 of a kind
	// uses a hole card
//Flush
	// has flush
	// high card
	// uses a hole card
//Straight
	//has straight
	//high card
	//uses a hole card
//Three of a kind
	// has 3 of a kind
	// rank of 3 of a kind
	// uses a hole card
	// rank of kicker 1
	// rank of kicker 2
//Two pair
	// has one pair
	// rank of pair one
	// has two pair
	// rank of pair two
	// uses a hole card
	// rank of kicker 
//One pair
	// has one pair
	// rank of pair one
	// uses a hole card
	// rank of kicker 1
	// rank of kicker 2
	// rank of kicker 3
//High card rank	
	// rank of kicker 1
	// rank of kicker 2
	// rank of kicker 3
	// rank of kicker 4
	// rank of kicker 5

//Ranking 
//has pair
//
