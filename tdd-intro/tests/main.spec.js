var expect = require('chai').expect;
var calc = require('../src/main.js');

describe('Intro', function(){
  var arr;

  beforeEach(function(){
    arr = [1, 2, 3];
  });

  it('should be an array', function(){
    expect(arr).to.be.an('array');
  });

  it('should have a size of 4 when push another value to the array', function(){
    arr.push(4);
    expect(arr).to.have.lengthOf(4);
  });

  it('should remove the value of 3 when use pop in the array', function(){
    arr.pop(3);
    expect(arr).to.not.include(3);
  });

  it('should return true when pop 3 from the array', function(){
    expect(arr.pop() === 3).to.be.true;
  });

  it('should have a size of 2 when pop a value from the array', function(){
    arr.pop();
    expect(arr).to.have.lengthOf(2);
  });
});

describe('Calc', function(){
  describe('Smoke tests', function() {
    it('should exist calc lib', function(){
      expect(calc).to.exist;
    });

    it('should exist the method `sum`', function(){
      expect(calc.sum).to.exist;
      expect(calc.sum).to.be.a('function');
    });

    it('should exist the method `sub`', function(){
      expect(calc.sub).to.exist;
      expect(calc.sub).to.be.a('function');
    });

    it('should exist the method `div`', function(){
      expect(calc.div).to.exist;
      expect(calc.div).to.be.a('function');
    });

    it('should exist the method `div`', function(){
      expect(calc.mult).to.exist;
      expect(calc.mult).to.be.a('function');
    });
  });

  describe('Sum method', function() {
    it('should return 4 when `sum(2,2)`', function(){
      expect(calc.sum(2,2)).to.be.equal(4);
    });
  });

  describe('Sub method', function() {
    it('should return 4 when `sub(6,2)`', function(){
      expect(calc.sub(6,2)).to.be.equal(4);
    });

    it('should return -4 when `sub(6,10)`', function(){
      expect(calc.sub(6,10)).to.be.equal(-4);
    });
  });

  describe('Mult method', function() {
    it('should return 4 when `mult(4,1)`', function(){
      expect(calc.mult(4,1)).to.be.equal(4);
    });
  });

  describe('Div method', function() {
    it('should return 4 when `div(8,2)`', function(){
      expect(calc.div(8,2)).to.be.equal(4);
    });

    it('should return `Not possible to divide by zero` when `div(4,0)`', function(){
      expect(calc.div(4,0)).to.be.equal('Not possible to divide by zero');
    });
  });
});
