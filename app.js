//NAME INPUT
let start = prompt("Enter a name to start the game")
//
//SCORES
let playerOneScore = 0
let playerTwoScore = 0
//
//POSSIBILITIES
const possibilities = [
    {
        selection : "ROCK",
        beats : "SCISSORS"
    },
    {
        selection : "PAPER",
        beats : "ROCK"
    },
    {
        selection : "SCISSORS",
        beats : "PAPER"
    }
]
//
//COMPUTER SELECTION FUNCTION
const computerPlay = () => {
    let randomSelection = Math.floor(Math.random() * possibilities.length);
    return possibilities[randomSelection]
}
//YOUR SELECTION FUNCTION
const playerPlay = (value) =>{
    let selection = possibilities.find(selection => selection.selection === value)
    return selection
}
//GETS GAME RESULTS PER ROUND
const getGameResults = (playerOne, playerTwo) => {
    if(playerOne.beats === playerTwo.selection){
        playerOneScore++
        return `You win! ${playerOne.selection} beats ${playerTwo.selection}`
    }
    else if(playerOne.selection === playerTwo.selection){
        return 'It is a draw!'
    }
    else{
        playerTwoScore++
        return `CPU wins ${playerTwo.selection} beats ${playerOne.selection}`
    }
}
//GETS FINAL WINNER AFTER ALL ROUNDS PLAYED
const finalResults = (playerOneScore, playerTwoScore) => {
    if(playerOneScore > playerTwoScore){
        return "You"
    }
    else if(playerOneScore < playerTwoScore){
        return "The computer"
    }
    else{
        return "No one"
    }
} 
//GAME FUNCTIONALITY
const game = () => { 
    console.log(`Hello ${start}, welcome to the game rock, paper scissors`)
    for(let i = 0; i < 5; i++){
        console.log("this is round", i+1);
        let computerSelection = computerPlay()
        let playerPrompt = prompt("Please enter your selection");
        while (playerPrompt.toUpperCase()!=="ROCK" && playerPrompt.toUpperCase()!=="PAPER" && playerPrompt.toUpperCase()!=="SCISSORS"){
            playerPrompt = prompt("Please enter a valid option (rOcK, PaPeR, sCiSsOrS)");
        }
        let playerSelection = playerPlay(playerPrompt.toUpperCase())
        const results = getGameResults(playerSelection, computerSelection)
        console.log(results)
        console.log(`Your Score : ${playerOneScore} ----------- Computer Score : ${playerTwoScore}`)
        console.log("##################")
        
    }
    let finalResultz = finalResults(playerOneScore, playerTwoScore)
    console.log(`${finalResultz} wins! Refresh the page to play again!`)
}
//VALIDATIONS FOR THE GAME
while(start === ""){
    start = prompt("enter a valid name!")
}

if(start !== "" && start !== null){
    game()
}
else if(start === null){
    console.log("you automatically lose refresh the page to play again")
}
//