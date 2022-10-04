let cards = document.querySelectorAll('.card')
let cardFaces = document.querySelectorAll('.cardFace')
// let cornFlower = document.querySelectorAll('.cornFlower')
// let poppy = document.querySelectorAll('.poppy')
// let cosmos = document.querySelectorAll('.cosmos')
const restartBtn = document.querySelector('.restartBtn')

let copyCardFaces = []
let shuffledCardFaces = []

let shuffle = () => {
  for (i = 0; i < cardFaces.length; i++) {
    copyCardFaces.push(cardFaces[i])
    console.log(copyCardFaces)
  }
  for (i = 0; i < cardFaces.length; i++) {
    let curIndex = copyCardFaces.length
    let ranIndex = Math.floor(Math.random() * curIndex)
    console.log(ranIndex)
    let splicedItem = copyCardFaces.splice(ranIndex, 1)
    shuffledCardFaces.push(splicedItem[0])
  }
  for (i = 0; i < cards.length; i++) {
    cards[i].innerHTML = ''
    cards[i].appendChild(shuffledCardFaces[i])
  }
}

const gameStart = () => {
  shuffle()
  show()
}

const restartGame = () => {
  gameStart()
}

// const match = () => {
//   if (cornFlower === cornFlower) {
//     cornFlower.style.display = 'block'
//   } else if (poppy === poppy) {
//     poppy.style.display = 'block'
//   } else if (comsos === cosmos) {
//     cosmos.style.display = 'block'
//   } else {
//     cardFaces.style.display = 'none'
//   }
// }
let show = () => {
  cards.forEach((card) => {
    card.addEventListener('click', () => {
      card.children.item(0).style.display = 'block'
      console.log(card.children.item(0))
    })
  })
}
gameStart()
