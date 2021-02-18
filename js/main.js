//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

let subClassesUl = document.querySelector('ul')

function getFetch(){
    const userChoice = document.querySelector('input').value
    let choice = userChoice.split(' ').join('-')
    const url = `https://www.dnd5eapi.co/api/spells/${choice}`

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            let classes = data.classes
            let subClasses = data.subclasses

            removeAllChildNodes(subClassesUl)
            // list.innerHTML = '' // doesn't remove child event handlers. Might lead to memory leaks
            subClasses.forEach(sc => {
                // class solution
                const li = document.createElement('li')
                li.textContent = sc.name
                subClassesUl.appendChild(li)
                // my inital solution
                // subClassesUl.innerHTML += `<li>${sc.name}</li>`
            })
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

// TODO clean up