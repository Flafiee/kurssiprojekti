console.log("Muuttujatieto avattu");
a=3
b=5
c=7
d=15
function summa(a, b) {
    return a + b;
}
function vähennys(b, c) {
    return b - c;
}
function kerto(c, d) {
    return c * d;
}
function jako(d, a) {
    return d / a;
}
document.getElementById('SummaButton').addEventListener('click', function() {
    const result = summa(a, b);
    alert("Summa: " + result);
});
document.getElementById('VähennysButton').addEventListener('click', function() {
    const result = vähennys(b, c);
    alert("Vähennys: " + result);
});
document.getElementById('KertoButton').addEventListener('click', function() {
    const result = kerto(c, d);
    alert("Kerto: " + result);
});
document.getElementById('JakoButton').addEventListener('click', function() {
    const result = jako(d, a);
    alert("Jako: " + result);
});