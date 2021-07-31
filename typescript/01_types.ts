let numero:number = 1
let string1:string = '1'

// numero = string1
// {
  // let obj:{} = {}
  let obj4:Object = {}
  let arr:string[] = ['1','2']
  let arr2:Array<number> = [1,2,4,5]
  let booleans:boolean = true
  let double:number = 1.2
  let datoany:any = null
  // let unk:unknown = undefined
  let arrany:any[] = [1,2,3,4,5,'',{},[],true]
  // let arrany2:(number | boolean | [] )[] = [1,2,3,4,5,"a",'a',{},[],true]
  let boolArr:(boolean | Array<string>) = [] 
// }

function name2(nom:string, edad:number) {
  return `${nom} tiene ${edad} años`
}

name2('Pedro', 1)

type dni = string
type comonObj = {
  name:string
  dni:string
  edad:number
}
let dniUser:dni = '88898888'
let persona:comonObj  = {
  name:'Pedro',
  dni:'12312',
  edad:123
}