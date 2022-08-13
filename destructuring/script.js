// Partes de variáveis atribuídas a outras variáveis
// Exemplo 1
var arr = ["Apple", "Banana", "Orange", ["Tomato"]];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

// ES6
// Destructuring Assignment
// Exemplo 1
var [apple2, banana2, orange2, [tomato2]] = [
  "Apple",
  "Banana",
  "Orange",
  ["Tomato"],
];

console.log(tomato, tomato2);

// Exemplo 2
var [apple2, banana2, orange2] = ["Apple", "Banana"];

console.log(orange2);

// Exemplo 3 sem destructuring
var obj = {
  name: "Celso",
};

var name = obj.name;
console.log(name);

// com destructuring
var { name } = obj;
console.log(name);

// ou
var { name: name2 } = obj;
console.log(name2);

//com array
var arr = ["Apple", "Orange"];
var [apple2] = arr;
console.log(apple2);

// Exemplo 4
var obj = {
  name: "Celso",
  props: {
    age: 26,
  },
};

var age = obj.props.age;
console.log(age);

// com destructuring
var obj = {
  name: "Celso",
  props: {
    age: 26,
  },
};

var {
  props: { age },
} = obj;
console.log(age);

// Exemplo 5
// destructuring de arrays dentro do objeto e de objeto dentro do array
var obj = {
  name: "Celso",
  props: {
    age: 26,
    favoriteColors: ["black", "blue"],
  },
};

// destructuring de multiníveis
var {
  props: {
    age: age2,
    favoriteColors: [color1, color2],
  },
} = obj;

console.log(color2);

// Exemplo 6
var arr = [{ name: "Apple", type: "fruit" }];
var fruit1 = arr[0].name;

// com destructuring
var [{ name: fruitName }] = arr;
console.log(fruitName);

// Exemplo 6 in functions
function sum(arr) {
  return arr[0] + arr[1];
}

console.log(sum([3, 3]));

// com destructuring
function sum([a, b]) {
  return a + b;
}

console.log(sum([3, 3]));

// destructuring with default values
function sum([a, b] = [0, 0]) {
  return a + b;
}

console.log(sum());

function sum([a, b] = [0, 0]) {
  return a + b;
}

console.log(sum([3, 3]));

// with objects
function sum({ a, b }) {
  return a + b;
}

console.log(sum({ a: 4, b: 4 }));
