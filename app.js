let cards = document.querySelectorAll('.card')
let cardFaces = document.querySelectorAll('.cardFace')
let announcer = document.querySelector('.announce')
const finishBtn = document.querySelector('.finishBtn')
let copyCardFaces = []
let shuffledCardFaces = []
let tally = 0
let cosmosCounter = 0
let cornFlowerCounter = 0
let poppyCounter = 0

let cardFlip = (event) => {
  event.target.children.item(0).style.display = 'none'
}
let flip2 = (cardDiv) => {
  cardDiv.children.item(0).style.display = 'none'
}
let previousTarget = ''

let shuffle = () => {
  for (i = 0; i < cardFaces.length; i++) {
    copyCardFaces.push(cardFaces[i])
  }
  for (i = 0; i < cardFaces.length; i++) {
    let curIndex = copyCardFaces.length
    let ranIndex = Math.floor(Math.random() * curIndex)
    let splicedItem = copyCardFaces.splice(ranIndex, 1)
    shuffledCardFaces.push(splicedItem[0])
  }
}
let winGame = () => {
  for (i = 0; i < cards.length; i++) {
    cards[i].innerHTML = ''
    cards[i].appendChild(shuffledCardFaces[i])
    cards[i].classList.add(shuffledCardFaces[i].classList[1])
    cards[i].addEventListener('click', (event) => {
      event.currentTarget.children.item(0).style.display = 'block'
      if (tally < 1) {
        tally++
        if (event.currentTarget.classList.contains('cosmos')) {
          cosmosCounter++
          previousTarget = event.currentTarget.id
        } else if (event.currentTarget.classList.contains('cornFlower')) {
          cornFlowerCounter++
          previousTarget = event.currentTarget.id
        } else if (event.currentTarget.classList.contains('poppy')) {
          poppyCounter++
          previousTarget = event.currentTarget.id
        }
      } else if (tally < 2) {
        tally++
        if (event.currentTarget.classList.contains('cosmos')) {
          cosmosCounter++
        } else if (event.currentTarget.classList.contains('cornFlower')) {
          cornFlowerCounter++
        } else if (event.currentTarget.classList.contains('poppy')) {
          poppyCounter++
        }
        if (tally === 2) {
          if (cosmosCounter === 2) {
            announcer.innerHTML = "You've picked Cosmos!"
          } else if (cornFlowerCounter === 2) {
            announcer.innerHTML = "You've gathered Cornflowers!"
          } else if (poppyCounter === 2) {
            announcer.innerHTML = "You've collected Poppies!"
          } else {
            let otherCard = document.getElementById(previousTarget)
            console.log(otherCard)
            setTimeout(() => flip2(otherCard), 800)
            setTimeout(() => cardFlip(event), 800)
            announcer.innerHTML = 'Try again!'
          }
          tally = 0
          cosmosCounter = 0
          cornFlowerCounter = 0
          poppyCounter = 0
          console.log(tally)
        }
      }
    })
  }
}

const gameStart = () => {
  shuffle()
  winGame()
}

finishBtn.addEventListener('click', () => {
  announcer.innerHTML =
    'You gathered all the flowers and won the game! Congratulations!'
})

gameStart()
