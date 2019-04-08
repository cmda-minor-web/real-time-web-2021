# Excercises Week 2
Real-Time Web - Minor Web Development 

## Intention

Last week you built a basic socket web app. This week you’re going to take it to the next level and build a webapp that consumes an external source. You learn how to store and serve data from an external source to your own clients. You get a chance to work on a new concept (but that’s not mandatory)

### Result
* Learn how to consume an external data source 
* Reflect data in your frontend
* Store data in a database
* Show off your unique work 🤩



## Excercises
1. [Pick a real-time source][excercise1]
2. [Reflect data][excercise2]
3. [Hook up a database][excercise3]
4. [Test your app][excercise4]

### Excersise 1: Pick a real-time source

Pick a real-time source and define what you want to do. We did most of the research in class already, so the picking part shouldn’t take a lot of time. Outline your concept in the readme; describe the API you intend to use, including it’s properties (rate-limit, authorization method, API methods, etc.). Include the sketch you made in class and describe what the real-time aspect of your project will entail.

**Examples:** [slack], [github], [twitter], [npm] 


### Excercise 2: Reflect data
Reflect some of the data from the external source in a frontend view.

**Resources:** socket.io, d3.

### Excercise 3: Hook up database
You probably want to persist data in a database (“tunnel event”, initial load, etc.) so set up some of way of storing the data. If you want to start out simple, store the data in-memory first and then move it to a database. Describe the chosen database system in the project. Make sure you only store the data you NEED for your application. This almost always involves cleaning and restructuring the data.

**Resources:** 
* Databases: [levelup], [mongo], [redis], [postgres]  
* Cleaning data: [array], [string], [object]

### Excercise 4: Test your app

Make sure your app works with at least three people connected (preferably more) at the same time. They will probably need different parts of your database so you will need to set up some server-side functionality that serves a specific part of your database depending on the type or request a clients sends. These types of requests like “getLatestData” or “sendMessage” form the basis of the API of YOUR server. think about which methods/events your server will have/allow and describe them in your readme. It’s OK if not all methods work yet but try to plan ahead.

[excercise1]:https://github.com/cmda-minor-web/real-time-web-1819/blob/master/week-2.md#excersise-1-pick-a-real-time-source
[excercise2]:https://github.com/cmda-minor-web/real-time-web-1819/blob/master/week-2.md#excercise-2-reflect-data
[excercise3]:https://github.com/cmda-minor-web/real-time-web-1819/blob/master/week-2.md#excercise-3-hook-up-database
[excercise4]:https://github.com/cmda-minor-web/real-time-web-1819/blob/master/week-2.md#excercise-4-test-your-app
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

