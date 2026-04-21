!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Quiz Interactif</title>
</head>
<body>

<h2>Quiz Interactif</h2>

<button onclick="lancerQuiz()">Démarrer le Quiz</button>

<script>
function lancerQuiz() {

    let QUESTIONS = [
        ["Quelle langage de programmation plus simple ?", "python"],
        ["Combien font 90+8 ?", "98"],
        ["quel est le role d'un mot de passe ?", "protection"],
        ["qu'est ce qu'un virus informatique?", "programme malveillant"],
        ["Combien de jours dans une semaine ?", "7"],
    ];

    let score = 0;

    for (let i = 0; i < QUESTIONS.length; i++) {

        let question = QUESTIONS[i][0];
        let bonneReponse = QUESTIONS[i][1];
        let reponse = prompt(question)

        if (reponse && reponse.toLowerCase() === bonneReponse) {
            alert("Réponse juste");
            score++;
        } else {
            alert("Réponse fausse");
        }
    }
    alert("Vous avez répondu correctement à " + score + " sur " + QUESTIONS.length);
}
</script>
</body>
</html>
