// Importar modulo Later.js:
const later = require('later');
const termo = require('./termostato');
const EventEmitter = require('./events');
// Usar zona horaria local:
later.date.localTime();

class Programador extends EventEmitter {
 constructor(array) {
  	super();
  	this.array = array;
  	Object.keys(array).forEach(p => later.setInterval(() => this.emit('ideal', parseFloat(array[p]["temperatura"])), later.parse.text(array[p]["hora"])));
 }
}
exports = module.exports = Programador;
