// PRØVESÆT START!

/*
    Lav en funktion, der returnerer det femte tegn i en given streng.
    Hvis strengen er kortere end fem bogstaver, returneres det sidste tegn.

    str: Stengen med tegn
*/
ord="HvorforEnTest"
function opgave1(str) {
    console.log(ord.charAt(4));
    
}
opgave1(ord)

/*
    Lav en funktion, der returnerer et tilfældigt helt tal i et givent interval.

    min: Det første tal i intervallet
    max: Det sidste tal i intervallet
*/
tal = Math.floor(Math.random() * 5) + 1;
function opgave2(min, max) {
    console.log(tal);
}
opgave2(tal)

/*
    Lav en funktion, der angiver, hvorvidt et givent tal går op i et andet givent tal.

    x: Tallet, der gås op i
    a: Tallet, der går op

    Hvis a går op i x returnes sandhedsværdien true ellers returneres sandhedsværdien false.
*/
number=68
function opgave3(x, a) {

    if (number % 3) {
        console.log("Tallet kan ikke deles med 3");
    } else {
        console.log("Tallet kan deles med 3");
    }

}
opgave3(number)

/*
    Lav en funktion, der for et givent array returnerer det tredje element.
    Hvis arrayet har færre end tre elementer, returneres ingenting og en passende fejlbesked
    skrives ud til terminalen.

    arr: Arrayet med elementer
*/
const array = ["10", "hi", "xd"];

function opgave4(arr) {
    console.log(array[2]);
}
opgave4(array)

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
dato = new Date();
kuk = dato.toISOString();
function opgave6(dato) {
    console.log(kuk.substr(8, 2) + kuk.substr(4, 3) + "-" + kuk.substr(0, 4));
}
opgave6(dato)

/*
    Lav en funktion, der for to givne arrays returnerer et nyt array med de elementer,
    der både findes i det første og det andet array. Hvis de to arrays ikke har noget tilfælles
    returneres et tomt array.

    arr1: Det ene array
    arr2: Det andet array

    (F.eks. skal funktionen for arrays [1, 3, 4, 6] og [2, 3, 5, 6] returnerer [3, 6])
*/

/*var array1 = [1, 2, 3, 4, 5, 6];
var array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var common = new Set(array1).intersection(array2).keys();
function opgave7(array1,array2){console.log(common)}
opgave7()
*/

//Det er hvad jeg lige kunne lave angående denne opgave da jeg ikke helt forstod hvordan det skulle gøres

/*
    Lav en funktion, der returnerer tværsummen af et givent heltal.

    x: Tallet, der skal findes tværsum af
*/
var x = 123
var sum = 0;
function opgave8(x){
    while (x) {
        sum += x % 10;
        x = Math.floor(x / 10);
    }
}
opgave8(x)

/*
    Lav en funktion, der undersøger, hvorvidt et bestemt tal er et primtal.

    x: Tal, der skal undersøges

    Hvis x er et primtal returneres sandhedsværdien true ellers returneres sandhedsværdien false.
*/
function opgave9(num) {
    
      if (num === 2) {
        return true;
      }
      else if(num > 1){
        for (var i = 2;  i < num; i++) {
    
          if (num % i !== 0 ) {
            return true;
          }
    
          else if (num === i * i) {
            return false
          }
    
          else {
            return false;
          }
        }
      }
      else {
        return false;
      }
    
    }
    
    console.log(opgave9(122));

    //Fandt en af mine gamle "projekter" som var præcis denne opgave

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