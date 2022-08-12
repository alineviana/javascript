function multiply(a, b) {
  return a * b;
}

console.log(multiply(5, 5));


function multiply(a, b) {
    b = b || 1

    return a * b;
}

console.log(multiply(5));


function multiply(a, b) {
    b = b || 1; // 0 convertido para false e retorna 1

    return a * b;
}

console.log(multiply(5, 0));


function multiply(a, b) {
    b = typeof b === 'undefined' ? 1 : b;

    return a * b;
}

console.log(multiply(5, 0));


function multiply(a, b) {
    if(typeof b === 'undefined') {
        b = 1;
    }
    return a * b;
}

console.log(multiply(5, 0));

// ES6 (consegue escrever de maneira enxuta e atribuir valores padrão, caso algum parâmetro não seja repassado)
function multiply(a, b = 1) {
    return a * b
}

console.log(multiply(5, undefined));


function multiply(a, b = a) {
    return a * b
}

console.log(multiply(5));

// Lazy evaluation
function randomNumber() {
    console.log('Generating a random number...')
    return Math.random() * 10;
}

function multiply(a, b = randomNumber()) {
    return a * b;

}

console.log(multiply(5));
console.log(multiply(5));