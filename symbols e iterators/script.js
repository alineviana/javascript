// Symbols
// Maneira de gerar um identificador único

// Exemplo 1
const uniqueId = Symbol();
console.log(uniqueId);

// Exemplo 2 - valor serve para debugging
const uniqueId = Symbol("Hello");
console.log(uniqueId);

// Exemplo 3
const uniqueId = Symbol("Hello");
const uniqueId2 = Symbol("Hello");
console.log(uniqueId === uniqueId2);

// Pode ser utilizado para gerar propriedades
const uniqueId = Symbol("Hello");

const obj = {
  [uniqueId]: "Hello",
};

console.log(Object.getOwnPropertySymbols(obj));

// Well know symbols
// Symbol.iterator
// Symbol.split
// Symbol.toStringTag
// add propriedades ao objeto
// Exemplo 1
const arr = [1, 2, 3, 4];

const it = arr[Symbol.iterator]();

console.log(it.next());

// iterator => interface para consumir passo a passo uma lista, estrutura de dados

// Exemplo 2
const arr = [1, 2, 3, 4];

const it = arr[Symbol.iterator]();

while (true) {
  let { value, done } = it.next();

  if (done) {
    break;
  }
  console.log(value);
}

// ES6
// Exemplo 1
const arr = [1, 2, 3, 4];

for (let value of arr) {
  console.log(value);
}

// Exemplo 2
const str = "Digital Innovation One";

for (let value of str) {
  console.log(value);
}

// Função iteradora em um objeto
// Exemplo 1
const arr = [1, 2, 3, 4];
const str = "Digital Innovation One";

console.log(arr[Symbol.iterator]().next());

// Exemplo 2
const obj = {
  values: [1, 2, 3, 4],
  [Symbol.iterator]() {
    let i = 0;

    return {
      next: () => {
        i++;

        return {
          value: this.values[i - 1],
          done: i > this.values.length,
        };
      },
    };
  },
};

const it = obj[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

// Exemplo 3
const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
      let i = 0;
  
      return {
        next: () => {
          i++;
  
          return {
            value: this.values[i - 1],
            done: i > this.values.length,
          };
        },
      };
    },
  };
  
for (let value of obj) {
    console.log(value);
}

// Exemplo 4 - spread
const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
      let i = 0;
  
      return {
        next: () => {
          i++;
  
          return {
            value: this.values[i - 1],
            done: i > this.values.length,
          };
        },
      };
    },
  };
  
const arr2 = [... obj];

console.log(arr2);