document.querySelector("#button").addEventListener("click", getAnswer);

function getAnswer(e) {
  e.preventDefault();
  const url = "https://yesno.wtf/api";
  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.answer === "yes") {
        document.querySelector("#answer").innerText = `YESSSSS`;
      } else {
        document.querySelector("#answer").innerText = `NOOOOOOO`;
      }
      document.querySelector("img").src = data.image;
    })
    .catch((err) => console.log(`error is ${err}`));
}
// Will come back to this later

$(document).ready(function () {
  $("#title").focus();
  $("#text").autosize();
});
