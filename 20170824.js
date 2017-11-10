let tal, sekunder, linje, minutter, timer, tal2, filnavn, type, point, maxpoint, karakter, tredjedel, procent;


// Opgave 1
// Skriv et program, der undersøger om et tal er mellem 10 og 30.
// Hvis det er, skal der udskrives "Hurra!" til terminalen; ellers skal der udskrives "Desværre!".

tal = Math.floor(Math.random() * 100) + 1;

if (tal >= 10 && tal <= 30) {
    console.log("Hurra!");
} else {
    console.log("Desværre!");
}


// Opgave 2
// Skriv et program, der skriver den numeriske forskel mellem et tal og tallet 37 ud til terminalen.
// Hvis det oprindelige tal er større end 37 skal pogrammet i stedet skrive forholdet mellem tallet og 37 ud til terminalen.

if (tal > 37) {
    console.log(tal / 37);
} else {
    console.log(37 - tal);
}


// Opgave 3
// Skriv et program, der undersøger, om 7 går op i et givent tal.
// Hvis det gør, skal der udskrives "Tallet er deleligt med 7"; ellers skal der udskrives "Tallet er ikke deleligt med 7".

if (tal % 7) {
    console.log("Tallet er ikke deleligt med 7");
} else {
    console.log("Tallet er deleligt med 7");
}


// Opgave 4
// Skriv et program, der omskriver et antal sekunder til timer, minutter og sekunder.
// F.eks. "10000 sekunder er 2 timer 46 minutter og 40 sekunder."


sekunder = 10000;

linje = sekunder + " sekunder er";

timer = Math.floor(sekunder / 3600);
sekunder %= 3600;
minutter = Math.floor(sekunder / 60);
sekunder %= 60;

if (timer) {
    linje += " " + timer + " time";
    if (timer > 1) linje += "r";
    if (minutter && !sekunder || !minutter && sekunder) linje += " og";
} 

if (minutter) {
    linje += " " + minutter + " minut";
    if (minutter > 1) linje += "ter";
    if (sekunder) linje += " og";
}

if (sekunder) {
    linje += " " + sekunder + " sekund"
    if (sekunder > 1) linje += "er";
}

linje += ".";

console.log(linje);


// Opgave 5
// Skriv et program, der finder, hvilket et af to givne tal der er tættest på 200.
// Det tal, der er tættest på, skal udskrives til terminalen.

tal = 130;
tal2 = 240;

if (Math.abs(tal - 200) > Math.abs(tal2 - 200)) {
    console.log(tal2);
} else {
    console.log(tal);
}


// Opgave 6
// Skriv et program, der for et givent filnavn (f.eks. "file.ext") skriver ud til terminalen, hvilken type fil det er.
// Programmet skal kunne genkende .exe, .doc, .docx, .xls, .xlsx, .txt og (selvfølgelig) .js-filer - find selv på flere.
// Ved ikke-kendte filtyper skal programmet skrive "Ukendt filtype".

filnavn = "test.doc";

switch (filnavn.substr(filnavn.lastIndexOf(".") + 1))  {
    case "exe":
        type = "Program";
        break;
    case "doc":
    case "docx":
        type = "Word-dokument";
        break;
    case "xls":
    case "xlsx":
        type = "Excel-ark";
        break;
    case "txt":
        type = "Tekstdokument";
        break;
    case "js":
        type = "JavaScript";
        break;
    default:
        type = "Ukendt filtype";
}

console.log(type);


// Opgave 7
// Skriv et program, der for en given streng, udskriver strengen med lille begyndelsesbogstav, hvis strengen er under 4 bogstaver lang, og med stort, hvis strengen er over 4 bogstaver lang.

linje = "hej med dig";

if (linje.length >= 4) {
    linje = linje.charAt(0).toUpperCase() + linje.substr(1);
} else if (linje.length > 1) {
    linje = linje.charAt(0).toLowerCase() + linje.substr(1);
} else {
    linje = linje.toLowerCase();
}

console.log(linje);


// Opgave 8
// Skriv et program, der giver en karakter til et pointantal ud fra følgende regler:
// - Hvis pointantallet er under 1/3 af det mulige pointantal, gives karakteren 00.
// -- Dog: Hvis pointantallet er 0, gives karakteren -3.
// - Hvis pointantallet ligger og 1/3 af det mulige pointantal, gives følgende karakterer:
// -- [0; 10 %[ giver 02, [10 %; 35 %[ giver 4, [35 %; 65 %[ giver 7, [65 %; 90 %[ giver 10 og [90 %; 100 %] giver 12.

maxpoint = 100;
point = 96;
tredjedel = Math.floor(maxpoint / 3);

if (point < tredjedel) {
    if (point == 0) {
        karakter = "-3";
    } else {
        karakter = "00";
    }
} else {
    procent = (point - tredjedel) / (maxpoint - tredjedel)

    if (procent < .1) {
        karakter = "02";
    } else if (procent < .35) {
        karakter = "4";
    } else if (procent < .65) {
        karakter = "7";
    } else if (procent < .90) {
        karakter = "10";
    } else {
        karakter = "12";
    }
}

console.log(karakter);