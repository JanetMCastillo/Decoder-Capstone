/* Write your tests here!
const expect = require("chai").expect;
const caesar = require("../src/casesar.js");

describe("caesar", ()=>{
  it("should return encoded message",()=>
    )
})
  
/*  describe("caesar", ()=>{
  it("should return decoded message",()=>
    )
})
    
    describe ("caesar", ()=>{
  it("should return false if shift is 0, null, >25, or <-25 ",()=>
    )
}) */

const { expect } = require("chai");
const caesarModule = require("../src/caesar.js");

describe("caesar", () => {
    it("should return the encoded message depending on the given shift value", () => {
        const actual = caesarModule.caesar("This is a secret message!", 8);
    const expected = "bpqa qa i amkzmb umaaiom!";
    expect(actual).to.equal(expected);
  });
  it ("should return the decoded message depending on the shift",()=> {
    const actual = caesarModule.caesar("bpqa qa i amkzmb umaaiom!" ,8, false);
    const expected = "this is a secret message!";
    expect(actual).to.eql(expected);
  });
  it ("leave spaces throughout the code",() => {
    const actual = caesarModule.caesar("space here",3);
    const expected =" "
    expect(actual.charAt(5)).to.equal(expected);
  });
  it("should ignore capital letters", () => {
    const actual = caesarModule.caesar("Hello",3)
    const expected="khoor"
    expect(actual).to.eql(expected)
  })
    it("should return false if the shift parameter is not present", () => {
    const actual = caesarModule.caesar("thinkful",null);
    expect(actual).to.be.false;
    })
  it("should return false if the shift is greater than 25", () => {
        const actual = caesarModule.caesar("BPQA qa I amkzmb umaaiom!", 56);
        expect(actual).to.be.false; 
    });
     it("should return false if the shift is less than -25", () => {
        const actual = caesarModule.caesar("bpqa qa I amkzmb umaaiom!", -30);
        expect(actual).to.be.false; 
     });
  it ("should return false if shift is equal to 0",()=> {
    const actual = caesarModule.caesar("bpqa qa I amkzmb umaaiom!", 0)
    const expected = false
    expect(actual).to.be.false;
  });
  });
