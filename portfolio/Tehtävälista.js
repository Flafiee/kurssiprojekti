
const lista = ["Tehtävä 1", "Tehtävä 2"];

function paivitaLista() {
    const ulElement = document.querySelector("ul");
    ulElement.innerHTML = "";

    lista.forEach((tehtava) => {
        const liElement = document.createElement("li");

        liElement.innerHTML = tehtava;
        ulElement.appendChild(liElement);
    });
}
function lisaa(){ 
    onclick="lisaa()"
    const uusiTehtava = document.getElementById("tehtavaInput").value;
    const maara = parseInt(document.getElementById("tehtavaInput2").value, 10);
    if (uusiTehtava.trim() !== "" && !isNaN(maara) && maara > 0) {
        for (let i = 0; i < maara; i++) {
            lista.push(uusiTehtava);
        }
        paivitaLista();
        document.getElementById("tehtavaInput").value = "";
        document.getElementById("tehtavaInput2").value = "";
    }
}
document.addEventListener("DOMContentLoaded",paivitaLista)
