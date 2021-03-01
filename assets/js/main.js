var etaPass = prompt("Inserisci la tua età");
var km = prompt("Inserisci chilometri");
etaPass = parseInt(etaPass);
km = parseFloat(km);
console.log(etaPass, km);
var prezzoKm = 0.21;
var scontoApp = null;
prezzoKm = prezzoKm * km;
if (etaPass < 18) {
    prezzoKm = prezzoKm * 0.8;
    scontoApp = "20%";
} else if (etaPass > 64) {
    prezzoKm = prezzoKm * 0.6;
    scontoApp = "40%";
}
var output = document.getElementById("output");
output.innerHTML = "La tua età: " + etaPass + "<br>";
output.innerHTML += "Chilometri da percorrere: " + km + " km<br>";
output.innerHTML += "Prezzo del biglietto: " + prezzoKm + " € <br>";
if (scontoApp != null)
{
    output.innerText += "Sconto applicato: " + scontoApp;
}

console.log(prezzoKm, "€");