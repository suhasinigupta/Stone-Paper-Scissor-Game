let userScore=0;
let compScore=0;

let choices=document.querySelectorAll(".choice")
const msg=document.querySelector("#msg")

const userScorePara=document.querySelector("#user-score") ;
const compScorePara=document.querySelector("#comp-score") ;

const genCompChoice=()=>{
    const options=["stone","paper","scissor"] ;
    const randomIdx= Math.floor(Math.random()*3);
    return options[randomIdx] ;
}
 const drawGame=()=>{
    console.log("Draw")
    msg.innerText="Game draw, Play Again" ;
    msg.style.backgroundColor="black" ;
 }

 const showWinner= (userWin,userChoice, compChoice)=>{
    if (userWin){
         userScore++ ;
         msg.innerText=`You Win!! ${userChoice} beats ${compChoice}` ;
         msg.style.backgroundColor="green" ;
         userScorePara.innerText=userScore ;
    }
    else{
        compScore++ ;
        compScorePara.innerText=compScore ;
        msg.innerText=`You lose!! ${compChoice} beats ${userChoice}` ;
        msg.style.backgroundColor="red" ;
    }
 }
const playGame=(userChoice)=>{
    const compChoice=genCompChoice() ;
    if(userChoice===compChoice){
         drawGame() ;
    }else{
        let userWin=true ;
        if(userChoice==="stone"){
            userWin= compChoice==="paper"? false:true ;
        }
        else if(userChoice==="paper"){
            userWin= compChoice==="scissor"? false:true ;
        }
        else if(userChoice==="scissor"){
            userWin= compChoice==="stone"? false:true ;
        }
        showWinner(userWin,userChoice,compChoice) ;
    }
    
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id") ;
        playGame(userChoice) ;
    }) ;
}) ;

