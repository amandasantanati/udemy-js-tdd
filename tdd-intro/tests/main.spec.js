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

    it('should exist sum method', function(){
      expect(calc.sum).to.exist;
      expect(calc.sum).to.be.a('function');
    });

    it('should exist sub method', function(){
      expect(calc.sub).to.exist;
      expect(calc.sub).to.be.a('function');
    });

    it('should exist div method', function(){
      expect(calc.div).to.exist;
      expect(calc.div).to.be.a('function');
    });

    it('should exist mult method', function(){
      expect(calc.mult).to.exist;
      expect(calc.mult).to.be.a('function');
    });
  });
});
