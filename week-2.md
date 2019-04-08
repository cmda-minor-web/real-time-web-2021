# Exercises Week 2
Real-Time Web - Minor Web Development 

## Intention

Last week you built a basic socket web app. The purpose was to learn about real-time communication using websockets. This week you’re going to take it to the next level and build a **meaningful** webapp that consumes an external source. You learn how to store and serve data from an external source to your own clients. We'll work on this app for the last two weeks of the course.

### Result
* Learn how to consume an external data source 
* Reflect data in your frontend
* Store data in a database
* Show off your unique work 🤩

## Exercises
1. [Pick a real-time source][exercise1]
2. [Reflect data in the frontend][exercise2]
3. [Hook up a database][exercise3]
4. [Test your app][exercise4]

### Exersise 1: Come up with a concept and data
You can start either by thinking of a useful real-time application and then finding a matching API; or by looking at existing real-time APIs and finding meaningful real-time uses for them.
You could, for instance, use an API that tracks the number of crypto currency transactions globally and estimate their CO2 impact (per currency, per transaction).
Or, you might use Amsterdam's [real-time open trash API][trash] to figure out which neighbourhoods produce the most (plastic) trash.
You could even track a trend on twitter to show the status of an important development like the recent [#trashtag event][trashtag]

**Your external data source should be real-time (like a twitter feed).** If you want to build an app that uses a data source that can't be consumed in real-time (or by polling external data that changes regularly) there is an alternative. Create an app where you use a non real-time external source but where your users can manipulate the data model on your server in real time. Like this [drawing] app made by Fenna de Wilde last year or this [game] made by Mees Rutten. If you don't use a real-time external data source, Check with a teacher if your concept is sufficient to pass the course.

Pick a data source and define what you want to do. You can find a real-time source yourself (be weary of OAuth, poor documentation, strict rate limits etc.) or pick one from this [list]. If you find outdated information in the list, please update it 🙏🏼.
Outline your concept in the readme; describe the API you intend to use, including it’s properties (rate-limit, authorization method, API methods, etc.)

**Examples:** [slack], [github], [twitter], [npm] 


### Exercise 2: Reflect data in the frontend
Reflect some of the data from the external source in a frontend view. The first step is to have your server consume data from the external source. Then you'll want to send that data to user. Finally, the frontend should deal with the data and show some HTML content.

Now that you have a one way trip (external source -> your server -> frontend) set up, you can work on a way for your user to change the data on the server using sockets.

**Resources:** socket.io, d3.

### Exercise 3: Set up a database
You probably want to persist data in a database (“tunnel event”, initial load, etc.) so set up some of way of storing the data. If you want to start out simple, store the data in-memory first (like an array of data items) and move it to a database later. Describe the chosen database system in the project's readme. Make sure you only store the data you NEED for your application. This almost always involves cleaning and restructuring the data. For instance,if you get back a complex object with confusing property names, use map,filter,reduce to change the data to your own format. 

**Resources:** 
* Databases: [levelup], [mongo], [redis], [postgres]  
* Cleaning data: [array], [string], [object]

### Exercise 4: Test your app

Make sure your app works with at least three people connected (preferably more) at the same time. They will probably need different parts of your database so you will need to set up some server-side functionality that serves a specific part of your database depending on the type or request a clients sends. These types of requests like “getLatestData” or “sendMessage” form the basis of the API of YOUR server. think about which methods/events your server will have/allow and describe them in your readme. It’s OK if not all methods work yet but try to plan ahead.

[exercise1]:https://github.com/cmda-minor-web/real-time-web-1819/blob/master/week-2.md#exersise-1-pick-a-real-time-source
[exercise2]:https://github.com/cmda-minor-web/real-time-web-1819/blob/master/week-2.md#exercise-2-reflect-data
[exercise3]:https://github.com/cmda-minor-web/real-time-web-1819/blob/master/week-2.md#exercise-3-hook-up-database
[exercise4]:https://github.com/cmda-minor-web/real-time-web-1819/blob/master/week-2.md#exercise-4-test-your-app
[slack]:https://api.slack.com/rtm
[github]:https://developer.github.com/v3/
[twitter]:https://developer.twitter.com/en/docs
[npm]:https://github.com/npm/registry-follower-tutorial
[socket.io]:https://socket.io/
[d3]:https://d3js.org/
[levelup]:https://github.com/level/levelup
[mongo]:https://www.npmjs.com/package/mongodb
[redis]:https://github.com/NodeRedis/node_redis
[postgres]:https://github.com/brianc/node-postgres
[array]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[string]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
[object]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[list]:https://docs.google.com/spreadsheets/d/1z4vKoXES_m3NhUJfIn8vpjQLrbTfRQLv2IFu9PoWEDI/edit#gid=0
[trash]:https://api.data.amsterdam.nl/afval/
[trashtag]:https://twitter.com/search?q=%23trashtag&src=typd
[drawing]:https://live-draw.herokuapp.com/
[game]:https://github.com/meesrutten/real-time-web