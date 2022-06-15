//ELEMENTS
const userSelection = document.querySelectorAll("[data-selection")
var startButton = document.getElementById("start-btn")
var middleSection = document.getElementById("middle-selection-buttons")
var gameResultsSection = document.getElementById("game-results")
var chosenName = document.getElementById("username")
var roundResults = document.getElementById("round-results")
var userChoice = document.getElementById("user-choice")
var computerChoice = document.getElementById("computer-choice")
var inputName = document.getElementById("input-name")
var userScoreHTML = document.getElementById("user-score")
var computerScoreHTML = document.getElementById("computer-score")



//SCORES
let playerOneScore = 0
let playerTwoScore = 0

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
    let randomSelection = Math.floor(Math.random() * possibilities.length)
    computerChoice.innerHTML = `Computer chose : ${possibilities[randomSelection].selection}`
    return possibilities[randomSelection]
}
//YOUR SELECTION FUNCTION
const playerPlay = (value) =>{
    let selection = possibilities.find(selection => selection.selection === value.toUpperCase())
    userChoice.innerHTML = `You chose : ${selection.selection}`
    return selection
}
//GETS GAME RESULTS PER ROUND
const getGameResults = (playerOne, playerTwo) => {
    if(playerOne.beats === playerTwo.selection){
        playerOneScore++
        roundResults.innerHTML = `You win! ${playerOne.selection} beats ${playerTwo.selection}`
        
    }
    else if(playerOne.selection === playerTwo.selection){
        roundResults.innerHTML = 'It is a draw!'
        
    }
    else{
        playerTwoScore++
        roundResults.innerHTML = `CPU wins ${playerTwo.selection} beats ${playerOne.selection}`
        
    }
}
//GETS FINAL WINNER AFTER ALL ROUNDS PLAYED
const finalResults = (one, two) => {
    if(one > two){
        return "You"
    }
    else if(one < two){
        return "The computer"
    }
    else{
        return "No one"
    }
} 

//FUNCTION THAT SETS INPUT NAME
const setName = () => {
    var inputUserName = document.getElementById("name").value
    if(inputUserName === ""){
        chosenName.innerHTML = "Welcome No Name!"
    }
    else{
        chosenName.innerHTML = `Welcome ${inputUserName}!`
    }
    
} 



//GAME FUNCTIONALITY
const startGame = () => {
    setName()
    middleSection.style.display = "flex"
    userChoice.style.display = "flex"
    computerChoice.style.display = "flex"
    inputName.style.display = "none"
    
}

//BUTTON THAT STARTS THE GAME
startButton.addEventListener("click", () =>{
    startGame()
})

//FUNCTION THAT UPDATES THE SCORE
const updateScore = (userS, computer) => {
    userScoreHTML.innerHTML = `Score : ${userS}`
    computerScoreHTML.innerHTML = `Score : ${computer}`
}

//BUTTON SELECTION FUNCTIONALITY
userSelection.forEach((userSelection) => {
    userSelection.addEventListener("click", (e) => {
        if(playerOneScore === 5 || playerTwoScore === 5){
            let mainWinner = finalResults(playerOneScore, playerTwoScore)
            alert(`The game is over ${mainWinner} won! Click 'OK' to play again!`)
            window.location.reload()
            
        }
        else{
            gameResultsSection.style.display = "flex"
            const selectionName = userSelection.dataset.selection
            let userChoice = playerPlay(selectionName)
            let computerChoice = computerPlay()
            getGameResults(userChoice, computerChoice)
            updateScore(playerOneScore, playerTwoScore)
        }
    })
})