import { expect } from 'chai';
import {sum, sub, mult, div} from '../src/main';


describe('Calc', () => {

  describe('Smoke Tests', () =>{

    it("é preciso ter função de 'sum'", () =>{
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    });

    it("é preciso ter função de 'sub'", () =>{
      expect(sub).to.exist;
      expect(sub).to.be.a('function');
    });

    it("é preciso ter função de 'mult'", () =>{
      expect(mult).to.exist;
      expect(mult).to.be.a('function');
    });

    it("é preciso ter função de 'div'", () =>{
      expect(div).to.exist;
      expect(div).to.be.a('function');
    });

  });

  describe("Sum", () =>{
    it('Retornar 4 se o valor for (2, 2)', ()=>{
      expect(sum(2, 2)).to.be.equal(4);
    })
  })

  describe("Sub", () =>{
    it('Retornar 4 se o valor for (6, 2)', ()=>{
      expect(sub(6, 2)).to.be.equal(4);
    })
  })

  describe("Mult", () =>{
    it('Retornar 4 se o valor for (2, 2)', ()=>{
      expect(mult(2, 2)).to.be.equal(4);
    })
  })

  describe("Div", () =>{
    it('Verificando divisão por zero', ()=>{
      expect(div(4, 0)).to.be.equal('Não é possível divisão por zero');
    })
    it('Verificando divisão, quando o número for (8,2)', ()=>{
      expect(div(8, 2)).to.be.equal(4);
    })
  })

});
