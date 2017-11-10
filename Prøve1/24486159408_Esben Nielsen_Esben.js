
// PRØVESÆT START!

/*
    Lav en funktion, der returnerer det femte tegn i en given streng.
    Hvis strengen er kortere end fem bogstaver, returneres det sidste tegn.

    str: Stengen med tegn
*/
function opgave1(str) {
    var n = str.length
    if (n >= 5) {
        return str.charAt(4)
    } else {
        return str.charAt(n - 1)
    }
}


/*
    Lav en funktion, der returnerer et tilfældigt helt tal i et givent interval.

    min: Det første tal i intervallet
    max: Det sidste tal i intervallet
*/
function opgave2(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


/*
    Lav en funktion, der angiver, hvorvidt et givent tal går op i et andet givent tal.

    x: Tallet, der gås op i
    a: Tallet, der går op

    Hvis a går op i x returnes sandhedsværdien true ellers returneres sandhedsværdien false.
*/
function opgave3(x, a) {
    return Number.isInteger(x / a)
}


/*
    Lav en funktion, der for et givent array returnerer det tredje element.
    Hvis arrayet har færre end tre elementer, returneres ingenting og en passende fejlbesked
    skrives ud til terminalen.

    arr: Arrayet med elementer
*/
function opgave4(arr) {
    if (arr.length >= 3) {
        return arr[2]
    } else {
        return "Arrayet har ikke 3 eller flere elementer!"
    }
}


/*
    Lav en funktion, der for et givent array af tal returnerer produktet af tallene.

    arr: Arrayet med tal
*/
function opgave5(arr) {
    var tal = 0
    for (var i = 0; i < arr.length; i++) {
        tal = tal + arr[i]
    }
    return tal
}


/*
    Lav en funktion, der for en given dato returnerer datoen i et pænt format.

    dato: Datoen på formen DD-MM-YYYY.

    Returform D. MMMM YYYY
    (F.eks. skal datoen 02-10-2017 omformes til 2. oktober 2017)
*/
function opgave6(dato) {
    var måned
    var tal1 = dato.charAt(3) + dato.charAt(4)
    if (tal1 == "01") {
        måned = "januar"
    } else if (tal1 == "02") {
        måned = "februar"
    } else if (tal1 == "03") {
        måned = "marts"
    } else if (tal1 == "04") {
        måned = "april"
    } else if (tal1 == "05") {
        måned = "maj"
    } else if (tal1 == "06") {
        måned = "juni"
    } else if (tal1 == "07") {
        måned = "juli"
    } else if (tal1 == "08") {
        måned = "august"
    } else if (tal1 == "09") {
        måned = "september"
    } else if (tal1 == "10") {
        måned = "oktober"
    } else if (tal1 == "11") {
        måned = "november"
    } else {
        måned = "december"
    }

    var år = dato.charAt(6) + dato.charAt(7) + dato.charAt(8) + dato.charAt(9)
    var dag
    if (dato.charAt(0) == "0") {
        dag = dato.charAt(1)
    } else {
        dag = dato.charAt(0) + dato.charAt(1)
    }

    return dag + ". " + måned + " " + år
}


/*
    Lav en funktion, der for to givne arrays returnerer et nyt array med de elementer,
    der både findes i det første og det andet array. Hvis de to arrays ikke har noget tilfælles
    returneres et tomt array.

    arr1: Det ene array
    arr2: Det andet array

    (F.eks. skal funktionen for arrays [1, 3, 4, 6] og [2, 3, 5, 6] returnerer [3, 6])
*/
function opgave7(arr1, arr2) {

}


/*
    Lav en funktion, der returnerer tværsummen af et givent heltal.

    x: Tallet, der skal findes tværsum af
*/
function opgave8(x) {

}


/*
    Lav en funktion, der undersøger, hvorvidt et bestemt tal er et primtal.

    x: Tal, der skal undersøges

    Hvis x er et primtal returneres sandhedsværdien true ellers returneres sandhedsværdien false.
*/
function opgave9(x) {

}


// PRØVESÆT SLUT!

// Efterfølgende linjer må ikke redigeres!

function test() {
    let t;
    evaluer("1a", opgave1("NogetMedProgrammering") == "t");
    evaluer("1b", opgave1("Hej") == "j");
    t = opgave2(2, 3);
    evaluer("2a", t == 2 || t == 3)
    t = opgave2(2, 20000);
    evaluer("2b", t > 2 && t < 20000);
    evaluer("3a", opgave3(9, 3) == true);
    evaluer("3b", opgave3(14, 8) == false);
    evaluer("4a", opgave4(["abe", 3, Math.PI, "hej"]) == Math.PI);
    evaluer("4b", !opgave4(["abe", 3]));
    evaluer("5a", opgave5([1, 2, 3, 4]) == 24);
    evaluer("5b", opgave5([2, 3, 5]) == 30);
    evaluer("6a", opgave6("12-10-2017") == "12. oktober 2017");
    evaluer("6b", opgave6("09-03-1995") == "9. marts 1995");
    t = opgave7(["a", "c", "d", "f", "g"], ["a", "b", "d", "e", "f"]);
    if (t) {
        evaluer("7a", (t.every(e => {
            return ["a", "d", "f"].indexOf(e) > -1;
        })));
    } else {
        evaluer("7a", false);
    }
    evaluer("8a", opgave8(18) == 9);
    evaluer("8b", opgave8(29) == 2 || opgave8(29) == 11);
    evaluer("9a", opgave9(6217) == true);
    evaluer("9b", opgave9(7641) == false);
}

function evaluer(opgave, udtryk) {
    if (udtryk == true) {
        console.log("%s \x1b[32m%s\x1b[0m", opgave, "OK");
    } else {
        console.log("%s \x1b[31m%s\x1b[0m", opgave, "Fejl");
    }
    
}

test();