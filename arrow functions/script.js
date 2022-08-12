// Javascript
// Exemplo 1
function log(value) {
  console.log(value);
}

log("test");

// Exemplo 2
var log = function (value) {
  console.log(value);
};

log("test");

// Exemplo 3
var sum = function (a, b) {
  return a + b;
};

console.log(sum(5, 5));

// ES6
// Arrow functions (funções anônimas)
// Atribuir a uma variável ou passar como parâmetro para outra função
// Exemplo 1
var sum = (a, b) => a + b;

console.log(sum(5, 15));

// Exemplo 2
var sum = (a, b) => {
  if (a > b) {
    return a + b;
  }
};

console.log(sum(10, 5));

// Objetos literais
// Exemplo 1
var obj = {
  test: "123",
};

var createObj = () => ({ test: 123 });

console.log(createObj());

// Funções construtoras
function Car() {
  this.foo = "bar";
}

console.log(new Car());

// Hoisting (características das funções e das variavéis declaradas com var no js de serem movidas ao topo do código)
log("teste");

function log(value) {
  console.log(value);
}
// Hoisting -> não funciona com arrow functions

// Exemplo 1
var Obj = {
  showContext: function showContext() {
    console.log(this);
  },
  log: function log(value) {
    console.log(value);
  },
};

Obj.showContext();

// Exemplo 2
var Obj = {
  showContext: function showContext() {
    this.log("teste");
  },
  log: function log(value) {
    console.log(value);
  },
};

Obj.showContext();

// Exemplo 3
var Obj = {
  showContext: function showContext() {
    this.log("teste");

    setTimeout(
      function () {
        console.log(this);
      }.bind(this),
      1000
    );
  },
  log: function log(value) {
    console.log(value);
  },
};

Obj.showContext();
