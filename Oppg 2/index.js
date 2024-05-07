// Opprett input-bokser og knapp
let input1 = document.createElement("input");
let input2 = document.createElement("input");
let input3 = document.createElement("input");
let button = document.createElement("button");

// Sett attributter for input-bokser
input1.setAttribute("type", "number");
input2.setAttribute("type", "number");
input3.setAttribute("type", "number");

// Sett tekst for knappen
button.textContent = "Sjekk prosjekter";

// Legg til input-bokser og knapp til dokumentet
document.body.appendChild(input1);
document.body.appendChild(input2);
document.body.appendChild(input3);
document.body.appendChild(button);

// Opprett en plass for å vise resultatene
let resultDiv = document.createElement("div");
document.body.appendChild(resultDiv);

// Legg til en hendelseslytter for knappen
button.addEventListener("click", function() {
    let projects1 = Number(input1.value);
    let projects2 = Number(input2.value);
    let projects3 = Number(input3.value);

    let minProjects = Math.min(projects1, projects2, projects3);
    let maxProjects = Math.max(projects1, projects2, projects3);

    let yearMin = (minProjects === projects1) ? 2021 : (minProjects === projects2) ? 2022 : 2023;
    let yearMax = (maxProjects === projects1) ? 2021 : (maxProjects === projects2) ? 2022 : 2023;

    // Vis resultatene
    resultDiv.textContent = "Året med færrest prosjekter: " + yearMin + ", Året med flest prosjekter: " + yearMax;
});
