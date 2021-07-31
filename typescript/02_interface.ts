type DNI = number
type edad = number
type word = string

interface InterfacePersona {
  nombre: string
  edad:edad
  dni: DNI
  apellido: word
  altura?: number
  readonly id: number 
}

const persona1:InterfacePersona = {
  nombre:'Gricel',
  edad:22,
  dni: 1234587,
  apellido: 'Ramos',
  // altura: 1.65,
  id:1
}

persona1.edad = 24
// persona1.id = 2