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
        job:"Opiskelija",
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
    rivit.innerHTML = "";
    henkilöt.forEach(henkilo => {
        const rivi = document.createElement("tr");
        const nimi = document.createElement("td");
        nimi.textContent = henkilo.name;
        const ika = document.createElement("td");
        ika.textContent = henkilo.age;
          if (henkilo.age >= 18) {
            ika.innerHTML += " 🍺";
        }


        const tyo = document.createElement("td");
        tyo.textContent = henkilo.job;
        if (henkilo.job.toLowerCase() === "opiskelija") {
            tyo.innerHTML += " 🎓"; }
        const ajokortti = document.createElement("td");
        ajokortti.textContent = henkilo.driversLicense ? "Kyllä" : "Ei";

    
        rivi.appendChild(nimi);
        rivi.appendChild(ika);
        rivi.appendChild(tyo);
        rivi.appendChild(ajokortti);

        rivit.appendChild(rivi);
    });
}
document.addEventListener("DOMContentLoaded", luoRivit);
document.getElementById("henkilotiedotLomake").addEventListener("submit", function(a){
    a.preventDefault();
    const nimi = document.getElementById("nimi").value;
    const ika = parseInt(document.getElementById("ika").value, 10);
    const tyo = document.getElementById("tyo").value;
    const ajokortti = document.getElementById("ajokortti").value === "Kyllä";

    if(ika < 0) {
        alert("Iän pitää olla positiivinen luku");
        return;
    }

    const uusiH = {
        name: nimi,
        age: ika,
        job:tyo,
        driversLicense: ajokortti,

    };
    henkilöt.push(uusiH);
    luoRivit();
    a.target.reset();

});




