var RaverDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

RaverDancer.prototype = Object.create(makeDancer.prototype);
RaverDancer.prototype.constructor = RaverDancer;

RaverDancer.prototype.oldStep = makeDancer.prototype.step;

RaverDancer.prototype.step = function () {
  this.oldStep();
  this.$node = $('<span class="dancer raver"></span>');
  $('.raver').css('border-color', randomRGB());
};

randomRGB = function() {
  const randomDecimal = Math.floor(Math.random() * 16777216);
  const hexArray = [];
  let remainder = false;
  for (let i = 5; i >= 0; i--) {
    let divisor = Math.pow(16, i);
    let dividend = (remainder !== false) ? remainder : randomDecimal;
    let quotient = Math.floor(dividend / divisor);
    let hexQ = '';
    let hexVals = ['A', 'B', 'C', 'D', 'E', 'F'];
    if (quotient < 10) {
      hexQ = String(quotient);
    } else {
      hexQ = hexVals[quotient - 10];
    }
    hexArray.push(hexQ);
    remainder = dividend % divisor;
  }
  return '#' + hexArray.join('');
};