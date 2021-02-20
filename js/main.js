document.querySelector('button').addEventListener('click', getFetch)
document.querySelector('input').addEventListener('keypress', function (e) {
    if(e.key === 'Enter') {
        getFetch()
    }
})

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
            if (data.error === 'Not found') {
                spellNotFound()
            } else {
                populateSpellResults(data)
            }
        })
        .catch(err => {
            console.log(`error ${err}`)
            alert('An error occurred.')
        });
}

function spellNotFound() {
    populateSpellResults({
        name: 'Spell Not Found',
        desc: ['Pleas try a different spell name.'],
        school: {name: ''},
        subclasses: []
    })
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