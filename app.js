const card = document.getElementsByClassName('card')
const restartBtn = document.getElementsByClassName('restartBtn')

const gameStart = () => {}

const restartGame = () => {}

const match = () => {}

const shuffleCards = () => {}

const showCard = (card) => {
  card.style.display = 'block'
}

card.forEach((card) => {
  card.addEventListener('click', showCard(card))
})
