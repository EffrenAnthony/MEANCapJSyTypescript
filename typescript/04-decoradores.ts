function decorador(texto:string){
  return function(target){
    target.prototype.saludar = function(){
      console.log(`Buen día, ${texto}`)
    }
  }
}
@decorador("que tal el workshop")
class Persona2 {
  nombre:string
  constructor(nombre:string) {
    this.nombre = nombre
  }

  saludar(texto:string){
    console.log(`Hola soy ${this.nombre}, ${texto}`); 
  }
}

let Juan2 = new Persona2("jUAN")
Juan2.saludar("vengo de arequipa")