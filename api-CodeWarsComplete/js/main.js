
document.querySelector('button').addEventListener('click', getFetch)



function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://cors-anywhere.herokuapp.com/http://www.codewars.com/api/v1/users/${choice}/code-challenges/completed?page=0?access_key=3MNGucfNStJ2xoRhjVpa`
  
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.name)
       data.name.forEach( obj => {
         const li = document.createElement('li')
         li.textContent = obj.name
         document.querySelector('ul').appendChild(li)
       })

       results.push(JSON.parse(body));
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
    }

 