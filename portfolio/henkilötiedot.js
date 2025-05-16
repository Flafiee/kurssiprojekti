const henkilöt = [
    {
        name: "Merja Meikäläinen",
        age: 20,
        job: "Opiskelija",
        driversLicense: true
    },
    {
        name: "Teppo Teikäläinen",
        age: 25,
        job: "Sähköteknikko",
        driversLicense: true
    },
    {  name: "Helena Heikäläinen",
        age: 30,
        job: "Ohjelmistosuunnittelija",
        driversLicense: false

    },
    {
        name: "Semir Sikäläinen",
        age: 18,
        job: "Opiskelija",
        driversLicense: true
    },
    {  name: "Tomas Täkäläinen",
        age: 20,
        job: "Linja-autonkuljettaja",
        driversLicense: true
    }
];

const rivit = document.getElementById("rivit");

function luoRivit() {
    henkilöt.forEach(henkilo => {
        const rivi = document.createElement("tr");
        const nimi = document.createElement("td");
        nimi.textContent = henkilo.name;
        const ika = document.createElement("td");
        ika.textContent = henkilo.age;

        const tyo = document.createElement("td");
        tyo.textContent = henkilo.job;
        const ajokortti = document.createElement("td");
        ajokortti.textContent = henkilo.driversLicense ? "Kyllä" : "Ei";

    
        rivi.appendChild(nimi);
        rivi.appendChild(ika);
        rivi.appendChild(tyo);
        rivi.appendChild(ajokortti);

    
        rivit.appendChild(rivi);
    });
}
// DOMContentLoaded, jotta tiedosto voidaan ladata, oli vaikeuksia kun en tiennyt, että miksi se ei näkynyt
document.addEventListener("DOMContentLoaded", luoRivit);