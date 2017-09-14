function skrivNoget() {
    const knaptest = document.getElementById("knaptest");
    knaptest.innerText = "Nu står der noget";
}

function kontrollerInput() {
    const inputtekst = document.getElementById("inputtekst");
    const inputtest = document.getElementById("inputtest");
    inputtest.innerText = inputtekst.value;
}

const teksttest = document.getElementById("teksttest");

teksttest.innerText = "Hej med dig!";