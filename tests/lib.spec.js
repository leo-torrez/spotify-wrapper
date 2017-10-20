import { expect } from 'chai';
import FizzBuzz from '../src/lib';

describe('Main', () =>{
  it('Retornar `Fizz` quando for multiplo de 3', () =>{
    expect(FizzBuzz(3)).to.be.equal('Fizz');
    expect(FizzBuzz(6)).to.be.equal('Fizz');
  });

  it('Retornar `Buzz` quando for multiplo de 5', () =>{
    expect(FizzBuzz(5)).to.be.equal('Buzz');
  });

  it('Retornar `FizzBUzz` quando for multiplo de 3 e 5', () =>{
    expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
  });

  it('Retornar `Número` quando não for multiplo', () =>{
    expect(FizzBuzz(7)).to.be.equal(7);
  });

  it('Retornar `0` quando não for 0', () =>{
    expect(FizzBuzz(0)).to.be.equal(0);
  });
});
