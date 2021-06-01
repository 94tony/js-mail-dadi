var mail = prompt("qual'è la tua email?") ;
var registrati = ['Pippo@gmail.com', 'Luca@gmail.com', 'Paolo@gmail.com', 'Marco@gmail.com', 'Maria@gmail.com', 'Gianni@gmail.com'];

var output = document.getElementById('result');

var check = false; // deve diventare true solo se trovo anna.

for (var i = 0; i < registrati.length; i++) {
    if (mail === registrati[i]) {
        check = true;
        break; // esci dal ciclo.
    }
}

if (check) {
    output.innerHTML += "Ho trovato l'email !";
} else {
    output.innerHTML += "Non ho trovato l'email";
}


var userNumber = Math.floor(Math.random() *6) +1 ;
var cpuNumber = Math.floor(Math.random()* 6) +1;
document.getElementById('result1').innerHTML += '<br/>' + userNumber + "----" + cpuNumber + '<br/>' ;
if(userNumber > cpuNumber) {
    document.getElementById('result1').innerHTML += ' hai vinto'   ;
}else if (userNumber < cpuNumber) {
    document.getElementById('result1').innerHTML += ' il computer ha vinto';
}else{
    document.getElementById('result1').innerHTML += ' pari';
    
}
