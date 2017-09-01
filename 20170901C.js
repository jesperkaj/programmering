function førsteElement(array) {
    if (array.length > 0) {
        return array[0];
    }
    console.log("Fejl: Tomt eller intet array");
}

function sidsteElement(array) {
    if (array.length > 0) {
        return array[array.length - 1];
    }
    console.log("Fejl: Tomt eller intet array");
}

function sammensætArrayTilStreng(array) {
    return array.join(" ");
}

function sorterAlfabetisk(array) {
    const sorteret = [];
    
    for (var i = 0; i < array.length; i++) {
    
        for (var j = 0; j < sorteret.length; j++) {
            if (sorteret[j].toLowerCase() > array[i].toLowerCase()) {
                break;
            }
        }
    
        sorteret.splice(j, 0, array[i]);
    }

    return sorteret;
}

/* Hvis det er funktionens formål at udskrive noget til terminalen er console.log ok */
function udskrivKarakterer(karakterer) {
    for (var i = 0; i < karakterer.length; i++) {
        console.log(karakterer[i]);
    }
}

function karaktergennemsnit(karakterer) {
    let sum = 0;
    
    for (var i = 0; i < karakterer.length; i++) {
        sum += karakterer[i];
    }

    return sum / karakterer.length;
}

function udskrivHiphurra(start, slut, a, b) {
    for (var i = start; i <= slut; i++) {
        if (i % (a * b) == 0) {
            console.log(i + ": Hip Hurra");
        } else if (i % a == 0) {
            console.log(i + ": Hip");
        } else if (i % b == 0) {
            console.log(i + ": Hurra");
        } else {
            console.log(i);
        }
    }
}

function udskrivTegntrekant(tegn, antal) {
    for (var i = 0; i < antal; i++) {
        console.log(tegn.repeat(i + 1));
    }
}

function størsteFællesDivisor(a, b) {
    while (a != b) {
        if (a > b) {
            a -= b;
        } else {
            b -= a;
        }
    }

    return a;
}

function Opgaver20170831() {
    const array = ["Hej", "med", "dig"];
    const karakterer = [10, 12, 12, 2, 4, 4, 4, 7, 2, 10];

    // Opgave 1
    console.log(førsteElement(array));

    // Opgave 2
    console.log(sidsteElement(array));

    // Opgave 3
    console.log(sammensætArrayTilStreng(array));

    // Opgave 4
    console.log(sorterAlfabetisk(array));

    // Opgave 5
    udskrivKarakterer(karakterer);

    // Opgave 6
    console.log(karaktergennemsnit(karakterer));

    // Opgave 7
    udskrivHiphurra(0, 100, 3, 5);

    // Opgave 8
    udskrivTegntrekant("!", 5);

    // Opgave 9
    console.log(størsteFællesDivisor(45, 15));
}


Opgaver20170831();