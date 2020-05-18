import { expect } from 'chai';
import { sum, sub, mult, div } from '../src/main.js';


describe('Intro', () => {
  var arr;

  beforeEach(() => {
    arr = [1, 2, 3];
  });

  it('should be an array', () => {
    expect(arr).to.be.an('array');
  });

  it('should have a size of 4 when push another value to the array', () => {
    arr.push(4);
    expect(arr).to.have.lengthOf(4);
  });

  it('should remove the value of 3 when use pop in the array', () => {
    arr.pop(3);
    expect(arr).to.not.include(3);
  });

  it('should return true when pop 3 from the array', () => {
    expect(arr.pop() === 3).to.be.true;
  });

  it('should have a size of 2 when pop a value from the array', () => {
    arr.pop();
    expect(arr).to.have.lengthOf(2);
  });
});

describe('Calc', () => {
  describe('Smoke tests', () =>  {
    it('should exist the method `sum`', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    });

    it('should exist the method `sub`', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a('function');
    });

    it('should exist the method `div`', () => {
      expect(div).to.exist;
      expect(div).to.be.a('function');
    });

    it('should exist the method `div`', () => {
      expect(mult).to.exist;
      expect(mult).to.be.a('function');
    });
  });

  describe('Sum method', () =>  {
    it('should return 4 when `sum(2,2)`', () => {
      expect(sum(2,2)).to.be.equal(4);
    });
  });

  describe('Sub method', () =>  {
    it('should return 4 when `sub(6,2)`', () => {
      expect(sub(6,2)).to.be.equal(4);
    });

    it('should return -4 when `sub(6,10)`', () => {
      expect(sub(6,10)).to.be.equal(-4);
    });
  });

  describe('Mult method', () =>  {
    it('should return 4 when `mult(4,1)`', () => {
      expect(mult(4,1)).to.be.equal(4);
    });
  });

  describe('Div method', () =>  {
    it('should return 4 when `div(8,2)`', () => {
      expect(div(8,2)).to.be.equal(4);
    });

    it('should return `Not possible to divide by zero` when `div(4,0)`', () => {
      expect(div(4,0)).to.be.equal('Not possible to divide by zero');
    });
  });
});
