// PRØVESÆT START!

/*
    Lav en funktion, der returnerer det femte tegn i en given streng.
    Hvis strengen er kortere end fem bogstaver, returneres det sidste tegn.

    str: Stengen med tegn
*/
function opgave1(str) {
    
str="Hej"
    if (str.length > 5)
} 
return (str.substr(4))

Else
return (lastIndexOf(str)
console.log(str.substr(4))
/*
    Lav en funktion, der returnerer et tilfældigt helt tal i et givent interval.

    min: Det første tal i intervallet
    max: Det sidste tal i intervallet
*/
function opgave2(min, max) {
    return(Math.floor(Math.random()*101))
}
console.log(opgave2(1,100))

/*
    Lav en funktion, der angiver, hvorvidt et givent tal går op i et andet givent tal.

    x: Tallet, der gås op i
    a: Tallet, der går op

    Hvis a går op i x returnes sandhedsværdien true ellers returneres sandhedsværdien false.
*/
let x=10
let a=2
    if (x % a) {
        return("true");
    } else {
        return("false");
    }
console.log(x,a)

/*
    Lav en funktion, der for et givent array returnerer det tredje element.
    Hvis arrayet har færre end tre elementer, returneres ingenting og en passende fejlbesked
    skrives ud til terminalen.

    arr: Arrayet med elementer
*/
function opgave4(arr) {

}


/*
    Lav en funktion, der for et givent array af tal returnerer produktet af tallene.

    arr: Arrayet med tal
*/
function opgave5(arr) {

}


/*
    Lav en funktion, der for en given dato returnerer datoen i et pænt format.

    dato: Datoen på formen DD-MM-YYYY.

    Returform D. MMMM YYYY
    (F.eks. skal datoen 02-10-2017 omformes til 2. oktober 2017)
*/
function opgave6(dato) {

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
function opgave8(x){

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
    console.log("1a " + (opgave1("NogetMedProgrammering") == "t"));
    console.log("1b " + (opgave1("Hej") == "j"));
    t = opgave2(2, 3);
    console.log("2a " + (t == 2 || t == 3));
    t = opgave(2, 20000);
    console.log("2b " + (t > 2 && t < 20000));
    console.log("3a " + (opgave3(9, 3)));
    console.log("3b " + (!opgave3(14, 8)));
    console.log("4a " + (opgave4(["abe", 3, Math.PI, "hej"])));
    console.log("4b " + (!opgave4(["abe", 3])));
    console.log("5a " + (opgave5([1, 2, 3, 4]) == 24));
    console.log("5b " + (opgave5([2, 3, 5]) == 30));
    console.log("6a " + (opgave6("12-10-2017") == "12. oktober 2017"));
    console.log("6b " + (opgave6("09-03-1995") == "9. marts 1995"));
    t = opgave7(["a", "c", "d", "f", "g"], ["a", "b", "d", "e", "f"]);
    console.log("7 " + (t.every(e => {
        return ["a", "d", "f"].indexOf(e) > -1;
    })));
    console.log("8a " + (opgave8(18) == 9));
    console.log("8b " + (opgave8(29) == 2 || opgave8(29) == 11));
    console.log("9a " + (opgave9(6217)));
    console.log("9b " + (!opgave9(7641)));
}
