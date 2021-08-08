

const bigQuotes = [
  {
    name: 'Albert Einstein',
    quotes: ['Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.', 'Any fool can know. The point is to understand.', 'I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.', 'If you can\t explain it to a six year old, you don\'t understand it yourself.', 'Anyone who has never made a mistake has never tried anything new.', 'A clever person solves a problem. A wise person avoids it.', 'Great spirits have always encountered violent opposition from mediocre minds.', 'The measure of intelligence is the ability to change.', 'Creativity is intelligence having fun.', 'The woman who follows the crowd will usually go no further than the crowd. The woman who walks alone is likely to find herself in places no one has ever been before.']
  },
  {
    name: 'Socrates',
    quotes: ['The only true wisdom is in knowing you know nothing.', 'Wonder is the beginning of wisdom.']
  },
  {
    name: 'Oscar Wilde',
    quotes: ['To live is the rarest thing in the world. Most people exist, that is all.', 'Be yourself; everyone else is already taken.', 'It is what you read when you don\'t have to that determines what you will be when you can\t help it.']
  },
  {
    name: 'Abraham Lincoln',
    quotes: ['Folks are usually about as happy as they make their minds up to be.', 'Whatever you are, be a good one.', 'Nearly all men can stand adversity, but if you want to test a man\'s character, give him power', 'My concern is not whether God is on our side; my greatest concern is to be on God\'s side, for God is always right.', 'Books serve to show a man that those original thoughts of his aren\'t very new after all.', 'There are no bad pictures; that\'s just how your face looks sometimes.', 'All that I am or ever hope to be, I owe to my angel mother.', 'The best way to predict your future is to create it.']
  },
  {
    name: 'Jesus Christ',
    quotes: ['Do not be anxious about tomorrow, for tomorrow will be anxious for itself. Let the day\'s own trouble be sufficient for the day.', 'But seek first his kingdom and his righteousness, and all these things will be given to you as well.', 'For those who exalt themselves will be humbled, and those who humble themselves will be exalted.', 'Blessed are those who are persecuted because of righteousness, for theirs is the kingdom of heaven.', 'It is not the healthy who need a doctor, but the sick. I have not come to call the righteous, but sinners to repentance.']
  },
  {
    name: 'John Lennon',
    quotes: ['A dream you dream alone is only a dream. A dream you dream together is reality.', 'If everyone demanded peace instead of another television set, then there\'d be peace.', 'Living is Easy with Eyes Closed.']
  },
  {
    name: 'Henry Ford',
    quotes: ['Whether you think you can, or you think you can\'t; you\'re right.', 'Failure is only the opportunity more intelligently to begin again.', 'You can\'t build a reputation on what you are going to do.', 'If I had asked people what they wanted, they would have said faster horses.', 'Don\'t find fault, find a remedy; anybody can complain.', 'The only real mistake is the one from which we learn nothing.', 'Obstacles are those frightful things you see when you take your eyes off your goals.', 'Vision without execution is just hallucination.', 'When everything seem to be going against you, remember that the airplane takes off against the wind, not with it ...', 'It has been my observation that most people get ahead during the time that others waste.', 'Quality means doing it right when no one is looking.', 'Nothing is particularly hard if you divide it into small jobs.', 'If you always do what you’ve always done, you’ll always get what you’ve always got.', 'success is 99% failure.', 'A business absolutely devoted to service will have only one worry about profits. They will be embarrassingly large.',]
  },
  {
    name: 'Aristotle',
    quotes: ['It is the mark of an educated mind to be able to entertain a thought without accepting it.', 'Hope is a waking dream.', 'Anybody can become angry — that is easy, but to be angry with the right person and to the right degree and at the right time and for the right purpose, and in the right way — that is not within everybody\'s power and is not easy.', 'Patience is bitter, but its fruit is sweet.', 'Those who educate children well are more to be honored than they who produce them; for these only gave them life, those the art of living well.', 'I count him braver who overcomes his desires than him who conquers his enemies, for the hardest victory is over self.', 'It is not enough to win a war; it is more important to organize the peace.']
  },
  {
    name: 'Plato',
    quotes: ['Wise men speak because they have something to say; fools because they have to say something.', 'We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.', 'The heaviest penalty for declining to rule is to be ruled by someone inferior to yourself.', 'Never discourage anyone...who continually makes progress, no matter how slow.', 'Love is a serious mental disease.']
  },
  {
    name: 'John D. Rockefeller',
    quotes: ['The secret to success is to do the common things uncommonly well.', 'I would rather hire a man with enthusiasm, than a man who knows everything.', 'Charity is injurious unless it helps the recipient to become independent of it.', 'Next to doing the right thing, the most important thing is to let people know you are doing the right thing.', 'A man has no right to occupy another man’s time unnecessarily.', 'If your only goal is to become rich, you will never achieve it.', 'Go as far as you can see; when you get there, you\'ll be able to see farther.', 'Nobody does anything if he can get anybody else to do it.', 'Success comes from keeping the ears open and the mouth closed']
  },
]

/* Random function */
function randNum(num) {
  return Math.floor(Math.random() * num)
}


/* Quotes called */
const quoteCall = function() {

  /* Author of Quote */
  let author = randNum(bigQuotes.length)

  /* Quote */
  let quote = randNum(bigQuotes[author].quotes.length)

  /* Display quote */
  vueQuote(author, quote)
}

/* Display Quote Function */
function vueQuote(auth, quot) {
  /* Quote */
  document.querySelector('blockquote').innerHTML = bigQuotes[auth].quotes[quot]

  /* Author */
  document.querySelector('figcaption').innerHTML = bigQuotes[auth].name
}

quoteCall()

document.querySelector('button').addEventListener('click', quoteCall)