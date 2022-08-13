// Generators
// São funções com pausa 
// Despausam e retornam valores através da interface de iteração
// Exemplo 1
function hello() {
    console.log('Hello');
    console.log('From');
    console.log('Function!');
}

hello();

// with generators
function* hello() {
    console.log('Hello');
    yield;

    console.log('From');
    yield;

    console.log('Function!');
}

const it = hello();

console.log(it.next());
console.log(it.next());
console.log(it.next());

function* hello() {
    console.log('Hello');
    yield 1;

    console.log('From');
    yield 2;

    console.log('Function!');
}

const it = hello();

console.log(it.next());
console.log(it.next());
console.log(it.next());

// pode receber valores de fora da função para dentro
function* hello() {
    console.log('Hello');
    yield 1;

    console.log('From');
    const value = yield 2;

    console.log(value);
}

const it = hello();

console.log(it.next());
console.log(it.next());
console.log(it.next('Outside!'));

// Exemplo 2

function* naturalNumbers() {
    let number = 0;
    while(true) {
        yield number;
        number++;
    }
}

const it = naturalNumbers();

console.log(it.next());
console.log(it.next());
console.log(it.next());

// Generators
// Usar como uma forma de construir iteradores
const obj = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator]() {
        for (var i = 0; i < this.values.length; i++) {
            yield this.values[i];
        }
    }
};

for (let value of obj) {
    console.log(value);
}