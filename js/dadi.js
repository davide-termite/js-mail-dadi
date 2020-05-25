// Variabile per ciascun dado del computer
var firstDiceComputer = Math.floor(Math.random() * 6) + 1;
var secondDiceComputer = Math.floor(Math.random() * 6) + 1;

// Variabile per ciascun dado del giocatore
var firstDicePlayer = Math.floor(Math.random() * 6) + 1;
var secondDicePlayer = Math.floor(Math.random() * 6) + 1;

// Variabile per definire giocatori
var computer = firstDiceComputer + secondDiceComputer;
var player = firstDicePlayer + secondDicePlayer;

// LET THE GAME BEGIN
if (computer == player) {
  alert("pari");
} else if (computer > player) {
  alert("hai perso");
} else {
  alert("hai vinto");
}
