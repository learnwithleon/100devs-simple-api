document.querySelector('button').addEventListener('click', derivative)

function encoded(str){
  let mathSymb = {
    '%':'%25',
    '^':'%5E',
    '*':'%2A',
    '/':'%2F',
    '-':'%2D',
    '+':'%2B',
    '(':'%28',
    ')':'%29'}
  return str.split('').map(sym => {
    if(mathSymb.hasOwnProperty(sym)){
      return mathSymb[sym]
    }else{
      return sym
    }
  }).join('')
}

function derivative(){
  let equation = document.querySelector('input').value
  let encodedeq = encoded(equation)

  url = "https://newton.now.sh/api/v2/derive/"+encodedeq

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      document.querySelector('h2').innerText = `(${equation})\' = ${data.result}`
    })
    .catch(err => {
      console.log('Error ${err}');
    })
}
