// EventEmitter 
// -> exclusivo do Node
// importa primeiro o seu módulo 
// a classe eventEmitter é disponibilizada através do módulo 'events'

const EventEmitter = require('events');

const emitter = new EventEmitter(); // gerou uma instância do eventEmitter

emitter.on('User logged', data => {
    console.log(data);
}); // consumidor do evento

emitter.emit('User logged', { user: 'Aline Viana' }); // emite o evento

// extends

const EventEmitter = require('events');

class Users extends EventEmitter {
    userLogged(data) {
        setTimeout(() => {
            this.emit('User logged', data);
        }, 2000);
    }
}

const users = new Users(); 

users.on('User logged', data => {
    console.log(data);
}); 

users.userLogged({ user: 'Aline Viana' });
users.userLogged({ user: 'Nina' });

// EventTarget no browser