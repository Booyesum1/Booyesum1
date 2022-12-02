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
const cardsChosen = []
const cardsChosenIds = []

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
    document.querySelectorAll('img')
    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!')
        // cards[cardsChosenIds[[0]]].setAttribute('src', images/)
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