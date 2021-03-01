// dichiarazione variabili
var etaPass = prompt("Inserisci la tua età");
var km = prompt("Inserisci chilometri");

//mi assicuro che l'età diventi un numero
etaPass = parseInt(etaPass);

//mi assicuro che km diventi un float
km = parseFloat(km);

//stampo in console le due var
console.log(etaPass, km);

//dichiaro variabile prezzo al km e variabile che controlla lo sconto
//applicato
var prezzoKm = 0.21;
var scontoApp = null;

//calcolo del prezzo
prezzoKm = prezzoKm * km;

//controllo l'età e applico sconto di conseguenza
//0.8 per sconto del 20%
//0.6 per sconto del 40%
//salvo nella var scontoApp lo sconto che viene utilizzato
if (etaPass < 18) {
    prezzoKm = prezzoKm * 0.8;
    scontoApp = "20%";
} else if (etaPass > 64) {
    prezzoKm = prezzoKm * 0.6;
    scontoApp = "40%";
}
//faccio sì che l'output sia a due decimali per il prezzo
prezzoKm = parseFloat(prezzoKm).toFixed(2);

//stampo nel p dell'html
var output = document.getElementById("output");
output.innerHTML = "La tua età: " + etaPass + "<br>";
output.innerHTML += "Chilometri da percorrere: " + km + " km<br>";
output.innerHTML += "Prezzo del biglietto: " + prezzoKm + " € <br>";

//mi assicuro che stampi lo sconto applicato solo se c'è uno sconto
if (scontoApp != null)
{
    output.innerText += "Sconto applicato: " + scontoApp;
}

