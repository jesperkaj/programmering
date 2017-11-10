
function femteTegn(str) {
    if (str.length > 3) {
        return str.charAt(4);
    }
    console.log("Fejl: Strengen er mindre end fire tegn lang");
}

function storeBogstaver(str) {
    return str.toUpperCase();
}

function småBogstaver(str) {
    return str.toLowerCase();
}

function førsteSyvTegn(str) {
    if (str.length > 6) {
        return str.substr(0, 7);
    }
    console.log("Fejl: Strengen er under syv tegn lang");
}

function sidsteFireTegn(str) {
    if (str.length > 3) {
        return str.substr(-4);
    }
    console.log("Fejl: Strengen er under fire tegn lang");
}

function fjerdeTilSyvendeTegn(str) {
    if (str.length > 6) {
        return str.substr(3, 4);
    }
    console.log("Fejl: Strengen er under syv tegn lang");
}

function kvadratrod(x) {
    if (typeof x == "number" && x >= 0) {
        return Math.sqrt(x);
    } else if (typeof x == "number") {
        console.log("Fejl: Tallet må ikke være negativt");
    } else {
        console.log("Fejl: Argumentet er ikke et tal");
    }
}

function tilfældigtTal(start, slut) {
    if (start && slut) {
        return Math.floor(Math.random() * (slut - start + 1)) + start;
    } else {
        return Math.random();
    }
}

function sinus(grader) {
    return Math.sin(Math.PI / 180 * grader);
}

function dagsDato() {
    return (new Date()).toLocaleDateString();
}

function formateretDato(dato) {
    const iso = dato.toISOString();
    return iso.substr(8, 2) + iso.substr(4, 3) + "-" + iso.substr(0, 4);
}

function dageTilJuleaften() {
    const dato = new Date();
    const juleaften = new Date(dato.getFullYear(), 11, 24);
    if (dato > juleaften) juleaften = new Date(dato.getFullYear() + 1, 11, 24);
    return Math.ceil((juleaften - dato) / 1000 / 60 / 60 / 24);
}

function Opgaver20170818() {
    // Opgave 1
    console.log(femteTegn("programmering"));

    // Opgave 2
    console.log(storeBogstaver("JavaScript"));

    // Opgave 3
    console.log(småBogstaver("Æblegrød"));

    // Opgave 4
    console.log(førsteSyvTegn("Programmering"));

    // Opgave 5
    console.log(sidsteFireTegn("Programmering"));

    // Opgave 6
    console.log(fjerdeTilSyvendeTegn("Programmering"));

    // Opgave 7
    console.log(kvadratrod(5));

    // Opgave 8
    console.log(tilfældigtTal());

    // Opgave 9
    console.log(tilfældigtTal(1, 8));

    // Opgave 10
    console.log(sinus(22));

    // Opgave 11
    console.log(dagsDato());

    // Opgave 12
    console.log(formateretDato(new Date()));

    // Opgave 13
    console.log(formateretDato(new Date(1940, 10, 25)));

    // Opgave 14
    console.log(dageTilJuleaften());
}

Opgaver20170818();
