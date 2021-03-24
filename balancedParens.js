const balancedParens = (input) => {
  let stack = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "{" || input[i] === "[" || input[i] === "(") {
      stack.push(input[i]);
    } else if (input[i] === "}" || input[i] === "]" || input[i] === ")") {
      if (stack.length === 0) return false;
      let temp = stack.pop();
      let result = temp + input[i];
      if (!(result === "{}" || result === "()" || result === "[]"))
        return false;
    }
  }
  return stack.length === 0;
};
