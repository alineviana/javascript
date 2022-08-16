const { Promise } = require("q");

function doSomething(callback) {
  setTimeout(function () {
    // did something
    callback("First data");
  }, 1000);
}

function doOtherThing(callback) {
  setTimeout(function () {
    // did other thing
    callback("Second data");
  }, 1000);
}

function doAll() {
  doSomething(function (data) {
    var processedData = data.split("");

    doOtherThing(function (data2) {
      var processedData2 = data2.split("");

      setTimeout(function () {
        console.log(processedData, processedData2);
      }, 1000);
    });
  });
}

doAll();

// Com tratamento de dados
function doSomething(callback) {
  setTimeout(function () {
    // did something
    callback("First data");
  }, 1000);
}

function doOtherThing(callback) {
  setTimeout(function () {
    // did other thing
    callback("Second data");
  }, 1000);
}

function doAll() {
  try {
    doSomething(function (data) {
      var processedData = data.split("");

      try {
        doOtherThing(function (data2) {
          var processedData2 = data2.split("");

          try {
            setTimeout(function () {
              console.log(processedData, processedData2);
            }, 1000);
          } catch (err) {
            // handle error
          }
        });
      } catch (err) {
        // handle error
      }
    });
  } catch (err) {
    // handle error
  }
}

doAll();

// Promises
// Pending
const doSomethingPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    // did something
    resolve("First data");
  }, 1000);
});

const doOtherThingPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    // did something
    resolve("Second data");
  }, 1000);
});

console.log(doSomethingPromise);

// Promises podem ter 3 estados:
// 1) Pending -> quando ela está pendente, em execução
// 2) Fullfilled -> quando terminou de executar
// 3) Rejected -> caso aconteça algum erro

// Fullfilled
const doSomethingPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    // did something
    resolve("First data");
  }, 1000);
});

const doOtherThingPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    // did something
    resolve("Second data");
  }, 1000);
});

doSomethingPromise.then((data) => console.log(data));

// Rejected
const doSomethingPromise = new Promise((resolve, reject) => {
  throw new Error("Something went wrong");
  setTimeout(function () {
    // did something
    resolve("First data");
  }, 1000);
});

const doOtherThingPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    // did something
    resolve("Second data");
  }, 1000);
});

doSomethingPromise
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// Promise
const doSomethingPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    // did something
    resolve("First data");
  }, 1000);
});

const doOtherThingPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    // did something
    resolve("Second data");
  }, 1000);
});

doSomethingPromise
  .then((data) => doOtherThingPromise)
  .then((data2) => console.log(data2))
  .catch();

// Other example
const doSomethingPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(function () {
      // did something
      resolve("First data");
    }, 1000);
  });

const doOtherThingPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(function () {
      // did something
      resolve("Second data");
    }, 1000);
  });

doSomethingPromise()
  .then(data => {
    console.log(data.split(''));
    return doOtherThingPromise();
  })
  .then(data2 => console.log(data2.split('')))
  .catch(error => console.log('Ops', error));


// Executando em paralelo
const doSomethingPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(function () {
      // did something
      resolve("First data");
    }, 1000);
  });

const doOtherThingPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(function () {
      // did something
      resolve("Second data");
    }, 1000);
  });

Promise.all([doSomethingPromise(), doOtherThingPromise()]).then(data => {
  console.log(data[0].split(''));
  console.log(data[1].split(''));
}).catch(err =>{
  console.log(err)
})

// A primeira resolvida será executada -> race
const doSomethingPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(function () {
      // did something
      resolve('First data');
    }, 1500);
  });

const doOtherThingPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(function () {
      // did something
      resolve('Second data');
    }, 1000);
  });

Promise.race([doSomethingPromise(), doOtherThingPromise()]).then(data => {
  console.log(data);
});
