const array = ["Hej", "med", "dig"];

// Opgave 1
// Skriv et program, der udskriver det første element i arrayet

console.log(array[0]);


// Opgave 2
// Skriv et program, der udskriver det sidste element i arrayet

console.log(array[array.length - 1]);


// Opgave 3
// Skriv et program, der sammensætter dele i arrayet til en streng

console.log(array.join(" "));


// Opgave 4
// Skriv et program, der først sorterer elementerne i arrayet i alfabetisk rækkefølger, dernæst udskriver resultatet


// NB! Kan gøres meget smartere end nedenstående, men det kræver funktioner, vi ikke har lært endnu

const sorteret = [];
let k = 0;

for (var i = 0; i < array.length; i++) {

    for (var j = 0; j < sorteret.length; j++) {
        if (sorteret[j].toLowerCase() > array[i].toLowerCase()) {
            break;
        }
    }

    sorteret.splice(j, 0, array[i]);
}

console.log(sorteret);



const karakterer = [10, 12, 12, 2, 4, 4, 4, 7, 2, 10];

// Opgave 5
// Skriv et program, der gennemløber karaktererne og udskriver dem en for en

for (var i = 0; i < karakterer.length; i++) {
    console.log(karakterer[i]);
}



// Opgave 6
// Skriv et program, der finder gennemsnittet af karaktererne

let sum = 0;

for (var i = 0; i < karakterer.length; i++) {
    sum += karakterer[i];
}

console.log(sum / karakterer.length);


// Opgave 7
// Skriv et program med en løkke, der gennemløber heltalene fra 0 til 100
// Hver gang et tal er deleligt med 3 skrives "Hip"
// Hver gang et tal er deleligt med 5 skrives "Hurra"
// Hvis tallet både er deleligt med 3 og 5 skrives "Hip Hurra"




// Opgave 8
// Skriv et program med en løkke, der udskriver følgende:
/*
!
!!
!!!
!!!!
!!!!!
*/



// Opgave 9
// Skriv et program med en løkke, der for to givne tal, finder den største fælles divisor (Det største tal, der går op i begge tal).



