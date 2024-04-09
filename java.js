let ptally =0;
let ctally =0;
function computerChoice(){
    let answer=Math.floor((Math.random()*3)+1);
    let compChoice;
    if(answer === 1){
        compChoice="rock"
    }
    else if(answer === 2){
        compChoice = "paper"
    }
    else if(answer === 3 ){
        compChoice = "scissor"
    }
    else {compchoice ="error"}
    return compChoice;
}
function player(){
    playerhcoice=prompt("choose between rock paper scissors")
    playerChoice=playerhcoice.toLowerCase()
    return playerChoice;
}
const rock= document.querySelector(".rock")
const scissor=document.querySelector(".scissor")
const paper=document.querySelector(".paper")



    rock.addEventListener("click",() =>game(computerChoice(),"rock"))
scissor.addEventListener("click",() =>game(computerChoice(),"scissor"))
paper.addEventListener("click",() =>game(computerChoice(),"paper"))

let scoreboard = document.querySelector(".scoreboard")
let score = document.createElement("h1")
const result=document.createElement("p");

function game(computer,player){
    let answer;
    if (ctally>=5){
        alert("computer wins")
    }
    else if (ptally>=5){
        alert("player wins")
    }
        
    else if(computer=="rock" && player=="rock") {   
        
 
        result.textContent="its a tie"
        console.log(ctally,ptally)
        answer="its a tie";
        return tally(answer);
    }
    else if(computer=="paper" && player =="paper")
    {
        score.textContent=`computer score:${ctally}  player score:${ptally}`

        result.textContent="its a tie"
        console.log(ctally,ptally)
        answer="its a tie"
        return tally(answer);
    }
    else if(computer=="scissor" && player =="scissor")
    {
        
        score.textContent=`computer score:${ctally}  player score:${ptally}`
        result.textContent="its a tie"
        console.log(ctally,ptally)
         answer="its a tie"
         return tally(answer);
    }
    else if(computer=="paper" && player =="rock")
    {
        
        score.textContent=`computer score:${ctally}  player score:${ptally}`
        result.textContent="you lost to a bot"
        console.log(ctally,ptally)
        answer="you lost to a bot"
        return ++ctally;

    }
    else if(computer=="paper" && player =="scissor")
    {
        
        score.textContent=`computer score:${ctally}  player score:${ptally}`
        result.textContent="you win"
        console.log(ptally, ctally)
         answer="you win"
         return ++ptally;
    }
    else if(computer=="rock" && player =="paper")
    {
    
        score.textContent=`computer score:${ctally}  player score:${ptally}`
        result.textContent="you win"
        console.log(ctally, ptally)
         answer="you win"
         return ++ptally;
    }
    else if(computer=="rock" && player =="scissor")
    {
        
        score.textContent=`computer score:${ctally}  player score:${ptally}`
        result.textContent="you lost to a bot"
        console.log(ctally,ptally)
         answer="you lost to a bot"
         return ++ctally;
    }
    else if(computer=="scissor" && player =="rock")
    {
        
        score.textContent=`computer score:${ctally}  player score:${ptally}`
        result.textContent="you win"
         answer="you win"
         return ++ptally;
    }
    else if(computer=="scissor" && player =="paper")
    {
       
        score.textContent=`computer score:${ctally}  player score:${ptally}`
        result.textContent="you lost to a bot"
        answer="you lost to a bot"
        return ++ctally;
    }
}

function tally(game){
    
    if(game == "you win"){
        return ++ptally
    }
    if(game == "you lost to a bot"){
        return  ++ctally
    }
    else 
    return;
    
}
function playGame(){
 
    if(ctally>=3){
        console.log("you lost the war",ctally,ptally)
        
    }
    else if (ptally>=3){
        console.log("you won the war",ctally,ptally)
    }
    else{
        console.log("it be a tie",ctally,ptally)
    }
}

scoreboard.appendChild(score)
scoreboard.appendChild(result)


