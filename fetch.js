const API = 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20'
function traerPokes(API){
  fetch(API)
    .then(result => {
      console.log(result)
      result.json()
        .then(data => {
          console.log(data)
        })
    })
}

traerPokes(API)

async function traerPokesAsync(API){
  let result = await fetch(API)
  let data = await result.json()
  let { results } = data
  let names = results.map(({ name }) => {
    return name
  })
  let namesPlus = [...names, "bulbasaur", "pikachu", "charmande"]
  console.log(namesPlus)
}

traerPokesAsync(API)