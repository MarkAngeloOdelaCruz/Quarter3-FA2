function calculate(operator){
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let result = "";

    if (isNaN(n1) || isNaN(n2)){
        result = "Please enter a valid number.";
    }

    else{
        switch(operator){
            case '+':
                result = `The sum of ${n1} and ${n2} is ${n1 + n2}.`;
                break;
            
            case '-':
                result = `The difference of ${n1} and ${n2} is ${n1 - n2}.`;
                break;
            
            case '*':
                result = `The product of ${n1} and ${n2} is ${n1 * n2}.`;
                break;
            
            case '/':
                if (n2 == 0){
                    result = "Invalid, cannot divide by zero.";
                }

                else{
                    result = `The quotient of ${n1} and ${n2} is ${n1 / n2}.`;
                }
                break;
            
            case '%':
                if (n2 == 0){
                    result = "Invalid, cannot divide by zero.";
                }

                else{
                    result = `The remainder of ${n1} / ${n2} is ${n1 % n2}.`;
                }
                break;

            default:
                result = "Invalid operation. Try again.";
        }
    }

    document.getElementById('results').innerHTML = result;
}