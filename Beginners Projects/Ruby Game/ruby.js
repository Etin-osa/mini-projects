
const gameTiles = Array.from(document.querySelectorAll('.gameTile'))
const scoreHtml = document.getElementById('scoreInline')
const rubyHtml = document.getElementById('rubyScore')
const starHtml = document.getElementById('starScore')
const resetButton = document.getElementById('reset-btn')
const gameOver = document.querySelector('.cover')
const gameNumb = document.getElementById('coverNumb')


/* Create closed chest */
let closed = document.createElement('div')


/* Table */
const scoreBoard = {
  score: 0,
  star: 0,
  ruby: 0,
}

/* Array of backgrounds */
const backgroundArr = ['dirt', 'water', 'stone']

/* Check Array */
let emt = []

/* Random function generator */
function randomNumb() {
  let rand = Math.floor(Math.random() * 3)
  if (emt.indexOf(2) !== -1) {
    rand = Math.floor(Math.random() * 2)
  }
  emt.push(rand)
  return rand
}

/* Game Board */
gameTiles.forEach(gametile => gametile.addEventListener('click', () => {
  if (gametile.classList.contains('grass')) {
    /* Random Background change */
    let rands = backgroundArr[randomNumb()]
    gametile.classList.value = `gameTile ${rands}`


    if (rands === 'dirt') {
      /* Create ruby image */
      let rubyImg = document.createElement('img')
      rubyImg.setAttribute('src', 'http://adrianpayne.me/game/assets/images/gem.png')
      rubyImg.setAttribute('class', 'ruby')
      gametile.appendChild(rubyImg)

      /* Increase ruby score */
      scoreBoard.ruby++
      scoreBoard.score += 500
      rubyHtml.innerHTML = scoreBoard.ruby
      scoreHtml.innerHTML = scoreBoard.score

      check()

    } else if (rands === 'stone') {
      /* Create close Chest */
      closed.classList.add('heigt')
      closed.classList.add('closed-chest')
      gametile.appendChild(closed)

    } else if (rands === 'water') {
      check()
    }
  }
}))



/* Create closed Event Listener */
closed.addEventListener('click', () => {
  closed.classList.value = 'heigt open-chest'

  /* Create star element  */
  let starImg = document.createElement('img')
  starImg.setAttribute('src', 'http://adrianpayne.me/game/assets/images/star.png')
  starImg.setAttribute('class', 'star')
  closed.appendChild(starImg)

  /* Increase the star numb */
  scoreBoard.star++
  starHtml.innerHTML = scoreBoard.star

  check()
})




/* Reset Button */
resetButton.addEventListener('click', restart)

function restart() {
  gameTiles.forEach(gametile => gametile.classList.value = 'gameTile grass')
  Array.from(document.querySelectorAll('.star')).forEach(star => star.style.display = 'none')
  Array.from(document.querySelectorAll('.ruby')).forEach(star => star.style.display = 'none')
  gameOver.style.display = 'none'
  closed.classList.value =  ''
  emt = []
  rubyHtml.innerHTML = 0
  scoreHtml.innerHTML = 0
  starHtml.innerHTML = 0
  scoreBoard.score = 0
  scoreBoard.ruby = 0
  scoreBoard.star = 0
}

function check() {
  if (emt.length === 25 && scoreBoard.star === 1) {
    gameOver.style.display = 'flex'
    gameNumb.innerHTML = scoreBoard.score
  }
}

restart()