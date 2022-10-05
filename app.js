let cards = document.querySelectorAll('.card')
let cardFaces = document.querySelectorAll('.cardFace')
let cornFlower = document.querySelectorAll('.cornFlower')
let poppy = document.querySelectorAll('.poppy')
let cosmos = document.querySelectorAll('.cosmos')
const restartBtn = document.querySelector('.restartBtn')

let copyCardFaces = []
let shuffledCardFaces = []

// let shuffle = () => {
for (i = 0; i < cardFaces.length; i++) {
  copyCardFaces.push(cardFaces[i])
}
for (i = 0; i < cardFaces.length; i++) {
  let curIndex = copyCardFaces.length
  let ranIndex = Math.floor(Math.random() * curIndex)
  let splicedItem = copyCardFaces.splice(ranIndex, 1)
  shuffledCardFaces.push(splicedItem[0])
}
for (i = 0; i < cards.length; i++) {
  cards[i].innerHTML = ''
  cards[i].appendChild(shuffledCardFaces[i])
  cards[i].classList.add(shuffledCardFaces[i].classList[1])
}
// }

// let show = () => {
cards.forEach((card) => {
  card.addEventListener('click', () => {
    card.children.item(0).style.display = 'block'
  })
})

console.log(cornFlower)
console.log(poppy)
console.log(cosmos)
// }

//Two clicks
//If after two clicks no match return clicks to display: none
//If match continue displaying imgs
// const match = () => {
let cornFlowerArr = []
let poppyArr = []
let cosmosArr = []
let clickedCard = ''

for (i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', () => {
    clickedCard = cards[i].classList[1]
    console.log(cards[i])
    console.log(clickedCard)
  })
}
for (i = 0; i < cornFlower.length; i++) {
  cornFlowerArr.push(cornFlower[i])
}

for (i = 0; i < poppy.length; i++) {
  poppyArr.push(poppy[i])
}

for (i = 0; i < cosmos.length; i++) {
  cosmosArr.push(cosmos[i])
}

if (cards.length === 2 && cornFlowerArr[0] === cornFlowerArr[1]) {
  console.log('you made a match')
} else if (cards.length === 2 && poppyArr[0] === poppyArr[1]) {
  console.log('you made a match')
} else if (cards.length === 2 && cosmosArr[0] === cosmosArr[1]) {
  console.log('you made a match')
  // } else if (cardFaces.style.display === 'block') {
  //   console.log('you did it')
  // } else {
  //   cardFaces.style.display = 'none'
  //   console.log('try again')
}

console.log(cards)
// }

// const gameStart = () => {
//   shuffle()
//   show()
// }

// const restartGame = () => {}

// gameStart()
