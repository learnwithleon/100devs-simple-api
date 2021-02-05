document.querySelector('button').addEventListener('click',search)
function search(){
  const val = document.querySelector('input').value.toLowerCase()
  const url = 'https://pokeapi.co/api/v2/pokemon/'+ val
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('.pokemon').src = data.sprites.front_default
        document.querySelector('h2').innerText = `#${data.id} ${data.name}`
        //document.querySelector('#type1').innerText = data.types[0].type.name
        //document.querySelector('#type2').innerText = data.types[1].type.name
        if (data.types[0].type.name==='normal'){
          document.querySelector('#type1').src = 'img/normal.png'
        } else if (data.types[0].type.name==='fighting'){
          document.querySelector('#type1').src = 'img/fight.png'
        } else if (data.types[0].type.name==='flying'){
          document.querySelector('#type1').src = 'img/fly.png'
        } else if (data.types[0].type.name==='poison'){
          document.querySelector('#type1').src = 'img/poison.png'
        } else if (data.types[0].type.name==='ground'){
          document.querySelector('#type1').src = 'img/ground.png'
        } else if (data.types[0].type.name==='rock'){
          document.querySelector('#type1').src = 'img/rock.png'
        } else if (data.types[0].type.name==='bug'){
          document.querySelector('#type1').src = 'img/bug.png'
        } else if (data.types[0].type.name==='ghost'){
          document.querySelector('#type1').src = 'img/ghost.png'
        } else if (data.types[0].type.name==='steel'){
          document.querySelector('#type1').src = 'img/steel.png'
        } else if (data.types[0].type.name==='fire'){
          document.querySelector('#type1').src = 'img/fire.png'
        } else if (data.types[0].type.name==='water'){
          document.querySelector('#type1').src = 'img/water.png'
        } else if (data.types[0].type.name==='grass'){
          document.querySelector('#type1').src = 'img/grass.png'
        } else if (data.types[0].type.name==='electric'){
          document.querySelector('#type1').src = 'img/electr.png'
        } else if (data.types[0].type.name==='psychic'){
          document.querySelector('#type1').src = 'img/psy.png'
        } else if (data.types[0].type.name==='ice'){
          document.querySelector('#type1').src = 'img/ice.png'
        } else if (data.types[0].type.name==='dark'){
          document.querySelector('#type1').src = 'img/dark.png'
        } else if (data.types[0].type.name==='fairy'){
          document.querySelector('#type1').src = 'img/fairy.png'
        } else if (data.types[0].type.name==='dragon'){
          document.querySelector('#type1').src = 'img/drag.png'
        }

        if (data.types[1].type.name==='normal'){
          document.querySelector('#type2').src = 'img/normal.png'
        } else if (data.types[1].type.name==='fighting'){
          document.querySelector('#type2').src = 'img/fight.png'
        } else if (data.types[1].type.name==='flying'){
          document.querySelector('#type2').src = 'img/fly.png'
        } else if (data.types[1].type.name==='poison'){
          document.querySelector('#type2').src = 'img/poison.png'
        } else if (data.types[1].type.name==='ground'){
          document.querySelector('#type2').src = 'img/ground.png'
        } else if (data.types[1].type.name==='rock'){
          document.querySelector('#type2').src = 'img/rock.png'
        } else if (data.types[1].type.name==='bug'){
          document.querySelector('#type2').src = 'img/bug.png'
        } else if (data.types[1].type.name==='ghost'){
          document.querySelector('#type2').src = 'img/ghost.png'
        } else if (data.types[1].type.name==='steel'){
          document.querySelector('#type2').src = 'img/steel.png'
        } else if (data.types[1].type.name==='fire'){
          document.querySelector('#type2').src = 'img/fire.png'
        } else if (data.types[1].type.name==='water'){
          document.querySelector('#type2').src = 'img/water.png'
        } else if (data.types[1].type.name==='grass'){
          document.querySelector('#type2').src = 'img/grass.png'
        } else if (data.types[1].type.name==='electric'){
          document.querySelector('#type2').src = 'img/electr.png'
        } else if (data.types[1].type.name==='psychic'){
          document.querySelector('#type2').src = 'img/psy.png'
        } else if (data.types[1].type.name==='ice'){
          document.querySelector('#type2').src = 'img/ice.png'
        } else if (data.types[1].type.name==='dark'){
          document.querySelector('#type2').src = 'img/dark.png'
        } else if (data.types[1].type.name==='fairy'){
          document.querySelector('#type2').src = 'img/fairy.png'
        } else if (data.types[1].type.name==='dragon'){
          document.querySelector('#type2').src = 'img/drag.png'
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
          document.querySelector('#type2').src = ''
      });
}
