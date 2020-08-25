describe('raverDancer', function() {
  var raverDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    raverDancer = new RaverDancer(20, 30, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(raverDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function', function() {
    expect(raverDancer.step).to.be.a.function;
  });

  it('should assign top argument to the top variable', function() {
    raverDancer.setPosition(20);

    expect(raverDancer.top).to.be.equal(20);
  });

  it('should assign left argument to the left variable', function() {
    raverDancer.setPosition(undefined, 10);

    expect(raverDancer.left).to.be.equal(10);
  });
});