var mail = prompt("qual'è la tua email?") ;
var registrati = ['Pippo@gmail.com', 'Luca@gmail.com', 'Paolo@gmail.com', 'Marco@gmail.com', 'Maria@gmail.com', 'Gianni@gmail.com'];

var output = document.getElementById('registrati-list');

var check = false; // deve diventare true solo se trovo anna.

for (var i = 0; i < registrati.length; i++) {
    if (mail === registrati[i]) {
        check = true;
        break; // esci dal ciclo.
    }
}

if (check === true) {
    output.innerHTML += "Ho trovato l'email !";
} else {
    output.innerHTML += "Non ho trovato l'email";
}

