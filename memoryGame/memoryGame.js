const cardArray = [
    {
        name: 'fries',
        img: 'image',
    },
    {
        name: 'cheeseburger',
        img: 'image',
    },
    {
        name: 'pizza',
        img: 'image',
    },
    {
        name: 'milk shake',
        img: 'image',
    },
    {
        name: 'ice cream',
        img: 'image',
    },
    {
        name: 'hot dog',
        img: 'image',
    },
    {
        name: 'fries',
        img: 'image',
    },
    {
        name: 'cheeseburger',
        img: 'image',
    },
    {
        name: 'pizza',
        img: 'image',
    },
    {
        name: 'milk shake',
        img: 'image',
    },
    {
        name: 'ice cream',
        img: 'image',
    },
    {
        name: 'hot dog',
        img: 'image',
    }

]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')

function createBoard() {
    for (let i = 0; i < 10; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'image')
        card.setAttribute('data-id', i)
        gridDisplay.appendChild(card)
    }
}
createBoard()