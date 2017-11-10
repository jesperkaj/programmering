const resultatDiv = document.getElementById("resultat");
const mellemregninger = document.getElementById("mellemregninger");
const knapper = document.querySelectorAll("button");
let resultat = "";
let positiv = true;

function vis() {
    let str = "", res = "";

    let c = resultat.indexOf(".");
    if (c == -1) c = resultat.length;

    let s = c % 3;
    if (s == 0) s = 3;
    str = resultat.substr(0, s);

    for (var i = s; i < c; i += 3) {
        str += "." + resultat.substr(i, 3);
    }

    if (c < resultat.length) str += ",";
    str += resultat.substr(c + 1);

    if (!positiv) str = "-" + str;
    resultatDiv.innerText = str;
}   

function animation(knap, farve) {
    const gFarve = knap.style.backgroundColor;
    knap.style.backgroundColor = farve;
    setTimeout(function () {
        knap.style.backgroundColor = gFarve;
    }, 30);
}

function tal(x) {
    if (resultat.length > 10) return;
    if (resultat == "0") {
        resultat = x;
    } else {
        resultat += x;
    }
    vis();
}

function fortryd() {
    if (resultat.length == 0) return;
    if (resultat.length == 1) {
        resultat = "0";
    } else {
        resultat = resultat.slice(0, -1);
    }
    vis();
}

function komma() {
    if (resultat.indexOf(".") > -1) return;
    resultat += ".";
    vis();
}

function fortegn() {
    positiv = !positiv;
    vis();
}

function ryd() {
    resultat = "0";
    positiv = true;
    vis();
}

function kvadrat() {
    let x = parseFloat(resultat);
    if (!positiv) x = -x;
    mellemregninger.innerText = "sqr(" + x + ")";
    resultat = (x**2).toString();
    vis();
}

function kvadratrod() {
    let x = parseFloat(resultat);
    if (!positiv) x = -x;
    mellemregninger.innerText = "sqrt(" + x + ")";
    if (!positiv) {
        resultat = "0";
        resultatDiv.innerText = "Ugyldigt input";
        return;
    }
    resultat = Math.sqrt(x).toString();
    vis();
}

function reciprok() {
    let x = parseFloat(resultat);
    if (!positiv) x = -x;
    if (x == 0) return;
    mellemregninger.innerText = "1/(" + x + ")";
    resultat = (1 / x).toString();
    vis();
}

function tast(e) {
    let knap;

    for (var i = 0; i < knapper.length; i++) {
        if (knapper[i].innerText == e.key) {
            knap = knapper[i];
            break;
        }
    }

    if (knap) knap.click();
}