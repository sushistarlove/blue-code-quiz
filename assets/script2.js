const highscores = JSON.parse(localStorage.getItem("highscore"));

const userScores = document.getElementById("scoresstyling");

// banana

highscores.forEach(highscore => {
const makeLi = document.createElement("li")

makeLi.textContent = `${highscore.message} ${highscore.score}`
userScores.append(makeLi)
});



