// Campominato / Bonus

// L'utente seleziona la difficoltà
let difficulty = document.getElementById('difficulty-selector');

let howHard = difficulty.value;

console.log(howHard);


// Aggancio il bottone al file js
const btn = document.getElementById('button');

// Aggancio il container della griglia al file js
const wrapper = document.getElementById('container');

// L'utente clicca sul bottone che genera la griglia di gioco
// Creo un addEventListener per far sì che al click di btn venga mostrata la griglia
btn.addEventListener('click' , 

    function(){

        if(howHard == 1) {

            // InnerHtml vuoto per resettare il container
            wrapper.innerHTML = '';

            wrapper.classList.add('generated');
    
            // Creare la griglia 10x10
            // Creo un ciclo per generare 100 elementi
            for (let i = 1; i < 101; i++) {
        
                // Creo la variabile di appoggio newBox per agganciarci la funzione boxGenerator 
                let newBox = boxGenerator();
        
                // Creo un addEventListener per far sì che al clik su un box questo diventi azzurro e stampi in console.log il numero della cella cliccata
                newBox.addEventListener('click' , 
    
                    function() {
    
                        newBox.classList.add('active');
    
                        console.log('Il numero della cella cliccata è: ' + numeroIterazione);
    
                    }
    
                );
        
                // Inserisco i box creati nel contenitore
                wrapper.appendChild(newBox);
    
                // Creo la variabile numeroIterazione per salvare il valore di i
                let numeroIterazione = i;
    
                // La stampo all'interno di newBox per visualizzarla all'interno dei box come numeri progressivi
                newBox.innerHTML = numeroIterazione;
    
            }        

        } else if(howHard == 2) {

            // InnerHtml vuoto per resettare il container
            wrapper.innerHTML = '';

            wrapper.classList.add('generated');
        
            // Creare la griglia 9x9
        
        
            // Creo un ciclo per generare 81 elementi
            for (let i = 1; i < 82; i++) {
            
                // Creo la variabile di appoggio newBox per agganciarci la funzione boxGenerator 
                let newBox = boxGenerator();

                newBox.classList.add('box9');
            
                // Creo un addEventListener per far sì che al clik su un box questo diventi azzurro e stampi in console.log il numero della cella cliccata
                newBox.addEventListener('click' , 
        
                    function() {
        
                        newBox.classList.add('active');
        
                        console.log('Il numero della cella cliccata è: ' + numeroIterazione);
        
                    }
        
                );
                
                // Inserisco i box creati nel contenitore
                wrapper.appendChild(newBox);
        
                // Creo la variabile numeroIterazione per salvare il valore di i
                let numeroIterazione = i;
        
                // La stampo all'interno di newBox per visualizzarla all'interno dei box come numeri progressivi
                newBox.innerHTML = numeroIterazione;
            
            }    
        } else if(howHard == 3) {

            // Creare la griglia 7x7
    
    
            // Creo un ciclo per generare 49 elementi
            for (let i = 1; i < 50; i++) {
        
                // Creo la variabile di appoggio newBox per agganciarci la funzione boxGenerator 
                let newBox = boxGenerator();

                newBox.classList.add('box7');
        
                // Creo un addEventListener per far sì che al clik su un box questo diventi azzurro e stampi in console.log il numero della cella cliccata
                newBox.addEventListener('click' , 
    
                    function() {
    
                        newBox.classList.add('active');
    
                        console.log('Il numero della cella cliccata è: ' + numeroIterazione);
    
                    }
    
                );
        
                // Inserisco i box creati nel contenitore
                wrapper.appendChild(newBox);
    
                // Creo la variabile numeroIterazione per salvare il valore di i
                let numeroIterazione = i;
    
                // La stampo all'interno di newBox per visualizzarla all'interno dei box come numeri progressivi
                newBox.innerHTML = numeroIterazione;
    


            }

        }

    }

);












// Functions
function boxGenerator() {

    // Creo l'elemento generico
    const element = document.createElement('div');

    // Aggiungo la classe box all'elemento creato
    element.classList.add('box');

    // console.log(element);

    // Ritorno l'elemento
    return element;

}