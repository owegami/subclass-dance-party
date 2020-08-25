describe('punchyDancer', function() {
  var punchyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    punchyDancer = new PunchyDancer(20, 30, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(punchyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function', function() {
    expect(punchyDancer.step).to.be.a.function;
  });

  it('should assign top argument to the top variable', function() {
    punchyDancer.setPosition(20);

    expect(punchyDancer.top).to.be.equal(20);
  });

  it('should assign left argument to the left variable', function() {
    punchyDancer.setPosition(undefined, 10);

    expect(punchyDancer.left).to.be.equal(10);
  });
});