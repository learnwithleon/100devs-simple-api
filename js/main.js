document.querySelector('button').addEventListener('click', getFetch)

let spellName = document.getElementById('spellName')
let spellDescription = document.getElementById('spellDescription')
let spellSchool = document.getElementById('spellSchool')
let subClassesUl = document.getElementById('subClassesList')

function getFetch(){
    const searchSpell = document.getElementById('searchSpell').value
        .toLowerCase().split(' ').join('-')
    const url = `https://www.dnd5eapi.co/api/spells/${searchSpell}`

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            populateSpellResults(data)
        })
        .catch(err => {
            console.log(`error ${err}`)
            alert('An error occurred while using the DnD API.')
        });
}

function populateSpellResults(data) {
    spellName.innerText = data.name
    spellDescription.innerText = data.desc[0]
    spellSchool.innerText = data.school.name

    removeAllChildNodes(subClassesUl)
    data.subclasses.forEach(sc => {
        const li = document.createElement('li')
        li.textContent = sc.name
        subClassesUl.appendChild(li)
    })
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}
