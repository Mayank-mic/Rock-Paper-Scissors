let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const showWinner = (userWin, compChoice) => {
  if(userWin) {
    userScore++;
    userScorePara.innerText =userScore;
    msg.innerText = `Computer Chose: ${compChoice} --- You Won!`;
    msg.style.backgroundColor = "green";
  }
  else {
  compScore++;
  compScorePara.innerText= compScore;
  msg.innerText = `Computer Chose: ${compChoice} --- You Lose!`;
  msg.style.backgroundColor = "red";  
  }
}


const drawGame = (compChoice) =>{
  //console.log("It's a Draw! Play Again");
  msg.innerText = `Computer Chose: ${compChoice} -- It's a Draw! Play Again`;
  msg.style.backgroundColor = "grey";
};


const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random()*3);
  return options[randIdx];
};

const playGame = (userChoice) => {
 // console.log("user choice = ", userChoice);
  //Generate computer choice
  const compChoice = genCompChoice();
  //console.log("comp choice = ", compChoice);

  if(userChoice === compChoice){
    //Draw Game
    drawGame(compChoice);
  }else{
    let userWin = true;
    if(userChoice==="rock"){
      //scissors or paper
      userWin = compChoice ==="paper" ? false : true;
    }else if(userChoice==="scissors"){
      //rock or paper
      userWin = compChoice ==="rock"? false : true;
    }else{
      //scissor or rock
      userWin = compChoice==="scissors"? false : true;
    }
    showWinner(userWin, compChoice);
  }
  
};





choices.forEach((choice)=>{
  choice.addEventListener("click", ()=>{
    const userChoice = choice.getAttribute("id");
   // console.log("choice was clicked", userId);
    playGame(userChoice);
  });  
});


