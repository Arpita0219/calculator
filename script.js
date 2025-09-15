/*const input = document.querySelector('.Calculator input');
const buttons = document.querySelectorAll('.Calculator button');

let expression = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'AC') {
            expression = '';
            input.value = '';
        } else if (value === 'DEL') {
            expression = expression.slice(0, -1);
            input.value = expression;
        } else if (value === '=') {
            try {
                // Replace % with /100 for percentage calculation
                let evalExpr = expression.replace(/%/g, '/100');
                input.value = eval(evalExpr);
                expression = input.value;
            } catch {
                input.value = 'Error';
                expression = '';
            }
        } else {
            expression += value;
            input.value = expression;
        }
    });
});

*/
/*const input = document.querySelector('.Calculator input');
const buttons = document.querySelectorAll('.Calculator button');

let expression = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'AC') {
            expression = '';
            input.value = '';
        } else if (value === 'DEL') {
            expression = expression.slice(0, -1);
            input.value = expression;
        } else if (value === '=') {
            try {
                let evalExpr = expression
                    .replace(/%/g, '/100')
                    .replace(/√(\d+(\.\d+)?)/g, 'Math.sqrt($1)')
                    .replace(/(\d+)\^(\d+)/g, 'Math.pow($1,$2)');

                input.value = eval(evalExpr);
                expression = input.value;
            } catch {
                input.value = 'Error';
                expression = '';
            }
        } else {
            expression += value;
            input.value = expression;
        }
    });
});

*/

const input = document.querySelector('.Calculator input');
const buttons = document.querySelectorAll('.Calculator button');

let expression = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'AC') {
            expression = '';
            input.value = '';
        } else if (value === 'DEL') {
            expression = expression.slice(0, -1);
            input.value = expression;
        } else if (value === '=') {
            input.value = calculate(expression);
            expression = input.value;
        } else {
            expression += value;
            input.value = expression;
        }
    });
});

function calculate(expr) {
    try {
        // Handle square root
        if (expr.includes('sqrt')) {
            const num = parseFloat(expr.replace('sqrt', ''));
            return Math.sqrt(num).toFixed(2);
        }

        // Handle power
        if (expr.includes('^')) {
            const [base, exponent] = expr.split('^').map(Number);
            return Math.pow(base, exponent);
        }

        // Handle basic operations
        const operators = ['+', '-', '*', '/', '%'];
        for (let op of operators) {
            if (expr.includes(op)) {
                const [a, b] = expr.split(op).map(Number);
                switch (op) {
                    case '+': return a + b;
                    case '-': return a - b;
                    case '*': return a * b;
                    case '/': return b !== 0 ? (a / b).toFixed(2) : 'Error: Divide by 0';
                    case '%': return a % b;
                }
            }
        }

        return 'Invalid';
    } catch {
        return 'Error';
    }
}