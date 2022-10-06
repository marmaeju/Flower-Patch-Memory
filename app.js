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

let cardFlip = (event) => {
  event.target.children.item(0).style.display = 'none'
  console.log('cardflip')
}
let flip2 = (cardDiv) => {
  cardDiv.children.item(0).style.display = 'none'
  console.log('flip2')
}
let previousTarget = ''
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
    // previousTarget = event.currentTarget.id
    console.log(previousTarget)
    if (tally < 1) {
      tally++
      if (event.currentTarget.classList.contains('cosmos')) {
        cosmosCounter++
        console.log('This is the cosmos', cosmosCounter)
        previousTarget = event.currentTarget.id
      } else if (event.currentTarget.classList.contains('cornFlower')) {
        cornFlowerCounter++
        console.log('this is corn flower', cornFlowerCounter)
        previousTarget = event.currentTarget.id
      } else if (event.currentTarget.classList.contains('poppy')) {
        poppyCounter++
        console.log('this is poppy', poppyCounter)
        previousTarget = event.currentTarget.id
      }
    } else if (tally < 2) {
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
          // shuffledCardFaces.style.display = 'none'

          let otherCard = document.getElementById(previousTarget)
          console.log(otherCard)
          setTimeout(() => flip2(otherCard), 1250)
          setTimeout(() => cardFlip(event), 1250)
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
