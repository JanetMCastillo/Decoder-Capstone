// Write your tests here!
const {expect}= require("chai");
const polybiusModule = require("../src/polybius.js");

describe("polybius", () => {
   it("should encode a message by translating each letter to each pair of numbers", () => {
     const actual = polybiusModule.polybius("thinkful"); 
     const expected = "4432423352125413";
    expect(actual).to.eql(expected);
   });
  
it("should translate i and j to 42 when encoding", () => {
     const actual = polybiusModule.polybius("janet is"); 
     const expected = "4211335144 4234";
    expect(actual).to.eql(expected);
});
it("should leave the spaces as is when encoding", () => {
     const actual = polybiusModule.polybius("hello world"); 
     const expected = "3251131343 2543241341";
    expect(actual).to.eql(expected);
  });
  

 it("should decode a message by translating each pair of numbers into a letter", () => {
    const actual = polybiusModule.polybius('23513434112251', false);
    const expected = "message";
        expect(actual).to.equal(expected);
    });
  
it ("should translate both 'i' and 'j' to 42 when decoding",() => {
   const actual= polybiusModule.polybius("th(i/j)nkful", false)
   const expected="4432423352125413"
});
  
it("should leave spaces as is when decoding", () => {
   const actual= polybiusModule.polybius("3251131343 2543241341", false);
  const expected ="hello world";
  expect(actual).to.eql(expected);

});
  });