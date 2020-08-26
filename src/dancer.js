var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="linedUp dancer"></span>');

  this.timeBetweenSteps = timeBetweenSteps;

  this.top = top;
  this.left = left;

  this.stepColor();
  this.setPosition(top, left);
  var copy = this;
  window.dancers.push(copy);
};

makeDancer.prototype.step = function () {
  let thisStep = this.step.bind(this);
  let thisTime = this.timeBetweenSteps;
  setTimeout(thisStep, thisTime);
};

makeDancer.prototype.stepColor = function() {
  this.step();
  this.$node.css('border-color', randomRGB());
};

makeDancer.prototype.setPosition = function (top, left) {

  this.top = top;
  this.left = left;

  var styleSettings = {
    'top': top,
    'left': left
  };
  this.$node.css(styleSettings);
};

