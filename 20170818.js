let ord, tal, grader, dato, juleaften, forskel;

// Opgave 1
// Skriv et program, der udskriver det femte bogstav i ordet "programmering" til terminalen.

ord = "programmering";
console.log(ord.charAt(4));


// Opgave 2
// Skriv et program, der udskriver tekststrengen "JavaScript" i udelukkende store bogstaver til terminalen.

ord = "JavaScript";
console.log(ord.toUpperCase());


// Opgave 3
// Skriv et program, der udskriver tekststrengen "Æblegrød" i udelukkende små bogstaver til terminalen.

ord = "Æblegrød";
console.log(ord.toLowerCase()); 


// Opgave 4
// Skriv et program, der udskriver de første 7 tegn af "Programmering" til terminalen.

ord = "Programmering";
console.log(ord.substr(0, 7));


// Opgave 5
// Skriv et program, der udskriver de sidste 4 tegn af "Programmering" til terminalen.

ord = "Programmering";
console.log(ord.substr(-4));


// Opgave 6
// Skriv et program, der udskriver fra og med tegn 4 til og med tegn 7 af "Programmering" til terminalen.

ord = "Programmering";
console.log(ord.substr(3, 4));


// Opgave 7
// Skriv et program, der udskriver kvadratroden af 5 til terminalen.

tal = 5;
console.log(Math.sqrt(tal));


// Opgave 8
// Skriv et program, der udskriver et tilfældigt tal mellem 0 og 1 til terminalen.

tal = Math.random();
console.log(tal);


// Opgave 9
// Skriv et program, der udskriver et tilfældigt tal mellem 1 og 8 til terminalen.

tal = Math.floor(Math.random() * 8) + 1;
console.log(tal);


// Opgave 10
// Skriv et program, der udskriver sinus til 22° til terminalen. (Tjek at resultatet passer med en lommeregner el.lign.!)

grader = 22;
tal = Math.sin(Math.PI / 180 * grader);
console.log(tal);


// Opgave 11
// Skriv et program, der udskriver dags dato til terminalen.

dato = new Date();
console.log(dato.toLocaleDateString());


// Opgave 12
// Skriv et program, der udskriver dags dato til terminalen i formatet 18-08-2017.

dato = new Date();
ord = dato.toISOString();
console.log(ord.substr(8, 2) + ord.substr(4, 3) + "-" + ord.substr(0, 4));


// Opgave 13
// Skriv et program, hvor en ny dato (new Date()) sættes til jeres fødselsdag, og udskriv det til terminalen.

dato = new Date(1950, 10, 22);
console.log(dato.toLocaleDateString());


// Opgave 14
// Skriv et program, der skriver antallet af dage fra i dag til juleaften til terminalen.

dato = new Date();
juleaften = new Date(dato.getFullYear(), 11, 24);
if (dato > juleaften) juleaften = new Date(dato.getFullYear() + 1, 11, 24);
forskel = Math.ceil((juleaften - dato) / 1000 / 60 / 60 / 24);
console.log(forskel);