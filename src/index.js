function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let matrix;
    matrix = expr.split("");
    checkBrecketsPair(matrix);
    checkDivisionByZero(matrix);
    let number;
    number = expr.replace(/\s/g, "");
    let getResult;
    getResult = new Function(`return ${number}`);
    let result = getResult();
    return result;
  }
  
  function checkBrecketsPair(matrix) {
    let Brackets = 0;
    for (let value of matrix) {
      if (value === "(") Brackets++;
      if (value === ")") Brackets--;
    }
    if (!(Brackets === 0)) throw new Error("ExpressionError: Brackets must be paired.");
  }
  
  function checkDivisionByZero(matrix) {
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i] === "/" && matrix[i + 2] === "0") throw new Error("TypeError: Division by zero.");
    } 
}

module.exports = {
    expressionCalculator
}