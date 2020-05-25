// Utente inserisce sua Mail
var mailUser = prompt("Inserici la tua email");

// Lista email registrate
var mailArray = ['vito@gmail.com','antonio@gmail.com','vitantonio@gmail.com',
'gianni@gmail.com','franco@gmail.com','gianfranco@gmail.com'];

// Controllo nella lista
var check = false;

// For Loop per ricerca mail
for (var i = 0; i < mailArray.length; i++) {
  if (mailArray[i] == mailUser ){
    check = true;
  }
}

// Variabili per Img
var gandalfTrue = document.getElementById('gandalfYay');
var gandalfFalse = document.getElementById('gandalfNay');

// Variabili per Text
var gandalfQuestion = document.getElementById('question');
var gandalfTextTrue = document.getElementById('textYay');
var gandalfTextFalse = document.getElementById('textNay');

// Notifica per l'utente
if (check === true) {
  gandalfQuestion.className = "hidden";
  gandalfTrue.className = "visible";
  gandalfTextTrue.className = "visible";

} else {
  gandalfQuestion.className = "hidden";
  gandalfFalse.className = "visible";
  gandalfTextFalse.className = "visible";
}
