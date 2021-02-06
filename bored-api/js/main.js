// https://www.boredapi.com/
document.querySelector('.button').addEventListener('click', getActivity)

function getActivity() {
  const url = 'https://www.boredapi.com/api/activity'
  let activity = document.querySelector('.activity')
  let type = document.querySelector('.type')
  let participants = document.querySelector('.participants')
  let accessibility = document.querySelector('.accessibility')

    fetch(url)
      .then(res =>res.json())
      .then(data => {
        // console.log(data)
        activity.innerText = data.activity
        type.innerText = `type: ${data.type}`
        participants.innerHTML = totalParticipants(data.participants)
        accessibility.innerText = data.accessibility
      })
      .catch(err => {
        console.log(`error ${err}`)
      })
  }

function  totalParticipants(n) {
  let total = ``
  for(i=0; i<n; i++) {
    total += '<i class="far fa-user"></i>'
  }
  console.log(total)
}
// function totalParticipants(n) {
//   let newLi = document.createElement('li')
//     newLi.classList.add('far')
//     newLi.classList.add('fa-user')
//   let participants = document.querySelector('.participants')
//   for(i=1; i<=n; i++) {
//     participants.appendChild(newLi)
//     console.log(newLi)
//   }
// }
// console.log(newLi)
