
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
    if (uusiTehtava) {
        lista.push(uusiTehtava);
        paivitaLista();
        document.getElementById("tehtavaInput").value = "";
    }

}
