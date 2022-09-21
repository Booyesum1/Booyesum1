const compChoice = document.getElementById('compChoiceDis')
const yourChoice = document.getElementById('yourChoiceDis')
const res = document.getElementById('resDis')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let shoot
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    yourChoice.innerHTML = userChoice

    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
    
    if (randomNumber === 1) {
        shoot = 'Rock'
    }
    if (randomNumber === 2) {
        shoot = 'Scissors'
    }
    if (randomNumber === 3) {
        shoot = 'Paper'
    }

    compChoice.innerHTML = shoot
}

function getResult() {
    if (shoot === userChoice) {
        result = 'Draw!'
    }
    if (shoot === 'Rock' && userChoice === 'Scissors') {
        result = 'Lose!'
    }
    if (shoot === 'Rock' && userChoice === 'Paper') {
        result = 'Win!'
    }
    if (shoot === 'Paper' && userChoice === 'Scissors') {
        result = 'Win!'
    }
    if (shoot === 'Paper' && userChoice === 'Rock') {
        result = 'Lose!'
    }
    if (shoot === 'Scissors' && userChoice === 'Rock') {
        result = 'Win!'
    }
    if (shoot === 'Scissors' && userChoice === 'Paper') {
        result = 'Lose!'
    }
    res.innerHTML = result
}