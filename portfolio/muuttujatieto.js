console.log("Muuttujatieto avattu");
function summa(eka, toka) {
    return eka + toka;
}
function vähennys(eka, toka) {
    return eka - toka;
}
function kerto(eka, toka) {
    return eka * toka;
}
function jako(eka, toka) {
    return eka / toka;
}
document.getElementById('SummaButton').addEventListener('click', function() {
    const eka = 3;
    const toka = 5; 
    const result = summa(eka, toka);
    alert("Summa: " + result);
});
document.getElementById('VähennysButton').addEventListener('click', function() {
    const eka = 5; 
    const toka = 7; 
    const result = vähennys(eka, toka);

    alert("Vähennys: " + result);
});
document.getElementById('KertoButton').addEventListener('click', function() {
    const eka = 7; 
    const toka = 15; 
    const result = kerto(eka, toka);
    alert("Kerto: " + result);
});
document.getElementById('JakoButton').addEventListener('click', function() {
    const eka = 15; 
    const toka = 3; 
    const result = jako(eka, toka);
    alert("Jako: " + result);
});

function laskin_summa() {
    const eka = parseFloat(document.getElementById("numero1").value);
    const toka = parseFloat(document.getElementById("numero2").value);
    const result = summa(eka, toka);
    alert("Summa: " + result);
}

function laskin_vahennys() {
    const eka = parseFloat(document.getElementById("numero1").value);
    const toka = parseFloat(document.getElementById("numero2").value);
    const result = vähennys(eka, toka);
    alert("Vähennys: " + result);
}

function laskin_kerto() {
    const eka = parseFloat(document.getElementById("numero1").value);
    const toka = parseFloat(document.getElementById("numero2").value);
    const result = kerto(eka, toka);
    alert("Tulo: " + result);
}

function laskin_jako() {
    const eka = parseFloat(document.getElementById("numero1").value);
    const toka = parseFloat(document.getElementById("numero2").value);
    if (toka !== 0) {
        const result = jako(eka, toka);
        alert("Osamäärä: " + result);
    }
}