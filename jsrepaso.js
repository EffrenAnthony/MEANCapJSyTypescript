// ? variables

// var
// const
// let

// ? hoisting

// func()
// const arrow = () => {
//   console.log('hola')
// }
// // arrow()

// function func(){
//   console.log('hola func')
// }

// const persona = {
//   nombre: 'Pedro',
//   func1: () => {
//     console.log(this.nombre)
//   },
//   func2: function(){
//     console.log(this.nombre)
//   }
// }

// persona.func1()
// persona.func2()

// ? scope
// {
//   var gato
// }
// {
//   let gato
// }
// log(gato)
  //error
// ? referencias y spread operator
let obj = {a: 1, b:2, c:3}
let obj2 = obj
let objcopy = {...obj}
obj.a += 5
// console.log(obj)
// console.log(objcopy)

// ? destructuración y backticks

const objPersonas = {
  ciudad : "arequipa", 
  pais: "peru", 
  ingles: {
    c1: "c1",
    c2: "c2",
  },
  usuarios: [
    {
      user: "tony",
    },
    {
      user: "bel",
    },
    {
      user: "lili",
    },
    {
      user: "roma",
    },
    {
      user: "lufa",
    }
  ]
}


// console.log(`Hola soy ${objPersonas.usuarios[0].user} , soy de ${objPersonas.ciudad}, ingles ${objPersonas.ingles.c1}`)

const { 
  ciudad,
  usuarios,
  ingles:{
    c2
  },
  pais
} = objPersonas

// console.log(`Hola soy ${usuarios[0].user} , soy de ${ciudad} ${pais}, ingles ${c2}`)

let a, b, rest;
[a, b, ...rest] = [10, 20, 20, 12, 43 ,34,12,34,23,5,2];
console.log(a + ' ' + b);
console.log(rest);

console.log('saludar2444');