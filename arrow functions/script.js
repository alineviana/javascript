// javascript

function log(value) {
    console.log(value);
}

log('test');

var log = function (value) {
    console.log(value);
}

log('test');

var sum = function(a, b) {
    return a + b;
}

console.log(sum(5, 5));

// ES6
// Arrow functions (funções anônimas)
// Atribuir a uma variável ou passar como parâmetro para outra função

var sum = (a, b) => a + b;

console.log(sum(5, 15));

var sum = (a, b) => {
    
    if (a > b) {
        return a + b;
    }
}

console.log(sum(10, 5));

// Objetos literais

var obj = {
    test: '123'
}

var createObj = () => ({ test: 123 });

console.log(createObj());

// Funções construtoras

function Car() {
    this.foo = 'bar'
}

console.log(new Car());

// Hoisting (características das funções e das variavéis declaradas com var no js de serem movidas ao topo do código)

log('teste');

function log(value) {
    console.log(value);
}

// Hoisting -> não funciona com arrow functions 

var Obj = {
    showContext: function showContext() {
        console.log(this);
    },
    log: function log(value) {
        console.log(value);
    }
};

Obj.showContext();

var Obj = {
    showContext: function showContext() {
       this.log('teste');
    },
    log: function log(value) {
        console.log(value);
    }
};

Obj.showContext();

var Obj = {
  showContext: function showContext() {
    this.log("teste");

    setTimeout(
        function() {
        console.log(this);
    }.bind(this),
    1000);
  },
  log: function log(value) {
    console.log(value);
  },
};

Obj.showContext();