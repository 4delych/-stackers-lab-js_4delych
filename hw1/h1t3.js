function f(operation, x1, x2){
    switch (operation){
        case '+':
            return x1 + x2
        case '-':
            return x1 - x2
        case '/':
            return x1/x2
        case '*':
            return x1 * x2
    }
}

console.log(f('+', 1, 2))