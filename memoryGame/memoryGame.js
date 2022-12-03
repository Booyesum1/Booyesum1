const cardArray = [
    {
        name: 'csmpreston',
        img: 'images/csmapreston.jpeg',
    },
    {
        name: 'franken',
        img: 'images/franken.jpeg',
    },
    {
        name: 'jacket',
        img: 'images/jacket.jpeg',
    },
    {
        name: 'redcap',
        img: 'images/redcap.jpeg',
    },
    {
        name: 'scarf',
        img: 'images/scarf.jpeg',
    },
    {
        name: 'tall',
        img: 'images/tall.jpeg',
    },
    {
        name: 'csmpreston',
        img: 'images/csmapreston.jpeg',
    },
    {
        name: 'franken',
        img: 'images/franken.jpeg',
    },
    {
        name: 'jacket',
        img: 'images/jacket.jpeg',
    },
    {
        name: 'redcap',
        img: 'images/redcap.jpeg',
    },
    {
        name: 'scarf',
        img: 'images/scarf.jpeg',
    },
    {
        name: 'tall',
        img: 'images/tall.jpeg',
    }

]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/back.jpeg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const resultDisplay = document.querySelector('#result')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    document.querySelectorAll('img')
    if (optionOneId == optionTwoId) {
        alert('You have clicked the same image!')
    }

    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'images/afterMatch.jpeg')
        cards[optionTwoId].setAttribute('src', 'images/afterMatch.jpeg')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)

    } else {
        cards[optionOneId].setAttribute('src', 'images/back.jpeg')
        cards[optionTwoId].setAttribute('src', 'images/back.jpeg')
        alert('Sorry, try again!')
    }
    resultDisplay.innerHTML = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.innerHTML = 'Congratulations you found them all!!'
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardArray[cardId].name
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout( checkMatch, 500)
    }
}