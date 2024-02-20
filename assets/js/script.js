// input nome passeggero
const passenger = document.getElementById('nome_cognome');

// selezione tasto genera
const generate = document.getElementById('genera');

// funzione del tasto genera
generate.addEventListener('click', () => {

    //input kilometri
    const km = document.getElementById('kilometri');

    //calcolo del prezzo standard
    const price = km.value * 0.21;

    //input età tramite selzione
    const select = document.getElementById('età');
    let selection = select.selectedIndex;
    let option = select.options[selection];
    let optionValue = option.value;



    const ticketPassenger = document.getElementById('ticket-passenger');


    let discount = document.getElementById('discount');

    let finalPrice = document.getElementById('final-price');

    // numero della carrozza
    let x = Math.floor((Math.random() * 10) + 1);
    document.getElementById('cab').innerHTML = x;

    // numero del codice CP
    let y = Math.floor((Math.random() * 99999) + 1);
    document.getElementById('code').innerHTML = y;

    // nome del passegger osul biglietto
    ticketPassenger.innerHTML = passenger.value


    // condizioni del prezzo e stampa sul biglietto
    if (optionValue == 'Minorenne') {
        let min_rounded = (price - (price * 0.20)).toFixed(2);
        console.log(min_rounded)
        discount.innerHTML = 'Minori'
        finalPrice.innerHTML = '€ ' + min_rounded;


    }
    else if (optionValue == 'Over 65') {
        let max_rounded = (price - (price * 0.40)).toFixed(2);
        console.log(max_rounded)
        discount.innerHTML = 'Over'
        finalPrice.innerHTML = '€ ' + max_rounded;

    }
    else if (optionValue == 'Maggiorenne') {
        let regular = price.toFixed(2);
        console.log(regular)
        discount.innerHTML = 'Standard'
        finalPrice.innerHTML = '€ ' + regular

    }


});

const deleteAll = document.getElementById('annulla');

deleteAll.addEventListener('click', () => {

    location.reload();
});





