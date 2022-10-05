let cards = document.querySelectorAll('.card')
let cardFaces = document.querySelectorAll('.cardFace')
let cornFlower = document.querySelectorAll('.cornFlower')
let poppy = document.querySelectorAll('.poppy')
let cosmos = document.querySelectorAll('.cosmos')
let announcer = document.querySelector('.announce')
const restartBtn = document.querySelector('.restartBtn')

let copyCardFaces = []
let shuffledCardFaces = []

let tally = 0

let cosmosCounter = 0
let cornFlowerCounter = 0
let poppyCounter = 0

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
  cards[i].addEventListener('click', (event) => {
    // clickedCard = cards[i].classList[1]
    // console.log(clickedCard)
    event.currentTarget.children.item(0).style.display = 'block'
    console.log(event.currentTarget.classList.contains('cosmos'))
    if (tally < 2) {
      tally++
      if (event.currentTarget.classList.contains('cosmos')) {
        cosmosCounter++
        console.log('This is the cosmos', cosmosCounter)
      } else if (event.currentTarget.classList.contains('cornFlower')) {
        cornFlowerCounter++
        console.log('this is corn flower', cornFlowerCounter)
      } else if (event.currentTarget.classList.contains('poppy')) {
      }
      if (tally === 2) {
        if (cosmosCounter === 2) {
          console.log('youve matched cosmos')
        } else if (cornFlowerCounter === 2) {
          console.log("you've matched corn flower")
        } else if (poppyCounter === 2) {
          console.log('youve matched poppy')
        }
        // event.currentTarget.children.item(0).style.display = 'none'
        tally = 0
        cosmosCounter = 0
        cornFlowerCounter = 0
        console.log(tally)
      }
    }
  })
}
// }

//tally of current clicks
//action when tally === 2

// let show = () => {
// cards.forEach((card) => {
//   card.addEventListener('click', () => {
//     card.children.item(0).style.display = 'block'
//   })
// // })

// }

// const match = () => {
let cornFlowerArr = []
let poppyArr = []
let cosmosArr = []
let clickedCard = ''

// for (i = 0; i < cards.length; i++) {}
// for (i = 0; i < cornFlower.length; i++) {
//   cornFlowerArr.push(cornFlower[i])
// }

// for (i = 0; i < poppy.length; i++) {
//   poppyArr.push(poppy[i])
// }

// for (i = 0; i < cosmos.length; i++) {
//   cosmosArr.push(cosmos[i])
// }

// if (cards.length === 2 && cornFlowerArr[0] === cornFlowerArr[1]) {
//   announcer.innerHTML = 'You made a match!'
// } else if (cards.length === 2 && poppyArr[0] === poppyArr[1]) {
//   announcer.innerHTML = 'You made a match!'
// } else if (cards.length === 2 && cosmosArr[0] === cosmosArr[1]) {
//   announcer.innerHTML = 'You made a match!'
// } else if (cardFaces.style.display === 'block') {
//   console.log('you did it')
// } else {
//   cardFaces.style.display = 'none'
//   console.log('try again')
// }

console.log(cards)
// }

// const gameStart = () => {
//   shuffle()
//
// }

// const restartGame = () => {}

// gameStart()
