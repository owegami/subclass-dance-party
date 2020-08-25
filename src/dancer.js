var makeDancer = function(top, left, timeBetweenSteps, id) {
  this.$node = $('<span class="dancer"></span>');

  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

};

makeDancer.prototype.step = function () {
  let thisStep = this.step.bind(this);
  let thisTime = this.timeBetweenSteps;
  setTimeout(thisStep, thisTime);
};

makeDancer.prototype.setPosition = function (top = this.top, left = this.left) {

  // (top === undefined) ? top = this.top : top = top;

  // left === undefined ? left = this.left : left = left;

  this.top = top;
  this.left = left;

  var styleSettings = {
    'top': this.top,
    'left': this.left
  };
  this.$node.css(styleSettings);
};

