
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
 
  const url = 'https://api.opendota.com/api/heroStats'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        // console.log(data)
          let allArr = []
          data.forEach( Obj => {
            allArr.push(Obj)
         })
         console.log(allArr.sort((ele1, elem2) => Math.random() - Math.random() )-)
         
         if(allArr[0].primary_attr === "agi"){
          document.querySelector('h3').innerHTML = "Agility"
        }else if(allArr[0].primary_attr === "str"){
          document.querySelector('h3').innerHTML = "Strength"
        }else{
          document.querySelector('h3').innerHTML = "Intelligence"
        }

          document.querySelector('img').src = "https://api.opendota.com" + allArr[0].img
          document.querySelector('h2').innerHTML = allArr[0].localized_name
          document.querySelector('#baseHealth').innerHTML = "Base Health:" + " " + allArr[0].base_health
          document.querySelector('#baseMana').innerHTML = "Base Mana:" + " " + allArr[0].base_mana
          document.querySelector('#baseArmor').innerHTML = "Base Armor:" + " " + allArr[0].base_armor
          document.querySelector('#moveSpeed').innerHTML = "Move Speed:" + " " + allArr[0].move_speed
          document.querySelector('#baseAgi').innerHTML = "Base Agility:" + " " + allArr[0].base_agi
          document.querySelector('#baseStr').innerHTML = "Base Strength:" + " " + allArr[0].base_str
          document.querySelector('#baseInt').innerHTML = "Base Intelligence" + " " + allArr[0].base_int
          

        //toggle display
        document.querySelector('#strength').style = "display: block;"
        document.querySelector('#agility').style = "display: block;"
        document.querySelector('#intelligence').style = "display: block;"
        document.querySelector('#randomHero').style = "display: block;"
        document.querySelector('#getHero').style = "display: none;"
        document.querySelector('h1').style = "visibility: visible; height: 2.588em;"
       


        // Creating Arrays to Randomly Generate
        let strArr = []
        let agiArr = []
        let intArr = []
        

       data.forEach( Obj => {
         if(Obj.primary_attr === "agi"){
           agiArr.push(Obj)
         }else if(Obj.primary_attr === "str"){
           strArr.push(Obj)
         }else if(Obj.primary_attr === "int"){
           intArr.push(Obj)
         }  
       })

       
        // Onclick Event Listeners for Primary Attribute Randomization
        document.querySelector('#strength').addEventListener('click', randomPickS)
        document.querySelector('#agility').addEventListener('click', randomPickA)
        document.querySelector('#intelligence').addEventListener('click', randomPickI)
        document.querySelector('#randomHero').addEventListener('click', randomPickR)
        

        function randomPickR(){
          data.forEach( Obj => {
            allArr.push(Obj)
         })
         console.log(allArr.sort((ele1, elem2) => Math.random() - Math.random() ))
         
         if(allArr[0].primary_attr === "agi"){
          document.querySelector('h3').innerHTML = "Agility"
        }else if(allArr[0].primary_attr === "str"){
          document.querySelector('h3').innerHTML = "Strength"
        }else{
          document.querySelector('h3').innerHTML = "Intelligence"
        }

          document.querySelector('img').src = "https://api.opendota.com" + allArr[0].img
          document.querySelector('h2').innerHTML = allArr[0].localized_name
          document.querySelector('#baseHealth').innerHTML = "Base Health:" + " " + allArr[0].base_health
          document.querySelector('#baseMana').innerHTML = "Base Mana:" + " " + allArr[0].base_mana
          document.querySelector('#baseArmor').innerHTML = "Base Armor:" + " " + allArr[0].base_armor
          document.querySelector('#moveSpeed').innerHTML = "Move Speed:" + " " + allArr[0].move_speed
          document.querySelector('#baseAgi').innerHTML = "Base Agility:" + " " + allArr[0].base_agi
          document.querySelector('#baseStr').innerHTML = "Base Strength:" + " " + allArr[0].base_str
          document.querySelector('#baseInt').innerHTML = "Base Intelligence" + " " + allArr[0].base_int
          
        }


        function randomPickS(){
          strArr.sort((ele1, elem2) => Math.random() - Math.random() )   
          document.querySelector('img').src = "https://api.opendota.com" + strArr[0].img
          document.querySelector('h2').innerHTML = strArr[0].localized_name
          document.querySelector('h3').innerHTML = "Strength"
          document.querySelector('#baseHealth').innerHTML = "Base Health:" + " " + strArr[0].base_health
          document.querySelector('#baseMana').innerHTML = "Base Mana:" + " " + strArr[0].base_mana
          document.querySelector('#baseArmor').innerHTML = "Base Armor:" + " " + strArr[0].base_armor
          document.querySelector('#moveSpeed').innerHTML = "Move Speed:" + " " + strArr[0].move_speed 
          document.querySelector('#baseAgi').innerHTML = "Base Agility:" + " " + strArr[0].base_agi
          document.querySelector('#baseStr').innerHTML = "Base Strength:" + " " + strArr[0].base_str
          document.querySelector('#baseInt').innerHTML = "Base Intelligence" + " " + strArr[0].base_int     
        }
        function randomPickA(){
          agiArr.sort((ele1, elem2) => Math.random() - Math.random() )
          document.querySelector('img').src = "https://api.opendota.com" + agiArr[0].img
          document.querySelector('h2').innerHTML = agiArr[0].localized_name
          document.querySelector('h3').innerHTML = "Agility"
          document.querySelector('#baseHealth').innerHTML = "Base Health:" + " " + agiArr[0].base_health
          document.querySelector('#baseMana').innerHTML = "Base Mana:" + " " + agiArr[0].base_mana
          document.querySelector('#baseArmor').innerHTML = "Base Armor:" + " " + agiArr[0].base_armor
          document.querySelector('#moveSpeed').innerHTML = "Move Speed:" + " " + agiArr[0].move_speed 
          document.querySelector('#baseAgi').innerHTML = "Base Agility:" + " " + agiArr[0].base_agi
          document.querySelector('#baseStr').innerHTML = "Base Strength:" + " " + agiArr[0].base_str
          document.querySelector('#baseInt').innerHTML = "Base Intelligence" + " " + agiArr[0].base_int
        }
        function randomPickI(){
          intArr.sort((ele1, elem2) => Math.random() - Math.random() )
          document.querySelector('img').src = "https://api.opendota.com" + intArr[0].img
          document.querySelector('h2').innerHTML = intArr[0].localized_name
          document.querySelector('h3').innerHTML = "Intelligence"
          document.querySelector('#baseHealth').innerHTML = "Base Health:" + " " + intArr[0].base_health
          document.querySelector('#baseMana').innerHTML = "Base Mana:" + " " + intArr[0].base_mana
          document.querySelector('#baseArmor').innerHTML = "Base Armor:" + " " + intArr[0].base_armor
          document.querySelector('#moveSpeed').innerHTML = "Move Speed:" + " " + intArr[0].move_speed 
          document.querySelector('#baseAgi').innerHTML = "Base Agility:" + " " + intArr[0].base_agi
          document.querySelector('#baseStr').innerHTML = "Base Strength:" + " " + intArr[0].base_str
          document.querySelector('#baseInt').innerHTML = "Base Intelligence" + " " + intArr[0].base_int
        }
                
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


