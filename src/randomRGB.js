var randomRGB = function() {
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

var randomRed = function() {
  const hexArray = [];
  let hexVals = ['A', 'B', 'C', 'D', 'E', 'F'];
  var currentRand;
  for (let i = 0; i < 6; i++) {
    if (i < 2) {
      currentRand = Math.floor(Math.random() * 3) + 13;
    } else {
      currentRand = Math.floor(Math.random() * 6);
    }
    if (currentRand < 10) {
      hexArray.push(String(currentRand));
    } else {
      hexArray.push(hexVals[currentRand - 10]);
    }
  }
  return '#' + hexArray.join('');
};