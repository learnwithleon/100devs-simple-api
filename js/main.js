//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector("button").addEventListener("click", getphotos);
const weather = [];
function getphotos() {
  // const dateVal1 = document.querySelector("#start").value;
  // const dateVal2 = document.querySelector("#stop").value;
  // // "https://images-api.nasa.gov/&thumbs=&api_key=W8ituvMovkY92eRC3IWJwlJSxgmpeLHfMI6xbOfJ/search?q="

  const url =
    "https://api.nasa.gov/planetary/apod?api_key=W8ituvMovkY92eRC3IWJwlJSxgmpeLHfMI6xbOfJ&thumbs=true&hd=true&start_date=2018-12-01&end_date=2018-12-06"
    // dateVal1 +
    // dateVal2;

    // dateVal;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        function rotate(i) {
          if (i >= 0) {
            console.log(data);
            document.querySelector("iframe").innerHTML = "";
            let todayDate = data[i].date;
            let title = data[i].title;
            let urls = data[i].url;
            let explain = data[i].explanation;
            let mediaType = data[i].media_type;
            console.log("mediaType" + mediaType);
            if (mediaType === "image") {
              let hdImage = data[i].hdurl;
              console.log("image" + hdImage);
              document.querySelector("img").src = hdImage;
            } else if (mediaType == "video") {
              // let result.innerHTML += "<br>--<br>Provider: " + video.provider + "<br>ID: " + video.id;
              let videoUrl = parseVideo(data[i].url);
              console.log("url" + data[i].url);
              if (videoUrl.type === "youtube") {
                console.log("Hit youtube" + data[i].url);
                document.querySelector(".youtubeClass").src = data[i].url;
              } else {
                console.log("Hit vim" + data[i].url);
                document.querySelector(".vimeoClass").src = data[i].url;
              }
            }

            document.querySelector("h4").innerHTML = todayDate;
            document.querySelector(".title").innerHTML = title;
            document.querySelector("h3").innerHTML = explain;
            return setTimeout(function () {
              rotate(i - 1);
            }, 5000);
          }
        }
        rotate(data.length - 1);
        // let delay = 5000;
        // let len = data.length - 1;
        // for (let i = 0; i < len; i++) {
        //   setTimeout(display(i), delay * i);
        // }
      })
      .catch((err) => {
        console.log(`error  ${err}`);
      });
}

function parseVideo(url) {
  // - Supported YouTube URL formats:
  //   - http://www.youtube.com/watch?v=My2FRPA3Gf8
  //   - http://youtu.be/My2FRPA3Gf8
  //   - https://youtube.googleapis.com/v/My2FRPA3Gf8
  // - Supported Vimeo URL formats:
  //   - http://vimeo.com/25451551
  //   - http://player.vimeo.com/video/25451551
  // - Also supports relative URLs:
  //   - //player.vimeo.com/video/25451551

  url.match(
    /(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
  );

  if (RegExp.$3.indexOf("youtu") > -1) {
    var type = "youtube";
  } else if (RegExp.$3.indexOf("vimeo") > -1) {
    var type = "vimeo";
  }

  return {
    type: type,
    id: RegExp.$6
  };
}
