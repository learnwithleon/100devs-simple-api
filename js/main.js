document.querySelector('button').addEventListener('click', getGifsAndStickers)

function getGifsAndStickers(){
    const inputVal = document.querySelector('.gif').value
    const url = 'https://api.giphy.com/v1/gifs/search?api_key=m9NYhRGQKZUTLEw9ownRKrD2lSNCYx0Z&q='+inputVal+'&limit=24'
    
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        document.querySelector('.gifs').innerHTML = ''
        let listGifs = data.data
        listGifs.forEach(g => {
            const gifs = `${g.images.fixed_width.url}`
            document.querySelector('.gifs').innerHTML += `<img src=${gifs}>`         
            })
        const url2 = 'https://api.giphy.com/v1/stickers/search?api_key=m9NYhRGQKZUTLEw9ownRKrD2lSNCYx0Z&q='+inputVal+'&limit=48'
        
        fetch(url2)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            document.querySelector('.stickers').innerHTML = ''
            let listStickers = data.data
            listStickers.forEach(s => {
                const stix = `${s.images.fixed_width_small_still.url}`
                document.querySelector('.stickers').innerHTML += `<img src=${stix}>`       
                })
        })
            .catch(err => {
                console.log(`error ${err}`)
            })            
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}

