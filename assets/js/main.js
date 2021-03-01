var etaPass = prompt("Inserisci la tua età");
var km = prompt("Inserisci chilometri");
etaPass = parseInt(etaPass);
km = parseFloat(km);
console.log(etaPass, km);
var prezzoKm = 0.21;
prezzoKm = prezzoKm * km;
if (etaPass < 18) {
    prezzoKm = prezzoKm * 0.8;
} else if (etaPass > 64) {
    prezzoKm = prezzoKm * 0.6;
}

console.log(prezzoKm, "€");