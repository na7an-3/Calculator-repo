let calculator = ""; 
let display = document.getElementById("display");

const operators = ['%', '/', '*', '-', '+'];

function hasInvalidOperators(expression) {
    for (let i = 0; i < expression.length - 1; i++) {
        let currentChar = expression[i];
        let nextChar = expression[i + 1];

        let currentIsOperator = operators.includes(currentChar);
        let nextIsOperator = operators.includes(nextChar);

        if (currentIsOperator && nextIsOperator) {
            return true;
        }
    }
    return false;
}

