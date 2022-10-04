let cards = document.querySelectorAll('.card')
let cardFaces = document.querySelectorAll('.cardFace')
// let cornFlower = document.querySelectorAll('.cornFlower')
// let poppy = document.querySelectorAll('.poppy')
// let cosmos = document.querySelectorAll('.cosmos')
const restartBtn = document.getElementsByClassName('restartBtn')
/////////////////////////////

// create two new empty arrays we can work with,
// one is a copy of the node list we called earlier
let copyCardFaces = []
let shuffledCardFaces = []
// iterate through node list and
//push the elements from the node list to the copy array.
for (i = 0; i < cardFaces.length; i++) {
  copyCardFaces.push(cardFaces[i])
  console.log(copyCardFaces)
}
// using the length of the original node list
// iterate and through and splice out an image element randomly
// using random index aka Math.floor(Math.random() * currentIndex)
// push that into the shufflecCards array (the other new array we created)
for (i = 0; i < cardFaces.length; i++) {
  let curIndex = copyCardFaces.length
  let ranIndex = Math.floor(Math.random() * curIndex)
  console.log(ranIndex)
  let splicedItem = copyCardFaces.splice(ranIndex, 1)
  shuffledCardFaces.push(splicedItem[0])
}
console.log(shuffledCardFaces)

for (i = 0; i < cards.length; i++) {
  cards[i].innerHTML = ''
  cards[i].appendChild(shuffledCardFaces[i])
}

// loop through the cards in the DOM to
// remove the original innerHTML (imgs)
// appendChild the shuffledCards array

////////////////////////////
// console.log(cardFaces)
// console.log(cornFlower)
// console.log(poppy)
// console.log(cosmos)

// let cardsArr = [...cards]

// const gameStart = () => {}

// const restartGame = () => {}

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

cards.forEach((card) => {
  card.addEventListener('click', () => {
    card.children.item(0).style.display = 'block'
    console.log(card.children.item(0))
  })
})
