class Persona2{
  private edad:number
  private altura: number
  private dni: string

  constructor(edad: number, altura:number, dni:string){
    this.edad = edad
    this.altura = altura
    this.dni = dni
  }

}

class Alumno extends Persona2{
  private matricula: string

  constructor(edad: number, altura:number, dni:string, matricula:string){
    super(edad, altura, dni)
    this.matricula = matricula
  }
}

let persona2: Persona2 = new Persona2(27, 1.69, '213123')
let alumno: Alumno = new Alumno(27, 1.69, '213123','2312')


persona2 = alumno
// alumno = persona2
