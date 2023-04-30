
const form = document.getElementById("form");
const username = document.getElementById("username");

const saveScoreBtn = document.getElementById("saveScoreBtn");

const finalScore = document.getElementById("finalScore")

const mostRecentScore = localStorage.getItem("mostRecentScore")

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value;
})


form.addEventListener("submit", (e) => {

    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };
    highScores.push(score)


    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5)

    localStorage.setItem("highScores", JSON.stringify(highScores));

    window.location.assign("../")

    console.log(highScores);
}) 