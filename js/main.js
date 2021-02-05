document.querySelector('button').addEventListener('click', boredAF)


function boredAF(){
	fetch('https://www.boredapi.com/api/activity')
	

	.then(res => res.json() )
	.then(data => {
		console.log(data);
		document.querySelector('h1').innerText = data.activity
		let link = data.link
		
		fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${link}`)
		
		
		.then(data => {
			console.log(data)
			document.querySelector('img').src = data.url
	
		})
		.catch(err => {
		console.error(err);
		});
		
	})
	.catch(err => {
		console.error(err);
	});
	
}






