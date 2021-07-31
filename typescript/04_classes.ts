class Persona{ 
  private _nombre: string
  private _apellido:string
  constructor(nombre: string, apellido: string){
    this._nombre = nombre;
    this._apellido = apellido;
  }

  // public get apellido(){
  //   return this._apellido;
  // }
  getNombre():string{
    return this._nombre
  }
  getApellido():string{
    return this._apellido
  }
  setNombre(nombre:string):void{
    this._nombre = nombre;
  }
  setApellido(apellido:string):void{
    this._apellido = apellido;
  }

}

const personaNueva:Persona = new Persona("Juan", "Peres")
// personaNueva._nombre = 'Jorge'

const nombreCompleto:string = personaNueva.getNombre() + ' ' + personaNueva.getApellido() //Juan Peres

class Usuario extends Persona {
  private email:string
  private pass:number
  constructor(nombre: string, apellido: string, email:string, pass:number){
    super(nombre, apellido)
    this.email = email;
    this.pass = pass;
  }
  getEmail():string{
    return this.email
  }
  getPass():number{
    return this.pass
  }
  setEmail(email:string):void{
    this.email = email;
  }
  setPass(pass:number):void{
    this.pass = pass;
  }
}

const usuarioClase:Usuario = new Usuario("Fernando", "Martinez", "fer@fer.com", 1234)
usuarioClase.getApellido()
usuarioClase.getEmail()