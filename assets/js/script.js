// Descrizione:
// Scrivere un programma che chieda all’utente:
//  Il numero di chilometri da percorrere
//  Età del passeggero Sulla base di queste informazioni dovrà calcolare 
//  il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
//  il prezzo del biglietto è definito in base ai km (0.21 € al km)
//  va applicato uno sconto del 20% per i minorenni
//  va applicato uno sconto del 40% per gli over 65.

// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: 
// usando esclusivamente due input e un bottone(non stilizzati),
//     realizziamo le specifiche scritte sopra.La risposta finale(o output) 
//     sarà anch’essa da scrivere in console.

// MILESTONE 2: 
// Solo una volta che il milestone 1 sarà completo e funzionante 
// allora realizzeremo un form in pagina in cui l’utente potrà inserire 
// i dati e visualizzare il calcolo finale con il prezzo.Il recap dei dati 
// e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo 
//     dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). 
//     Questo richiederà un minimo di ricerca.

//     Nota: Se non vi sentite particolarmente creativi, questa potrebbe essere
// un’implementazione da seguire per il secondo milestone.Potete scegliere di implementare 
// una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.


const passenger = document.getElementById('nome_cognome');


const generate = document.getElementById('genera');



generate.addEventListener('click', () => {
    const km = document.getElementById('kilometri');
    const price = km.value * 0.21;

    const select = document.getElementById('età');
    let selection = select.selectedIndex;
    let option = select.options[selection];
    let optionValue = option.value;



    const ticketPassenger = document.getElementById('ticket-passenger');
    let discount = document.getElementById('discount');
    let finalPrice = document.getElementById('final-price');
    ticketPassenger.innerHTML = passenger.value
    if (optionValue == 'Minorenne') {
        let min_rounded = (price - (price * 0.20)).toFixed(2);
        console.log(min_rounded)
        discount.innerHTML = 'Minori'
        finalPrice.innerHTML = '€ ' + min_rounded
    }
    else if (optionValue == 'Over 65') {
        let max_rounded = (price - (price * 0.40)).toFixed(2);
        console.log(max_rounded)
        discount.innerHTML = 'Over'
        finalPrice.innerHTML = '€ ' + max_rounded
    }
    else if (optionValue == 'Maggiorenne') {
        let regular = price.toFixed(2);
        console.log(regular)
        discount.innerHTML = 'Standard'
        finalPrice.innerHTML = '€ ' + regular
    }


});




