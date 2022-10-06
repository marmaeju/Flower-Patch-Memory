let cards = document.querySelectorAll('.card')
let cardFaces = document.querySelectorAll('.cardFace')
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
    event.currentTarget.children.item(0).style.display = 'block'
    if (tally < 2) {
      tally++
      if (event.currentTarget.classList.contains('cosmos')) {
        cosmosCounter++
        console.log('This is the cosmos', cosmosCounter)
      } else if (event.currentTarget.classList.contains('cornFlower')) {
        cornFlowerCounter++
        console.log('this is corn flower', cornFlowerCounter)
      } else if (event.currentTarget.classList.contains('poppy')) {
        poppyCounter++
        console.log('this is poppy', poppyCounter)
      }
      if (tally === 2) {
        if (cosmosCounter === 2) {
          console.log('youve matched cosmos')
          announcer.innerHTML = "You've picked Cosmos!"
        } else if (cornFlowerCounter === 2) {
          console.log('youve matched corn flower')
          announcer.innerHTML = "You've gathered Cornflowers!"
        } else if (poppyCounter === 2) {
          console.log('youve matched poppy')
          announcer.innerHTML = "You've collected Poppies!"
        } else {
          console.log('not a match')
          // announcer.innerHTML = 'Try again!'
          //both cards need to be flipped when not a match
          event.target.children.item(0).style.display = 'none'
          announcer.innerHTML = 'Try again!'
        }

        // event.currentTarget.children.item(0).style.display = 'none'
        tally = 0
        cosmosCounter = 0
        cornFlowerCounter = 0
        poppyCounter = 0
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

// const gameStart = () => {
//   shuffle()
//
// }

restartBtn.addEventListener('click', () => {
  console.log('clicked')
})

// gameStart()
