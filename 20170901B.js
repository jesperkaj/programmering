function mellem10Og30(x) {
    if (x >= 10 && x <= 30) {
        return "Hurra!";
    }

    return "Desværre!";
}

function syvogtredive(x) {
    if (x > 37) return x / 37; else return 37 - x;
}

function deleligtMedSyv(x) {
    if (x % 7 == 0) {
        return "Tallet er deleligt med 7";
    }

    return "Tallet er ikke deleligt med 7";
}

function sekunderTilTimer(sekunder) {
    let linje = sekunder + " sekunder er";
    
    const timer = Math.floor(sekunder / 3600);
    sekunder %= 3600;
    const minutter = Math.floor(sekunder / 60);
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
    
    return linje + ".";
}

function tættestPå200(a, b) {
    if (Math.abs(a - 200) > Math.abs(b - 200)) {
        return b;
    } else {
        return a;
    }
}

function filtyper(filnavn) {

    if (filnavn.indexOf(".") == -1) {
        console.log("Fejl: Filnavnet indeholder ikke et punktum");
        return;
    }

    switch (filnavn.substr(filnavn.lastIndexOf(".") + 1))  {
        case "exe":
            return "Program";
            break;
        case "doc":
        case "docx":
            return "Word-dokument";
            break;
        case "xls":
        case "xlsx":
            return "Excel-ark";
            break;
        case "txt":
            return "Tekstdokument";
            break;
        case "js":
            return "JavaScript";
            break;
        default:
            return "Ukendt filtype";
    }
    
}

function begyndelsesbogstav(str) {
    if (str.length >= 4) {
        return str.charAt(0).toUpperCase() + str.substr(1);
    } else if (str.length > 1) {
        return str.charAt(0).toLowerCase() + str.substr(1);
    } else {
        return str.toLowerCase();
    }
}

function karaktergivning(point, maxpoint) {
    const tredjedel = Math.floor(maxpoint / 3);
    
    if (point < tredjedel) {
        if (point == 0) {
            return "-3";
        } else {
            return "00";
        }
    } else {
        procent = (point - tredjedel) / (maxpoint - tredjedel)
    
        if (procent < .1) {
            return "02";
        } else if (procent < .35) {
            return "4";
        } else if (procent < .65) {
            return "7";
        } else if (procent < .90) {
            return "10";
        } else {
            return "12";
        }
    }
        
}

function Opgaver20170824() {
    // Opgave 1
    console.log(mellem10Og30(5));
    console.log(mellem10Og30(25));
    console.log(mellem10Og30(50));

    // Opgave 2
    console.log(syvogtredive(25));
    console.log(syvogtredive(50));

    // Opgave 3
    console.log(deleligtMedSyv(14));
    console.log(deleligtMedSyv(13));

    // Opgave 4
    console.log(sekunderTilTimer(10000));

    // Opgave 5
    console.log(tættestPå200(150, 240));

    // Opgave 6
    console.log(filtyper("test.doc"));

    // Opgave 7
    console.log(begyndelsesbogstav("hej med dig"));
    console.log(begyndelsesbogstav("HEJ"));

    // Opgave 8
    console.log(karaktergivning(50, 100));
}

Opgaver20170824();