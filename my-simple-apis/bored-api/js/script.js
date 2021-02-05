document.querySelector('button').addEventListener('click', findActivity);

function findActivity() {
    fetch(`http://www.boredapi.com/api/activity/?price=0`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            document.querySelector('h2').innerText = data.activity

            if (data.link == ""){
                document.querySelector('a').href = `https://www.google.com/search?q=${data.activity.replace(" ", "+")}`
                document.querySelector('a').innerText = `Get started here`
            } else {
                document.querySelector('a').href = data.link
                document.querySelector('a').innerText = data.link
            }
        })
        .catch(err => {
            console.log(`error: ${err}`)
        });
}
