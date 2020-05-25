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

// Notifica per l'utente
if (check === true) {
  alert ("Benvenuto");
} else {
  alert ("Inserisci mail valida");
}
