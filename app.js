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

for (i = 0; i < cornFlower.length; i++) {
  cornFlowerArr.push(cornFlower[i])
}

for (i = 0; i < poppy.length; i++) {
  poppyArr.push(poppy[i])
}

for (i = 0; i < cosmos.length; i++) {
  cosmosArr.push(cosmos[i])
}

if (cornFlowerArr[0] === cornFlowerArr[1]) {
} else if (poppyArr[0] === poppyArr[1]) {
} else if (cosmosArr[0] === cosmosArr[1]) {
} else {
}

console.log(shuffledCardFaces)
// }

// const gameStart = () => {
//   shuffle()
//   show()
// }

// const restartGame = () => {}

// gameStart()
