// Create an Array of at least 3 losing messages
var messages = [
  'You lost! Better luck next time.', 
  'Do not quit your day job!', 
  'You are not good at this.'
]
// Create variables to count wins and losses
var wins = 0
var losses = 0
// Create variables that target elements with the following IDs: 'message', 'wins', 'losses'
var messageEl = document.getElementById('message')
var winsEl = document.getElementById('wins')
var lossesEl = document.getElementById('losses')

// target all .box elements and attach a click event listener to each one using a loop
// within each click event...
// determine which box was clicked with 'this.textContent' or event.target.textContent
// convert that value to a Number and store it to a variable
var boxElements = document.querySelectorAll('.box')
for (var i = 0; i < boxElements.length; i++) {
  var boxElement = boxElements[i];
  console.log(boxElement)
  boxElement.onclick = function(event) {
  var boxNumWasClicked = Number(event.target.textContent)
    // console.log(parseInt(boxNumWasClicked, 10))
  }
}

// create a random number between 1-3 and store it to a variable
// This number will represent the winning box
var randomNum = Math.floor(Math.random() * messages.length())

// determine if the box clicked is equal to the random number
// if the numbers match, display a winning message by changing the text content of the div#message element
// if the numbers match, increment wins and display the win count in div#wins
// if the numbers don't match, change the div#message element's text to a random losing message from the array above
// if the numbers don't match, increment losses and display the loss count in div#losses
if (boxNumWasClicked === randomNum) {
  document.getElementById("message").innerHTML = "You win!"
  wins += 1
  document.getElementById("wins").innerHTML = wins
} else {
  document.getElementById("message").innerHTML = messages[randomNum]
  losses += 1
  document.getElementById("losses").innerHTML = losses
}
