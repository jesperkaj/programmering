// PRØVESÆT START!

/*
    Lav en funktion, der returnerer det femte tegn i en given streng.
    Hvis strengen er kortere end fem bogstaver, returneres det sidste tegn.

    str: Stengen med tegn
*/
function opgave1(str) {
    var str ="Jegelskerprogrammering"
    return str.charAt(5);
 if (str < 5) return lastIndexOf(str)  
  

}

console.log(opgave1())

/*
    Lav en funktion, der returnerer et tilfældigt helt tal i et givent interval.

    min: Det første tal i intervallet
    max: Det sidste tal i intervallet
*/
function opgave2(min, max) {
    var max = 20
    var min = 0

    return (Math.random() *max) + 1   


}

console.log(opgave2())

/*
    Lav en funktion, der angiver, hvorvidt et givent tal går op i et andet givent tal.

    x: Tallet, der gås op i
    a: Tallet, der går op

    Hvis a går op i x returnes sandhedsværdien true ellers returneres sandhedsværdien false.
*/
function opgave3(x, a) {

    var x = 50
    var a = 7

    if (x%a==0) return "true"
        
        else return "false"
        }
        console.log(opgave3())


/*
    Lav en funktion, der for et givent array returnerer det tredje element.
    Hvis arrayet har færre end tre elementer, returneres ingenting og en passende fejlbesked
    skrives ud til terminalen.

    arr: Arrayet med elementer
*/
function opgave4(arr) {
    var arr = ["Hej", "med", "dig", "du"]

    return arr.slice(2,3)

    if (arr < 3) return "Der er mindre end 3 elementer"

}
console.log(opgave4())

/*
    Lav en funktion, der for et givent array af tal returnerer produktet af tallene.

    arr: Arrayet med tal
*/
function opgave5(arr) {
    var arr = [10, 12, 12, 2, 4, 4, 4, 7, 2, 10];

    return (1+2+3+4+5+6+7+8+9+10)

}
console.log(opgave5())

/*
    Lav en funktion, der for en given dato returnerer datoen i et pænt format.

    dato: Datoen på formen DD-MM-YYYY.

    Returform D. MMMM YYYY
    (F.eks. skal datoen 02-10-2017 omformes til 2. oktober 2017)
*/
function opgave6(dato) {
    var dato = new Date();

    return  (dato.getDate() + "-" + (dato.getMonth()+ 1) + "-" + dato.getFullYear())

}

console.log(opgave6())

/*
    Lav en funktion, der for to givne arrays returnerer et nyt array med de elementer,
    der både findes i det første og det andet array. Hvis de to arrays ikke har noget tilfælles
    returneres et tomt array.

    arr1: Det ene array
    arr2: Det andet array

    (F.eks. skal funktionen for arrays [1, 3, 4, 6] og [2, 3, 5, 6] returnerer [3, 6])
*/
function opgave7(arr1, arr2) {
var arr1 = [1, 3, 4, 6]
var arr2 = [2, 3, 5, 6]

return arr1.concat(arr2)


}

console.log(opgave7())

/*
    Lav en funktion, der returnerer tværsummen af et givent heltal.

    x: Tallet, der skal findes tværsum af
*/
function opgave8(x) {
    var x = 25

    return (x)

}

/*
    Lav en funktion, der undersøger, hvorvidt et bestemt tal er et primtal.

    x: Tal, der skal undersøges

    Hvis x er et primtal returneres sandhedsværdien true ellers returneres sandhedsværdien false.
*/


function opgave9(x) {}
  

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