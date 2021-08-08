
const clock = document.querySelector('.clock')
const clockInner = document.querySelector('.clockInner')
const clockIn = Array.from(document.querySelectorAll('.clockInner span'))
const clockNote = Array.from(document.querySelectorAll('.clockNote span'))
const clockHour = document.querySelector('.clockHour')
const clockMin = document.querySelector('.clockMin')
const clockSec = document.querySelector('.clockSec')
const clockDay = document.querySelector('.clockDay') 
const btn = document.querySelector('.btn')
const btnCircle = document.querySelector('.btn-circle')

const dayArr = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA']

let vlear = function() {
  var d = new Date()
  let hour = `${d.getHours()}`.length < 2? `0${d.getHours()}` : `${d.getHours()}`;
  let min = `${d.getMinutes()}`.length < 2? `0${d.getMinutes()}` : `${d.getMinutes()}`;
  let sec = `${d.getSeconds()}`.length < 2? `0${d.getSeconds()}` : `${d.getSeconds()}`;
  clockHour.innerHTML = hour;
  clockMin.innerHTML = min;
  clockSec.innerHTML = sec;
  clockDay.innerHTML = dayArr[d.getDay()]
}

btn.addEventListener('click', () => {
  if (btnCircle.computedStyleMap().get('left').value == 3) {
    btnCircle.style.left = '54%'
    btnCircle.style.background = '#06070E'
    clock.style.background = ' #fff'
    clockIn.forEach(element => element.style.color = '#06070E');
    clockNote.forEach(element => element.style.color = '#06070E');
    clockInner.style.color ='#06070E'
  } else { 
    btnCircle.style.left = '3%'
    btnCircle.style.background = '#fff'
    clock.style.background = '#06070E'
    clockIn.forEach(element => element.style.color = '#fff');
    clockNote.forEach(element => element.style.color = '#ffffff54');
    clockInner.style.color ='#ffffff54'
  }
})

setInterval(vlear, 1000);