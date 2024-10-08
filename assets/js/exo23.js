import {etudiants} from "./etudiant.js";

function calculerMoyen(matieres){
    let total = 0;
    let count = 0;
    for(let note of Object.values(matieres)){
        total += note;
        count++;
    }

    return total / count;
}

function afficherEtudiants(){
    // const container = document.getElementById("container");
    const container = document.querySelector("#container");
    etudiants.forEach(etudiant => {
        const etudiantDiv = document.createElement('div');
        etudiantDiv.className = 'etudiant';

        etudiantDiv.innerHTML = `<strong>${etudiant.prenom} ${etudiant.nom}</strong>`;

        const matieresDiv = document.createElement('div');
        matieresDiv.className = 'matieres';
        matieresDiv.innerHTML = '<h4>Matières et Notes :</h4>';

        for (let [matiere, note] of Object.entries(etudiant.matieres)) {
            matieresDiv.innerHTML += `${matiere}: ${note}<br>`;
        }

        const moyenne = calculerMoyen(etudiant.matieres);
        matieresDiv.innerHTML += `<strong>Moyenne générale: ${moyenne.toFixed(2)}</strong>`;
        etudiantDiv.appendChild(matieresDiv);

        container.appendChild(etudiantDiv);
    });
}

afficherEtudiants();