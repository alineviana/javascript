function sum(a, b) {
  var value = 0;

  for (var i = 0; i < arguments.length; i++) {
    value += arguments[i];
  }

  return value;
}

console.log(sum(5, 5, 5, 2, 3));

// ES6
// Rest operator ... (pega todos os parâmetros de uma função e transforma em um array)
//Exemplo 1
function sum(...args) {
  return args.reduce((acc, value) => acc + value, 0);
}

console.log(sum(5, 5, 6, 2, 3));

//Exemplo 2
const sum = (a, b, ...rest) => {
  console.log(a, b, rest);
};

console.log(sum(6, 6, 4, 2, 2));

// Spread operator (pega todos os itens de um array e transforma em parâmetros)
// Quebra os itens e repassar para um lugar
// Strings, arrays, objects
const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

const sum = (...rest) => {
  return multiply(...rest);
};

console.log(sum(5, 5, 5, 2, 3));

//Strings e arrays -> iteráveis
//Exemplo 1
const str = "Digital Innovation One";

function logArgs(...args) {
  console.log(args);
}

logArgs(...str);

//Exemplo 2
const string = "Digital Innovation One";
const arr = [1, 2, 3, 4];
function logArgs(a, b, c) {
  console.log(a, b, c);
}

const arr2 = [...arr, 5, 6, 7];

const arr3 = [...arr2, ...arr, 0, 0, 0];

console.log(arr3);

// Spread em objetos literais só podem ser utilizados para construir novos objetos
//Exemplo 1
const str = "Digital Innovation One";
const arr = [1, 2, 3, 4];

function logArgs(a, b, c) {
  console.log(a, b, c);
}

const arrClone = [...arr];

const obj = {
  test: 123,
};

const obj2 = {
  ...obj,
  test2: "hello",
};

console.log(obj2);

//Exemplo 2
const obj = {
  test: 123,
};

const obj2 = {
  test1: 456,
};

const objMerged = {
  ...obj,
  ...obj2,
};

console.log(objMerged);

//Exemplo 2
const obj = {
  test: 123,
};

const obj2 = obj;

obj2.test = 456;

console.log(obj);

// Shallow clone
//Exemplo 1
const obj = {
  test: 123,
  subObj: {
    test: 123,
  },
};

const obj2 = { ...obj };

obj2.subObj.test = 456;

console.log(obj2);

//Exemplo 2
const obj = {
  test: 123,
  subObj: {
    test: 123,
  },
};

const obj2 = { ...obj, subObj: { ...obj.subObj } };

obj2.subObj.test = 456;

console.log(obj);
