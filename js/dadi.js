// Variabile per ciascun dado del computer
var firstDiceComputer = Math.floor(Math.random() * 6) + 1;
var secondDiceComputer = Math.floor(Math.random() * 6) + 1;

// Variabile per ciascun dado del giocatore
var firstDicePlayer = Math.floor(Math.random() * 6) + 1;
var secondDicePlayer = Math.floor(Math.random() * 6) + 1;

// Variabile per definire giocatori
var computer = firstDiceComputer + secondDiceComputer;
var player = firstDicePlayer + secondDicePlayer;

// Variabile per immagini
var gandalfWin = document.getElementById('gandalfYay');
var gandalfLose = document.getElementById('gandalfNay');
var gandalfDraw = document.getElementById('gandalfDraw');

var gandalfTextWin = document.getElementById('textYay');
var gandalfTextLose = document.getElementById('textNay');
var gandalfTextDraw = document.getElementById('textDraw');

var text = document.getElementById('question');

// LET THE GAME BEGIN
if (computer == player) {
  text.innerHTML = "Il tuo numero è " + player + ". <br> Il numero di Gandalf è " + computer;

  gandalfDraw.className = "visible";
  gandalfTextDraw.innerHTML = "Pareggio!";
  gandalfTextDraw.className = "visible";

} else if (computer > player) {
  text.innerHTML = "Il tuo numero è " + player + ". <br> Il numero di Gandalf è " + computer;

  gandalfWin.className = "visible";
  gandalfTextWin.innerHTML = "Hai perso!";
  gandalfTextWin.className = "visible";

  } else {
  text.innerHTML = "Il tuo numero è " + player + ". <br> Il numero di Gandalf è " + computer;

  gandalfLose.className = "visible";
  gandalfTextLose.innerHTML = "Hai vinto!";
  gandalfTextLose.className = "visible";

  }
