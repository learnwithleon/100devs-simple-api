// using https://opentdb.com/api_config.php
document.querySelector('#questionBtn').addEventListener('click', getFetch)

let randomNum;
let answerArr;
let answer;
function getFetch(){
  clearOldQuestion();
  const url = 'https://opentdb.com/api.php?amount=1&category=9&type=multiple'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('#categoryP').textContent = data.results[0].category;
        document.querySelector('#questionP').textContent = replaceSpecialChar(data.results[0].question);

        randomNum = Math.floor(Math.random() * 4);
        answerArr = data.results[0].incorrect_answers;
        answer = replaceSpecialChar(data.results[0].correct_answer);

        answerArr.splice(randomNum, 0, answer);
        console.log(answerArr);
        answerArr = answerArr.map(x => replaceSpecialChar(x));
        document.querySelectorAll('.choiceItem').forEach((x, i) => {
          x.textContent = answerArr[i];
        });

        document.querySelector('#revealBtn').addEventListener('click', showAns);

      })
      .catch(err => {
          console.log(`error ${err}`);
      });
}

function clearOldQuestion() {
  document.querySelectorAll('.choiceItem').forEach(choice => {
    choice.classList.remove('answerReveal');
  })
}


function showAns() {
  document.querySelectorAll('.choiceItem').forEach(choice => {
    if (choice.textContent == answer) {
      choice.classList.add('answerReveal');
    }
  })
}

function replaceSpecialChar(charStr) {
  let charObj = {
    "&quot;" : '"',
    "&ldquo;" : '"',
    "&#039;" : "'",

    "&Agrave;" : 'À', 
    "&Aacute;" :'Á',  
    "&Acirc;" :'Â',  
    "&Atilde;" :'Ã',  
    "&Auml;" :'Ä',  
    "&Aring;" :'Å',  
    "&agrave;" :'à',  
    "&aacute;" :'á',  
    "&acirc;" :'â',  
    "&atilde;" :'ã',  
    "&auml;" :'ä',  
    "&aring;" :'å',  
    "&AElig;" :'Æ',  
    "&aelig;" :'æ',  
    "&szlig;" :'ß',  
    "&Ccedil;" :'Ç',  
    "&ccedil;" :'ç',

    "&Egrave;" : 'È',  
    "&Eacute;" : 'É',  
    "&Ecirc;" : 'Ê',  
    "&Euml;" : 'Ë',  
    "&egrave;" : 'è',  
    "&eacute;" : 'é',  
    "&ecirc;" : 'ê',  
    "&euml;" : 'ë',  
    "&#131;" : 'ƒ', 
    "&Igrave;" : 'Ì',  
    "&Iacute;" : 'Í',  
    "&Icirc;" : 'Î',  
    "&Iuml;" : 'Ï',  
    "&igrave;" : 'ì',  
    "&iacute;" : 'í',  
    "&icirc;" : 'î',  
    "&iuml;" : 'ï',  

    "&Ntilde;": 'Ñ',  
    "&ntilde;": 'ñ',  
    "&Ograve;": 'Ò',  
    "&Oacute;": 'Ó',  
    "&Ocirc;": 'Ô',  
    "&Otilde;": 'Õ',  
    "&Ouml;": 'Ö',  
    "&ograve;": 'ò',  
    "&oacute;": 'ó',  
    "&ocirc;": 'ô',  
    "&otilde;": 'õ',  
    "&ouml;": 'ö',  
    "&Oslash;": 'Ø',  
    "&oslash;": 'ø',  
    "&#140;": 'Œ',  
    "&#156;": 'œ',  
    "&#138;": 'Š',  

      "&#154;": 'š',
      "&Ugrave;": ',Ù',
      "&Uacute;": ',Ú',
      "&Ucirc;": 'Û,',
      "&Uuml;": 'Ü',
      "&ugrave;": ',ù',
      "&uacute;": ',ú',
      "&ucirc;": 'û,',
      "&uuml;": 'ü',
      "&#181;": 'µ',
      "&#215;": '×',
      "&Yacute;": ',Ý',
      "&#159;": 'Ÿ',
      "&yacute;": ',ý',
      "&yuml;": 'ÿ',
  };
  let count = [...charStr].filter(x => (x == '&')).length;
  console.log('length:', count);
  for (let i = 0; i <= count; i++){
    for (key in charObj) {
      if (charStr.includes(key)) {
        console.log(key);
        charStr = charStr.replace(key, charObj[key])
      }
    }
  }
  return charStr;
}