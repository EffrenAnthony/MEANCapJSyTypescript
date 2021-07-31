// union types
type telefono = string | number
let tel:telefono = '123123'

interface Inter1 {
  prop1: string
}
interface Inter2 {
  prop2: string
}
type unionInter = Inter1 | Inter2
const instanciaDeUnion:unionInter = {
  prop1: 'asdf',
  prop2: '12312',
  // prop3:'21321'
}
// intersection types

interface Inter3 {
  prop3: string
  prop4: string
}

type interInter = Inter1 & Inter3 | Inter2

const instInterinter:interInter = {
  prop1: 'asdf',
  prop3: 'asdf',
  prop4: 'asdf',
}
