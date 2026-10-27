//OPPGAVE 2 

//function kastTerning(antallSider) {
  //  return Math.floor(Math.random() * antallSider) + 1;
//}

//console.log(kastTerning(6));

//OPPGAVE 3 

//function genererHistorie(navn, adjektiv1, adjektiv2, adjektiv3, adjektiv4) {
   // console.log(`Det var en gang en ${adjektiv1} IM-elev som het ${navn}. I det ${adjektiv2} JavaScript-kurset lærte ${navn} om variabler og funksjoner sammen med ${adjektiv3} klassekamerater. Læreren i kurset er veldig ${adjektiv4}, noe som gjør kursdagene ekstra spennende.`);
//}

//genererHistorie("Oskar", "glad", "spennende"‰, "hyggelige", "morsom");

//let frukter = ["eple", "pære", "banan" ];


//for (let i = 0; i < frukter.length; i++) {

  //  console.log(frukter[i]); 
//}

//frukter.push(kiwi); 

//frukter.shift();  

//let bær = ["jordbær", "bringebær", "blåbær"];

//let fruktOgbær = [];

//for (let i = 0; i < frukter.length; i++) {
    // fruktOgbær.push(frukter[i]);
  //  fruktOgbær.push(bær[i]); 
//}

//function skrivListe(liste) {
   // let html = "<ul>";

 //   for(let i = 0; i < liste.length; i++) {
//        html += "<li>" + liste[i] + "</li>";

   // }

    //html += "</ul>";
  //  document.body.innerHTML += html;
//}

//skrivListe(fruktOgbær); -

//Oppgave 7 

//let scores = [];

//function leggTil() {
    //let navn = document.getElementById("navn").value;
    //let score = Number(document.getElementById("score").value);
    
    //scores.push({ navn, score });

    //scores.sort((a, b) => b.score - a.score);

    //let liste = document.getElementById("liste");
    //liste.innerHTML = " ";

    //for (let spiller of scores) {
      //  liste.innerHTML += `<li>${spiller.navn}: ${spiller.score}</li>`;

    //}
//}


//Opgave 6 

function erPalindrom(tekst) {
    let baklengs = tekst.split( " " ).reverse().join(" ");

    return tekst === baklengs; 
}

console.log(erPalindrom("level")); 
console.log(erPalindrom("jei")); 