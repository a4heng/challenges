/*

Given n pairs of parentheses, write a function to generate all combinations of
well-formed parentheses.

For example, given n = 2, a solution set is:

[
  "(())",
  "()()"
]

Given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

Given n = 0, a solution set is:

[
  ""
]

*/

const generateParentheses = n => {
  let result = [];
  const check = (str = '', left = 0, right = 0)=> {
    if(str.length === (2*n)){
      result.push(str);
      return
    }
    if(left < n){
      check(str+'(',left+1,right);
    }
    if(right<left){
      check(str+')',left,right+1);
    }
  }
  check();
  return result;
};

module.exports = {generateParentheses};