fetch("http://localhost:8080/dataXPTO.json")
  .then((responseStream) => {
    if (responseStream.status === 200) {
      return responseStream.json();
    } else {
      throw new Error("Request error");
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("Erro: ", err);
  });

fetch("http://localhost:8080/dataXPTO.json"),
  {
    method: "post", // configuração do request, por default é um get
    body: JSON.stringify,
  }
    .then((responseStream) => {
      if (responseStream.status === 200) {
        return responseStream.json();
      } else {
        throw new Error("Request error");
      }
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log("Erro: ", err);
    });

// ES7 Async / Await (espera que outras promises sejam resolvidas)
// É uma forma de criar promises de maneira mais simples

const simpleFunc = async () => {
  throw new Error("Oh no!");
  return 12345;
};

simpleFunc()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// Exemplo async await

const asyncTimer = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12345);
    }, 1000);
  });

const simpleFunc = async () => {
    const data = await asyncTimer();

    return data;
  };
  
  simpleFunc()
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });


// de maneira paralela
const asyncTimer = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12345);
    }, 1000);
  });

const simpleFunc = async () => {
    const data = await Promise.all([asyncTimer()]);

    return data;
  };
  
  simpleFunc()
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });


