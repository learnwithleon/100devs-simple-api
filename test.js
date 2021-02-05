var unirest = require("unirest");

var req = unirest("GET", "https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation");

req.query({
	"apikey": "c1d8b30c21msh0418c888e77f37cp19695ejsn297cb9a9cba5"
});

req.headers({
	"x-rapidapi-key": "c1d8b30c21msh0418c888e77f37cp19695ejsn297cb9a9cba5",
	"x-rapidapi-host": "find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});