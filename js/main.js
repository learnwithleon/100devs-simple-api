document.querySelector('button').addEventListener('click', getFancy)
    function getFancy(){
      const url = 'http://taco-randomizer.herokuapp.com/random/'
      fetch(url)
          .then(res => res.json()) // parse response as JSON
          .then(data => {
            document.querySelector('#title').classList.remove('hidden')
            document.querySelector('#recipes').classList.remove('hidden')
            
            let baseName = data.base_layer.name
            let mixInName = data.mixin.name
            let condimentName = data.condiment.name
            let seasoningName = data.seasoning.name
            let shellName = data.shell.name

            document.querySelector('.baseName').innerText = baseName
            document.querySelector('.mixName').innerText = mixInName + ', '
            document.querySelector('.condName').innerText = condimentName
            document.querySelector('.seasonName').innerText = seasoningName
            document.querySelector('.shellName').innerText = shellName
                     
            document.querySelector('.baseLayer').innerText = baseName
            document.querySelector('.mixIn').innerText = mixInName
            document.querySelector('.condiment').innerText = condimentName
            document.querySelector('.seasoning').innerText = seasoningName
            document.querySelector('.shell').innerText = shellName

            document.querySelector('.baseRecipe').innerText = data.base_layer.recipe            
            document.querySelector('.mixRecipe').innerText = data.mixin.recipe
            document.querySelector('.condRecipe').innerText = data.condiment.recipe
            document.querySelector('.seasonRecipe').innerText = data.seasoning.recipe
            document.querySelector('.shellRecipe').innerText = data.shell.recipe          
                     
            })
          .catch(err => {
              console.log(`error ${err}`)
          });

    }

    