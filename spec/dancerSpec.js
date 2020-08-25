describe('dancer', function() {
  var dancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    dancer = new makeDancer(10, 20, timeBetweenSteps, 25);
  });

  it('should have a jQuery $node object', function() {
    expect(dancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function', function() {
    expect(dancer.step).to.be.a.function;
  });

  it('should assign top argument to the top variable', function() {
    dancer.setPosition(20);

    expect(dancer.top).to.be.equal(20);
  });

  it('should assign left argument to the left variable', function() {
    dancer.setPosition(undefined, 10);

    expect(dancer.left).to.be.equal(10);
  });

  // it('should change css style settings', function() {
  //   dancer.setPosition(30, 40);
  //   console.log($('#25'));
  //   $('#25').should.have.css('top', 30);
  //   // expect($('.dancer')).to.have.css('left', 40);
  // });
});