
/* Pass The Message 


const input = document.getElementById('area-inp')
const btn = document.getElementById('area-btn')
const list = document.getElementById('list-key')


btn.addEventListener('click', theMessage.bind(this, input))
document.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    theMessage(input)
    input.blur()
  }
})



// Main Function 
function theMessage(inp) {
  if (inp.value !== '') {
    // Get the value
    let inputVal = inp.value;

    // Create a list and pass the value on to it
    createList(inputVal)

    // Make the input empty 
    inp.value = ''
  }
}


// Create Function 
function createList (val) {
  const li = document.createElement('li')
  const liNote = document.createTextNode(val)

  // li append child 
  li.appendChild(liNote)
  list.appendChild(li)

  // ToUpperCase
  let liArr = `${li.innerHTML}`
  let liFirst = liArr.slice(0, 1).toUpperCase()

  // Li append child update
  li.innerHTML = liFirst + liArr.slice(1)
}


End of Pass The Message */



/* Counter 

let num = 0

let count = setInterval(() => {
  document.querySelector('.counter h2').innerHTML = `${num++}`
  closing(num)
}, 10);


function closing(nm) {
  if (nm > 1000) clearInterval(count)
}

End of Counter */



/* Image slider */

/* To get the main screen ignoring the first image */

arrDefault();


/* Getting all required elements */
const mainSlide = document.querySelector('.imageCont')
const leftIcon = document.querySelector('#iconLeft')
const rightIcon = document.querySelector('#iconRight')
const radios = document.querySelectorAll('.radInner')
const count = document.querySelector('#count')


/* Right & left icon counter */
let rhtCount = 1;
let cunt = 1


/* right function */
rightIcon.addEventListener('click', () => {

  if (rhtCount === 5) return;

  rhtCount++

  /* Number of px to slide */
  let pnum = rhtCount * 370

  /* Get image to slide */
  mainSlide.style.transition = 'transform .7s ease-in-out';
  mainSlide.style.transform = `translateX(-${pnum}px)`;

  /* iD button */
  noteID(rhtCount)

  /* Count */
  cunt++
  if (cunt > 4) cunt = 1
  count.innerHTML = `${cunt}`

})

/* Left function */
leftIcon.addEventListener('click', () => {

  if (rhtCount === 0) return;

  rhtCount--

  /* Number of px to slide */
  let pnum = rhtCount * 370

  /* Get image to slide */
  mainSlide.style.transition = 'transform .7s ease-in-out';
  mainSlide.style.transform = `translateX(-${pnum}px)`;

  /* Id button */
  noteLeft(rhtCount);

  /* Count */
  cunt--
  if (cunt < 1) cunt = 4
  count.innerHTML = `${cunt}`
})


/* Main slide event Listener */
mainSlide.addEventListener('transitionend', () => {
  if (rhtCount === 5) {
    mainSlide.style.transition = 'none'
    mainSlide.style.transform = 'translateX(-370px)'

    /* change count */
    rhtCount = 1
  } else if (rhtCount === 0) {
    mainSlide.style.transition = 'none'
    mainSlide.style.transform = 'translateX(-1480px)'

    rhtCount = 4
  }
})


function noteID(curId) {
  let cur = curId - 1
  let prev = curId - 2

  /* Check for restart */
  if (cur === 4) cur = 0

  /* clear btn dir */
  radioClean()
  
  /* prev */
  radios[prev].classList.add('radRight')
  radios[prev].style.transform = 'scaleX(0)'

  /* cur */
  radios[cur].classList.add('radLeft')
  radios[cur].style.transform = 'scaleX(1)'
}


function noteLeft(curld) {
  let cur = curld - 1
  let prev = curld

  if (cur === -1) cur = 3

  /* clear btn dir */
  radioClean()

  /* prev */
  radios[prev].classList.add('radLeft')
  radios[prev].style.transform = 'scaleX(0)'

  /* cur */
  radios[cur].classList.add('radRight')
  radios[cur].style.transform = 'scaleX(1)'
}

function radioClean() {
  radios.forEach(each => {
    if (each.classList.contains('radLeft')) {
      each.classList.remove('radLeft')
    } else if (each.classList.contains('radRight')) {
      each.classList.remove('radRight')
    }
  })
}

function arrDefault() {
  document.querySelector('.imageCont').style.transform = 'translateX(-370px)';

  const todo = Array.from(document.querySelectorAll('.radInner'));
  /* first btn */
  todo[0].style.transform = 'scaleX(1)'
}


/* Modal Method */
const btn = document.querySelector('.modal_touch')
const inBtn = document.querySelector('.cont_show')
const outer = document.querySelector('.outerColor')


btn.addEventListener('click', () => {
  outer.classList.add('disp')
})

inBtn.addEventListener('click', () => {
  outer.classList.remove('disp')
})