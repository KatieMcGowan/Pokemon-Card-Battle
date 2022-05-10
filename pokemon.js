// Object Oriented Programming

// We're going to continue using objects, giving them data and behaviors (methods). They will interact with one another to make our game work!

// The basic idea

// You are going to create a simple card game in which a player will be able to battle the autoplayer. The game will deal 3 cards (each of which has a damage value) to the player and three cards to the autoplayer. The player will choose a card, and the computer will randomly choose a card, and whichever's card has the highest value will win the point. A round is finished once this has happened three times.

// The Cards

// Here is the array of cards. Instructions below.

// [
//   {
//     name: "Bulbasaur",
//     damage: 60
//   }, {
//     name: "Caterpie",
//     damage: 40
//   }, {
//     name: "Charmander",
//     damage: 60
//   }, {
//     name: "Clefairy",
//     damage: 50
//   }, {
//     name: "Jigglypuff",
//     damage: 60
//   }, {
//     name: "Mankey",
//     damage: 30
//   }, {
//     name: "Meowth",
//     damage: 60
//   }, {
//     name: "Nidoran - female",
//     damage: 60
//   }, {
//     name: "Nidoran - male",
//     damage: 50
//   }, {
//     name: "Oddish",
//     damage: 40
//   }, {
//     name: "Pidgey",
//     damage: 50
//   }, {
//     name: "Pikachu",
//     damage: 50
//   }, {
//     name: "Poliwag",
//     damage: 50
//   }, {
//     name: "Psyduck",
//     damage: 60
//   }, {
//     name: "Rattata",
//     damage: 30
//   }, {
//     name: "Squirtle",
//     damage: 60
//   }, {
//     name: "Vulpix",
//     damage: 50
//   }, {
//     name: "Weedle", 
//     damage: 40
//   }
// ]
// Example Play

// There are 18 Pokemon cards in the deck
// Eggbert (the player) is dealt three random cards from the deck
// The computer is dealt three random cards from the deck
// Eggbert chooses a card and plays it! It has a damage of 10.
// The computer randomly chooses a card and plays it! It has a damage of 8.
// Eggbert wins!
// The score is displayed:

// Score: Eggbert: 1, Computer: 0
// Rounds Won: Eggbert: 0, Computer: 0
// They do this again two more times. The round ends.

// The score is displayed. The rounds won are displayed.

// The game object

// For each part, think about:

// What's the best data type for this property? Number? String? Array? object? boolean? Some crazy combination of these).
// Hint/reminder: use a property when you want to "keep track" of something
// Or should you create a method?
// Hint/reminder: use a method when you want to "do" something
// The game should be able to:

// keep a library of all the Pokemon cards that can be played (see the array in the "The Cards" section)
// know what cards have been played
// know how many cards are left to be played/dealt overall
// track points for both the player and the computer Note: Points are determined by the following: If the player's card beats the computer's card, the player gets one point (and vice versa). If there is a tie, no one gets a point.
// track rounds
// track number of rounds won for both player and computer
// automatically deal 3 cards from the library to the player and 3 cards to the computer each round
// determine the winner of each play
// stop once there are no cards left or not enough to deal 3 to each the player and computer

// The player object

// The player should be able to:

// see their stats: their points and how many rounds they've won.
// see what cards they have been dealt/see what cards are left in their hand
// pick a card from the hand that has been dealt to them (thereby playing this card agaist the computer's card). The round ends once this has happened 3 times.
// receive new cards given to them by the game each round.
// see the cards that they have played in the past.
// The "UI"

// The user should see the following in the console:

// the scoreboard after each round
// the cards in the player's hand
// the cards in the computer's hand
// the cards that are in play
// the winner of each round (or if there was a tie)
// the winner of the game when the game is over
// the final score when the game is over
// Hungry for More?

// Expand your game

// We'll start working with actual web pages in the next couple of days, but see if you can make the UI stuff display/update on the webpage somehow.
// You could also:
// Display the past-played cards.
// Style your cards to actually look like cards and add an image to each.
// Research the DOM and event listeners and set up your cards to "flip" from a card back (the image folder has a file called cardback.png) to the actual card image. We will officially cover this topic in the next couple of days, but just see what you can get done.
// See if you can use clicking on various HTML elements cause the game to play.
// Do other cool stuff!
// Look at the Pokemon cards and add additional Pokemon data to the card objects. Have your cards fight and win the "real" Pokemon card game way.


const cards = [
    {
      name: "Bulbasaur",
      damage: 60
    }, {
      name: "Caterpie",
      damage: 40
    }, {
      name: "Charmander",
      damage: 60
    }, {
      name: "Clefairy",
      damage: 50
    }, {
      name: "Jigglypuff",
      damage: 60
    }, {
      name: "Mankey",
      damage: 30
    }, {
      name: "Meowth",
      damage: 60
    }, {
      name: "Nidoran - female",
      damage: 60
    }, {
      name: "Nidoran - male",
      damage: 50
    }, {
      name: "Oddish",
      damage: 40
    }, {
      name: "Pidgey",
      damage: 50
    }, {
      name: "Pikachu",
      damage: 50
    }, {
      name: "Poliwag",
      damage: 50
    }, {
      name: "Psyduck",
      damage: 60
    }, {
      name: "Rattata",
      damage: 30
    }, {
      name: "Squirtle",
      damage: 60
    }, {
      name: "Vulpix",
      damage: 50
    }, {
      name: "Weedle", 
      damage: 40
    }
  ]

const playedCards = [];

  const player = {
    score: 0,
    currentHand: [],
    previouslyPlayed: [],
    playCard (num) {
      console.log("Player's turn");
      let index = num - 1; 
      let playedCard = this.currentHand[index];
      playedCards.push(playedCard);
      this.previouslyPlayed.push(playedCard);
      this.currentHand.splice(index,1)
    }
  }
  
  const computer = {
    score: 0,
    currentHand: [],
    previouslyPlayed: [],
    computerSelection: 0,
    autoSelect() {
      const min = Math.ceil(0);
      const max = Math.floor(this.currentHand.length - 1);
      this.computerSelection += Math.floor(Math.random() * (max - min + 1) + min);
    },
    playCard (num) {
      console.log("Computer's turn");
      let index = num; 
      let playedCard = this.currentHand[index];
      playedCards.push(playedCard);
      this.computerSelection = 0;
      this.previouslyPlayed.push(playedCard);
      this.currentHand.splice(index,1)
    }
  }

const dealHand = () => {
  for (let i = 0; i < 3; i++) {  
    const min = Math.ceil(0);
    const max = Math.floor(cards.length - 1);
    let handIndex = Math.floor(Math.random() * (max - min + 1) + min);
    player.currentHand.push(cards[handIndex]);
    cards.splice(handIndex,1);
  }  
  for (let i = 0; i < 3; i++) {  
    const min = Math.ceil(0);
    const max = Math.floor(cards.length - 1);
    let handIndex = Math.floor(Math.random() * (max - min + 1) + min);
    computer.currentHand.push(cards[handIndex]);
    cards.splice(handIndex,1);
  }
}

let roundCounter = 0

const round = (num) => {
  if (cards.length > 0) {
    dealHand();
    console.log("Player's hand:");
    console.log(player.currentHand);
    console.log("Computer's hand:");
    console.log(computer.currentHand);
    console.log("Cards remaining:");
    console.log(cards);
    player.playCard(num);
    computer.autoSelect();
    computer.playCard(computer.computerSelection);
    console.log(playedCards);
    if (playedCards[0].damage > playedCards[1].damage) {
      player.score++
      console.log("Player wins the round");
    } else if (playedCards[0].damage < playedCards[1].damage) {
      computer.score++
      console.log("Computer wins the round");
    } else {
      console.log("Tie!")
    }
    roundCounter++;
    playedCards.splice(0,2); 
  } else {
    console.log("Game over!")
      if (player.score > computer.score) {
        console.log("Player wins!")
      } else {
        console.log("Computer wins!");
      }
  }
};

round(1);
round(2);
round(4);
round(3);
console.log("The player's score is " + player.score)
console.log("The computer's score is " + computer.score)
console.log("Round " + roundCounter + " complete!")