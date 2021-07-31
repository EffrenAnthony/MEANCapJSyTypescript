// console.log('hola')
// function callback(){
//   console.log('RESPUESTA')
// }
// setTimeout(callback, 5000)

// console.log('hola2')


function saludar(saludo) {
  return new Promise((resolve, reject) =>{
    if (saludo === 'hola') {
      setTimeout(()=> {
        console.log(saludo)
        resolve(saludo)
      },1000 )
    }else {
      reject(new Error('[funcSaludar] el parametro no es correcto'))
    }
  })
}

// let resultado = ""
// saludar('hola')
// .then((respuesta)=>{
//   console.log(respuesta)
//   let respuesta2 = respuesta.toString().toUpperCase()
//   return respuesta2
// })
// .then((res) => {
//   console.log(res)
// })
// .catch(err =>{
//   console.log(err)
// })

function ejecutarProm() {
  saludar('hola')
  .then(saludar)
  .then(saludar)
  .then(saludar)
  .then(saludar)
  .then(saludar)
  .catch(err =>{
      console.log(err)
  })
}


ejecutarProm()
