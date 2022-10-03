const cards = document.querySelectorAll('.card')
const cardFaces = document.querySelectorAll('img')
const restartBtn = document.getElementsByClassName('restartBtn')

// const gameStart = () => {}

// const restartGame = () => {}

// const match = () => {}

// const shuffleCards = () => {}

cards.forEach((card) => {
  card.addEventListener('click', () => {
    card.children.item(0).style.display = 'block'
    console.log(card.children.item(0))
  })
})
