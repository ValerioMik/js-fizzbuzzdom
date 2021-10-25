
/* Scrivi un programma che esegua un ciclo da 1 a 100
e a ogni iterazione appenda un elemento html al container con uno stile differente a seconda del valore dell’indice
per i multipli di 3,
per i multipli di 5
e per i valori che sono sia multipli di 3 che di 5.
Lo facciamo ricreandolo nel layout dato in screeshot (affrontandolo come meglio crediamo). */

/*  facciamo in modo che il computer stampi i numeri da 1 a 100 */
/*troviamo il modo di calcolarci  i multipli di 3 e 5 */
const squareCont = document.getElementById("containersquare");


for (let i = 1; i < 101; i++) {
    if (i % 15 == 0){
    squareCont.innerHTML += `<div class="squarefizzbuzz">FizBuz</div>`;

    }else if(i % 5 == 0){
        squareCont.innerHTML += `<div class="squarebuzz">Buz</div>`;

    }else if (i % 3 ==0){

        squareCont.innerHTML += `<div class="squarefizz">Fiz</div>`;
        ;
    }else{
        squareCont.innerHTML += `<div class="square">${i}</div>`;;
    }

}
/* stampiamo un consol log di verifica */

/* creiamo un codice html di della pagina  */

/*  creiamo lo stile dei quattro quadrati  */

/* appendiamo l'elemento html con lo stile d ogni quadrato */

