var PunchyDancer = function(top, left, timeBetweenSteps, stretch) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.strech = stretch;

};

PunchyDancer.prototype = Object.create(makeDancer.prototype);
PunchyDancer.prototype.constructor = PunchyDancer;

PunchyDancer.prototype.step = function () {
  // var cssTerms = ['alternate-reverse', 'alternate'];
  // var randElem = Math.floor(Math.random() * 2);

  this.oldStep();
  this.$node = $('<span class="linedUp punchy"></span>');
};

PunchyDancer.prototype.oldStep = makeDancer.prototype.step;

/*
randomize speed of punchy dancer at initiation

randomize punchy dancer colors within warm color spectrum

randomize wallflower colors

randomize wllflower size at instatnzialtion

change the background of the  dancefloors

pulse lights on dancefloors

find out why raver colors change faster more times clicked

get specs up and running for each dancer type

toggle epileptic
*/
