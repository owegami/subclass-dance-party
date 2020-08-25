describe('randomRGB', function() {
  var randomValue, splitVal;

  beforeEach(function() {
    randomValue = randomRGB();
    splitVal = randomValue.split('');
  });

  it('should return a string starting with #', function () {
    expect(randomValue[0]).to.equal('#');
  });

  it('should be 7 characters long', function() {
    expect(randomValue.length).to.equal(7);
  });

  it('should not contain any characters aside from # and 0-F', function() {
    var acceptableValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', '#'];

    for (let char of splitVal) {
      expect(acceptableValues.indexOf(char)).to.be.above(-1);
    }
  });
});

describe('randomRed', function () {

  it('should return expected values for R, G, and B values', function() {
    var acceptableRed = ['D', 'E', 'F'];
    var acceptableOther = ['0', '1', '2', '3', '4', '5'];
    for (let i = 0; i < splitVal.length; i++) {
      if (i === 0) {
        expect(splitVal[0]).to.equal('#');
      } else if (i < 3) {
        expect(acceptableRed.indexOf(splitVal[i])).to.be.above(-1);
      } else {
        expect(acceptableOther.indexOf(splitVal[i])).to.be.above(-1);
      }
    }
  });

});