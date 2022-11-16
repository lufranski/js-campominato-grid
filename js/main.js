// Campominato

// L'utente clicca sul bottone che genera la griglia di gioco

// Creare la griglia 10x10

// Aggancio il container della griglia al file js
const wrapper = document.getElementById('container');

console.log(wrapper);

// Creo un ciclo per generare 100 elementi
for (let i = 1; i < 101; i++) {
    
    // Creo la variabile di appoggio newBox per agganciarci la funzione boxGenerator 
    let newBox = boxGenerator();

    // Inserisco i box creati nel contenitore
    wrapper.appendChild(newBox);

    // Creo la variabile numeroIterazione per salvare il valore di i
    var numeroIterazione = i;

    // La stampo all'interno di newBox per visualizzarla all'interno dei box come numeri progressivi
    newBox.innerHTML = numeroIterazione;

    console.log(i);
}



// Functions
function boxGenerator() {

    // Creo l'elemento generico
    const element = document.createElement('div');

    // Aggiungo la classe box all'elemento creato
    element.classList.add('box');

    console.log(element);

    // Ritorno l'elemento
    return element;

}