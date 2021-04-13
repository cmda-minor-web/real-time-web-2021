# Real-Time Web @cmda-minor-web · 2020/21

## COVID-19 Dashboard

This application makes it possible for users to analyze real-time data regarding
the COVID-19 Infections in The Netherlands. The data will be displayed in a
chloropleth map visualization of The Netherlands that indicates the infections
per province. This visualization will be combined with a real-time tweet stream
of tweets in the context of COVID-19 in The Netherlands.

Features:

-  Map visualization with real-time data regarding COVID-19 infections in The
   Netherlands.
-  Real-time tweet stream of tweets regarding COVID-19 in The Netherlands.

## Data

To retrieve data I will be using the
[Twitter API](https://developer.twitter.com/en) for the tweet stream and the
[Apify API](https://apify.com/covid-19) to get real-time data on COVID-19
infections in The Netherlands. The dataset is updated every few hours.

### [Apify API](https://apify.com/covid-19) Example Data

```json
{
	"infected": 1381182,
	"recovered": 18611,
	"deceased": 16981,
	"infectedByRegion": [
		{
			"region": "Zuid-Holland",
			"infectedCount": 321846,
			"deceasedCount": 4052
		}
	],
	"country": "Netherlands",
	"moreData": "https://api.apify.com/v2/key-value-stores/vqnEUe7VtKNMqGqFF/records/LATEST?disableRedirect=true",
	"historyData": "https://api.apify.com/v2/datasets/jr5ogVGnyfMZJwpnB/items?format=json&clean=1",
	"SOURCE_URL": "https://www.rivm.nl/en/novel-coronavirus-covid-19/current-information",
	"lastUpdatedAtApify": "2021-04-13T11:02:59.000Z",
	"readMe": "https://apify.com/lukass/covid-nl"
}
```

### [Twitter API](https://developer.twitter.com/en) Example data

```json

{
  "data": [
    {
      "author_id": "2244994945",
      "created_at": "2020-02-12T17:09:56.000Z",
      "id": "1227640996038684673",
      "text": "Doctors: Googling stuff online does not make you a doctor\n\nDevelopers: https://t.co/mrju5ypPkb"
    },
}

```

## Data modelling

### Spotify API

Properties:

-  OAuth 2.0
-  POST request to create rules for the tweet stream containing the following
   operators:
   -  `from:`
   -  `has:links`

Example using a POST request to set rules for the tweet stream:

```js

fetch('https://api.twitter.com/2/tweets/search/stream/rules', {
   method: 'POST',
   headers: {
      'Content-type: application/json',
      'Authorization: Bearer + $BEARER_TOKEN',
      },
   body: 'add': [
      { "value": "from:twitterdev from:twitterapi has:links" }
   ]
})
   .then(res => res.json())
   .then(json => console.log(json))

```

### Apify API

Properties:

-  GET request to get the latest dataset

Example:

```js
fetch(
	'https://api.apify.com/v2/key-value-stores/vqnEUe7VtKNMqGqFF/records/LATEST?disableRedirect=true'
)
	.then(res => {
		const data = JSON.parse(res);
		return data;
	})
	.then(data => console.log(data));
```

## Sketches UI

<img src="https://user-images.githubusercontent.com/43675725/114549603-7d20e280-9c61-11eb-9cc9-458f78226465.jpeg" width="400" height="400">

<img src="https://user-images.githubusercontent.com/43675725/114548980-c3297680-9c60-11eb-83f9-0cc07d7ed23d.jpeg" width="400" height="400">

## Dependencies

-  Express
-  Express-handlebars
-  Socket.io
-  Nodemon

## Installation guide

Navigate to your desired directory

> cd <desired-directory>

Clone the repository locally

> git clone https://github.com/benl95/real-time-web-2021.git

Install packages

> npm install

Run the project locally

> node app.js

## License

MIT

## Todo

-  Data modelling
