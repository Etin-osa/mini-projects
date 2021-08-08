// LOAD
$(document).ready(function () {

  const curtain = $('.curtain');
  const box = $('.box')
  let body1 = $('.body-1');
  let body2 = $('.body-2');
  let bt1 = $('.bt-1');
  let bt2 = $('.bt-2');
  let bg1 = $('.bg-1');
  let bg2 = $('.bg-2');
  let next = $('.next');
  let prev = $('.prev');

  // Array
  let arr1 = [bg1, body1, bt1];
  let arr2 = [bg2, body2, bt2];


  // Next
  next.on('click', () => {
    toggleDOM(curtain, 'open', 'close');
    removeDOM(arr1);
    addDOM(arr2);
  })
  
  // Prev
  prev.click(function() {
    toggleDOM(curtain, 'close', 'open');
    removeDOM(arr2)
    addDOM(arr1)
  })


  // Begin
  //curt(curtain, 'curtainStart');
  curtain.addClass('close');
  addDOM(arr1)
  box.css('transform', 'translate(-50%, -50%) scale(1)')

})



// Add Dom
function addDOM(arr) {
  arr.forEach(each => each.addClass('open'));
}

// Remove Dom
function removeDOM(arr) {
  arr.forEach(each => each.removeClass('open'))
}

// Curtain Function
function toggleDOM(dom, class1, class2) {
  dom.addClass(class1);
  dom.removeClass(class2);
}