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
function game(computer,player){
    let answer;
    if(computer=="rock" && player=="rock") {    
        console.log("its a tie")
        return answer="its a tie";
    }
    else if(computer=="paper" && player =="paper")
    {
        console.log("its a tie")
        return answer="its a tie"
    }
    else if(computer=="scissor" && player =="scissor")
    {
        console.log("its a tie")
        return answer="its a tie"
    }
    else if(computer=="paper" && player =="rock")
    {
        console.log("you lost to a bot")
        return answer="you lost to a bot"
    }
    else if(computer=="paper" && player =="scissor")
    {
        console.log("you win")
        return answer="you win"
    }
    else if(computer=="rock" && player =="paper")
    {
        console.log("you win")
        return answer="you win"
    }
    else if(computer=="rock" && player =="scissor")
    {
        console.log("you lost to a bot")
        return answer="you lost to a bot"
    }
    else if(computer=="scissor" && player =="rock")
    {
        console.log("you win")
        return answer="you win"
    }
    else if(computer=="scissor" && player =="paper")
    {
        console.log("you lost to a bot")
        return answer="you lost to a bot"
    }
}

function tally(game){
    
    if( game == "its a tie"){
    return;
    }
    if(game == "you win"){
        return ++ptally
    }
    if(game == "you lost to a bot"){
        return  ++ctally
    }
}
function playGame(){
    tally(game(computerChoice(),player()))
    tally(game(computerChoice(),player()))
    tally(game(computerChoice(),player()))
    tally(game(computerChoice(),player()))
    tally(game(computerChoice(),player()))
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
playGame();


