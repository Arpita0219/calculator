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