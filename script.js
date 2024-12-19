// Code pour la navigation active
const currentLocation = window.location.pathname;
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    if (link.href.includes(currentLocation)) {
        link.classList.add('active');
    }
});

// Code pour le quiz : vérification si le formulaire de quiz existe sur la page
if (document.getElementById('quizForm')) {
    document.getElementById('quizForm').addEventListener('submit', function(e) {
        e.preventDefault();
    
        const bonnesReponses = {
                question1: "A",
                question2: "B",
                question3: "B",
                question4: "B",
                question5: "B",
                question6: "B",
                question7: "A",
                question8: "B",
                question9: "A",
                question10: "B",
                question11: "C",
                question12: "C",
                question13: "B",
                question14: "B",
                question15: "B"
            };
    
        const totalQuestions = Object.keys(bonnesReponses).length;
        let score = 0;
        const resultatDiv = document.getElementById('resultat');
        resultatDiv.innerHTML = '';
        resultatDiv.style.display = 'block';
    
        Object.keys(bonnesReponses).forEach((key, index) => {
            const selected = document.querySelector(`input[name="${key}"]:checked`);
            const reponseDiv = document.createElement('div');
            reponseDiv.classList.add('reponse');
            if (selected && selected.value === bonnesReponses[key]) {
                score++;
                reponseDiv.classList.add('correcte');
                reponseDiv.textContent = `Question ${index + 1}: Bonne réponse! Vous avez choisi ${selected.value}.`;
            } else {
                reponseDiv.classList.add('mauvaise');
                reponseDiv.textContent = `Question ${index + 1}: Mauvaise réponse. La bonne réponse était ${bonnesReponses[key]}.`;
            }
            resultatDiv.appendChild(reponseDiv);
    
            setTimeout(() => {
                reponseDiv.classList.add('visible');
            }, index * 1000); // Décalage d'une seconde entre chaque réponse
        });
    
        const noteDiv = document.createElement('div');
        noteDiv.classList.add('reponse', 'visible');
        noteDiv.id = 'note';  // Appliquez l'id "note" pour la couleur rose
        noteDiv.textContent = `Votre score final est de ${score} sur ${totalQuestions}.`;
        setTimeout(() => {
            resultatDiv.appendChild(noteDiv);
            noteDiv.classList.add('visible');  // L'animation de la note finale
        }, totalQuestions * 1000);  // La note s'affiche après toutes les réponses
    });
    
    
            const resultat = document.getElementById('resultat');
            resultat.classList.add('visible');
}
