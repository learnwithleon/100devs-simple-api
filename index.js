// const fetch = require('node-fetch');

const states = {
  'Arizona': 'AZ',
  'Alabama': 'AL',
  'Alaska':'AK',
  'Arkansas': 'AR',
  'California': 'CA',
  'Colorado': 'CO',
  'Connecticut': 'CT',
  'Delaware': 'DE',
  'Florida': 'FL',
  'Georgia': 'GA',
  'Hawaii': 'HI',
  'Idaho': 'ID',
  'Illinois': 'IL',
  'Indiana': 'IN',
  'Iowa': 'IA',
  'Kansas': 'KS',
  'Kentucky': 'KY',
  'Louisiana': 'LA',
  'Maine': 'ME',
  'Maryland': 'MD',
  'Massachusetts': 'MA',
  'Michigan': 'MI',
  'Minnesota': 'MN',
  'Mississippi': 'MS',
  'Missouri': 'MO',
  'Montana': 'MT',
  'Nebraska': 'NE',
  'Nevada': 'NV',
  'New Hampshire': 'NH',
  'New Jersey': 'NJ',
  'New Mexico': 'NM',
  'New York': 'NY',
  'North Carolina': 'NC',
  'North Dakota': 'ND',
  'Ohio': 'OH',
  'Oklahoma': 'OK',
  'Oregon': 'OR',
  'Pennsylvania': 'PA',
  'Rhode Island': 'RI',
  'South Carolina': 'SC',
  'South Dakota': 'SD',
  'Tennessee': 'TN',
  'Texas': 'TX',
  'Utah': 'UT',
  'Vermont': 'VT',
  'Virginia': 'VA',
  'Washington': 'WA',
  'West Virginia': 'WV',
  'Wisconsin': 'WI',
  'Wyoming': 'WY'}

const fetchData = async () => {
  try {
    const request = await fetch("https://ipinfo.io?token=7984d02b159997");

    const json = await request.json();
    
    let stateName = json.region;
    let stateAbbrev = states[stateName];

    const response = await fetch(`https://api.covidtracking.com/v1/states/${stateAbbrev}/current.json`);

    const data = await response.json();
    
    displayData(data, stateName);
  }
  catch (error) {
    console.log(error)
  };
};

const displayData = (data, state) => {
  if (!navigator.geolocation.getCurrentPosition) {
    document.querySelector('.title').style.display = none;

    document.querySelector('.state').innerHTML = 'It appears your location services are disabled.';
  } else {
    document.querySelector('.state').innerHTML = state;

    document.querySelector('.total-cases').innerHTML = data.positive;

    document.querySelector('.new-cases').innerHTML = data.positiveIncrease;

    document.querySelector('.num-hospital').innerHTML = data.hospitalizedCurrently;
    
    document.querySelector('.num-icu').innerHTML = data.inIcuCurrently;
  }
};

fetchData();
