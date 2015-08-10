var code = require('../grader.js');

describe("letterGrader", function(){
  it("returns a letter based on the score",function(){
    expect(code.letterGrader(95)).toEqual("A");
    expect(code.letterGrader(85)).toEqual("B");
    expect(code.letterGrader(75)).toEqual("C");
  });
  it("return a plus if #7+, minus if #3-", function(){
    expect(code.letterGrader(99)).toEqual("A+");
    expect(code.letterGrader(73)).toEqual("C-");
    expect(code.letterGrader(85)).toEqual("B");
  });
});

describe("average", function(){
  it("returns the average of a series of scores", function(){
    expect(code.average([6,5,6,2,8,9])).toEqual(6);
  });
});

describe("median", function(){
  it("returns the median in a set of scores, if there is an even number, it returns the average of the two.", function(){
    expect(code.median([6,5,6,2,8,9])).toEqual(6);
  });
});

describe("mode", function(){
  it("returns the mode, or the most common element in an array", function(){
    expect(code.mode([1,2,2,2,3,3,4,5,6])).toEqual(2);
  });
});

