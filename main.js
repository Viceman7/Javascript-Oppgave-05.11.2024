/*
Lag en conditional som sjekker om userName eksisterer (har innhold), at brukeren er over 18, og at user ikke er blocked.
Hvis en eller flere av disse ikke oppfylles, skal du console.log() en feilmelding.
Hvis alle kriterier er oppfylt, sett variabelen goToPage til "/home", og endre userIsLoggedIn til true.
Hvis brukeren er admin, endre variabelen goToPage til "/admin" istedenfor "/home".

console.log(goToPage) til slutt for å se at bruker har blitt sendt til rett side.

endre på verdiene i variablene for å se at din conditional kan håndtere alle cases
*/

const userName = "Tom";
const userAge = 32;

let userIsAdmin = true;
let userIsLoggedIn = true;
let userIsBlocked = false;

let goToPage = "/admin";

if (userName) {
  console.log("Tom");
} else if (userAge > 18) {
}

if (userAge > 50) {
  console.log("user is over 50");
} else if (userAge > 30) {
  console.log("User is under 50 and over 30");
} else {
  console.log("user is under 30");
}

if (userIsBlocked) {
  console.log("user is blocked");
}

if (userIsLoggedIn == false) {
  console.log("user is not logged in");
}

console.log(goToPage);

/*
Sjekk om et nummer er et Partall eller Oddetall og print deretter. /tips Modulo
*/

//skal printe partall
//skal printe oddetall

let n = 6;
if (n % 2 === 0) {
  console.log(n + " is even");
} else {
  console.log(n + " is odd");
}

/*
Lag en karakter-kalkulator som printer karakter ut fra poengsummer:
90–100: A
80–89: B
70–79: C
60–69: D
Below 60: F
*/

// 85 skal printe B
// 63 skal printe D

const points = 98;

if (points >= 90) {
  console.log("A");
} else if (points >= 80) {
  console.log("B");
} else if (points >= 70) {
  console.log("C");
} else if (points >= 60) {
  console.log("D");
} else {
  console.log("F");
}
