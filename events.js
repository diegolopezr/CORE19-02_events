class EventEmitter {

 constructor() {
  this.array={}; 
 }

 on (code, funcion) {
  this.array[code]=[]||this.array[code];
  this.array[code].push(funcion);
 }
 emit (code, ...args) {
	if(this.array[code]){
	  this.array[code].forEach(funcion => funcion(...args));  
 	}
 }
}
exports = module.exports = EventEmitter;

