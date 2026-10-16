//OPPGAVE 2 

//function kastTerning(antallSider) {
  //  return Math.floor(Math.random() * antallSider) + 1;
//}

//console.log(kastTerning(6));

//OPPGAVE 3 

//function genererHistorie(navn, adjektiv1, adjektiv2, adjektiv3, adjektiv4) {
   // console.log(`Det var en gang en ${adjektiv1} IM-elev som het ${navn}. I det ${adjektiv2} JavaScript-kurset lærte ${navn} om variabler og funksjoner sammen med ${adjektiv3} klassekamerater. Læreren i kurset er veldig ${adjektiv4}, noe som gjør kursdagene ekstra spennende.`);
//}

//genererHistorie("Oskar", "glad", "spennende", "hyggelige", "morsom");

let frukter = ["eple", "pære", "banan" ];
let bær = ["jordbær", "bringebær", "blåbær"];

for (let i = 0; i < frukter.length; i++) {

    console.log(frukter[i]); 
}

frukter.push(kiwi); 

frukter.shift();  


let fruktOgbær = [];

for (let i = 0; i < frukter.length; i++) {

    fruktOgbær.push(frukter[i]);

    fruktOgbær.push(bær[i]); 
}
