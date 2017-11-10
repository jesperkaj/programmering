// PRØVESÆT START!

/*
    Lav en funktion, der returnerer det femte tegn i en given streng.
    Hvis strengen er kortere end fem bogstaver, returneres det sidste tegn.

    str: Stengen med tegn
*/
ord="Cancer"
function opgave1(str) {
    console.log(ord.charAt(4));
    
    }
    if ord >=4 {
        console.log(array[array.length - 1])
    }
    


/*
    Lav en funktion, der returnerer et tilfældigt helt tal i et givent interval.

    min: Det første tal i intervallet
    max: Det sidste tal i intervallet
*/
function opgave2(min, max) {
 min = 3
 max = 7
 console.log(Math.random)
 return tal if (tal >= 3 && tal <= 7) {
    console.log("return");
} else {
    console.log("X");
}
}

   


/*
    Lav en funktion, der angiver, hvorvidt et givent tal går op i et andet givent tal.

    x: Tallet, der gås op i
    a: Tallet, der går op

    Hvis a går op i x returnes sandhedsværdien true ellers returneres sandhedsværdien false.
*/
tala=2
x=100
function opgave3(x, a) {
    if (tala % 100) {
        console.log("false");
    } else {
        console.log("True");
    }



/*
    Lav en funktion, der for et givent array returnerer det tredje element.
    Hvis arrayet har færre end tre elementer, returneres ingenting og en passende fejlbesked
    skrives ud til terminalen.

    arr: Arrayet med elementer
*/
function opgave4(arr) {
    console.log(array[2]);
if (array >= 2)
}


/*
    Lav en funktion, der for et givent array af tal returnerer produktet af tallene.

    arr: Arrayet med tal
*/
function opgave5(arr) {
    console.log(array.join("5,2,4 "));
}


/*
    Lav en funktion, der for en given dato returnerer datoen i et pænt format.

    dato: Datoen på formen DD-MM-YYYY.

    Returform D. MMMM YYYY
    (F.eks. skal datoen 02-10-2017 omformes til 2. oktober 2017)
*/
function opgave6(dato) {
    dato = new Date();
    ord = dato.toISOString();
    console.log(ord.substr(8, 2) + ord.substr(4, 3) + "." + ord.substr(0, 4));
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
array1[1,4,5,8]
array2[1,2,6,8]
return tal if tal =array1&array2 
}


/*
    Lav en funktion, der returnerer tværsummen af et givent heltal.

    x: Tallet, der skal findes tværsum af
????????????????????????????????????????????????????????? Tværsum????????????????????*/
function opgave8(x)
tal=100
console.log(Math.????????)

/*?????????????????????????????????????????????????????????????????????????????????????????????????????
    Lav en funktion, der undersøger, hvorvidt et bestemt tal er et primtal.

    x: Tal, der skal undersøges

    Hvis x er et primtal returneres sandhedsværdien true ellers returneres sandhedsværdien false.
*/
function opgave9(x) {
tal=100
console.log(Math.?????????????????????????????????)
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