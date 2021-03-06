var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  if (window.dancers.length > 0) {
    top = window.dancers[Math.floor(Math.random() * window.dancers.length)].top;
    left = window.dancers[Math.floor(Math.random() * window.dancers.length)].left;

    top += 5;
    left += 5;
  }

  makeDancer.call(this, top, left, timeBetweenSteps / 3);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // blinkyDancer.step = function() {
  //   // call the old version of step at the beginning of any call to this new version of step
  //   oldStep();
  //   // toggle() is a jQuery method to show/hide the <span> tag.
  //   // See http://api.jquery.com/category/effects/ for this and
  //   // other effects you can use on a jQuery-wrapped html tag.
  //   blinkyDancer.$node.toggle();
  // };

};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  this.oldStep();
  this.$node.addClass('blinky');
  this.$node.toggle();
};

makeBlinkyDancer.prototype.oldStep = makeDancer.prototype.step;