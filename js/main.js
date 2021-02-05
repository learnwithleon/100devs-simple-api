document.querySelector("button").addEventListener("click",funcRead)

function funcRead () {
    let ticker = document.querySelector("input").value
    url = "https://www.alphavantage.co/query?function=OVERVIEW&symbol=" + ticker + "&apikey=B9VZ95P8BL8KRJ17"
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let workCurrency = data.Currency
            document.querySelector("h3").innerText = ""
            let changeRate = 1
            let arrConvertable = ["MarketCapitalization", "EBITDA", "AnalystTargetPrice"]

            url = "https://api.ratesapi.io/api/latest"
            fetch(url)
                .then(res => res.json())
                .then(dataRates => {
                    console.log(dataRates)
                    changeRate = dataRates.rates[workCurrency]
                    for (let key in data) {
                        if (arrConvertable.includes(key)) {
                            let tmpVal = (data[key] / changeRate).toFixed(2)
                            document.querySelector("h3").innerText += `${key} ${data[key]} (in ${workCurrency}) => ${tmpVal} (in EUR)\n`
                        } else {
                            document.querySelector("h3").innerText += `${key} ${data[key]}\n`
                        }
                    }
                })
                .catch(err => {
                    console.log(`error ${err}`)
                });


        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}






