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

document.getElementById('quantity').style.visibility = 'hidden';
document.getElementById('playhand').style.visibility = 'hidden';
document.getElementById('validity').style.visibility = 'hidden';
//Array for comparing played cards
const playedCards = [];

//Player object that stores score, cards dealt to them, previously played cards, and has method to play card
const player = {
  score: 0,
  currentHand: [],
  previouslyPlayed: [],
  //Play card method, takes num as an argument (grabbed from number input on page)
  playCard (num) {
    console.log("Player's turn");
    //Declares index variable because number submitted on page is 1-3, whereas the arrays being modified start at index 0
    let index = num - 1; 
    let playedCard = this.currentHand[index];
    playedCards.push(playedCard);
    console.log(playedCard);
    this.previouslyPlayed.push(playedCard);
    this.currentHand.splice(index,1)
    console.log(this.currentHand)
    //Updates played card field
    //Creates new HTML p-tag element
    const playerPlayedPara = document.createElement('p');
    //Gives new p-tag element an ID to call upon later for editing. pp is an acronym for player played, concatenating with roundCounter makes ID unique every round
    playerPlayedPara.id = "pp" + roundCounter;
    //Creates text node that is appended to the new p-tag element
    const playerPlayedNode = document.createTextNode(playedCard.name + ": " + playedCard.damage);
    playerPlayedPara.appendChild(playerPlayedNode);
    //Apphends playerplayed HTML element to include new p-tag and text nodes
    const playerElement = document.getElementById('playerplayed');
    playerElement.appendChild(playerPlayedPara);
    //Removes played Pokemon from playercard by calling upon HTML ID, storing in a variable, and removing it
    let playedEntry = document.getElementById("p" + index)
    //**********HAVE TO MAKE THIS DYNAMIC**************/
    playedEntry.remove()
    //Changes the p id's and updates the numbers next to Pokemon
    const playerContainer = document.querySelector('#playercard')
    let pArray = playerContainer.querySelectorAll('p');
    for (let i = 0; i < pArray.length; i++) {
      for (let element of pArray) {
        element.id = "p" + element;
      } 
      pArray[i].innerHTML = (i + 1) + ": " + this.currentHand[i].name + ": " + this.currentHand[i].damage;
    }
    //Updates number field to reflect player hand's length
    document.getElementById('quantity').max = player.currentHand.length;
    console.log(document.getElementById('quantity').max = player.currentHand.length);
  }
}  

//Computer object that stores score, cards dealt to them, previously played cards, and has method to play card
const computer = {
  score: 0,
  currentHand: [],
  previouslyPlayed: [],
  computerSelection: 0,
  //Computer-specific method that randomly selects an index from currentHand array; returns a value to be plugged into playCard method in round function
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
    console.log(playedCard);
    this.computerSelection = 0;
    this.previouslyPlayed.push(playedCard);
    this.currentHand.splice(index,1)
    console.log(this.currentHand)
    //Updates played card field
    //Creates new HTML p-tag element
    const computerPlayedPara = document.createElement('p');
    //Gives new p-tag element an ID to call upon later for editing. cp is an acronym for computer played, concatenating with roundCounter makes ID unique every round
    computerPlayedPara.id = "cp" + roundCounter;
    //Creates text node that is appended to the new p-tag element
    const computerPlayedNode = document.createTextNode(playedCard.name + ": " + playedCard.damage);
    computerPlayedPara.appendChild(computerPlayedNode);
     //Apphends playerplayed HTML element to include new p-tag and text nodes
    const computerElement = document.getElementById('computerplayed');
    computerElement.appendChild(computerPlayedPara);
    //Removes played Pokemon from computercard by calling upon HTML ID, storing in a variable, and removing it
    let playedEntry = document.getElementById("c" + index)
    playedEntry.remove()
    // Manipulating computerside hand
    const computerContainer = document.querySelector('#computercard')
    const cArray = computerContainer.querySelectorAll('p');
    for (let i = 0; i < cArray.length; i++) {
      for (let element of cArray) {
        element.id = "c" + element;
      }
      cArray[i].innerHTML = (i + 1) + ": " + this.currentHand[i].name + ": " + this.currentHand[i].damage;
    }
  }    
}


const dealHand = () => {
  //For loop that runs three times to deal out three cards to player, utilizes math.Random to ensure random dealing
  for (let i = 0; i < 3; i++) {  
    const min = Math.ceil(0);
    const max = Math.floor(cards.length - 1);
    let handIndex = Math.floor(Math.random() * (max - min + 1) + min);
    //Moves Pokemon objects from cards array to individual object arrays
    player.currentHand.push(cards[handIndex]);
    //Removes dealt hand from cards array to ensure there are no duplicates
    cards.splice(handIndex,1);
    //Creates new p-tag HTML element and gives it an ID concatenated with i value to make every HTML element unique
    const playerPara = document.createElement('p');
    playerPara.id = "p" + i;
    //At the top of the round, creates text node and populates with random cards
    if (roundCounter == 0) {
      const playerNode = document.createTextNode((i+1) + ": " + player.currentHand[i].name + ": " + player.currentHand[i].damage);
      playerPara.appendChild(playerNode);
      //Apphends card info to playercard HTML element
      const playerElement = document.getElementById('playercard');
      playerElement.appendChild(playerPara);
    } else if (roundCounter == 2) {
      const playerNode = document.createTextNode((i+3) + ": " + player.currentHand[i+2].name + ": " + player.currentHand[i+2].damage);
      playerPara.appendChild(playerNode);
      const playerElement = document.getElementById('playercard');
      playerElement.appendChild(playerPara);
    } else console.log("Error");
  }
  //For loop that runs three times to deal out three cards to computer, utilizes math.Random to ensure random dealing
  for (let i = 0; i < 3; i++) {  
    const min = Math.ceil(0);
    const max = Math.floor(cards.length - 1);
    let handIndex = Math.floor(Math.random() * (max - min + 1) + min);
    //Moves Pokemon objects from cards array to individual object arrays
    computer.currentHand.push(cards[handIndex]);
    //Removes dealt hand from cards array to ensure there are no duplicates
    cards.splice(handIndex,1);
    //Creates new p-tag HTML element and gives it an ID concatenated with i value to make every HTML element unique
    const computerPara = document.createElement('p');
    computerPara.id = "c" + i;
    //At the top of the round, creates text node and populates with random cards
    if (roundCounter == 0) {
      const computerNode = document.createTextNode((i+1) + ": " + computer.currentHand[i].name + ": " + computer.currentHand[i].damage);
      computerPara.appendChild(computerNode);
      const computerElement = document.getElementById('computercard');
      computerElement.appendChild(computerPara);
    } else if (roundCounter == 2) {
      const computerNode = document.createTextNode((i+3) + ": " + computer.currentHand[i+2].name + ": " + computer.currentHand[i+2].damage);
      computerPara.appendChild(computerNode);
      const computerElement = document.getElementById('computercard');
      computerElement.appendChild(computerPara);
    } else console.log("Error");
  }
  console.log(player.currentHand);
  console.log(computer.currentHand);
  if (roundCounter == 0) {
  roundCounter++;
  };
  document.getElementById('deal').style.visibility = 'hidden';
}

let roundCounter = 0;

const round = (num) => {
  if (cards.length > 0) {
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
      document.getElementById("playerscore").innerHTML = "Score: " + player.score;
      console.log("Player wins the round");
    } else if (playedCards[0].damage < playedCards[1].damage) {
      computer.score++
      document.getElementById("computerscore").innerHTML = "Score: " + computer.score;
      console.log("Computer wins the round");
    } else {
      console.log("Tie!")
    }
    playedCards.splice(0,2); 
  } else {
    console.log("Game over!")
    if (player.score > computer.score) {
      console.log("Player wins!")
    } else {
      console.log("Computer wins!");
    }
  }
  roundCounter++;
  console.log("Round: " + roundCounter)
  document.getElementById("roundcounter").innerHTML = "Round: " + roundCounter;
  if (player.currentHand.length == 0) {
    document.getElementById('deal').style.visibility = 'visibile';
  }
};

const dealButton = document.getElementById("deal");
dealButton.addEventListener("click", () => dealHand());
dealButton.addEventListener("click", function(){
  document.getElementById("roundcounter").innerHTML = "Round: " + roundCounter;
  document.getElementById('quantity').style.visibility = 'visible';
  document.getElementById('playhand').style.visibility = 'visible';
  document.getElementById('validity').style.visibility = 'visible';
});

// document.getElementById("cp" + roundCounter).style.textDecoration = "line-through";

//List of issues: 
//HTML for Pokemon in the playercard and computercard (numbers), are not responsive. 
//if (p + number) != num (selected by user) 
//for loop to change p to 0,1, etc. 
//change id to array index + 1


//Refactoring: 
//Take out the number system, make new textNodes be clickable and correlated with the indexes of playerHand/conputerHand
//Created p-id's for playerhand = p0, p1, p2
//p onclick execute round(num);