// console.log("hello world");
// console.log("Oskar")




// const radius = 5;
// const pi = 3.14;
// const omkrets = 2 * pi * radius;
// console.log(`For radius ${radius} er omkretsen ${omkrets}`);

// const num =   31.400000000000002;
// const navn = "jen123b1l23bn.ns"

// console.log(num.toFixed(4)); 
// console.log(navn.length)






// const person = {
//   fornavn: "Oskar",
//   etternavn: "Stenslie",
//   alder: 16, 
//   bursdag: "3. desember", 
//   erOver18: false, 
//   favorittFarge: "blå" 
// };

// const tekst = `Hei, mitt navn er ${person.fornavn} ${person.etternavn}`

// console.log(tekst);

// let navn = "Oskar";  
// let antall = navn. length; 

// console.log(" Hallo " + navn + ". Ditt navn har " + antall + " bokstaver." )




// let tall1 = parseFloat(prompt("Oppgi det første tallet:"));
// let tall2 = parseFloat(prompt("Oppgi det andre tallet:"));


// if (isNaN(tall1) || isNaN(tall2)) {
//     console.log("Feil: Du må skrive inn gyldige tall.");
// } else if (tall1 > tall2) {
//     console.log(tall1 + " er større enn " + tall2);
// } else if (tall2 > tall1) {
//     console.log(tall2 + " er større enn " + tall1);
// } else {
//     console.log("Tallene er like store (" + tall1 + " = " + tall2 + ")");
// }




// let svarFraBruker = prompt("18:");


// let tall = Number(svarFraBruker);


// if (tall >= 18) {
  
//   console.log("Du er kvalifisert til å stemme.");
// } else {
 
//   console.log("Du er ikke kvalifisert til å stemme ennå.");
// }



// let passordFraBruker = prompt("Skriv in passord:");

// if (passordFraBruker === "passord1234") {

//     console.log("Tilgang innvilget.");
// } else {

//     console.log("Tilgang nektet.");
// }







// const svar = prompt("hvilken dag er det i dag? ")

// const d = new Date("September 04, 2026 13:40:00");
// let day = d.getDay();

// if (d = "September 04, 2026 14:09:00") {

//     console.log("det er fredag !"); 
// } else {

//     console.log("Det er ikke fredag du kan ikke dra hjem"); 
// }
// Test code 



// const nå = new Date();


// const erFredag = nå.getDay() === 5;


// const timer = nå.getHours();
// const minutter = nå.getMinutes();


// if (erFredag) {
  
//   if (timer > 14 || (timer === 14 && minutter >= 25)) {
//     console.log("God helg – sees på mandag!");
//   } else {
//     console.log("Det er fredag!");
//   }
// } else {
//   console.log("Det er ikke fredag ennå, jobb videre!");
// }

// setInterval(erFredag, 10000);



// let klikks = 0; 

// function handleOnClick() {
//     klikks += 1;
//     console.log(klikks); 
// }

// Oppgave 2 
let sjekk = document.getElementById("sjekk");

sjekk.onclick = function() {
  let alder = document.getElementById("alder").value;
  let trafikalt = document.getElementById("trafikalt").checked;
  let resultat = document.getElementById("resultat");

  if (alder < 16) {
    resultat.innerText = "Du er for ung til å øvelseskjøre.";
  } 
  else if (alder >= 25) {
    resultat.innerText = "Du kan øvelseskjøre uten trafikalt grunnkurs.";
  } 
  else if (trafikalt) {
    resultat.innerText = "Du kan øvelseskjøre.";
  } 
  else {
    resultat.innerText = "Du må ha trafikalt grunnkurs.";
  }
};