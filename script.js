let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const gencompchoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIndex = Math.floor(Math.random() * 3);
  return options[randIndex];
};

const draw = () => {
  msg.innerText = `Game was Draw. Play again!`;
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userwin, userchoice, compchoice) => {
  if (userwin) {
    userScore++;
    userScorepara.innerText = userScore;
    msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorepara.innerText = compScore;
    msg.innerText = `You lose! ${compchoice} beats your ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userchoice) => {
  console.log("user-choice =", `${userchoice}`); // generate user choice
  const compchoice = gencompchoice();
  console.log("comp-choice =", compchoice);

  if (userchoice === compchoice) {
    // Draw
    draw();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      // paper,scissors
      userwin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      // rock , scissors
      userwin = compchoice === "scissors" ? false : true;
    } else {
      //rock , paper
      userwin = compchoice === "paper" ? true : false;
    }
    showWinner(userwin, userchoice, compchoice);
  }
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    let userchoice = choice.getAttribute("id");
    playGame(userchoice);
  });
});
