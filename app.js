let cards = document.querySelectorAll('.card')
let cardFace = document.querySelectorAll('.cardFace')
const restartBtn = document.getElementsByClassName('restartBtn')

console.log(cardFace)

// let cardsArr = [...cards]

// const gameStart = () => {}

// const restartGame = () => {}

// const match = () => {}
// const shuffle = (array) => {
//   console.log(array)
//   let curIndex = array.length - 1
//   console.log(array[curIndex])
//   while (curIndex !== 0) {
//     let ranIndex = Math.floor(Math.random() * curIndex)
//     console.log(ranIndex)
//     let tempVal = array[curIndex]
//     console.log(array[ranIndex])
//     let newValue = array[ranIndex]
//     console.log(newValue)
//     array[curIndex] = newValue
//     console.log(array[curIndex])
//     array[ranIndex] = tempVal
//     console.log(array[ranIndex])
//     curIndex -= 1
//     console.log(curIndex)
//   }
//   return array
// }
// cards = shuffle(cards)
// console.log(cards)
for (i = cardFace.length; i >= 0; i--) {
  cards.appendChild(cardFace[(Math.random() * i) | 0])
}

cards.forEach((card) => {
  card.addEventListener('click', () => {
    card.children.item(0).style.display = 'block'
    console.log(card.children.item(0))
  })
})
