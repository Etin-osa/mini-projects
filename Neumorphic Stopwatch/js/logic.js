
// General shortcuts
let playInn = '.setter-play__inner';
let restartInn = '.setter-restart__inner';
let lapInn = '.setter-lap__inner';
let hit = 0;
let inactive = '#a2a2a8';
let active = '#4f4f53';


// DOM
const playDom = $(`${playInn}`)
const playIcon = $(`${playInn} ion-icon`);
const resIcon = $(`${restartInn} ion-icon`);
const lapIcon = $(`${lapInn} ion-icon`);
const playBefore = $(`${playInn}-before`);
const playAfter = $(`${playInn}-after`);
const handle = $('.clock-handles__secs');
const audio = $('.audioDemo')
const ul = $('.list-ul');
const centi = $('#centi');
const secs = $('#secs');
const min = $('#min');



// Variables for Timer
const centiSecs = 10;
let timer;
let elapsedTime = false;
let centiCount = 0;
let secsCount = 0;
let minCount = 0;
let timeCount = 0;
let elapsedMin = 0;
let elapsedSecs = 0;
let elapsedCenti = 0;


// Objects
let endRun = {
  'animationPlayState': 'running',
  'animation': 'none',
  'width': '60px',
  'height': '60px',
}

let startRun1 = {
  'animation': 'play 4s linear infinite'
}
let startRun2 = {
  'animation': 'play 4s linear 2s infinite',
}

let animeRun = { 'animationPlayState': 'running' };
let animePause = { 'animationPlayState': 'paused' };

let liStore = [];

// store easy method
let main = {
  checkNumb(str) {
    return str.length === 1 ? `0${str}` : str;
  },

  curAttr() {
    return playIcon.attr('name');
  },

  iconName(name) {
    name === 'play' ? name = 'pause' : name = 'play';
    return name;
  },

  audioTime() {
    // Set time
    audio.prop('currentTime', 2);
  },

  audioPlay() {
    //audioTime
    this.audioTime();

    // Play Audio 
    audio.trigger('play');
  },

  audioPause() {
    // Pause Audio
    audio.trigger('pause');

    this.audioTime();
  },
}




// PLAY/PAUSE
$(playInn).on('click', function() {

  // Get Attr Name
  let iconAttr = main.iconName(main.curAttr());

  // Change icon Attr
  $(playIcon).attr('name', iconAttr);

  // change icon colour for lap or restart && Transform
  iconColourChange(iconAttr);

  // increase
  hit += 1;

  // Remove Animation from handle
  handle.css('transition', 'none');

  // Audio Volume
  audio.prop('volume', 0.1)

  // Start Timer
  if (iconAttr === 'pause') {
    timer = setInterval(countTime, centiSecs);

    // Play Audio 
    main.audioPlay();

  } else {
    clearInterval(timer);

    // Pause audio
    main.audioPause();
  }
})


// RESTART
resIcon.on('click', function() {
  let curPlayName = main.curAttr();

  if (curPlayName == 'play' && hit > 0) {
    // Empty Ul list
    $('.list-ul').html('');

    // Return back to old colour
    $(this).css('color', inactive);

    // Clean hit
    hit = 0;

    // End Animation
    playBefore.css(endRun);
    playAfter.css(endRun);

    // End handle 360
    handle.css({
      'transform': 'translateX(-50%) rotate(360deg)',
      'transition': 'transform .1s ease'
    })

    // Pause Audio
    main.audioPause();

    // Call Restart
    restart();
  }
})


// LAP
lapIcon.on('click', function() {
  let curPlayName = main.curAttr();

  // Get ul Child count
  let ulCount = $('.list-ul .list-li').length;

  if (curPlayName == 'pause' && hit > 0 && ulCount < 30) {
    // Create Li
    let li = $(document.createElement('li'));

    // Add Class
    li.addClass('list-li');

    // innerHTML
    li.html(`<div class="list-li__inner"><div class="list-li__lap"><p> Lap ${ulCount + 1}</p><p><span>Elapsed </span>${main.checkNumb(`${elapsedMin}`)}:${main.checkNumb(`${elapsedSecs}`)}.${main.checkNumb(`${elapsedCenti}`)}</p></div><div class="list-li__time"><p><span class="currentMin">${main.checkNumb(`${minCount}`)}</span>:<span class="currentSecs">${main.checkNumb(`${secsCount}`)}</span>.<span class="currentCenti">${main.checkNumb(`${centiCount}`)}</span></p></div></div>`);

    
    // Prepend
    ul.prepend(li);

    // Empty elapsed time
    elapsedCenti = 0;
    elapsedSecs = 0;
    elapsedMin = 0;
    
    // Scroll Top
    ul.scrollTop('0');

    // elapesd True
    elapsedTime = true;
  }
})


// Audio Event Listener
audio.bind('timeupdate', function() {
  if ((this.currentTime).toFixed(0) == 25) {
    main.audioTime()
  }
})




// Function for counting time
function countTime() {

  // Increase centiCount
  centiCount += 1

  // Show
  centi.html(main.checkNumb(`${centiCount}`))

  // Increase timeCount
  timeCount += 1

  // If centiCount is 100
  if (centiCount === 100) {

    // Increase secsCount
    secsCount += 1

    // show
    secs.html(main.checkNumb(`${secsCount}`))

    // CentiCount restart
    centiCount = 0

    // CentiCount restart html
    centi.html('00')
  }

  // If secs is 60
  if (secsCount === 60) {
    // Increase minCount
    minCount += 1

    // show
    min.html(main.checkNumb(`${minCount}`))

    // secsCount restart
    secsCount = 0

    // SecsCount restart html
    secs.html('00')
  }

  // Check Elapsed
  if (elapsedTime) {
    elapsed()
  }

  // Add Animation
  handle.css('transform', `translateX(-50%) rotate(${0.06 * timeCount}deg)`)
}


// Function elapsed
function elapsed() {
  // Increase Elapsed Centi
  elapsedCenti += 1

  if (elapsedCenti === 100) {
    // Increase Elapsed Secs
    elapsedSecs += 1

    // elapsed centi restart
    elapsedCenti = 0
  }

  if (elapsedSecs === 60) {
    // Increase elapsed Min
    elapsedMin += 1

    // Elapsed min restart
    elapsedSecs = 0
  }
}




// Function for Change other icon color
function iconColourChange(name) {
  if (name === 'play') {

    // Change other icon color
    resIcon.css('color', active);
    lapIcon.css('color', inactive);

    // Add Transform 
    playIcon.css('transform', 'translateX(2px)');

    // Remove Animation
    playBefore.css({...startRun1, ...animePause});
    playAfter.css({...startRun2, ...animePause});

  } else {

    // Change other icon color
    resIcon.css('color', inactive);
    lapIcon.css('color', active);

    // Remove Transform
    playIcon.css('transform', 'translateX(0px)');

    // Add Animation
    playBefore.css({...startRun1, ...animeRun});
    playAfter.css({...startRun2, ...animeRun});
  }
}


// Function restart
function restart() {
  centiCount = 0
  secsCount = 0
  minCount = 0
  timeCount = 0
  elapsedCenti = 0
  elapsedMin = 0
  elapsedSecs = 0
  elapsedTime = false
  centi.html('00')
  secs.html('00')
  min.html('00')
}